# Applause Design System

A compact, slide-first design system extracted from the **Applause 2024 slide template** and the **Applause Slide Style Guide**. Applause is a software-testing / crowdtesting company; their visual identity is confident, professional and enterprise-blue — built around a distinctive wordmark set in all-caps letterforms with a small circle "degree" mark as a signature.

This design system is intended for use by a design agent to produce **on-brand slides, decks and supporting marketing materials**.

---

## Sources

| File given | Role |
|---|---|
| `applause-full-color-logo.svg / png / ai / eps` | Primary logo (gray wordmark + blue circle) |
| `applause-one-color-light-logo.svg / png / ai / eps` | White knockout logo for dark backgrounds |
| `Applause Template 2024.pptx` | 47-slide PowerPoint template of every layout |
| `Applause Slide Style Guide.pptx` | 4-page guide: logo usage, type, color, components |

Everything in this design system derives from those two decks; there is no codebase, Figma file or product UI in scope.

The raw extracted assets have been removed after processing; the curated assets live in `assets/`.

---

## File index (manifest)

- `README.md` — this file
- `SKILL.md` — skill front-matter making this folder agent-invocable
- `colors_and_type.css` — all color + type tokens as CSS variables, plus semantic `h1/h2/.subtitle/.eyebrow/.body` classes
- `assets/`
  - `logos/` — full-color, knockout (white on blue), one-color-dark, one-color-light, each as SVG + PNG
  - `backgrounds/` — hex-pattern blue, blue-swoosh gradient, decorative concentric circles, dark-overlay photo
  - `imagery/` — people cut-outs (person-laptop-woman, person-watch-man, person-yellow-hoodie), grand-central-bw, people-phones-street
  - `icons/` — example flat-white-on-blue icon tile
- `fonts/` — **empty**. Applause uses Proxima Nova (not on Google Fonts). We substitute Montserrat at runtime. ⚠ See FONTS note below.
- `preview/` — small visual specimen cards rendered into the Design System tab
- `slides/` — sample React slide components + `index.html` demo deck (TitleSlide, SectionDivider, AgendaSlide, ContentSlide, ThreeCardSlide, StatsSlide, QuoteSlide, ClosingSlide)

There is **no UI kit** — Applause did not ship app/web UI with this package. If product UI is needed, ask for a codebase import or Figma link.

---

## ⚠ Fonts — substitution flagged

The style guide specifies **Proxima Nova** (Bold 24px for headlines, Bold 14px for subtitles, Regular 14px for paragraphs). Proxima Nova is a licensed Mark Simonson typeface and is not on Google Fonts. This system falls back to **Montserrat** (loaded from Google Fonts) as a geometric open-source match. Metrics differ slightly — headline weights read marginally lighter and letterforms are rounder.

**Please upload Proxima Nova .woff2 / .ttf files** and I'll swap them into `fonts/` and update `colors_and_type.css` to `@font-face` them.

---

## Content Fundamentals

The PPTX deck content is 90 % Lorem Ipsum placeholder — but the **meta copy** (slide titles, layout names, and a short customer slide written for *Fanatics Betting & Gaming*) tells a clear voice story.

### Tone
- **B2B-professional, plainspoken.** Applause is selling to enterprise buyers (Fanatics was the named prospect). Tone reads like a confident consultant — competent, matter-of-fact, not breezy.
- **Outcome-framed.** Example: *"Enabling Fanatics to deliver exceptional Sportsbook & Casino software products."* — value stated first, vendor role second.
- **"You" is implied, not exclamatory.** No "You'll love this!" energy — more "Ensuring fans have the best digital and in-store experiences…".

