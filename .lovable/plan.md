

## Problem

The Landing Pages gallery itself is already optimized (static image thumbnails, no iframes on the page). The slowness you're experiencing is likely from:
1. The `ArtifactViewer` component being mounted in the DOM (even when hidden, AnimatePresence + framer-motion adds overhead)
2. Large thumbnail PNGs loading simultaneously
3. The iframe viewer, when opened, loads heavy HTML files within the same browser tab/SPA context

## Solution: Open HTML files in a new tab instead of in-app viewer

When a thumbnail is clicked, open the HTML file directly in a new browser tab. This eliminates the ArtifactViewer component entirely.

### Changes

1. **`LandingPageGallery.tsx`** — Remove `ArtifactViewer` import and state. Change `onClick` handler from `setViewerEntry(entry)` to `window.open(entry.filePath, '_blank')`.

2. **Delete or leave `ArtifactViewer.tsx`** — No longer imported or used. Can be removed for cleanup.

3. **Optional: Add loading="lazy" optimization** — Already present on images, but we can also add `decoding="async"` to the `<img>` tags for smoother rendering.

This is the simplest and most effective fix — zero iframes in the SPA, zero memory pressure, and users get the full HTML page in its own clean tab.

