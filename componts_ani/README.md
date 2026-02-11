# LiquidUI

A stunning landing page featuring a real-time **Three.js liquid effect** background with glassmorphic UI elements. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Liquid Animation** — GPU-powered fluid simulation via Three.js (loaded from CDN, zero bundled deps)
- **Glassmorphic Design** — Frosted-glass cards and overlays with `backdrop-blur`
- **Warm Orange Palette** — Cohesive `#fb8c00` brand system across buttons, badges, and accents
- **Fully Responsive** — Mobile-first layout with adaptive typography and navigation
- **Dark Theme** — High-contrast text on semi-transparent surfaces for readability

## 🛠 Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | Next.js 16 (App Router)           |
| Language    | TypeScript 5                      |
| Styling     | Tailwind CSS 4                    |
| Components  | shadcn/ui, Radix UI               |
| Icons       | Lucide React                      |
| Animation   | Three.js (CDN)                    |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 📁 Project Structure

```
app/
├── page.tsx              # Landing page (hero, features, about, CTA, footer)
├── layout.tsx            # Root layout with metadata
└── globals.css           # Tailwind imports & global styles
components/ui/
├── liquid-effect-animation.tsx   # Three.js liquid background
└── navbar.tsx                    # Responsive glassmorphic navbar
```

## 📦 Scripts

| Command          | Description              |
|------------------|--------------------------|
| `npm run dev`    | Start dev server         |
| `npm run build`  | Production build         |
| `npm run start`  | Serve production build   |
| `npm run lint`   | Run ESLint               |

## 📄 License

Private project.
