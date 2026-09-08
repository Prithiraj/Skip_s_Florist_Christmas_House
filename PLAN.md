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

1. **Real photography is primary.** Use actual Skip's storefront/shop imagery plus real floral photography. Decorative graphics may support photography but never replace it.
2. **Local conversion first.** Phone, directions, hours, address, delivery information and consultation CTAs remain prominent on desktop and mobile.
3. **Merchandising without fake checkout.** Featured arrangements link to the shop's current ordering site rather than pretending a static GitHub Pages demo has a live cart.
4. **Editorial warmth.** Large serif headlines, soft ivory surfaces, deep evergreen, muted cranberry/terracotta, and generous spacing.
5. **Christmas House is part of the identity.** Seasonal merchandising gets a dedicated visual section rather than hiding the second half of the business name.
6. **Fast and accessible.** Responsive images, reduced-motion support, visible focus states, semantic HTML, skip link, and no heavy runtime dependency.

## Information architecture

### Global
- Delivery/service ribbon
- Responsive navigation
- Persistent local-action buttons on mobile

### Home page sections
1. **Hero** — local florist positioning, actual flower photography, Shop / Call / Directions CTAs
2. **Trust strip** — phone, hours, address
3. **Shop by occasion** — Birthday, Sympathy, Love & Romance, Just Because, Weddings, Seasonal
4. **Featured flowers** — representative current offerings/pricing; each links to the existing ordering storefront
5. **Same-day/local delivery callout**
6. **Wedding & event consultation** — editorial split layout
7. **Christmas House** — actual shop/holiday imagery and seasonal gift positioning
8. **Our local story** — family-owned + design experience + storefront photo
9. **Visit us** — address, hours, map/directions link
10. **Customer love / reputation** — restrained trust copy, no fabricated review names or quotes
11. **Footer** — contact, shop links, service links, source-site links

## Visual system

- **Display type:** Georgia / classic serif stack to avoid external font dependency
- **UI/body type:** system sans stack
- **Core colors:** evergreen, warm ivory, cranberry, terracotta, sage, brass
- **Image treatment:** natural crops, rounded editorial cards, subtle borders/shadows, no aggressive overlays
- **Motion:** small reveal/hover transitions and an optional lightweight canvas petal ambience; all disabled for `prefers-reduced-motion`

## Technical approach

- Static HTML/CSS/JavaScript so deployment to GitHub Pages is dependable.
- No build step required.
- Assets stored in-repo under `assets/images/` so the live site does not depend on third-party hotlinks.
- External commerce CTAs point to the florist's existing live ordering website.
- Google Maps/directions uses the supplied place link/query.
- GitHub Pages workflow in `.github/workflows/pages.yml` deploys the repository root.

## Photography plan

### Actual Skip's imagery
Use images published on Skip's existing Flower Shop Network site, including:
- storefront exterior,
- roadside Skip's Florist & Christmas House sign,
- shop gift/Christmas displays,
- shop decorative displays,
- real floral arrangements.

### Supporting real flower photography
Where the older shop imagery is too small for modern hero/card crops, use complementary high-resolution real floral photographs with clear provenance (for example, Unsplash), stored locally in the repository.

## Implementation phases

- [x] Research current business information and current florist storefronts
- [x] Review supplied design references and define visual direction
- [ ] Build semantic page structure
- [ ] Build responsive visual system
- [ ] Add real local/shop photography and floral imagery
- [ ] Add interactions and accessibility polish
- [ ] Add SEO/social metadata and structured business data
- [ ] Test responsive behavior and key links
- [ ] Add GitHub Pages deployment workflow
- [ ] Publish and verify Pages deployment

## Deployment target

GitHub Pages for `Prithiraj/Skip_s_Florist_Christmas_House`.

## Notes

- This project intentionally does not duplicate the live ecommerce backend. Product and order actions hand off to Skip's current ordering experience.
- Business hours/contact details should be treated as content that may change; update the static site when the live storefront changes.
