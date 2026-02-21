# Holiq Ibrahim - Portfolio

A modern, fast, and accessible portfolio website built with Next.js 15, featuring smooth animations and thoughtful interactions.

## ✨ Features

- **Parallax Hero Section**: Multi-layer parallax effects with animated gradient orbs
- **Smooth Animations**: Framer Motion for all animations and micro-interactions
- **Buttery Smooth Scrolling**: Lenis for premium scroll experience
- **Scroll-to-Top Button**: Animated floating button with ripple effects
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Dark Mode Support**: Beautiful dark theme with purple/indigo gradient accents
- **Accessibility First**: ARIA labels, focus states, reduced motion support
- **Performance Optimized**:
  - ~880KB lighter than v1 (removed Three.js & GSAP)
  - Optimized font loading (only 4 weights)
  - GPU-accelerated animations
  - Static site generation for instant loading
- **Contact Form**: Formspree integration with mailto fallback
- **Custom 404 Page**: Beautiful error page with navigation options

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion (unified animation solution)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Forms**: Formspree (optional)
- **Deployment**: GitHub Pages / Vercel

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
npm install

# Copy environment variables (optional, for Formspree)
cp .env.local.example .env.local
# Edit .env.local and add your Formspree ID

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Or build static export for GitHub Pages
npm run build
```

## 📁 Project Structure

```
holiq.id/
├── app/
│   ├── layout.tsx          # Root layout with metadata & providers
│   ├── page.tsx            # Main portfolio page
│   ├── not-found.tsx       # Custom 404 page
│   └── globals.css         # Global styles + Tailwind + CSS variables
├── components/
│   ├── Hero.tsx            # Parallax hero with gradient orbs
│   ├── Navigation.tsx      # Sticky nav with mobile menu
│   ├── GitHubStats.tsx     # Stats cards with counter animations
│   ├── Experience.tsx      # Timeline with scroll-based fill
│   ├── Projects.tsx        # Project grid with image fallback
│   ├── Skills.tsx          # Skills section with hover effects
│   ├── Education.tsx       # Education cards
│   ├── Contact.tsx         # Contact form + cards
│   ├── Footer.tsx          # Footer with links
│   ├── ScrollToTop.tsx     # Animated scroll-to-top button
│   ├── Skeletons.tsx       # Loading skeletons
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   └── ...                 # Other utility components
├── data/
│   └── portfolio.ts        # Portfolio content (edit this!)
├── lib/
│   └── animations.ts       # Reusable Framer Motion variants
├── public/
│   ├── projects/           # Project images
│   ├── robots.txt          # SEO robots file
│   ├── sitemap.xml         # SEO sitemap
│   └── .nojekyll          # For GitHub Pages
├── .env.local.example      # Environment variables template
└── next.config.js         # Next.js configuration
```

## ⚙️ Configuration

### Contact Form Setup (Optional)

The contact form uses Formspree (free tier available):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Create `.env.local` file:
   ```bash
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   ```
4. If you skip this step, the form will fallback to mailto (opens email client)

### Update Portfolio Content

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
- CSS variables: See `:root` and `.dark` in `globals.css`

## 🚀 Performance Optimizations

This portfolio is built for speed:

### Bundle Size Optimizations

- ✅ **Removed heavy dependencies**: No Three.js (~600KB), no GSAP (~50KB)
- ✅ **Unified animations**: Single library (Framer Motion) for all animations
- ✅ **Optimized fonts**: Only 4 weights instead of 7 (~50KB saved)
- ✅ **Tree-shaking**: All libraries support tree-shaking
- ✅ **Total savings**: ~880KB lighter (45% reduction from v1)

### Runtime Optimizations

- ✅ **GPU-accelerated animations**: Parallax uses CSS transforms
- ✅ **Lazy loading**: Components load only when needed
- ✅ **Image optimization**: Next.js Image component with auto WebP
- ✅ **Static generation**: Pre-rendered at build time
- ✅ **Smooth scroll**: Lenis uses requestAnimationFrame for 60fps

### Accessibility

- ✅ **Reduced motion support**: Respects `prefers-reduced-motion`
- ✅ **Keyboard navigation**: All interactive elements focusable
- ✅ **ARIA labels**: Proper semantic HTML and ARIA attributes
- ✅ **Focus indicators**: Visible focus states with rings
- ✅ **Screen reader friendly**: Meaningful alt texts and labels

## 📊 Performance Metrics

Expected Lighthouse scores:

- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 100

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

### Deploy to GitHub Pages

1. Update `next.config.js` for static export
2. Push to GitHub
3. Enable GitHub Pages in repository settings

### Environment Variables

For production, set these in your hosting platform:

- `NEXT_PUBLIC_FORMSPREE_ID` (optional, for contact form)

## 🛠️ Development Tips

### Analyzing Bundle Size

```bash
npm run analyze
```

This generates a visual bundle size report.

### Type Checking

```bash
npx tsc --noEmit
```

### Linting

```bash
npm run lint
```

## 🎯 Future Enhancements (Optional)

Ideas for further improvements:

- [ ] Add blog section with MDX
- [ ] Integrate GitHub API for real-time stats
- [ ] Add testimonials section
- [ ] Implement view transitions API
- [ ] Add analytics (Google Analytics / Plausible)
- [ ] Create multilingual support (i18n)
- [ ] Add resume download feature
- [ ] Implement PWA features

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📬 Contact

**Holiq Ibrahim**

- Website: [holiq.id](https://holiq.id)
- GitHub: [@holiq](https://github.com/holiq)
- LinkedIn: [holiq-ibrahim](https://linkedin.com/in/holiq-ibrahim)
- Email: me@holiq.id

---

Made with ❤️ and ⚡ by Holiq Ibrahim

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
- Email: me@holiq.id

---

Built with ❤️ using Next.js, Three.js, and modern web technologies.
