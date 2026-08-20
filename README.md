# PokeVend 330 Website — Stage 15

This release focuses on:

## Milestone 1 — Launch-ready homepage
- New Why Buy From PokeVend 330? section
- New New Releases section
- Honest Launching Across Akron / Trusted By section
- Expanded footer
- Existing hero, brands, how-it-works, machine features, and FAQ retained

## Milestone 2 — Better Products page
Dedicated category sections for:
- Pokémon
- Magic: The Gathering
- One Piece
- Disney Lorcana
- Yu-Gi-Oh!
- Sports Cards

Each category includes:
- description
- newest releases / product direction
- typical stock
- available-at-select-locations messaging

## Install
Unzip this package into the root of your local `pokevend330-website` repository and replace existing files.

Then:

```powershell
git add .
git commit -m "Launch-ready homepage and upgraded products page"
git push origin main
```

GitHub Pages will redeploy automatically.


Release images added to homepage. Chaos Rising is included in images/releases/ for later use.

## Classic homepage restoration
The homepage has been returned to the earlier customer-first composition:
Hero → Featured Brands → How It Works → Machine Features → FAQ → Footer.

The upgraded Products page and other Stage 5 pages remain intact.

## Stage 6 — Real product asset integration
- Real uploaded booster-pack photography added to the homepage hero strip
- Real brand logos added to the featured-brand strip
- Products page rebuilt as a visual storefront
- Akron skyline photo integrated into homepage and Locations page
- Subtle hover, floating, glow, and button motion added
- Existing customer-first homepage composition retained

No live inventory claims are made; product availability remains location-dependent.


## Stage 7 — Master Revision List Applied
- Global support phone updated to (330) 552-8172
- Global support email updated to support@pokevend330.com
- Partnership CTAs now open a pre-addressed email to partner@pokevend330.com
- All button-style links audited to ensure they have actions
- Uploaded product/logo assets cropped to remove obvious excess white/transparent padding
- Cropped source masters saved under `images/library/` for future use
- Ohio service-area visual with Akron highlighted added wherever Service Area is displayed
- Contact-page vending-issue pills centered
- Partner hero machine image cleaned, resized, and blended into the hero
- Partner location priorities updated; Gas Stations and Convenience Stores added; Bowling Alleys moved to the end
- Partner machine-size FAQ updated for wall-mounted and free-standing options
- Insurance FAQ removed
- Partner CTA text/button formatted for single-line desktop presentation
- Homepage machine presentation scaled to show the full machine and its trading-card inventory more clearly


## Stage 8 — New Master Revision List
- Replaced the rough Ohio silhouette with a more accurate county-based Ohio map.
- Summit County / Akron is highlighted and labeled on the service-area map.
- Service-area copy now keeps “Akron, OH” and “Locally owned & operated” on separate lines.
- Homepage Email PokeVend 330 CTA now shows info@pokevend330.com beneath the title and emails that address.
- Added verified, product-specific current-card-price links to every product currently displayed on the Products page.
- Pokémon price links use exact PokémonWizard set pages.
- Magic, One Piece, Lorcana, and Yu-Gi-Oh! use exact TCGplayer price guides.
- Topps sports products use verified PriceCharting / SportsCardsPro flagship-set price guides.
- All external price links open in a new browser tab with safe rel attributes.


## Stage 9 — Master Revision
- Product pricing link labels now read “View [Set Name] Cards & Prices” while preserving the verified destinations and new-tab behavior.
- Locations page crossroads graphic replaced with the Ohio county map highlighting Akron.
- Homepage benefit symbols replaced with clean white line icons.
- Homepage How It Works section redesigned into a tighter horizontal visual strip with new icons and revised copy.
- Always Stocked card redesigned and now features Ascended Heroes + Prismatic Evolutions.
- Built for Collectors card redesigned with a coordinated collector-card graphic.
- All visible business phone-number occurrences now read “Call/Text (330) 552-8172”.
- Products-page hero heading changed to “Featured Card Packs”.
- About Us hero heading changed to “The Fastest Way to Your Next Pack”.


## Stage 10 notes

- Homepage center card artwork is a standalone replaceable file: `images/hero/hero-cards.png`.
- To swap the hero cards later, replace that file with a PNG using the same filename (a transparent PNG with a roughly 3:2 landscape canvas works best). No HTML/CSS edit is required.
- Homepage machine artwork is `images/hero/hero-machine.png`.
- Products page contains 48 featured packs and price-guide links. Pokémon product price links prioritize PokémonWizard.


## Stage 11 notes

- Products page now displays 32 featured packs.
- Temporarily hidden product cards: Astral Radiance, Battle Styles, Chilling Reign, Darkness Ablaze, Lost Origin, Obsidian Flames, Paldea Evolved, Paradox Rift, Scarlet & Violet, Stellar Crown, Sword & Shield, Temporal Forces, Vivid Voltage, White Flare, Magic: The Lord of the Rings — Tales of Middle-earth, and Topps 2024 Series 1.
- Hidden product image assets remain in the site folders for quick restoration later.
- Contact page phone card now displays only `(330) 552-8172`.
- Contact page phone button now reads `Call/Text Now`.
- The underlying phone link remains `tel:+13305528172`.

## Stage 15 notes
- Added a Products navigation dropdown on the main customer-site navigation with a direct link to the Card Value & Selling Guide.
- Products remains the parent navigation section while viewing the Card Value & Selling Guide.
- Desktop navigation supports hover/focus; mobile navigation uses the Products dropdown toggle.
- Updated Ludwig grading callout to briefly explain who Ludwig is and explicitly identify the external link as a YouTube video on his channel.
- Matched the heights of the “Reasons to Keep It” and “Reasons to Sell It” cards.
- Redesigned the selling-method quick-rule section into four cleaner choice tiles.
- Each quick-rule choice remains a single line of text within its tile.
- The final four reminder cards use one concise line each on desktop.
- `CNAME` is included at the ZIP root and set to `pokevend330.com`.
- Deployment script preserves the current local homepage hero images so a Stage 15 deploy will not overwrite manual hero-image swaps.
- Deployment safety checks avoid punctuation/encoding-sensitive text checks before commit.
