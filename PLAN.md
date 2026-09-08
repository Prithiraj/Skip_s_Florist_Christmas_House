# Skip's Florist & Christmas House — Website Plan

## Goal

Build a polished, responsive static site for Skip's Florist & Christmas House that feels like a modern local-florist storefront without inventing ecommerce capability or business facts.

The latest visual direction is inspired by the supplied ecommerce reference: a compact announcement bar, centered navigation, a commerce-forward hero, horizontally browsable occasion shortcuts, a clean product-card grid, a strong delivery banner, compact trust/story modules, and a dense but readable footer.

The reference is used for **layout rhythm, hierarchy, spacing, typography contrast, card proportions and responsive behavior only**. Its invented store name, delivery cutoff, product names, testimonials, subscription features, cart behavior and other fictional business details are not copied.

## Source-of-truth business details

- **Business:** Skip's Florist & Christmas House
- **Address:** 5324 Mile Stretch Drive, Holiday, FL 34690
- **Phone:** (727) 938-3391
- **Hours:** Mon–Fri 9:00 AM–3:00 PM; Sat 9:00 AM–12:00 PM; Sun closed
- **Services represented:** flowers, local delivery, weddings/events, sympathy flowers, seasonal/Christmas flowers and decor
- **Ordering:** hand off to the florist's current live storefront at `flowerstrinity.com`

## Experience principles

1. **Local storefront first.** Phone, directions, hours and live-store links remain easy to reach.
2. **Real photography leads.** Actual Skip's storefront/shop photos and real flower photography carry the design.
3. **No fake cart.** The static redesign never pretends to process checkout; product/shop actions open the live storefront.
4. **No invented business claims.** The design reference is visual inspiration only.
5. **Current catalog facts are clearly separated from representative photography.** Product names/prices shown in the highlight cards mirror the current storefront at implementation time, and the page explicitly states that the images are representative.
6. **Mobile mirrors desktop hierarchy.** The mobile layout keeps the announcement bar, centered brand, horizontal occasion rail, horizontally scrollable product cards and persistent Call / Shop / Directions dock.
7. **Accessible and fast.** Semantic HTML, keyboard-friendly navigation, visible focus states, reduced-motion handling, lazy-loaded secondary images, and no heavy runtime dependency.

## Information architecture

1. Announcement / local-delivery ribbon
2. Centered responsive navigation
3. Ecommerce-style hero with local-business copy, Shop + Call CTAs, live status, real floral photography and an actual Skip's sign card
4. Horizontal occasion rail
5. Current storefront highlights
6. Local-delivery callout
7. Weddings & events feature
8. Christmas House feature using actual shop imagery
9. Local story / storefront facts
10. Customer-review handoff with no fabricated quotes
11. Visit section with hours, address and map
12. Footer with current store links
13. Persistent mobile Call / Shop / Directions dock

## Visual system

- **Frame:** centered desktop site canvas on a warm neutral page background
- **Brand color:** deep evergreen
- **Accent:** warm coral
- **Surfaces:** white, ivory and pale mint
- **Display type:** Georgia / classic serif stack
- **UI/body type:** system sans stack
- **Hero:** two-column desktop composition with large type and floral photography; stacked and centered on mobile
- **Cards:** tighter ecommerce proportions, smaller radii, thin green-tinted borders
- **Motion:** subtle reveal and hover transitions only
- **3D:** intentionally omitted because it would compete with the reference's clean retail hierarchy and the real photography

## Photography

### Actual Skip's imagery
- Storefront exterior
- Roadside sign
- Christmas / gift display

### Supporting flower photography
High-resolution real floral photography from Unsplash is used where the shop's older imagery is not suitable for large modern crops. These images are representative and are not claimed as exact Skip's products.

See `CREDITS.md` for provenance.

## Data integrity

- Same-day delivery is phrased as **call to confirm availability**; no unsupported cutoff time is shown.
- No fictional customer reviews are displayed.
- No newsletter/subscription feature is added unless the florist actually provides one.
- No cart icon or Add-to-cart interaction is simulated.
- Product highlight names/prices are based on the current Skip's storefront at implementation time and are accompanied by a visible representative-photo disclaimer.
- Fees, availability and checkout totals remain on the live storefront.

## Implementation status

- [x] Research current business information and live storefront
- [x] Review original editorial/local references
- [x] Review new ecommerce reference and extract visual-only patterns
- [x] Rework header/navigation alignment
- [x] Rebuild hero around a centered two-column commerce layout
- [x] Add horizontal occasion shortcuts
- [x] Rework flower highlights into compact ecommerce cards
- [x] Remove fake-review / fake-cart patterns
- [x] Keep delivery messaging factual
- [x] Compact weddings, Christmas House and local-story modules
- [x] Rebuild responsive/mobile structure around the new hierarchy
- [x] Preserve live open/closed status in `America/New_York`
- [x] Preserve GitHub Pages deployment workflow
- [ ] Publish this redesign to GitHub Pages

## Files

- `index.html` — semantic page structure, factual content, live-store handoffs and structured business data
- `styles.css` — responsive ecommerce-inspired visual system
- `app.js` — mobile navigation, store-status calculation and reveal behavior
- `CREDITS.md` — photography provenance
- `.github/workflows/pages.yml` — Pages deployment
- `.nojekyll` — static Pages compatibility

## Deployment

Target GitHub Pages URL:

`https://prithiraj.github.io/Skip_s_Florist_Christmas_House/`
