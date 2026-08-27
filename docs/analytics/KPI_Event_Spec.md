# WBS 9 — Analytics & KPI Spec

## North-star

**Deep Readers** — readers who continue across multiple substantive pages in one research journey.

## Foundation metrics

- Page views / unique visitors
- Organic search visits
- Entry domain
- Domain Hub → article continuation
- Search use
- Start Here → domain click-through
- Language switch use
- Food Report CTA visits
- `utm_source=chatgpt.com` referrals and other AI referrals

## Implementation in this batch

The global head loads Vercel Web Analytics from `/_vercel/insights/script.js`.

**Dashboard action still required:** enable Web Analytics for the Vercel project.

Custom event tracking is intentionally deferred until the first production UX is stable, so event names do not churn during layout work.
