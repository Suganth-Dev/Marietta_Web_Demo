# Marietta Tamil School — Design System

> **Theme:** Modern Heritage — *Honoring Tradition While Embracing the Future*
> **Tagline:** Connecting Generations Through Tamil Heritage

This is the brand + product design system for **Marietta Tamil School**, a community-driven
weekend Tamil language and culture school. The system supports a growing ecosystem: the
public website, a future parent portal, volunteer portal, mobile app, event platform, gallery,
and newsletters — all sharing one identity, voice, color system, and type system.

---

## Sources

- `uploads/marietta-tamil-school-brand-ecosystem-spec.md` — the full brand & ecosystem spec
  (mission, pillars, audience, voice, color, type, IA, product roadmap). The canonical brief.
- `uploads/Logo.jpg` → copied to `assets/logo.jpg` — the primary emblem.
- Additional direction provided in the brief: "Modern Heritage" philosophy, Montessori / Apple-level
  simplicity with subtle Tamil cultural richness, warm photography of real families.

No codebase or Figma file was provided; this system is authored from the written brand spec.

---

## Brand at a glance

| | |
|---|---|
| **Who** | Weekend Tamil school + cultural community in Marietta, GA |
| **For** | Parents (primary), children K–12 (secondary), teachers & volunteers (tertiary) |
| **Archetypes** | Caregiver (primary), Sage, Community Builder |
| **Pillars** | **Learn · Celebrate · Belong · Serve** |
| **Feeling** | Elegant, warm, timeless, authentic, human, modern |
| **Values** | Heritage, Education, Community, Belonging, Service, Excellence |

---

## CONTENT FUNDAMENTALS — how we write

The voice is **warm, welcoming, inspiring, inclusive, and clear** — the Caregiver who is also a
Sage. We speak as one community to families, never as a corporation to customers.

- **Person & address.** Use **"we"** for the school and **"you / your family / your child"** for the
  reader. Inclusive **"every family," "our community," "together."** Example from the brief:
  *"We welcome every family."*
- **Tone.** Friendly and reassuring first, then aspirational. Lead with belonging and pride, not
  features. *"Every child who joins gains more than language skills — they become part of a community."*
- **Casing.** Sentence case for body and most UI. Headings are sentence case or Title Case for proper
  nouns and program names (Pongal, Annual Day). Reserve ALL-CAPS for small tracked eyebrow labels only.
- **Sentence style.** Short, plain, generous. One idea per sentence. Avoid jargon, acronyms, and
  hard sells. Accessibility of language is a brand principle.
- **Cultural terms.** Tamil festival and program names are used proudly and spelled consistently
  (Pongal, Tamil New Year). Pair a Tamil term with a short plain-English gloss when first used.
- **Emoji.** Not used in product UI or formal copy. Warmth comes from words, color, and photography —
  not emoji or exclamation-mark spam. Social media may be slightly more relaxed but stays tasteful.
- **Numbers & stats.** Used sparingly and only when real and meaningful (students enrolled, years of
  community). Never invent filler metrics.

**Do say:** "Join us for Pongal." · "Resources for your family." · "Find your child's teacher."
**Avoid:** "Sign up now!!!", "Best-in-class solutions", "Leverage our platform", corporate buzzwords.

---

## VISUAL FOUNDATIONS

The look is **contemporary minimalism with subtle Tamil warmth** — Apple-level simplicity, Montessori
calm, gentle heritage richness. Generous whitespace, soft rounded cards, warm ivory paper.

**Color.** Primary **Heritage Maroon `#7A1F3D`** (trust, dignity, kumkumam red), secondary
**Temple Gold `#D4A64F`** (celebration, festivity), supporting **Sage Green `#7E9B76`** (growth, calm).
Surfaces are **Ivory White `#F9F7F2`** (warm paper) and white cards; ink is **Charcoal `#2B2B2B`**.
Each brand hue has a 50–900 tonal scale plus soft "wash" surfaces (`--surface-maroon-wash`, etc.) for
tinted sections. Maroon is the workhorse for primary actions; gold is the accent of celebration and is
used in smaller doses; sage balances. Avoid pure black, neon, and cool blue-grays.

**Typography.** **Poppins** for all headings (warm geometric humanist sans), **Inter** for body (clear,
highly legible), **Playfair Display** *italic* for editorial accent moments — pull quotes, tagline
lockups, cultural section intros. Headings use tight tracking (−0.02em); eyebrows are uppercase Poppins
600 tracked 0.14em in gold. Major-third scale from 12 → 60px.

**Spacing & layout.** 8px base rhythm (8/16/24/32/48/64/96). Responsive 12-column grid, max content
width ~1120–1280px. Generous section padding (64–96px) — whitespace is a feature, the page should
breathe.

