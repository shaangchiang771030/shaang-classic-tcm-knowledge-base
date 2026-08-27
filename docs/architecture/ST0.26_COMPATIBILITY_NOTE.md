# Cosmos Order — Starlight 0.26.2 compatibility correction

The WBS 2–10 batch originally assumed a newer Starlight route-data API.
The repository is pinned to Astro `^4.15.2` and `@astrojs/starlight` `0.26.2`.

This patch:
- removes the unsupported `routeMiddleware` option;
- neutralizes `src/routeData.ts` so it has no unsupported imports;
- forwards `Astro.props` through the custom Pagination override.

Preserved now:
- 178-article metadata migration;
- homepage and research hubs;
- `/en/` i18n foundation and language switch;
- custom CSS / visual foundation;
- robots and site-level SEO foundation;
- About / Start Here / Food Report placeholders.

Deferred on the pinned Starlight version:
- dynamic domain-local sidebar rewriting;
- route-data-driven custom previous/next ordering;
- route-data-generated per-article JSON-LD.
