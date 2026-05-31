<<<<<<< HEAD
# Tejas Kalal — Developer Portfolio

A modern, premium, recruiter-focused personal developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Syne (display) + Space Mono (code)

## Features

- ⚡ Dark developer aesthetic with blue/purple gradients
- 🎯 Glassmorphism UI elements
- ✨ Scroll-triggered Framer Motion animations
- ⌨️ Typing effect hero with role rotation
- 📊 Animated count-up stats
- 💻 Interactive terminal section
- 🗂️ Expandable project cards
- 🗺️ Learning journey timeline
- 📈 GitHub contribution graph visualization
- 📬 Contact form with submit feedback
- 📱 Fully responsive + mobile hamburger menu
- 🔍 SEO optimized metadata
- ♿ Accessible markup

## Folder Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout with fonts & metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky navbar with mobile menu
│   │   └── Footer.tsx    # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx      # Typing effect, CTA, stat counters
│   │   ├── About.tsx     # Bio, info cards
│   │   ├── Skills.tsx    # Categorized skill cards
│   │   ├── Terminal.tsx  # Animated terminal display
│   │   ├── Projects.tsx  # Expandable project cards
│   │   ├── Journey.tsx   # Learning timeline
│   │   ├── GitHub.tsx    # Stats, languages, contribution graph
│   │   └── Contact.tsx   # Contact form + info
│   └── ui/
│       └── SectionHeader.tsx  # Reusable animated section header
├── hooks/
│   ├── useTypingEffect.ts   # Typing/deleting animation hook
│   └── useCountUp.ts        # Animated counter hook
└── lib/
    ├── data.ts   # All portfolio data (projects, skills, etc.)
    └── utils.ts  # cn() utility
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

All portfolio data lives in **`src/lib/data.ts`** — edit:
- `personalInfo` — your name, role, email, links
- `projects` — your projects with descriptions and tech
- `skills` — your skill categories
- `timeline` — your learning journey
- `githubStats` — your GitHub numbers

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

## License

MIT — feel free to use as your own portfolio base.
=======
# portfolio
>>>>>>> 1e7811d62c2319a1538bba5476dddf07dc2bcfce
