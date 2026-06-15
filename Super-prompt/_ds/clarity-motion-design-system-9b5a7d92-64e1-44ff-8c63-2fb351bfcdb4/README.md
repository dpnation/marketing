# Clarity & Motion — Design System

> **We turn complexity into momentum.**

Clarity & Motion is a creative consultancy working on strategy, AI fluency, and culture-forward brand work — sitting at the intersection of three archetypes: **the Magician** (transformation), **the Sage** (strategy), and **the Lover** (connection). The studio teaches teams to draft with AI and finish with humans, while shaping brands that feel bold, warm, rhythmic, and metaphor-rich.

This design system codifies the CMC Brand Guide (2025-07-30) so new artifacts — decks, one-pagers, web pages, internal tools — stay on-brand without re-reading the doc every time.

---

## Sources

| Source | Location | What it gave us |
|---|---|---|
| `CMC Brand Guide 20250730.docx` | `assets/` | Canonical palette, role matrix, archetypes, voice & tone |
| `Anatomy_of_a_Good_Prompt.pdf` | `assets/` | Reference layout, pagination style, prompt framework sample |
| `clarity-motion.svg` / `-white.svg` | `assets/` | Primary + reversed wordmark |
| `brand-colors-source.png` | `assets/` | Palette exploration screenshot (historical reference) |

Fonts: **Libre Baskerville** (serif, display) + **Lato** (sans, body/UI). Both loaded via Google Fonts in `colors_and_type.css`.

---

## Index

```
/
├── README.md                    ← this file
├── SKILL.md                     ← agent-skill manifest (Claude Code compatible)
├── colors_and_type.css          ← tokens — import this first
├── assets/
│   ├── logo-clarity-motion.svg
│   ├── logo-clarity-motion-white.svg
│   ├── CMC Brand Guide 20250730.docx
│   ├── Anatomy_of_a_Good_Prompt.pdf
│   └── images/                   ← brand illustration library (8 plates)
├── preview/                     ← design-system cards
├── slides/                      ← 5-slide deck kit
└── ui_kits/
    └── editorial/               ← marketing/editorial surface kit
```

---

## Content fundamentals

Voice: **bold, warm, rhythmic, metaphor-rich, culturally fluent**. Confident but never slick. Warm without over-familiarity.

**Stance**
- Speaks peer-to-peer, practitioner-to-practitioner.
- Declarative. "Not a checklist. A habit" "AI drafts. Humans finish"
- Opinions land cleanly; no hype, no "unlock," no SaaS-speak.

**Casing & punctuation**
- Titles in sentence case with confident short verbs.
- **No period after standalone headlines or titles** — ever. (This corrects the earlier system.) Periods only inside running prose.
- Eyebrows and nav labels in **ALL CAPS with wide tracking** (`0.18em` for eyebrows, `0.16em` for nav). A signature masthead move: `A I   F L U E N C Y   —   R E F E R E N C E`.

**You vs. I vs. we**
- Second person for instruction: *"Who you want the AI to act as"*
- First-person plural for brand voice: *"We turn complexity into momentum"*
- Third-person/unmarked for principles.

**Rhythm**
- Short sentences. Often fragments. Two-beat cadence is common: *"Five parts. Fewer bad drafts"*
- Metaphor is welcome. Vivid, specific, visual. Never mixed.

**Hard rules**
- **No em dashes.** Use en dashes (`–`), commas, or line breaks.
- **No emoji.** Ever.
- Numerical constraints are concrete ("60–90 words", "Max three hashtags").
- No invented benchmarks. No hedging.

**Archetypal language cues**
- *Magician:* transformation, evolution, spark, unlock (sparingly), shift, before/after.
- *Sage:* clarity, signal, method, framework, map, compass.
- *Lover:* relationship, trust, resonance, feel, belonging, together.

**On-voice**
- "We turn complexity into momentum"
- "Where clarity meets execution"
- "AI drafts. Humans finish"
- "We help visionary teams move faster, with more intention"

