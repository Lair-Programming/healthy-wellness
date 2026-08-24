# WellnessHub — Eat Better. Live Better.

A modern, professional, fully responsive website for a healthy food and wellness brand. Built with React, TypeScript, Vite, and Tailwind CSS.

![WellnessHub](https://images.pexels.com/photos/6065181/pexels-photo-6065181.jpeg?auto=compress&cs=tinysrgb&h=300&w=800)

---

## Table of Contents

1. [Overview](#overview)
2. [Pages](#pages)
3. [Tech Stack](#tech-stack)
4. [Design System](#design-system)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [Available Scripts](#available-scripts)

---

## Overview

**WellnessHub** helps people live healthier lives through healthy meals, nutritious recipes, wellness services, and healthy lifestyle choices.

- **Slogan:** Eat Better. Live Better.
- **Target users:** Students, young professionals, busy people who want healthier food
- **Design style:** Modern, clean, professional, fresh, friendly, premium but simple

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, featured categories, popular meals, popular recipes, why choose us, statistics, CTA |
| About | `/about` | Our story, mission, vision, values, what makes us different |
| Services | `/services` | 5 service cards with icons, images, descriptions, and benefits |
| Recipes | `/recipes` | Searchable, filterable recipe discovery page with 6 recipes |
| Recipe Detail | `/recipes/:id` | Full recipe with ingredients, instructions, nutrition info, save button |
| Contact | `/contact` | Validated contact form, contact info cards, map, social links, FAQ |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Styling |
| React Router 6 | Client-side routing |
| Lucide React | Icons |
| Pexels | Food photography (CDN URLs) |
| Google Fonts | Inter + Poppins typography |

---

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-green` | `#16A34A` | Primary buttons, links, icons |
| `brand-green-dark` | `#15803D` | Button hover states |
| `brand-green-light` | `#22C55E` | Gradient text, footer accents |
| `brand-green-50` | `#F0FDF4` | Light green backgrounds |
| `accent-orange` | `#F97316` | Tags, calorie icons, accents |
| `accent-orange-dark` | `#EA580C` | Orange hover states |
| `surface-light` | `#F8FAFC` | Section backgrounds |
| `surface-white` | `#FFFFFF` | Cards, forms |
| `ink-dark` | `#0F172A` | Headings, body text |
| `ink-secondary` | `#64748B` | Descriptions, subtitles |
| `ink-muted` | `#94A3B8` | Placeholders, muted text |

### Fonts

| Font | Weights | Usage |
|------|---------|-------|
| Inter | 400, 500, 600, 700 | Body text, buttons, labels |
| Poppins | 600, 700, 800 | All headings, stat numbers |

### Shadows

| Token | Value |
|-------|-------|
| `soft` | `0 2px 8px rgba(15, 23, 42, 0.06)` |
| `card` | `0 4px 24px rgba(15, 23, 42, 0.08)` |
| `card-hover` | `0 12px 40px rgba(15, 23, 42, 0.12)` |
| `glow` | `0 8px 32px rgba(22, 163, 74, 0.18)` |

### Animations

| Name | Duration | Effect |
|------|----------|--------|
| `fade-up` | 0.6s | Fade in + slide up 20px |
| `fade-in` | 0.5s | Fade in only |
| `scale-in` | 0.4s | Fade in + scale from 96% |

### Icons

All 18 mapped icons from **lucide-react**:

`Leaf`, `UtensilsCrossed`, `BookOpen`, `HeartPulse`, `ShoppingBasket`, `Sprout`, `CheckCircle2`, `ChefHat`, `Clock`, `Award`, `Sparkles`, `ShieldCheck`, `Recycle`, `Smile`, `Truck`, `CalendarCheck`, `Stethoscope`, `Package`

Additional icons used in components: `Menu`, `X`, `Search`, `ChevronDown`, `ArrowRight`, `ArrowLeft`, `Mail`, `Phone`, `MapPin`, `Facebook`, `Instagram`, `Twitter`, `Youtube`, `Target`, `Eye`, `Send`, `Bookmark`, `Flame`, `Apple`, `ListOrdered`, `Check`, `SlidersHorizontal`

---

## Project Structure

```
src/
├── App.tsx                    # Router setup with all 5 routes
├── main.tsx                   # Entry point
├── index.css                  # Tailwind + custom component classes
├── components/
│   ├── Navbar.tsx             # Sticky responsive navbar with search
│   ├── Footer.tsx             # Footer with links, contact, socials
│   ├── ScrollToTop.tsx        # Scrolls to top on route change
│   ├── PageHero.tsx           # Reusable page header with breadcrumb
│   ├── CTASection.tsx         # Reusable call-to-action banner
│   ├── FeaturedCategories.tsx # Home page category cards
│   ├── MealCard.tsx           # Meal card with image, price, category
│   ├── RecipeCard.tsx         # Recipe card with cook time, difficulty
│   └── iconMap.ts             # Maps icon names to lucide-react components
├── data/
│   └── content.ts             # All meals, recipes, services, stats, FAQs
└── pages/
    ├── HomePage.tsx           # Landing page
    ├── AboutPage.tsx          # About + mission, vision, values
    ├── ServicesPage.tsx       # 5 services with alternating layout
    ├── RecipesPage.tsx        # Search + filter recipe discovery
    ├── RecipeDetailPage.tsx   # Full recipe with ingredients & steps
    └── ContactPage.tsx        # Contact form + FAQ + map
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server starts automatically. Open the preview to view the site.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

---

## Features

- Fully responsive (mobile, tablet, desktop)
- Sticky navbar with mobile hamburger menu
- Working search bar in navbar (redirects to recipes page)
- Recipe search and category/tag filtering
- Recipe detail pages with ingredients, instructions, and nutrition
- Contact form with full validation (name, email, phone, subject, message)
- Interactive FAQ accordion
- Hover effects on all cards and buttons
- Smooth scroll-to-top on page navigation
- SEO-friendly meta tags
- Semantic, accessible HTML with ARIA labels
- Real food photography from Pexels

---

## License

This is a demo project for WellnessHub. All food images are from [Pexels](https://www.pexels.com) (free to use).
