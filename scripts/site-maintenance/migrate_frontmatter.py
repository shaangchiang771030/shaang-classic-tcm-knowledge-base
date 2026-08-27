#!/usr/bin/env python3
from pathlib import Path
import csv, re, json, hashlib, sys

ROOT = Path(__file__).resolve().parents[2]
MASTER = ROOT / 'data/architecture/Guide_Order_Master.csv'
DOCS = ROOT / 'src/content/docs'
REPORT = ROOT / 'audit/wbs2-10-metadata-migration.json'

CUSTOM_KEYS = ['contentType','domain','originalOrder','guideOrder','stage','level','language','translationKey','related','featured']

def split_fm(text):
    if text.startswith('---'):
        m = re.match(r'^---\s*\r?\n(.*?)\r?\n---\s*\r?\n?', text, re.S)
        if m:
            return m.group(1), text[m.end():], True
    return '', text, False

def yaml_quote(v):
    return json.dumps(str(v), ensure_ascii=False)

def strip_md_inline(s):
    s = re.sub(r'!\[[^\]]*\]\([^\)]*\)', ' ', s)
    s = re.sub(r'\[([^\]]+)\]\([^\)]*\)', r'\1', s)
    s = re.sub(r'<[^>]+>', ' ', s)
    s = re.sub(r'[*_`]+', '', s)
    return re.sub(r'\s+', ' ', s).strip()

def derive_description(body, title):
    text = re.sub(r'<figure[\s\S]*?</figure>', ' ', body, flags=re.I)
    lines = []
    in_fence = False
    for line in text.splitlines():
        s = line.strip()
        if s.startswith('```'):
            in_fence = not in_fence
            continue
        if in_fence or not s or s.startswith('#') or s.startswith('>') or s.startswith('---'):
            continue
        s = strip_md_inline(s)
        if len(s) >= 28:
            lines.append(s)
        if sum(len(x) for x in lines) >= 170:
            break
    desc = ' '.join(lines).strip() or f'{title}：Cosmos Order 古典醫學理論重建系列文章。'
    desc = re.sub(r'\s+', ' ', desc)
    if len(desc) > 168:
        desc = desc[:168].rstrip('，。；： ')
    if not desc.endswith(('。','！','？','…','.','!','?')):
        desc += '。'
    return desc

def remove_custom_keys(fm):
    out = []
    skip_nested = False
    for line in fm.splitlines():
        if re.match(r'^\S', line):
            skip_nested = False
        m = re.match(r'^([A-Za-z][A-Za-z0-9_]*)\s*:', line)
        if m and m.group(1) in CUSTOM_KEYS:
            skip_nested = True
            continue
        if skip_nested and (line.startswith(' ') or line.startswith('\t')):
            continue
        skip_nested = False
        out.append(line)
    return '\n'.join(out).rstrip()

def has_key(fm, key):
    return re.search(rf'(?m)^{re.escape(key)}\s*:', fm) is not None

def promote_top_h1(body, title):
    """If a legacy file had no frontmatter and used H1 as its page title,
    promote that H1 into frontmatter to avoid rendering a duplicate title.
    No other body text is changed."""
    lines = body.splitlines(keepends=True)
    if not lines:
        return body, False
    i = 0
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i >= len(lines):
        return body, False
    m = re.match(r'^#\s+(.+?)\s*$', lines[i].strip())
    if not m:
        return body, False
    heading = re.sub(r'\s+', ' ', m.group(1)).strip()
    expected = re.sub(r'^\d{1,3}\s+', '', title).strip()
    heading_no_num = re.sub(r'^\d{1,3}\s+', '', heading).strip()
    if heading_no_num != expected:
        return body, False
    j = i + 1
    if j < len(lines) and not lines[j].strip():
        j += 1
    return ''.join(lines[:i] + lines[j:]), True

with MASTER.open(encoding='utf-8-sig', newline='') as f:
    rows = list(csv.DictReader(f))

changes, errors, promoted = [], [], []
for r in rows:
    p = DOCS / Path(r['SourceFile'])
    if not p.exists():
        errors.append(f'Missing: {p}')
        continue
    text = p.read_text(encoding='utf-8')
    fm, body, had_fm = split_fm(text)
    original_body = body
    if not had_fm:
        body, did_promote = promote_top_h1(body, r['Title'])
        if did_promote:
            promoted.append(str(p.relative_to(ROOT)))
    clean = remove_custom_keys(fm)
    if not has_key(clean, 'title'):
        clean += ('\n' if clean else '') + f"title: {yaml_quote(r['Title'])}"
    if not has_key(clean, 'description'):
        clean += '\n' + f"description: {yaml_quote(derive_description(body, r['Title']))}"
    additions = [
        'contentType: article',
        f"domain: {r['DomainKey']}",
        f"originalOrder: {r['OriginalOrder']}",
        f"guideOrder: {r['GuideOrder']}",
        f"stage: {r['StageKey']}",
        f"level: {r['Level']}",
        'language: zh',
        f"translationKey: {r['TranslationKey']}",
        'related: []',
        'featured: false',
    ]
    new = '---\n' + clean + '\n' + '\n'.join(additions) + '\n---\n' + body
    p.write_text(new, encoding='utf-8')
    changes.append(str(p.relative_to(ROOT)))

REPORT.parent.mkdir(parents=True, exist_ok=True)
REPORT.write_text(json.dumps({
    'rows': len(rows), 'changed': len(changes), 'errors': errors,
    'promotedLegacyH1Count': len(promoted), 'promotedLegacyH1Files': promoted,
    'files': changes
}, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Migrated {len(changes)}/{len(rows)} research articles.')
print(f'Promoted legacy top H1 to frontmatter in {len(promoted)} files.')
if errors:
    print('\n'.join(errors))
    sys.exit(2)
