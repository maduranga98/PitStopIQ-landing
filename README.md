# PitstopIQ — Landing Page

Production landing page for **PitstopIQ**, a vehicle service center management
SaaS for Sri Lanka. Built with Next.js (App Router), React 19, TypeScript and
Tailwind CSS v4.

## Features

- Responsive, dark-themed marketing site: hero, problem, features, how-it-works,
  pricing, FAQ, CTA and footer sections.
- **Trilingual** — English, Sinhala (සිං) and Tamil (தமி) with a language
  switcher; preference persisted in `localStorage`.
- Scroll-reveal animations via `IntersectionObserver` (respects
  `prefers-reduced-motion`).
- WhatsApp-first CTAs and a floating chat button.
- SEO metadata, Open Graph / Twitter cards, and per-language web fonts loaded
  through `next/font`.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project structure

```
src/
  app/
    layout.tsx          # fonts + metadata
    page.tsx            # section composition
    globals.css         # design system, animations, responsive grids
  components/            # Navbar, Hero, Problem, Features, HowItWorks,
                         # Pricing, Faq, CtaBanner, SiteFooter, etc.
  lib/
    translations.ts      # EN/SI/TA copy, FAQ data, WhatsApp helpers
    language-context.tsx # language provider + hook
```

## Configuration

Set the business WhatsApp number in `src/lib/translations.ts`
(`WHATSAPP_NUMBER`, international format, digits only). All CTA links and the
floating button are generated from it.
