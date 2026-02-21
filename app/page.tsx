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

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] transition-colors duration-300">
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
  )
}
