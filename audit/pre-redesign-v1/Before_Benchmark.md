# Cosmos Order Pre-Redesign Baseline

Baseline ID: pre-redesign-v1

Production:
https://cosmosorder.org

Date:
2026-08-26

## Environment

Node: v24.19.0
npm: 11.17.0

Git SHA:
c60b50f03d03319229123ce31dba4c3c4b9c990a

Build:
PASS

Build Exit Code:
0

---

## Content Baseline

Total MD / MDX files:
192

Research articles:
178

Supporting / component / index files:
14

### Research articles by domain

- 時空篇: 30
- 氣化生理篇: 30
- 經方篇: 22
- 藥物篇: 30
- 針灸篇: 6
- 扁鵲鏡經篇: 60

---

## URL Baseline

Discovered public URLs:
181

Research article URLs:
178

Research content with live URL:
178 / 178

Orphan research articles:
0

---

## Broken Link Baseline

Raw BROKEN occurrences:
182

Unique broken URLs:
2

Meaningful known broken route:
/overview

/overview occurrences:
180

Secondary /404 crawl occurrences:
2

Known root cause:
Global sidebar contains a link to /overview, but no corresponding
public /overview page currently exists.

---

## Lighthouse — Homepage Mobile

Performance:
TBD

Accessibility:
TBD

Best Practices:
TBD

SEO:
TBD

---

## Lighthouse — Homepage Desktop

Performance:
TBD

Accessibility:
TBD

Best Practices:
TBD

SEO:
TBD

---

## Lighthouse — Representative Article Mobile

Article URL:
TBD

Performance:
TBD

Accessibility:
TBD

Best Practices:
TBD

SEO:
TBD

---

## Screenshots

- homepage-before-desktop.png
- homepage-before-mobile.png
- article-before-desktop.png

---

## Known Baseline Issues

1. Global `/overview` navigation link returns 404.
2. Content inventory ExpectedPath is not guaranteed to equal Astro's final normalized route.
3. `Mirror_Classic _of_Bian_Que` contains a legacy directory naming irregularity.
4. 經方篇 contains the legacy numbering gap 09 → 11.
5. npm audit reports pre-existing dependency vulnerabilities.
6. These issues are recorded as baseline defects and are not fixed during WBS 0.