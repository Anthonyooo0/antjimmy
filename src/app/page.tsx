import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