**Off-voice**
- "Unlock the power of AI to transform your workflow!"
- "We're super excited to help 🚀"
- "Leverage best-in-class frameworks"

---

## Visual foundations

### Colors (from the brand guide)

| Name | Hex | Role |
|---|---|---|
| Mid Teal | `#5EA0A1` | Core brand · H1–H3 · buttons · hero bg |
| Dark Teal | `#49868C` | Supporting teal · deep bg · overlays |
| Light Blue | `#CFE7E9` | UI bg · cards · forms |
| Saffron | `#F2A007` | Highlight · tags · hover accents · 2° CTA |
| Dusty Rose | `#D989B5` | Editorial accent · illustration overlay |
| Persimmon | `#D95F43` | **Primary CTA** · links · highlights |
| Buff | `#F5F2EC` | Primary background / layout base |
| Mid Buff | `#E3DDD6` | Secondary neutral · card bg |
| Warm White | `#FAF7F2` | Section bg · whitespace filler |
| Slate Harbor | `#4B5357` | Primary text · data-viz · overlays |
| Mulberry Ink | `#4E2A36` | Quote bg · editorial emphasis · deep bg |

**Anchor rule from the guide:** anchor around **Mid Teal + Buff**, layer accent colors sparingly.

**Role matrix (key rows)**
- Primary text: Slate Harbor (never Mid Teal on Buff for body — contrast fails).
- Headlines: Mid Teal *or* Mulberry Ink.
- Body bg: Buff, Warm White.
- Primary CTA: Persimmon. Secondary CTA: Saffron (text in Slate Harbor on Saffron — white fails WCAG).
- Quote bg: Mulberry Ink with Buff/Warm White text.
- Charts: never more than 4 colors per chart. Base teal, accents Saffron/Rose/Slate.

**Accessibility flags**
- Dusty Rose and Buff cannot carry small text unless reversed on very dark backgrounds.
- Saffron needs dark text, not white.

### Type

- **Libre Baskerville** — headlines, pull-quotes, editorial body. 400 + 700, italic in both.
- **Lato** — UI, body, eyebrows, nav. 300 / 400 / 700 / 900.

**No period after headlines or standalone titles.** Titles end clean.

Letterspaced ALL-CAPS Lato is the signature eyebrow — `0.18em`.

### Layout

- Generous whitespace. Left-aligned. Centered titles reserved for title slides and section breaks.
- 8pt baseline grid: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- **No page numbers** on slides or documents. The footer carries the wordmark and nothing else.

### Backgrounds, texture, imagery

- Buff (`#F5F2EC`) is the canvas. Warm White (`#FAF7F2`) is for alternating sections.
- **No gradients.** No mesh, no aurora. Solid color blocks only.
- **No patterns or textures** except, rarely, a hairline rule.
- Imagery: warm, never cold. See the **Image library** below.

### Image library

Eight mid-century editorial illustrations live in `assets/images/`, all native 4:5, all in the core palette. The throughline: a solitary figure moving through architectural space, with the **spiral** motif (echoing the logo) recurring across the set. Preview card: `preview/imagery.html`.

| File | Plate | Use for |
|---|---|---|
| `chaos-to-clarity.png` | Chaos to Clarity | The signature transformation metaphor · lead hero, opening slides |
| `atrium-spiral.png` | Atrium Spiral | Branded environment, logo spiral underfoot · About / company covers |
| `clarity-corridor.png` | Clarity Corridor | Light-vs-shadow split · strategy, focus, the path forward |
| `curiosity-ascent.png` | Curiosity Ascent | Ascending spiral · growth, learning, AI fluency |
| `loft-spiral-skyline.png` | Loft & Skyline | Vantage over the city · strategy, the bigger picture |
| `coastal-overlook.png` | Coastal Overlook | Stillness and distance · quiet section breaks |
| `terrace-archway.png` | Terrace Archway | Two figures, warmth · culture, relationship, the human finish |
| `paris-apartment-spiral.png` | Paris Apartment | Domestic warmth, spiral painting · Lover-archetype spreads |

