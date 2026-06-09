## Redesign: Premium Bento Hero direction

Rebuild the site around the chosen direction. **Locked tokens** (used everywhere, no drift):
- Background: `#1e1b4b` (deep indigo) · Primary: `#4338ca` · Accent: `#38bdf8` (sky) · Surface/text: `#f8fafc`
- Headings: Space Grotesk · Body: DM Sans
- Layout system: bento grid (mixed-size cards, dense composition)

### 1. Design system overhaul — `src/styles.css`
- Swap the current navy/gold palette for the indigo/sky tokens above (background, foreground, primary, accent, card, border, muted — all in oklch).
- Load Space Grotesk + DM Sans via `<link>` in `src/routes/__root.tsx`; register `--font-display` / `--font-sans` in `@theme`.
- Retire the gold-specific gradients (`bg-gradient-gold`, `text-gradient-brand`) and replace with `bg-gradient-hero` (indigo→deep-indigo) and a sky-glow utility for CTAs.
- Speed up marquee already done; keep it but recolor to indigo/sky.

### 2. Banner — `src/components/BrandBanner.tsx`
Match the prototype's clean white header: small DC monogram (sky ring), "Dropper's Club" in Space Grotesk + uppercase subtitle, admissions phone block on the right, two course pills (NEET·AIIMS in indigo, Foundation 9-12 in sky). Mobile collapses to logo + name + pills row.

### 3. Alert ticker
Recolor bar to `#4338ca` with sky pulse dots, keep the 18s scroll speed.

### 4. Navbar — `src/components/Navbar.tsx`
Transparent over indigo bg, sky underline on hover, primary CTA button changes to filled sky `#38bdf8` with indigo text.

### 5. Hero — `src/components/Hero.tsx`  (the empty section)
Implement exactly the prototype's two-column grid:
- Left (col-span-7): sky pill badge → 7xl Space Grotesk headline with "Bridge" in sky → DM Sans subline → Register Free (indigo, glow shadow) + View Courses (glass) buttons.
- Right (col-span-5): 2×2 bento — Stats card (1200+), small AIIMS card, wide "Meet Our Stars" indigo card with avatar stack, Location/Contact card with sky icon button.
- Quick-stats strip below (98% / 1:15 / Daily / Smart).

### 6. Results / Stars section — `src/components/Results.tsx`
Convert from full-width slab to a bento layout: one large featured topper card + grid of smaller topper tiles + a stats tile. Remove the light gradients at start/end (already requested earlier). Use glass cards on indigo.

### 7. Courses, Faculty, Reviews, Contact
Restyle each existing section as a bento group rather than stacked full-width bands:
- Courses: 3 cards of varied size with sky/indigo/amber accent dots
- Faculty: avatar stack tile + bio tile side by side
- Reviews: masonry-feel quote cards on glass
- Contact: split tile — map/location card + form card

### 8. Mobile responsiveness
All bento grids collapse to single column with preserved order. Hero headline scales 4xl→7xl. Cards keep generous padding on mobile.

### Technical notes
- Tailwind v4 — tokens in `@theme` inside `src/styles.css`; arbitrary hex values from the prototype get promoted to semantic tokens (`bg-background`, `text-primary`, `bg-accent`, etc.) so components stay theme-driven.
- No new dependencies, no backend changes.
- Existing routes/components stay; this is purely visual + structural restyling.

### Out of scope
- New pages, auth, CMS, or content changes beyond what's already on the site.
- Re-shooting images — existing topper photos and logo are reused.