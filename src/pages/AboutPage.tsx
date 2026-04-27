import IntroSection from '../components/about/IntroSection'
import ServicesSection from '../components/about/ServicesSection'
import TimelineSection from '../components/about/TimelineSection'
import ContactDark from '../components/about/ContactDark'
import type { ServiceItem, TimelineItem } from '../types'

const tools = ['Figma', 'Illustrator', 'Photoshop', 'InDesign', 'After Effects']

const services: ServiceItem[] = [
  { name: 'UX Research', desc: 'User interviews, surveys, competitive analysis, and synthesizing insights into actionable findings.' },
  { name: 'UI Design', desc: 'High-fidelity screens, component libraries, and design systems built in Figma.' },
  { name: 'Brand Identity', desc: 'Logos, visual systems, typography, color, and brand guidelines from concept to delivery.' },
  { name: 'Packaging Design', desc: 'Label and packaging design for food, beverage, and consumer product brands.' },
  { name: 'Prototyping', desc: 'Interactive prototypes and user flows to test ideas before committing to development.' },
  { name: 'Motion Design', desc: 'Micro-interactions and animated concepts using After Effects and Figma Smart Animate.' },
]

const experience: TimelineItem[] = [
  { year: '2018 – Present', role: 'Freelance Graphic Designer', place: 'Various Clients - Canada & International' },
  { year: '2015 – 2018', role: 'Graphic Designer', place: 'Cutting Fast - Tabasco Mexico' },
  { year: '2014 – 2015', role: 'Junior Designer', place: 'FIGUEROA Design - Tabasco Mexico' },
]

const education: TimelineItem[] = [
  { year: '2025', role: 'UX/UI Design Certificate', place: 'British School of Creative Arts and Technology (EBAC)' },
  { year: '2016', role: 'Specialization in Marketing', place: 'Universidad Autónoma de Guadalajara (Mexico)' },
  { year: '2012 - 2015', role: "Bachelor's Degree in Graphic Design", place: 'Universidad Autónoma de Guadalajara (Mexico)' },
]

export default function AboutPage() {
  return (
    <main>
      <IntroSection />
      <ServicesSection tools={tools} services={services} />
      <TimelineSection
        heading="Where I've been"
        headingEm="been"
        items={experience}
        label="experience"
      />
      <TimelineSection
        heading="How I learned"
        headingEm="learned"
        items={education}
        label="education"
      />
      <ContactDark />
    </main>
  )
}
