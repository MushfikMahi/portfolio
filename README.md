# Julian Voss — Founder & Full-Stack Developer Portfolio

A premium, dark luxury portfolio built for a founder/full-stack developer — black & gold
aesthetic, smooth Framer Motion animations, and fully responsive layout.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **lucide-react** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.tsx        → fonts, metadata, global shell
  page.tsx          → assembles all sections
  globals.css       → theme tokens, utilities (hairlines, shimmer, gold gradient)
  api/contact/      → contact form API route (stub — wire up an email provider)
components/
  Navbar.tsx        → fixed nav with scroll-aware styling + mobile menu
  Hero.tsx          → full-screen intro with rotating seal motif
  About.tsx         → founder bio + portrait frame + quick stats
  Skills.tsx        → capability grid + scrolling tech marquee
  Projects.tsx      → project grid
  ProjectCard.tsx   → individual project card with shimmer hover
  Experience.tsx    → chronological experience timeline
  Achievements.tsx  → animated statistics + recognitions
  Contact.tsx       → contact form + social links
  Footer.tsx
  Seal.tsx          → signature monogram crest (logo + hero watermark)
  Reveal.tsx        → scroll-reveal animation wrapper
  SectionHeading.tsx
  MarqueeBand.tsx
lib/
  data.ts           → ALL editable content lives here
```

## Customization

### 1. Your content
Almost everything — name, role, bio, skills, projects, experience, achievements, social
links — lives in `lib/data.ts`. Update this file first.

### 2. Colors
The black & gold palette is defined in `tailwind.config.ts`:

| Token         | Hex       | Usage                         |
|---------------|-----------|--------------------------------|
| `obsidian`    | `#08080A` | Page background                |
| `onyx`        | `#121216` | Panels / alternating sections  |
| `charcoal`    | `#1B1B21` | Card gradients                 |
| `gold`        | `#CBA869` | Primary accent                 |
| `gold.bright` | `#EAD6A0` | Highlights / gradients          |
| `gold.deep`   | `#8A6E3B` | Gradient shadows                 |
| `ivory`       | `#F4EFE6` | Primary text                   |
| `smoke`       | `#9C9790` | Secondary / muted text          |

### 3. Fonts
Loaded via `next/font/google` in `app/layout.tsx`:
- **Fraunces** — display serif (headings, big numbers)
- **Inter** — body copy
- **JetBrains Mono** — eyebrows, labels, tags

### 4. Contact form
`app/api/contact/route.ts` currently logs submissions to the console. Connect it to an
email provider (Resend, SendGrid, Postmark) or a webhook to receive real messages.

### 5. Replacing the portrait
The About section currently uses a styled placeholder (monogram seal + name). Swap it
for a real photo using `next/image` inside `components/About.tsx`.

## Accessibility & Performance

- Keyboard focus states are visible (`outline` on `:focus-visible`).
- Scroll-triggered animations respect `viewport={{ once: true }}` to avoid re-triggering.
- All sections are fully responsive from mobile to large desktop breakpoints.
