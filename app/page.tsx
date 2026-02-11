import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import GitHubStats from '@/components/GitHubStats'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <GitHubStats />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
