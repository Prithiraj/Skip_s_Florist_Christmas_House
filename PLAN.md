# Skip's Florist & Christmas House — Website Plan

## Goal
Build a polished, responsive static website for Skip's Florist & Christmas House that combines:

- the local-business clarity of the supplied local-florist reference,
- the merchandising hierarchy of the supplied ecommerce reference,
- the warm editorial typography and storytelling of the supplied floral-studio reference.

The site should feel like a real neighborhood florist first and a generic ecommerce template second.

## Source-of-truth business details

- **Business:** Skip's Florist & Christmas House
- **Address:** 5324 Mile Stretch Drive, Holiday, FL 34690
- **Phone:** (727) 938-3391
- **Hours:** Mon–Fri 9:00 AM–3:00 PM; Sat 9:00 AM–12:00 PM; Sun closed
- **Services:** local floral delivery, everyday flowers, weddings/events, sympathy/funeral flowers, plants/gifts, seasonal/Christmas decor
- **Positioning:** family-owned local florist with 100+ years of combined floral design experience

## Experience principles

1. **Real photography is primary.** Actual Skip's storefront/shop imagery plus real floral photography carries the page. Decorative motion only complements it.
2. **Local conversion first.** Phone, directions, hours, address, delivery information and consultation CTAs remain prominent on desktop and mobile.
3. **Merchandising without fake checkout.** Featured arrangements link to the shop's current ordering site rather than pretending a static GitHub Pages demo has a live cart.
4. **Editorial warmth.** Large serif headlines, soft ivory surfaces, deep evergreen, muted cranberry/terracotta, and generous spacing.
5. **Christmas House is part of the identity.** Seasonal merchandising gets a dedicated visual section rather than hiding the second half of the business name.
6. **Fast and accessible.** Reduced-motion support, visible focus states, semantic HTML, skip link, lazy-loaded secondary photography and no heavy runtime dependency.

## Information architecture

### Global
- Delivery/service ribbon
- Responsive navigation
- Persistent local-action buttons on mobile

### Home page sections
1. **Hero** — local florist positioning, real flower photography, Shop / Call CTAs and live open/closed status
2. **Trust strip** — phone, hours, address/directions
3. **Shop by occasion** — Birthday, Sympathy, Love & Romance, Just Because
4. **Featured flowers** — representative categories/pricing; links to the existing ordering storefront
5. **Same-day/local delivery callout**
6. **Wedding & event consultation** — editorial split layout
7. **Christmas House** — actual shop/holiday imagery and seasonal gift positioning
8. **Our local story** — family-owned + design experience + actual storefront/floral photos
9. **Visit us** — address, hours, embedded map and directions
10. **Customer feedback CTA** — points to the florist's current reviews page; no fabricated testimonials
11. **Footer** — contact, shop links, service links and photo credits

## Visual system

- **Display type:** Georgia / classic serif stack to avoid external font dependency
- **UI/body type:** system sans stack
- **Core colors:** evergreen, warm ivory, cranberry, terracotta, sage, brass
- **Image treatment:** natural crops, rounded editorial cards, subtle borders/shadows, no aggressive overlays
- **Motion:** reveal/hover transitions plus a lightweight Canvas 2D falling-petal ambience; disabled for `prefers-reduced-motion`

## Technical approach

- Static HTML/CSS/JavaScript so deployment to GitHub Pages is dependable.
- No build step required.
- Actual Skip's imagery is loaded from the shop's existing Flower Shop Network CDN; supporting high-resolution real floral photography is loaded from Unsplash. Provenance is documented in `CREDITS.md`.
- External commerce CTAs point to the florist's existing live ordering website.
- Google Maps/directions uses the supplied place link/query plus a simple embedded map.
- `app.js` calculates current open/closed status in the `America/New_York` timezone.
- GitHub Pages workflow in `.github/workflows/pages.yml` deploys the repository root and requests Pages enablement when needed.

## Photography plan

### Actual Skip's imagery
Use images published on Skip's existing Flower Shop Network site, including:
- storefront exterior,
- roadside Skip's Florist & Christmas House sign,
- shop gift/Christmas displays,
- shop decorative displays,
- real floral arrangements.

### Supporting real flower photography
Where the older shop imagery is too small for modern hero/card crops, use complementary high-resolution real floral photographs from Unsplash. These are representative floral photographs and are not presented as exact Skip's products.

## Implementation phases

- [x] Research current business information and current florist storefronts
- [x] Review supplied design references and define visual direction
- [x] Build semantic page structure
- [x] Build responsive visual system
- [x] Add real local/shop photography and real floral imagery
- [x] Add interactions and accessibility polish
- [x] Add SEO/social metadata and structured business data
- [x] Validate HTML parsing, JavaScript syntax and live destination URLs
- [x] Add GitHub Pages deployment workflow
- [x] Publish and verify Pages deployment

## Implemented files

- `index.html` — page structure, SEO, structured local-business data and content
- `styles.css` — full responsive visual system
- `app.js` — mobile nav, live store status, reveal interactions and lightweight petal canvas
- `CREDITS.md` — real photography provenance and representative-image disclaimer
- `.github/workflows/pages.yml` — GitHub Pages deployment
- `.nojekyll` — static-site compatibility
- `README.md` — project/deployment overview

## Deployment target

GitHub Pages: `https://prithiraj.github.io/Skip_s_Florist_Christmas_House/`

Verified through the successful GitHub Pages deployment workflow.

## Notes

- This project intentionally does not duplicate the live ecommerce backend. Product and order actions hand off to Skip's current ordering experience.
- Business hours/contact details should be treated as content that may change; update the static site when the live storefront changes.
- Three.js was intentionally not used. The supplied references are strongest when photography and typography remain dominant, so the decorative layer is a much lighter Canvas 2D petal effect instead.
