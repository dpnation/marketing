# Applause Brand

**Applause** is a managed software testing services provider enabling enterprises to deliver high-quality apps, websites and AI experiences worldwide. Applause accelerates real-world testing with AI and automation to help ensure digital products are reliable and safe at a competitive pace. Product, engineering, development and QA teams rely on Applause to expand their software testing, AI evaluation and UX research coverage and capabilities. Applause provides access to a testing community of 1.5M+ independent experts and end users and serves Fortune 500 companies across industries.

**uTest** is Applause's community-facing sub-brand (the tester community platform) — it has its own primary color (Cerulean) and logo, used alongside but distinct from the main Applause brand (Blue).

This is a **general brand design system** — foundations, brand elements, and voice/tone for brainstorming. It is intentionally not a product/website UI kit nor used for slide/presentation creation.

## Source

- `uploads/applause-brand-guidelines-short.pdf` — Applause's simplified brand guidelines (41 pages: Logo, Color, Typography, Style). This is the sole source for this system; no Figma file, codebase, or product UI was provided.

## Assets

Logo files live in `assets/logos/`: `applause-full-color.svg`, `applause-knockout.svg`, `applause-one-color-dark.svg`, `applause-one-color-light.svg`, `applause-favicon.svg`, and the same set prefixed `utest-` brand. `LogoLockup.jsx` renders the real full-color mark. Use knockout on dark/photo backgrounds, one-color variants on tinted brand backgrounds (see brand-color rules above), favicons for app icons/profile images. Both Applause and uTest files carry real per-path colors from proper exports.

## Caveats / substitutions (see also "Intentional additions" below)

- **Brand typeface Proxima Nova is licensed and included** (`assets/fonts/`, weights 100–900 + italics). Noto Sans is used for non-Latin scripts per brand guidance. Swap `tokens/fonts.css` for real Proxima Nova `@font-face` files when available.
- **Icon system: Streamline "Ultimate Bold" set** (`assets/icons-streamline/`, ~1,122 SVGs) via the `Icon` component — see Iconography below.
- **Heading type scale (Title/Heading levels):** Title 1 (48px), Heading 2 (32px/800), Heading 3 (24px/800), Heading 4 (20px/800) — weights step up at the smaller sizes to keep contrast against body text as size shrinks.
- **Spacing scale (2/4/8/16/24...):** Spacing follows an 8px scale; but includes 2px and 4px for smaller elements.

## Content fundamentals (voice & tone)

- **Register:** confident, precise, enterprise-professional — never casual or slangy. The guidelines explicitly call out avoiding phrasing like "You're dumb if your testing solution doesn't use crowd testing" in favor of "Follow proper tone and voice and writing guidelines."
- **Casing:** sentence case for headlines and body copy; ALL CAPS reserved for short labels only, never for emphasis in running copy ("Don't SCREAM at the reader; instead use text size and weight to emphasize").
- **Compound terms:** brand-specific terms are written as one word — e.g. **crowdtesting**, not "crowd testing."
- **Structure:** left-aligned text, never justified or centered for body copy; proper heading hierarchy (don't stylize every heading the same); 40–80 words per line; fix widows/orphans.
- **Voice themes drawn from the company description:** global scale ("1.5M+ independent experts," "200 countries and territories"), speed and reliability ("fast, authentic results," "competitive pace"), enterprise credibility ("Fortune 500 companies," "enterprise-grade"), and a partnership tone ("we leverage," "our disruptive approach," "partner that can provide"). Copy is benefit- and outcome-led, not feature-led.
- **Quotes:** hanging punctuation on quotation marks; pulled customer quotes use first name + last name and job title, company name in attribution.
- **Links:** Blue 500, always underlined or otherwise indicated — never color alone.
- **Emoji:** not used anywhere in the source guidelines — this is a formal B2B enterprise brand voice.

## Visual foundations

- **Color:** Two primary brand hues — **Blue 500 (#0272B4)** for Applause, **Cerulean 500 (#00A8CC)** for uTest — each with a 50/100–800 tint/shade ramp. **Aqua** is Applause's secondary accent. Status colors (Red/Orange/Yellow/Green/Blue) follow the same 50/100–800 ramp and map to error/severe-warning/warning/success/in-progress; Yellow 500 doubles as a high-attention primary CTA color. Gray is the neutral/disabled ramp. Brand colors must not be mixed across the Applause/Cerulean lines except in the two sanctioned gradients.
- **Type:** Proxima Nova, one typeface family for everything — no secondary display face. Body Medium (16px/150%) is the default paragraph style. Button text is always SemiBold. Line height \~125% for headlines, \~150% for body. Left-aligned only.
- **Backgrounds:** flat brand colors and the two sanctioned gradients (Blue 700→500; Blue 500→Aqua 500). A third gradient (Blue→Cerulean) exists only to depict the Applause/uTest relationship, used minimally. No photographic backgrounds, patterns, or textures are defined in the source; no hand-drawn illustration style is defined (none provided).
- **Animation:** not addressed in the source guidelines — no easing, transition, or motion spec exists. Treat as undefined; keep any motion subtle and functional until specified.
- **Hover/press states:** not explicitly specified for interactive elements in the source (this is a brand — not a UI — guide); the components in this system use standard subtle darkening for hover as a reasonable default. Shadow intensity increasing on hover is called out for clickable image cards.
- **Borders & shadows:** drop shadows are the primary depth cue (XS–XL, 8–40% black, growing blur/offset with size); inner shadows exist but should be used sparingly — no skeuomorphism/neumorphism. Cards: subtle 1px border + small/medium drop shadow, never heavy.
- **Opacity/blur:** white or black overlays only (Light/Dark 20/40/60/80%) for legibility over imagery; blur only where the background doesn't need to stay legible (decorative/stylized assets), often paired with an opacity layer.
- **Corner radius:** scales with element size — None(0) up to 2px/4px/8px/16px/24px/32px/40px/56px/Round(9999), small elements get subtle radii, large elements can go bigger; nested rounded shapes need adjusted inner/outer radii (don't reuse the same radius front-to-back).
- **Imagery:** Use candid, in-the-moment photography — real environments, natural lighting, genuine expressions. Avoid posed smiles, direct-to-camera looks, and sanitized backgrounds.
- **Iconography:** Use the Icon component (name = exact base filename in assets/icons-streamline/, minus the --Streamline-Streamline-3.0.svg suffix). To find a name, read assets/icons-streamline/index.json — a flat array of every valid name — rather than listing the folder. See the Icons sample card under Brand for examples.
- **Transparency:** never used to fabricate new brand-color tints — use the defined tint/shade ramps instead.

## Intentional additions

The source is a brand-guidelines PDF only (no component library, Figma file, or codebase), so per the "from-scratch" path this system authors a small standard set of brand-facing components rather than a full UI kit — scoped to brainstorming/collateral use (buttons, status pills, category badges, cards, quotes, stat callouts, section headers, dividers, logo lockups), deliberately omitting form/product UI (inputs, selects, dialogs, tabs) since none is in scope for this brand system.

## Index

- `styles.css` — root stylesheet (imports below)
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`, `tokens/fonts.css` — design tokens
- `components/core/` — Button, Pill, Badge, Card, Quote, StatCallout, SectionHeader, Divider, LogoLockup, Icon (`components.card.html` shows them all)
- `assets/logos/` — real Applause & uTest logos (full color, knockout, one-color dark/light, favicons)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab
- `thumbnail.html` — homepage tile
- `SKILL.md` — portable skill definition for Claude Code / other agents
