import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import ExperienceSection from '@/components/ExperienceSection'
import ResearchSection from '@/components/ResearchSection'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <Navigation />
      <Hero />
      <ExperienceSection />
      <ResearchSection />
      <About />
      <Contact />
    </main>
  );
}
