# ⚜️ Jaaju Kitchen & Bar

> **జాజు కిచెన్ & బార్** — Where Hyderabad eats, drinks, and celebrates. A premium fusion of luxury dining, artisanal mixology, and vibrant nightlife.

This repository contains the official frontend web application for **Jaaju Kitchen & Bar**, situated in Madinaguda, Miyapur, Hyderabad. Crafted with modern design systems, fluid micro-animations, and full-viewport responsiveness to deliver an elegant digital concierge experience.

---

## ✨ Features

### 🏛️ Premium Cinematic Architecture
* **Rich Luxury Aesthetics**: Curated dark charcoal palette (`#0a0a0a`), sleek glassmorphic details, custom typography grids, and harmonious amber-gold brand accents.
* **Liquid Motion Systems**: Smooth scroll-triggered fade-ins and interactive layouts driven by **Framer Motion (`motion/react`)**.

### 📱 Responsive Orchestration
* **Adaptive Navbar**: 
  - Responsive breakpoint transitions from portrait mobile states to large dual-page desktop spans.
  - Auto-shrinking animated brand logo on viewport scroll.
  - Advanced mobile navigation drawer featuring auto-locking body scrolls and landscape scroll containment.
* **Fluid Grid Menu**: 
  - Displays high-resolution menu sheets inside custom dark canvases.
  - Employs a strict **3:4 aspect ratio** layout to guarantee **zero text cropping**, ensuring total legibility for dishes and prices.
* **Visual Experience Gallery**: High-end masonry-inspired image grids with slow-scale hover zooms and grayscale transitions.
* **Row-Aligned Smart Footer**: Custom layout that aligns horizontal rows on mobile/small viewports and stacks columns elegantly on desktop.

---

## 🛠️ Technology Stack

* **Core Framework**: React (v19) & TypeScript
* **Build Engine**: Vite (v6)
* **Styling Infrastructure**: Tailwind CSS (v4)
* **Animation Core**: Framer Motion / Motion React (v12)
* **Icons Library**: Lucide React
* **Navigation Core**: React Router DOM (v7)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jaajus/website.git
   cd jaaju
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   If needed, copy the example environment file and add any keys:
   ```bash
   cp .env.example .env.local
   ```

4. **Launch Development Server:**
   ```bash
   npm run dev
   ```
   The local environment will start running at [http://localhost:3000](http://localhost:3000).

5. **Build for Production:**
   To build the minified asset bundle:
   ```bash
   npm run build
   ```

---

## 📁 Directory Structure

```
jaaju/
├── src/
│   ├── assets/             # Raw media assets (Logo, brand graphics)
│   ├── components/
│   │   ├── home/           # Homepage blocks (Hero, Vibe, FeaturedMenu)
│   │   └── layout/         # Core layouts (Navbar, Footer)
│   ├── lib/                # Utility modules (Class mergers, etc.)
│   ├── pages/              # Routing pages (Home, Menu, Gallery, About, Contact)
│   ├── App.tsx             # Main router & page assembler
│   ├── index.css           # Global theme variables & Tailwind imports
│   └── main.tsx            # React application entry point
├── vite.config.ts          # Compilation configurations
├── tailwind.config.ts      # (Or Tailwind v4 theme variables)
└── package.json            # Dependency manifest
```

---

## 📍 Visit Us

**Jaaju Kitchen & Bar**
First Floor, Block 1, Satyanarayana Enclave,  
Block-F, Madinaguda, Durga Estates, Miyapur,  
Hyderabad, Telangana 500049.
