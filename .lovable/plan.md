

## Problem

The Landing Pages tab crashes because it loads **4 simultaneous iframes**, each rendering a full archived HTML page at 1280x960 pixels. These iframes contain complete websites with their own CSS, JS, and assets — multiplied by 4, this overwhelms the browser's memory and rendering pipeline, especially on mobile.

## Solution: Replace live iframe thumbnails with static screenshot images

Instead of embedding live iframes as card thumbnails, we'll use static screenshot images. The full iframe only loads when the user clicks a card to open the ArtifactViewer (which already works well since it's a single iframe).

### Steps

1. **Generate screenshot images** — Create 4 PNG screenshots (one per landing page) and place them in `public/portfolio-thumbnails/`. These can be captured from the existing HTML files at roughly 1280x960 and saved as compressed PNGs or WebP.

2. **Add `thumbnail` field to `portfolioData.ts`** — Add a `thumbnail: string` path to each `PortfolioEntry` pointing to the static image (e.g., `/portfolio-thumbnails/crowdstrike-falcon-xiot.png`).

3. **Replace iframe with `<img>` in `PortfolioCard.tsx`** — Swap the iframe block (lines 37-48) with a simple `<img src={entry.thumbnail} />` that uses `object-cover` and `object-top` to show the top portion of the page.

4. **Replace iframe with `<img>` in mobile cards (`LandingPageGallery.tsx`)** — Same swap for the mobile layout iframe (lines 87-96).

5. **Keep `ArtifactViewer.tsx` unchanged** — The full-screen viewer still loads the real iframe on click, which is fine since it's only one iframe at a time.

### Technical detail

- Thumbnail images should be ~800px wide, compressed WebP or PNG, keeping each under 100KB
- If you don't have pre-made screenshots yet, we can use a placeholder gradient with the page title as a temporary fallback, then swap in real screenshots later
- This eliminates ~95% of the memory/CPU usage on the gallery page