### Voice rules
- **Headlines are descriptive, not clever.** Template titles say what they are ("Title with three columns of text and subtitles", "Customer impact slide"). Apply the same clarity to real titles — lead with the noun ("Annual Proposal", "Today's Agenda").
- **Sentence case** for body, subtitles, and bullet lists. Title case for slide titles and section dividers.
- **No emoji.** Not once in the source material. Keep it off.
- **No exclamation points** in body copy. One is acceptable on a title slide if the moment warrants it; zero is better.
- **Statistics are bold and unqualified.** "+45%", "$305K", "1.5 Million", "2X Retention" — no approximations, no "over" or "nearly".
- **Bullets are fragments, not sentences.** No trailing periods on list items.

### Casing
- Slide titles → Title Case
- Subtitles / eyebrows → Sentence case, **bold**
- Body → Sentence case
- Buttons → Title Case ("Learn More", not "Learn more")
- The brand name is always `Applause` (capital A) — never all-caps in prose (the logo is the exception).

### Vibe
Confident, competent, quietly optimistic. Think "Gartner slide deck meets a well-dressed account exec." Not playful, not startup-punchy.

---

## Visual Foundations

### Color
- **Palette is disciplined — essentially 3 blues, 4 grays, 4 semantic colors.**
- `#0272B4` (Applause blue) is the anchor. Used for the slide sidebar, icon tiles, bullets, links, accent lines, arrows.
- `#01446C` (deep blue) is for headlines and primary chart bars — the only color besides black that text ever appears in.
- `#CFEAFB` (pale blue) is used as a **border** on cards and as a chart-background. `#E7F3FA` (even paler) is the default **page background** for layout slides.
- Body text is always `#3D3D3D` gray, subtitles are pure black, large numbers are usually `#0272B4`.
- Semantic greens / yellows / reds / teal appear **only in charts or icon accents** — never as UI backgrounds.
- **No gradients on text, no rainbow palettes, no purple.** A single slide sometimes uses a subtle blue-on-blue gradient background (see `backgrounds/blue-swoosh.jpg`), but it's monochromatic.

### Type
Proxima Nova (→ Montserrat substitute). A geometric sans with tall x-height, used in 3 weights:
- **Bold** for headlines, subtitles, stat values, labels
- **Regular** for body and bullet text
- Headings are tracked slightly tight (-0.01em) to read more architectural.

### Backgrounds
- **Dominant mode: plain white or `#E7F3FA` pale-blue** for content slides.
- **Section dividers + title slides: solid `#0272B4` blue**, often with a decorative **hexagon network** pattern fading in from the right (`backgrounds/hex-pattern-blue.jpg`) — this is the single most recognizable visual motif.
- Photographic section breaks use a **dark overlay photo** (`backgrounds/dark-overlay-photo.png`) with a `rgba(1, 68, 108, 0.6)` wash and white text on top.
- A decorative **concentric-circle / dashed-circle** motif (`backgrounds/circles-decorative.png`) appears as a corner ornament on some title layouts.
- No full-bleed stock photography on content slides. Photos are always cut-outs of people on white (`imagery/person-*.png`) so they float beside text.

### Spacing & layout
- Slides are **16:9, 1920×1080** (or 1280×720 in preview).
- A persistent **60 px blue sidebar on the left of content slides** carrying the white `applause-one-color-light` logo.
- Content area has generous margins — the style guide rarely fills a slide edge-to-edge.
- 8-pt spacing grid for all padding / gaps.

### Corner radii
- Cards and icon tiles: **8 px rounded corners** (never a pill, never razor-sharp).
- Photos inside cards follow the container corner radius.

### Cards
Per the style guide:
- White background
- `1 px` border in `#CFEAFB` (pale blue)
- `8 px` rounded corners
- Interior padding `24px`
- No drop shadow by default — the pale-blue border is the only separator

### Shadows
Applause decks use borders over shadows. For web/product use, a subtle blue-tinted shadow (`--shadow-sm`, `--shadow-md`) is available in tokens for buttons and floating elements; use sparingly.

### Iconography
- **Flat white icons inside a rounded-square `#0272B4` blue tile**, ~56×56 px.
- No outlined icons, no duotone, no gradients, no emoji.
- On pale-blue card backgrounds, the icon tile reads almost like a stamp.