**Rules** — full-bleed or generous bleed; reverse type to Buff / Warm White over the darker fields; keep the palette pure (no recoloring, no gradient overlays, no filters); never crop out the solitary figure; hold the native 4:5; never mix with cold, literal stock.

### Animation

- Restrained, print-first.
- Fades (120–180ms), 6–10px translate-up on entrance.
- Easing `cubic-bezier(0.2, 0.6, 0.2, 1)`. No bounce, no elastic.

### Interaction states

- **Hover:** primary CTA darkens to `#C24D31`; secondary surfaces pick up shadow-sm → shadow-md; text links shift from Persimmon to a darker Persimmon.
- **Press:** `#A33B22`, no scale transform. At most `translateY(1px)`.
- **Focus:** visible 3px `rgba(94,160,161,0.35)` ring; never `outline: none` alone.
- **Disabled:** 40% opacity, no pointer events.

### Borders, corners, shadows

- Borders: 1px Mid Buff (`#E3DDD6`) default; stronger rule `#C9C3B5` for emphasis; `20% Slate Harbor` for dividers.
- Radii: 8px default, 14px cards, 4px inputs, pill for badges/chips. Not pillowy.
- Shadows: soft, slate-tinted alpha. Always layered (1–2px crisp + 24–48px diffuse). Never a single 10px drop.
- No neumorphism. No colored left-border accent stripes.

### Transparency / blur

- Rarely. Buff at 85% over Mulberry Ink is the one acceptable overlay. No liquid glass.

### Cards

- Default: Mid Buff (`#E3DDD6`) or Light Blue (`#CFE7E9`) bg on Buff canvas.
- 14px radius, 1px border, `--shadow-sm`.
- Padding: 24px min, 32px default.
- Hover: outline or Saffron accent (per guide).
- **No colored left-border stripe** — off-brand.

### Fixed elements

- Headers: static on editorial pages, sticky-with-shed-decoration on marketing sites.
- Nav labels: Lato all-caps, `0.16em` tracking.

---

## Iconography

The brand materials contain **no icon system**. The vocabulary is:

- The **wordmark** at header/footer scale.
- **Serif numerals** (Libre Baskerville `1` `2` `3`) as list markers in frameworks.
- **An ampersand `&`** and en dashes as typographic punctuation.

**Going forward**
- Prefer typographic marks — numerals, glyphs, dots — over icons.
- When a functional icon is genuinely required (UI only), use **Lucide** at stroke-width 1.5, `currentColor`, size 16–20px. Lucide's thin-line style harmonizes with the serif-forward brand.
- **No emoji.**
- **No unicode shortcuts as icons** (no `✓` in copy — use Lucide `check`).

Lucide via CDN: `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>`.

**⚠️ Substitution flagged** — Lucide is the substitute. If CMC has a preferred icon set, swap it in and update this section.

---

## Fonts

Libre Baskerville and Lato are available on Google Fonts and imported in `colors_and_type.css`. **⚠️ No local `.ttf`/`.woff2` bundled** — if you need offline distribution (PPTX export, email, print shop), drop the files into `fonts/` and swap the `@import` for `@font-face`. The Google versions match the brand spec exactly.

---

## How to use

1. Import tokens: `<link rel="stylesheet" href="colors_and_type.css">`.
2. Pull semantic tokens (`--bg-canvas`, `--cta`, `--fg-heading`) — not raw palette names.
3. Copy logos out of `assets/` rather than inlining SVG paths.
4. For slide work: `slides/index.html`.
5. For marketing/editorial pages: `ui_kits/editorial/index.html`.
6. Read **Content fundamentals** before writing copy. The voice rules carry the brand.
