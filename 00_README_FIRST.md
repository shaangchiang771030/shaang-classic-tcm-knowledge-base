# Cosmos Order — Japanese Repo Overlay

This ZIP is a **repo-root overlay**.

## Contains

- 178 localized research articles
- 6 localized domain guide pages
- localized `/research/` landing page
- locale route plan CSV
- final validation report

## Apply

Extract `CosmosOrder_JA_178_Articles_Guides_FINAL_v1.zip` directly into the repository root.

Then run:

```powershell
npx astro check
npx astro build
```

Only commit after both pass.

## Important

- Existing Traditional Chinese URLs are not renamed.
- Article identity stays linked by `translationKey`.
- Localized article filenames have no reading-order prefix.
- Reading order remains metadata-driven.
- Image URLs are preserved exactly from the Traditional Chinese source.
- This overlay does not change package versions or dependencies.
