# N7 Banking – Frontend Implementation

A pixel-perfect, fully responsive implementation of the N7 banking SaaS landing page, built with **Next.js 15 + TypeScript + Tailwind CSS**.

## Live Demo
> Deploy to Vercel (see below)

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS variables
- **Icons**: Lucide React
- **Fonts**: Syne (display), Inter (body) via Google Fonts

## Features
- ✅ Pixel-accurate implementation of the Figma design (Frame 74)
- ✅ Fully responsive: desktop, tablet, mobile
- ✅ Smooth animations: fade-in, float, marquee ticker
- ✅ Interactive nav: sticky with blur on scroll, mobile hamburger
- ✅ Hover micro-interactions on all cards and CTAs
- ✅ Accessible semantic HTML throughout
- ✅ Optimized: static export, no unnecessary re-renders
- ✅ Component-based architecture (9 isolated components)

## Sections Implemented
1. **Navbar** – Sticky, transparent → blur scroll, mobile responsive
2. **Hero** – Headline, CTAs, animated dashboard card mockup
3. **Solutions** – 5-card product grid (Core Banking CBT, Digital N7, Open Banking, Loan Origination, Loan Management)
4. **Cloud Banking** – AML dashboard mockup + feature table
5. **Core Banking Features** – Checklist + laptop mockup
6. **CTA Banners** – Dark and light variants
7. **Ticker** – Infinite marquee strip
8. **Digital Banking** – Phone mockups with feature lists
9. **Blog / Insights** – 4-card article grid
10. **Case Studies** – Logo grid + featured case detail
11. **Footer** – Full links, social icons, N7 brand

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
npx vercel --prod
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Solutions.tsx
│   ├── CloudBanking.tsx
│   ├── CTABanner.tsx
│   ├── Ticker.tsx
│   ├── DigitalBanking.tsx
│   ├── Blog.tsx
│   ├── CaseStudies.tsx
│   └── Footer.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```