### Arrows / accents / bullets
- **Arrow lines**: `1 px` solid OR dotted, `#0272B4`, terminating in a filled triangle head. Used for process flows.
- **Bullets**: solid `#0272B4` disc for level 1; a smaller disc or dash for level 2/3. The style guide notes bullets use "special characters" — we reproduce as `::before` circles in CSS.
- Horizontal dividers: `1 px` `#CFEAFB`.

### Transparency & blur
- Almost none. One canonical use: a **dark rgba overlay (`rgba(1, 68, 108, 0.6)`) over a photo** for section-break slides with white text. Otherwise blur / translucency is not part of the brand.

### Hover / press
No interactive-state guidance exists in the source material (it's a print-style deck system). For UI use we propose:
- **Hover on primary button**: darken background from `#0272B4` → `#01446C` (uses the existing palette).
- **Press**: add `box-shadow: inset 0 2px 0 rgba(0,0,0,0.08)` (no shrink — too playful for this brand).
- **Hover on link**: underline + `#01446C`.
- **Focus**: 3 px outer ring in `rgba(2, 114, 180, 0.28)`.

### Imagery vibe
Two clearly-defined lanes:
1. **Optimistic cut-outs on white** — diverse people, earbuds in, laptops out, slight smiles. Warm lighting, no grain, no filters. Used on product/solution slides.
2. **Environmental b&w urban photography** — Grand Central–style crowd scenes, street photography with motion blur. Used sparingly as metaphor for "scale" or "people". Always desaturated to b&w so it doesn't fight the blue palette.

Never use AI-generated-looking imagery, never use illustrations-of-tiny-people, never use stock-photo handshakes.

### Motion
The source is static PPTX — no motion spec exists. For web application, use:
- **Fade + 8 px upward translate** on element enter, `180ms`, `cubic-bezier(0.2, 0, 0.2, 1)`
- No bounce, no large scale changes. Motion should feel institutional, not playful.

### Layout rules (fixed elements)
- **60 px blue sidebar, flush left, every content slide**, bearing the white logo.
- **Slide number** (small white type) bottom-right corner over a subtle footer strip.
- **Slide title** pinned to top-left of the content area, 24 px Bold `#01446C`.

---

## Iconography

Applause iconography is intentionally **spare and prescriptive**:

1. **Style**: Flat white icon, filled (no outlines), centered inside a `#0272B4` blue rounded-square tile (`border-radius: 8px`). The tile + icon together function like a badge.
2. **Sizes**: tile sizes observed are 56×56, 72×72, and 96×96 px depending on layout density.
3. **No icon font / sprite was shipped** with the source materials.
4. **No SVG set** — only one icon example (`icons/example-icon-message.png`) came through from the style guide as a representative sample.
5. **Emoji / unicode icons are NOT used anywhere** in the source decks.

### Substitution

Since no Applause icon set exists, we substitute **Lucide** (linked from CDN as `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`). Lucide's flat, consistent stroke and filled variants are the closest open-source match to what the style guide implies. **This substitution is flagged — if Applause has an official icon set, please upload it.**

Recommended usage wrapper (also shipped as a component in `slides/IconTile.jsx`):

```html
<div class="icon-tile">
  <svg class="icon" ...></svg>   <!-- white, 24-32 px -->
</div>
```
```css
.icon-tile {
  width: 56px; height: 56px;
  background: var(--applause-blue);
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center; justify-content: center;
}
.icon-tile .icon { color: var(--white); width: 28px; height: 28px; }
```

---

## How to use this system

1. Link `colors_and_type.css` from any HTML output.
2. Import assets from `assets/logos/`, `assets/backgrounds/`, `assets/imagery/`.
3. Reuse the slide components in `slides/` for 16:9 decks.
4. When in doubt, less color > more color; white + blue is the brand.
