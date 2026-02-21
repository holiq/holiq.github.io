import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import GitHubStats from '@/components/GitHubStats'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import UnifiedBackground from '@/components/UnifiedBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg)] transition-colors duration-300">
      <UnifiedBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <GitHubStats />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  )
}