**Corners & cards.** Soft and rounded: cards use **24px** radius (`--radius-lg`), inner elements 16px,
pills 999px. The default card is white on ivory, 1px `--border-subtle`, **soft low-spread shadow**
(`--shadow-sm`), 24px padding. Feature cards get more rounding and `--shadow-md`. Interactive cards
**lift 3px** and deepen to `--shadow-lg` on hover. No hard 1px-everywhere borders, no sharp corners.

**Shadows.** Warm-tinted, charcoal-based, low opacity (6–10%), never harsh. `--shadow-gold` is a
maroon-tinted lift for hero/CTA emphasis. Elevation is gentle — this is a calm, soft system.

**Backgrounds.** Mostly flat ivory or white, occasionally a tinted wash section (maroon/gold/sage at
~5%) or a deep maroon section for contrast and drama. **Photography is full-bleed** in heroes and event
headers. Avoid busy gradients; the one gradient permitted is the maroon event-card fallback when no
photo exists. A subtle Tamil-inspired geometric motif may be used at low opacity as texture, sparingly.

**Imagery.** Real students, families, teachers, volunteers, and cultural celebrations in **warm,
natural light**. No stock photos, no cartoons, no corporate imagery. Warm color temperature; authentic,
candid, joyful. Treat photos with the system's rounded corners.

**Motion.** Calm and confident, never bouncy. Fades and short translateY lifts; durations 140–360ms with
an ease-out curve (`--ease-out`). Hover = brightness/lift; press = subtle scale-down (0.97). Respect
`prefers-reduced-motion`. No infinite looping decoration.

**Hover / press states.** Buttons darken ~6% (brightness 0.94) on hover and scale to 0.97 on press.
Cards lift on hover. Inputs show a maroon focus ring (`--ring`). Links underline on hover.

**Transparency & blur.** Used lightly — a translucent ivory/white sticky header with backdrop blur is
acceptable; avoid heavy glassmorphism. Most surfaces are solid.

---

## ICONOGRAPHY

No proprietary icon set was provided. The system uses **[Lucide](https://lucide.dev)** — clean,
rounded, 2px-stroke open icons — as the substitute icon library, chosen because its soft rounded
geometry matches Poppins and the system's gentle corners. **(Substitution — flagged: replace with a
custom Tamil-inspired set later if desired.)**

- **Style:** outline, 2px stroke, round caps/joins, 24×24 viewBox. Match `currentColor` to the text
  color of context. Use at 16–24px inline, up to 48px in pillar tiles.
- **Delivery:** inline SVG in JSX (a few are hand-included in components like EventCard/Checkbox), or
  load Lucide from CDN for UI kits. Do **not** redraw icons by hand beyond these simple line glyphs.
- **Emoji:** not used as iconography.
- **Unicode / Tamil letterform:** the logo's **அ** (first Tamil letter) is the brand's signature
  glyph and may appear as a watermark/motif — but is not a UI icon.
- **Logo:** `assets/logo.jpg` — circular emblem with the Tamil letter அ and a colorful ribbon. It is
  **low-resolution (188×188)**; see Caveats.

---

## Components

Reusable React primitives (`window.MariettaTamilSchoolDesignSystem_f970b0.<Name>`):

**core/** — `Button`, `Badge`, `Avatar`, `Card`
**forms/** — `Input`, `Select`, `Checkbox`
**content/** — `EventCard`, `TeacherCard`, `StatCard`, `PillarCard`

Each directory has a `*.card.html` specimen, and each component a `.d.ts` + `.prompt.md`.

---

## UI Kits

- **ui_kits/website/** — public marketing + community site (home, events, teachers, about).
- **ui_kits/mobile/** — parent mobile app (home, calendar, gallery).

---

## Index / manifest

| Path | What |
|---|---|
| `styles.css` | Global entry — `@import`s all tokens + base. Consumers link this. |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `base.css` |
| `assets/` | `logo.jpg` |
| `components/` | `core/`, `forms/`, `content/` — primitives + specimen cards |
| `ui_kits/` | `website/`, `mobile/` — full-screen product recreations |
| `guidelines/` | foundation specimen cards (Colors, Type, Spacing, Brand) |
| `SKILL.md` | Agent-Skill manifest for downloadable use |
| `readme.md` | This file |

---

## Caveats

- **Logo is low-resolution (188×188 JPEG).** Please provide a high-res PNG/SVG with transparency for
  crisp use across web, print, and app icons.
- **Fonts** load from Google Fonts (Poppins, Inter, Playfair Display) via `@import` — all three are the
  brand's specified faces, no substitution. If you need fully offline/self-hosted fonts, share the
  licensed font files and I'll wire `@font-face` to local binaries.
- **Icons** use Lucide as a flagged substitute — no brand icon set was supplied.
- **Photography** uses placeholders/gradients where no real photos exist. Provide real warm photos of
  students, families, and celebrations to replace them.
