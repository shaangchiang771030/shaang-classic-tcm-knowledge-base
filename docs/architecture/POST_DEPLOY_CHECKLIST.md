# Post-deploy checklist

After the single WBS 2–10 merge reaches Vercel:

- [ ] `/` opens redesigned Cosmos Order homepage.
- [ ] `/overview` returns 308 and lands on `/`.
- [ ] `/research/` and all 9 research hubs open.
- [ ] Sample each of the six legacy article URL families; URLs are unchanged.
- [ ] Article sidebar shows only its own domain, ordered by `GuideOrder`.
- [ ] Article footer Prev/Next follows cognitive order (check Jingfang article 12 → 20 → 13 and Mirror 44 → 46 → 45).
- [ ] `中文 | EN` is visible; untranslated article EN goes to `/en/coming-soon/`.
- [ ] `/robots.txt` loads and sitemap URL is reachable.
- [ ] Enable Vercel Web Analytics in Project → Analytics.
- [ ] Add/verify Google Search Console and submit sitemap.
- [ ] Check Cloudflare crawler/WAF policy for verified OAI-SearchBot.
- [ ] Run Lighthouse Home Mobile/Desktop + Article Mobile and compare to WBS0.
- [ ] Run the WBS0 link crawler again; meaningful broken route count should not regress.
