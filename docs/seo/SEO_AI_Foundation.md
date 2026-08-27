# WBS 8 — SEO + AI Foundation

Implemented in this batch:

- production `site: https://cosmosorder.org`;
- Starlight sitemap generation enabled by `site`;
- `robots.txt` with public crawling allowed, `OAI-SearchBot` explicitly allowed, and `GPTBot` disallowed;
- article `description` backfilled when absent;
- Organization, Article, and BreadcrumbList JSON-LD through route middleware;
- `/overview` permanently redirected to `/`;
- clean domain hubs used as pillar pages;
- internal hub → article and article → hub navigation;
- placeholder English pages marked `noindex` until substantive translations are published.

Manual post-deploy gates:

1. Verify Google Search Console ownership and submit `https://cosmosorder.org/sitemap-index.xml`.
2. Recheck `https://cosmosorder.org/robots.txt` from production and in Cloudflare.
3. Confirm Cloudflare does not block verified OAI-SearchBot traffic.
4. Inspect a live article source for canonical URL and JSON-LD.
5. Re-run Lighthouse and compare against WBS 0 guardrails.
