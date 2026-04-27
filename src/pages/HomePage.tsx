import Hero from '../components/home/Hero'
import Marquee from '../components/home/Marquee'
import WorkSection from '../components/home/WorkSection'
import AboutSection from '../components/home/AboutSection'
import ContactSection from '../components/home/ContactSection'
import { projectCards } from '../data/projects'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <WorkSection projects={projectCards} />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
