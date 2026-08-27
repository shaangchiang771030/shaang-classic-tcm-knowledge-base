#!/usr/bin/env python3
from pathlib import Path
import csv, re, sys, json

ROOT = Path(__file__).resolve().parents[2]
DOCS = ROOT / 'src/content/docs'
MASTER = ROOT / 'data/architecture/Guide_Order_Master.csv'

with MASTER.open(encoding='utf-8-sig', newline='') as f:
    rows = list(csv.DictReader(f))

issues = []
tkeys = set()
bydomain = {}
required = ['contentType','domain','originalOrder','guideOrder','stage','level','language','translationKey']

for r in rows:
    p = DOCS / Path(r['SourceFile'])
    if not p.exists():
        issues.append('missing ' + str(p))
        continue
    text = p.read_text(encoding='utf-8')
    m = re.match(r'^---\s*\r?\n(.*?)\r?\n---', text, re.S)
    if not m:
        issues.append('no frontmatter ' + str(p))
        continue
    fm = m.group(1)
    vals = {}
    for k in required:
        mm = re.search(rf'(?m)^{re.escape(k)}:\s*(.*?)\s*$', fm)
        if not mm:
            issues.append(f'{k} missing: {p}')
        else:
            vals[k] = mm.group(1).strip().strip(chr(34)).strip(chr(39))
    if vals.get('translationKey'):
        if vals['translationKey'] in tkeys:
            issues.append('duplicate translationKey ' + vals['translationKey'])
        tkeys.add(vals['translationKey'])
    dk = vals.get('domain', r['DomainKey'])
    go = vals.get('guideOrder', '')
    bydomain.setdefault(dk, set())
    if go in bydomain[dk]:
        issues.append(f'duplicate guideOrder {dk} {go}')
    bydomain[dk].add(go)
    if vals.get('domain') and vals['domain'] != r['DomainKey']:
        issues.append('domain mismatch ' + str(p))
    if vals.get('translationKey') and vals['translationKey'] != r['TranslationKey']:
        issues.append('translationKey mismatch ' + str(p))
    if vals.get('level') and vals['level'] not in {'foundation','advanced','research'}:
        issues.append('invalid level ' + str(p))

for rel in [
    'index.mdx','research/index.mdx','start-here/index.mdx','about/index.mdx','food-report/index.mdx',
    'en/index.mdx','en/coming-soon/index.mdx'
]:
    if not (DOCS / rel).exists():
        issues.append('missing foundation page ' + rel)

if len(tkeys) != 178:
    issues.append(f'unique translation keys {len(tkeys)} != 178')

report = {'articles': len(rows), 'translationKeys': len(tkeys), 'issues': issues}
(ROOT / 'audit').mkdir(exist_ok=True)
(ROOT / 'audit/wbs2-10-validation.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(report, ensure_ascii=False, indent=2))
sys.exit(1 if issues else 0)
