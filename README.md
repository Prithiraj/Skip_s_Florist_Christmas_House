# Skip's Florist & Christmas House

A responsive static redesign for Skip's Florist & Christmas House in Holiday, Florida.

## Design direction

The implementation blends three ideas from the supplied references:

- local-business conversion clarity (phone, hours, directions and visit information),
- ecommerce merchandising (occasion navigation and shoppable flower cards),
- editorial floral storytelling (serif typography, large photography and wedding/seasonal features).

See [PLAN.md](PLAN.md) for the implementation plan and [CREDITS.md](CREDITS.md) for photography sources.

## Stack

- Semantic HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

There is intentionally no build step and no fake local cart. Order buttons hand off to Skip's current ordering storefront.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The workflow in `.github/workflows/pages.yml` deploys the repository root to GitHub Pages on pushes to `main`. It uses `actions/configure-pages` with Pages enablement enabled so an unconfigured repository can be initialized for Pages during deployment when permissions allow.
