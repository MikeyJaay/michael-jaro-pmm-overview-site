

# PMM Portfolio — Product Marketing Artifact Showcase

## Overview
A premium, dark-themed portfolio application showcasing product marketing artifacts. V1 fully implements the **Landing Pages** section with an interactive fanned card gallery and immersive full-screen HTML viewer. Other artifact categories are scaffolded in navigation as placeholders.

---

## Design System
- **Theme**: Dark premium — charcoal/near-black background (#0a0a0f), soft glowing card edges, light text
- **Cards**: Rounded corners, subtle gradient borders, glassmorphism-style translucency
- **Typography**: Clean hierarchy — large bold titles, muted secondary text
- **Motion**: Framer Motion throughout — smooth spring animations, hover elevations, page transitions
- **Accent**: Subtle blue/indigo glow effects on interactive elements

---

## Navigation Bar
- Fixed top nav with logo/name on left
- Links: **Home** · **Landing Pages** · Decks · Messaging · Technical Marketing · Sales Enablement
- Future sections show "Coming Soon" badge or tooltip
- Mobile: hamburger menu

---

## Home Page
- Hero section with name, title ("Product Marketing Manager"), and brief value statement
- Animated intro text highlighting strategy, storytelling, and GTM execution
- Featured artifact preview cards linking to the Landing Pages section
- Subtle background gradient or particle effect for premium feel

---

## Landing Pages Gallery (MVP Core)
- **Fanned card layout**: Cards displayed overlapping at slight angles, like a hand of cards
- Each card shows: preview thumbnail area, page title, category label, tags
- **Hover interaction**: Card rises, rotates slightly to face forward, glows — other cards shift to make room
- **Click**: Opens full-screen viewer overlay
- 4 artifacts from the uploaded HTML files:
  1. CrowdStrike Falcon for XIoT
  2. Mitratech HQ Platform Customer Adoption
  3. Mitratech HR Tech Event Registration
  4. Mitratech Perform UI Refresh

---

## Full-Screen Viewer Overlay
- Dark overlay with the archived HTML page rendered in an iframe
- Top bar: page title, close (X) button, "Open in new tab" link
- Smooth scale-in animation on open, fade-out on close
- Returns user to gallery seamlessly

---

## Archived HTML Handling
- HTML files copied to `/public/portfolio-pages/`
- Each card references its file path; iframe loads it directly
- Data driven by a structured array in a `portfolioData.ts` file with id, slug, title, category, description, filePath, tags

---

## Placeholder Pages
- Decks, Messaging, Technical Marketing, Sales Enablement pages show a styled "Coming Soon" state with the category description
- Consistent layout shell across all pages

---

## Responsive Design
- **Desktop**: Full fanned card layout with hover interactions
- **Tablet**: Reduced fan angle, fewer visible cards
- **Mobile**: Cards stack vertically as elegant full-width cards, tap to open viewer

---

## Component Architecture
- `AppShell` — layout wrapper with nav + footer
- `Navbar` — top navigation with active states
- `HeroSection` — home page hero
- `LandingPageGallery` — fanned card container with Framer Motion
- `PortfolioCard` — individual animated card
- `ArtifactViewer` — full-screen overlay with iframe
- `ComingSoonPage` — placeholder for future sections
- `Footer` — minimal footer

---

## Tech
- React + TypeScript + Tailwind CSS
- Framer Motion for all animations
- React Router for navigation
- Static data (no backend needed for V1)

