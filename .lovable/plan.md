

# Light Apple-Style Theme with Warm Coral Accents

## Theme Direction

Switch from the current dark theme to a clean, light Apple-inspired design with warm coral/orange as the accent color for CTAs, active states, and visual highlights.

**Color palette:**
- **Background**: Pure white (`0 0% 100%`) with very subtle warm gray for cards (`30 10% 98%`)
- **Text**: Near-black for headings (`0 0% 10%`), medium gray for body/muted text (`0 0% 45%`)
- **Primary accent**: Warm coral (`12 80% 62%`) — used for buttons, active nav indicators, card top accents, badges, and the text gradient
- **Secondary accent**: Soft peach (`15 60% 95%`) — used for hover states, tag backgrounds
- **Borders**: Very light gray (`0 0% 92%`) — barely visible, Apple-style
- **Cards**: White with subtle shadow, no heavy borders

## Files Changed

1. **`src/index.css`** — Replace all CSS variable values with light theme equivalents. Update `text-gradient` to use coral tones. Update `glow-border` utilities to use warm coral glow. Update body/heading font styles to use dark text on light bg.

2. **`src/components/Navbar.tsx`** — Update nav indicator and dropdown styling for light background (white bg, subtle shadow instead of dark card).

3. **`src/components/HeroSection.tsx`** — Update background glow blurs from primary/accent to warm coral tones.

4. **`src/components/PortfolioCard.tsx`** — Update hover glow to warm coral. Card should be white with subtle shadow rather than dark card bg.

5. **`src/components/ArtifactViewer.tsx`** — Update overlay from dark bg to light bg (`white/95`).

6. **`src/components/Footer.tsx`** — Light border, dark text on white.

7. **`src/components/LandingPageGallery.tsx`** — Ensure section heading text uses dark foreground colors.

8. **`src/pages/ComingSoon.tsx`** — Update any dark-specific styling.

9. **`src/data/portfolioData.ts`** — Update card accent gradients from blue/purple to coral/peach tones.

10. **`tailwind.config.ts`** — No structural changes needed (colors reference CSS variables).

## Result
A bright, breathable interface where coral accents naturally draw attention to interactive elements (cards, buttons, nav), while the content reads clearly on a clean white canvas.

