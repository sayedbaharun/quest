# SyntheLIQ — Branding Guidelines

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Logo Usage](#logo-usage)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Visual Identity Elements](#visual-identity-elements)
6. [Imagery & Photography Style](#imagery--photography-style)
7. [Iconography](#iconography)
8. [Spacing & Layout](#spacing--layout)
9. [Brand Voice & Tone](#brand-voice--tone)
10. [Design System Code References](#design-system-code-references)
11. [Do's and Don'ts](#dos-and-donts)

---

## Brand Overview

SyntheLIQ's visual identity — codename **Editorial Authority** — is designed to feel like a premium consultancy, not a typical AI startup. Every element is intentional. Typography leads. Colors are warm and human. Restraint is the differentiator.

### Design Direction

> McKinsey meets Stripe — confident, editorial, premium. Not "yet another AI startup."

### Brand Values

- **Deliberate** — Every visual choice is intentional, not default
- **Warm** — Human tones, not cold tech aesthetics
- **Editorial** — Typography-driven, magazine-quality hierarchy
- **Restrained** — Restraint over decoration. Fewer effects, higher impact
- **Premium** — Signals established authority, not startup hype

---

## Logo Usage

### Logo Variants

| Variant | Usage |
|---|---|
| **Full Logo (Dark)** | Light backgrounds — `SyntheliqLogo` component |
| **Full Logo (Light)** | Dark backgrounds — `SyntheliqLogo` component |
| **Wordmark** | Text-only: "SyntheLIQ" in DM Sans bold, tracking-tight |

### Logo Placement

- **Header:** Left-aligned, 36px height, with wordmark at 18px
- **Footer:** Left-aligned, 36px height
- **Minimum clear space:** 8px on all sides

### Logo Don'ts

- ❌ Do not stretch or distort the logo
- ❌ Do not rotate the logo
- ❌ Do not add shadows, outlines, or gradient effects to the logo
- ❌ Do not place the logo on busy or low-contrast backgrounds
- ❌ Do not rearrange logo elements

---

## Color Palette

### Design Direction

The palette is warm, grounded, and mature. Brass/gold signals premium authority. Terracotta provides a sharp, memorable accent that is completely different from the cyan/purple that dominates AI startup sites. Warm neutrals replace cold navy.

### Primary Colors

| Name | Hex | HSL | RGB | Usage |
|---|---|---|---|---|
| **Brass** (Primary) | `#C8A96E` | `38 deg 40% 61%` | `rgb(200, 169, 110)` | CTAs, links, focus rings, interactive elements |
| **Brass Light** | `#E5D4A8` | `38 deg 50% 78%` | `rgb(229, 212, 168)` | Text gradients (paired with Brass), hover states |
| **Brass Dark** | `#A68B4B` | `38 deg 35% 47%` | `rgb(166, 139, 75)` | Active/pressed states |

### Secondary Colors

| Name | Hex | HSL | RGB | Usage |
|---|---|---|---|---|
| **Terracotta** (Secondary) | `#D4573B` | `12 deg 63% 53%` | `rgb(212, 87, 59)` | Destructive actions, warnings, sharp accents |
| **Terracotta Light** | `#E87A62` | `12 deg 70% 65%` | `rgb(232, 122, 98)` | Hover states on terracotta elements |

### Accent Colors

| Name | Hex | HSL | RGB | Usage |
|---|---|---|---|---|
| **Sage Green** (Accent) | `#4A9B7F` | `158 deg 38% 45%` | `rgb(74, 155, 127)` | Success states, confirmations, positive indicators |

### Background & Surface Colors

| Name | Hex | HSL | Usage |
|---|---|---|---|
| **Background** | `#0C0F1A` | `220 deg 30% 8%` | Page background — warm near-black |
| **Card** | `#141824` | `220 deg 25% 11%` | Cards, elevated surfaces |
| **Muted** | `#252A36` | `220 deg 20% 18%` | Subtle backgrounds, muted surfaces |
| **Surface** | `rgba(20, 24, 36, 0.8)` | — | Glassmorphism overlays |

### Text Colors

| Name | Hex | HSL | Usage |
|---|---|---|---|
| **Foreground** | `#E8E4DE` | `30 deg 20% 91%` | Primary text — warm off-white |
| **Muted Foreground** | `#8B8680` | `20 deg 8% 55%` | Secondary text, captions, labels |
| **Primary Foreground** | `#0C0F1A` | `220 deg 30% 8%` | Text on brass/gold backgrounds |

### Border Colors

| Name | HSL | Usage |
|---|---|---|
| **Border** | `38 deg 15% 22%` | Default borders — warm, subtle |
| **Border Hover** | `38 deg 20% 30%` | Hovered/focused borders |

### Semantic Colors

| State | Name | Hex | Usage |
|---|---|---|---|
| Success | Sage Green | `#4A9B7F` | Confirmations, success messages |
| Error | Terracotta | `#D4573B` | Errors, destructive actions |
| Warning | Amber | `#F59E0B` | Caution, pending states |
| Info | Brass | `#C8A96E` | Informational messages |

### CSS Variables (Tailwind Semantic Tokens)

```css
:root {
  --background: 220 30% 8%;      /* #0C0F1A */
  --foreground: 30 20% 91%;       /* #E8E4DE */
  --primary: 38 40% 61%;          /* #C8A96E */
  --primary-foreground: 220 30% 8%;
  --secondary: 12 63% 53%;        /* #D4573B */
  --secondary-foreground: 0 0% 98%;
  --accent: 158 38% 45%;          /* #4A9B7F */
  --accent-foreground: 0 0% 98%;
  --muted: 220 20% 18%;           /* #252A36 */
  --muted-foreground: 20 8% 55%;  /* #8B8680 */
  --card: 220 25% 11%;            /* #141824 */
  --border: 38 15% 22%;
  --ring: 38 40% 61%;
  --radius: 0.5rem;
}
```

### Gradients

| Name | CSS | Usage |
|---|---|---|
| **Brass Gradient** | `linear-gradient(135deg, #C8A96E 0%, #E5D4A8 100%)` | Hero text gradients, primary gradient elements |
| **Terracotta Gradient** | `linear-gradient(135deg, #D4573B 0%, #E87A62 100%)` | Secondary accents, alerts |
| **Reading Progress** | `linear-gradient(90deg, #C8A96E 0%, #D4573B 100%)` | Progress bars |
| **Shimmer** | `linear-gradient(90deg, #C8A96E, #E5D4A8, #C8A96E)` | Animated text shimmer |

### Color Accessibility

- All text meets WCAG 2.1 AA contrast ratios on the dark background
- `#E8E4DE` on `#0C0F1A` = 13.2:1 contrast ratio (exceeds AAA)
- `#8B8680` on `#0C0F1A` = 4.7:1 contrast ratio (meets AA)
- `#0C0F1A` on `#C8A96E` = 5.1:1 contrast ratio (meets AA for large text)
- Never rely on color alone — use icons, labels, or patterns as secondary indicators

### Color Usage Ratios

```
Background/Dark    50%
Brass/Gold         25%
Text/Light         15%
Terracotta/Accent   7%
Sage Green          3%
```

---

## Typography

### Design Direction

Serif headlines on a dark background is the power move. It signals "established, confident, premium" and is the opposite of the geometric-sans-everywhere default that defines AI slop. DM Sans provides a warm, clean body typeface that is less generic than Inter.

### Typeface Stack

#### Display — Instrument Serif

Used for all headlines (H1-H3) and editorial moments.

| Weight | CSS Value | Usage |
|---|---|---|
| Regular | `font-weight: 400` | Headlines, section titles |
| Italic | `font-style: italic` | Highlighted text, editorial emphasis |

Fallback Stack:
```css
font-family: 'Instrument Serif', Georgia, serif;
```

Tailwind token: `font-display`

#### Body — DM Sans

Used for all body text, UI labels, navigation, and buttons.

| Weight | Name | CSS Value | Usage |
|---|---|---|---|
| Regular | DM Sans Regular | `font-weight: 400` | Body text, paragraphs |
| Medium | DM Sans Medium | `font-weight: 500` | UI labels, small headings |
| Semi-Bold | DM Sans SemiBold | `font-weight: 600` | Emphasis, nav items |
| Bold | DM Sans Bold | `font-weight: 700` | Buttons, strong emphasis |

Fallback Stack:
```css
font-family: 'DM Sans', system-ui, sans-serif;
```

Tailwind token: `font-sans`

#### Arabic — Noto Sans Arabic

Used for all RTL content when `dir="rtl"`.

```css
font-family: 'Noto Sans Arabic', 'DM Sans', system-ui, sans-serif;
```

Tailwind token: `font-arabic`

#### Mono — JetBrains Mono

Used for data, numbers, stats, and code snippets.

```css
font-family: 'JetBrains Mono', monospace;
```

Tailwind token: `font-mono`

### Type Scale

| Level | Desktop | Mobile | Line Height | Weight | Font Family |
|---|---|---|---|---|---|
| H1 | 48px / 3rem | 32px / 2rem | 1.15 | 400 (Regular) | Instrument Serif |
| H2 | 36px / 2.25rem | 28px / 1.75rem | 1.2 | 400 (Regular) | Instrument Serif |
| H3 | 24px / 1.5rem | 20px / 1.25rem | 1.3 | 500 (Medium) | Instrument Serif |
| Body Large | 18px / 1.125rem | 16px / 1rem | 1.6 | 400 (Regular) | DM Sans |
| Body | 16px / 1rem | 15px / 0.9375rem | 1.6 | 400 (Regular) | DM Sans |
| Small | 14px / 0.875rem | 13px / 0.8125rem | 1.5 | 400 (Regular) | DM Sans |
| Overline | 12px / 0.75rem | 12px / 0.75rem | 1.5 | 600 (SemiBold) | DM Sans |
| Mono/Stat | 24px+ / 1.5rem+ | 18px+ / 1.125rem+ | 1.2 | 500 (Medium) | JetBrains Mono |

### Typography Rules

- Headlines (H1-H3): Always Instrument Serif, font-weight 400 (regular). The contrast between thin serif headlines and bold sans body creates the editorial feel.
- Body text: DM Sans, 400 weight, 1.6 line-height
- Buttons/Labels: DM Sans, 500-600 weight, tracking-wide for uppercase labels
- Maximum line length: 65-75 characters for body text
- Heading hierarchy: Always follow H1 -> H2 -> H3 order; never skip levels
- Text alignment: Left-aligned for body text (LTR); centered only for hero headlines and CTAs
- Avoid: Underlined text (reserved for links only), all-caps for body text

---

## Visual Identity Elements

### Design Principles

1. **Typography as hero** — Large, dramatic type replaces gradient effects as the primary visual interest
2. **Warm, grounded palette** — Warm neutrals replace cold navy/blue
3. **Product-first imagery** — Real UI mockups and diagrams, not abstract orbs and blobs
4. **Intentional restraint** — Every animation must earn its place; no decoration for decoration's sake
5. **Editorial layout** — Asymmetric grids, magazine-style whitespace, varied section rhythms

### Grid System

- 12-column grid with 24px gutters (desktop), 16px gutters (mobile)
- Container max-width: 1400px (2xl breakpoint)
- Container padding: 2rem (32px)

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius` | `0.5rem` (8px) | Default — buttons, inputs |
| `rounded-lg` | `0.5rem` (8px) | Buttons |
| `rounded-xl` | `0.75rem` (12px) | Cards, modals |
| `rounded-2xl` | `1rem` (16px) | Large cards, hero elements |
| `rounded-full` | `9999px` | Pills, badges, dots |

### Elevation / Shadows

| Token | CSS Value | Usage |
|---|---|---|
| `shadow-card` | `0 1px 3px rgba(0,0,0,0.3), 0 0 0 1px rgba(200, 169, 110, 0.06)` | Default card |
| `shadow-card-hover` | `0 8px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(200, 169, 110, 0.12)` | Hovered card |
| `shadow-glow-gold` | `0 0 20px rgba(200, 169, 110, 0.12), 0 0 60px rgba(200, 169, 110, 0.04)` | Brass glow |
| `shadow-glow-gold-lg` | `0 0 30px rgba(200, 169, 110, 0.2), 0 0 80px rgba(200, 169, 110, 0.08)` | Large brass glow (CTAs) |
| `shadow-glow-terracotta` | `0 0 20px rgba(212, 87, 59, 0.15), 0 0 60px rgba(212, 87, 59, 0.05)` | Terracotta glow |

### Background Textures

| Name | CSS Class | Description |
|---|---|---|
| **Grid** | `.bg-grid` | Subtle brass-tinted grid lines (60px spacing) |
| **Dot Grid** | `.bg-dot-grid` | Brass-tinted dot pattern (24px spacing) |
| **Glass** | `.glass` | Warm glassmorphism with brass border |

### Glassmorphism

```css
.glass {
  background: rgba(12, 15, 26, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(200, 169, 110, 0.08);
}
```

### Animations

| Token | Duration | Easing | Usage |
|---|---|---|---|
| `animate-fade-in` | 400ms | ease-out | Fade + slide-up |
| `animate-slide-up` | 300ms | ease-out | Quick upward reveal |
| `animate-slide-down` | 300ms | ease-out | Dropdowns, accordions |
| `animate-pulse` | 2s | cubic-bezier | Live indicators, badges |

Animation Rules:
- No animation should exceed 600ms
- No element should animate more than 2 properties simultaneously
- Respect `prefers-reduced-motion` — all animations disable when user prefers reduced motion
- Scroll-triggered animations should be used selectively, not on every section

---

## Imagery & Photography Style

### Photography Guidelines

- **Style:** Product-focused, not abstract. Real UI mockups and diagrams over floating orbs.
- **Lighting:** Warm, natural tones. Avoid cold blue lighting.
- **Color Treatment:** Slightly warm, desaturated. Match the brass/terracotta palette.
- **Composition:** Clean backgrounds, intentional whitespace.

### Image Specifications

| Use Case | Aspect Ratio | Min Resolution | Format |
|---|---|---|---|
| Hero Banner | 16:9 | 1920 x 1080px | WebP / JPEG |
| Blog Featured | 16:9 | 1200 x 675px | WebP / JPEG |
| Thumbnail | 1:1 or 4:3 | 400 x 400px | WebP / JPEG |
| Profile Avatar | 1:1 | 200 x 200px | PNG / WebP |
| Product Screenshot | 16:10 | 1600 x 1000px | PNG |

### What NOT to Use

- ❌ Aurora/blob backgrounds on images
- ❌ Purple/blue gradient overlays
- ❌ Abstract 3D floating figures
- ❌ Generic "AI brain" illustrations
- ❌ Stock photos with cold blue tones

---

## Iconography

### Icon Library

Primary: [Lucide Icons](https://lucide.dev/) — consistent stroke-based icon set

### Icon Specifications

| Property | Value |
|---|---|
| Grid Size | 24 x 24px |
| Stroke Width | 1.5px (default), 2px (emphasis) |
| Color | Inherits text color; single-color only |
| Touch Target | Minimum 44 x 44px (mobile) |

### Icon Sizing

| Size Name | Dimensions | Usage |
|---|---|---|
| Small | 16 x 16px | Buttons, labels |
| Medium (Default) | 20 x 20px | Navigation, lists |
| Large | 24 x 24px | Feature highlights |
| Display | 32 x 32px+ | Hero sections, cards |

---

## Spacing & Layout

### Spacing Scale (8px Rhythm)

All spacing values are multiples of 8px for visual consistency.

| Token | Value | Usage |
|---|---|---|
| 1 | 4px | Micro spacing |
| 2 | 8px | Tight spacing (icon to label) |
| 3 | 12px | Compact spacing |
| 4 | 16px | Default element spacing |
| 6 | 24px | Section inner padding |
| 8 | 32px | Card padding |
| 10 | 40px | Section gaps |
| 12 | 48px | Large section spacing |
| 16 | 64px | Page section dividers |
| 20 | 80px | Major section breaks |
| 24 | 96px | Hero/landing page spacing |
| 32 | 128px | Maximum vertical spacing |

### Breakpoints

| Name | Width | Tailwind |
|---|---|---|
| Mobile | 0 - 639px | `sm:` |
| Tablet | 640px - 1023px | `md:` |
| Desktop | 1024px - 1279px | `lg:` |
| Wide | 1280px - 1439px | `xl:` |
| Ultra-wide | 1440px+ | `2xl:` |

### Section Spacing

| Element | Desktop | Mobile |
|---|---|---|
| Hero sections | `py-20` (80px) | `py-12` (48px) |
| Content sections | `py-24 md:py-32` (96-128px) | `py-16` (64px) |
| Between cards | `gap-4` (16px) | `gap-3` (12px) |

---

## Brand Voice & Tone

### Voice Attributes

| Attribute | Description |
|---|---|
| **Direct** | Say what you mean. No fluff, no filler. |
| **Confident** | Assured but not arrogant. Let the product speak. |
| **Warm** | Human and approachable, not robotic. |
| **Clear** | Simple language. No jargon for jargon's sake. |

### Tone by Context

| Context | Tone |
|---|---|
| Homepage | Confident, editorial, direct |
| Product UI | Calm, helpful, concise |
| Documentation | Informative, precise, patient |
| Error Messages | Empathetic, solution-focused |
| Social Media | Conversational, authentic |

### Copy Style

- Short sentences. Fragments are fine.
- One idea per paragraph.
- Active voice preferred.
- Numbers over words ("48 hours" not "forty-eight hours").
- No exclamation marks unless genuinely warranted.

---

## Design System Code References

### Key Files

| File | Description |
|---|---|
| `tailwind.config.js` | Color tokens, typography, shadows, animations |
| `src/index.css` | CSS variables, global styles, utility classes |
| `src/components/ui/button.tsx` | Button component with all variants |
| `src/components/ui/flashlight-card.tsx` | Card component with glow-on-hover |
| `src/components/ui/background-beams.tsx` | SVG animated beams for CTA sections |
| `src/components/ui/lamp-effect.tsx` | Linear-style section header effect |
| `src/components/ui/animated-timeline.tsx` | Scroll-triggered timeline component |
| `src/components/ui/logo-cloud.tsx` | Trust stats display |
| `src/components/ui/cta-section.tsx` | Reusable CTA section with beams |
| `src/components/Navigation.tsx` | Main navigation component |
| `src/components/Footer.tsx` | Footer component |
| `src/pages/Homepage.tsx` | Homepage — full editorial layout |

### Tailwind Class Reference

```tsx
// Headlines — serif
<h1 className="font-display text-4xl md:text-5xl lg:text-6xl">
  Your headline
</h1>

// Body text — sans
<p className="text-base text-muted-foreground leading-relaxed">
  Body text
</p>

// Primary button — brass
<Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
  CTA Text
</Button>

// Text gradient — brass
<span className="text-gradient-brass">Highlighted text</span>

// Card with glow
<FlashlightCard glowColor="rgba(200, 169, 110, 0.06)">
  Card content
</FlashlightCard>

// Overline label
<p className="text-primary text-sm font-semibold uppercase tracking-widest">
  Section Label
</p>

// Subtle grid background
<section className="bg-grid">...</section>

// Glass effect
<div className="glass">Glassmorphism content</div>
```

---

## Do's and Don'ts

### Do

- Use Instrument Serif for all headlines — it IS the brand
- Use brass (`#C8A96E`) for all interactive elements
- Keep backgrounds warm near-black (`#0C0F1A`)
- Use warm off-white (`#E8E4DE`) for text, never pure white
- Apply glow effects sparingly — on hover only for cards
- Use editorial layout — asymmetric, whitespace-driven
- Respect the 8px spacing rhythm
- Test contrast ratios for accessibility

### Don't

- Use Inter, Roboto, or system fonts for anything visible
- Use purple (`#6366F1`), cyan (`#00D4FF`), or electric blue anywhere
- Put aurora/blob backgrounds on any section
- Make every card glow by default — glow on hover only
- Fade-in every section on scroll — selective animation only
- Use gradient text everywhere — reserve for one moment per page
- Use pure white (`#FFFFFF`) for text — use `#E8E4DE`
- Use cold navy (`#0A1628`) for backgrounds — use `#0C0F1A`

---

## Version History

| Version | Date | Changes |
|---|---|---|
| **2.0.0** | 2026-03-25 | Complete visual identity refresh — "Editorial Authority". New warm palette (brass/terracotta), Instrument Serif + DM Sans fonts, restraint-first design philosophy. Replaced all AI slop patterns. |
| **1.0.0** | 2024 | Initial brand — cold navy, cyan/purple, Space Grotesk + Inter, glassmorphism-heavy |

---

*This document is the source of truth for all brand-related visual decisions.*

**Last Updated:** March 2026
**Design System:** Editorial Authority
**Primary color:** Brass `#C8A96E`
**Primary font:** Instrument Serif (headlines) / DM Sans (body)
