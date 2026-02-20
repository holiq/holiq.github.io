# Holiq Ibrahim - Portfolio

A cutting-edge portfolio website built with Next.js 14, featuring stunning 3D animations and modern web technologies.

## 🌟 Features

- **3D Hero Section**: Interactive Three.js animated sphere with React Three Fiber
- **Smooth Animations**: Framer Motion page transitions and component animations
- **GSAP Integration**: Counter animations and scroll-triggered effects
- **Smooth Scrolling**: Lenis for buttery-smooth scroll experience
- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Beautiful dark theme with purple/indigo gradient accents
- **Performance Optimized**: Static site generation for lightning-fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**:
  - Framer Motion (page transitions & components)
  - GSAP (timeline & scroll animations)
  - Three.js + React Three Fiber (3D graphics)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/holiq/holiq.id.git
cd holiq.id

# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
# Create optimized production build
npm run build

# The static files will be in the /out directory
```

## 📁 Project Structure

```
holiq.id/
├── app/
│   ├── layout.tsx          # Root layout with Lenis provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Hero.tsx            # 3D hero with Three.js
│   ├── Navigation.tsx      # Sticky nav
│   ├── GitHubStats.tsx     # Stats cards with GSAP animations
│   ├── Experience.tsx      # Timeline with scroll triggers
│   ├── Projects.tsx        # Project grid
│   ├── Skills.tsx          # Skills section
│   ├── Education.tsx       # Education cards
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   └── SmoothScroll.tsx    # Lenis smooth scroll wrapper
├── data/
│   └── portfolio.ts        # Portfolio data
├── lib/
│   └── animations.ts       # Reusable animation variants
├── public/
│   └── .nojekyll          # For GitHub Pages
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions deployment
```

## 🎨 Customization

### Update Portfolio Data

Edit `/data/portfolio.ts` to update:

- Personal information
- GitHub stats
- Experience
- Projects
- Skills
- Education

### Modify Animations

Edit `/lib/animations.ts` to customize Framer Motion animation variants.

### Style Customization

- Global styles: `/app/globals.css`
- Tailwind config: `/tailwind.config.ts`

## 🚀 Deployment

The portfolio automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
npm run build
# The /out directory contains the static site
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Holiq Ibrahim**

- GitHub: [@holiq](https://github.com/holiq)
- Email: holiq.ibrahim376@gmail.com

---

Built with ❤️ using Next.js, Three.js, and modern web technologies.
