import type { ProjectCard, ProjectSlug } from '../types'

export const projectCards: ProjectCard[] = [
  {
    slug: 'nescafe',
    name: 'NESCAFÉ Connect',
    category: 'UX/UI Case Study · Mexico',
    image: '/images/nescafe.png',
    tall: true,
  },
  {
    slug: 'travely',
    name: 'Travely',
    category: 'Product Design / UX · Mexico',
    image: '/images/travely.png',
  },
  {
    slug: 'drguzman',
    name: 'Dr. Guzmán',
    category: 'Healthcare Branding · Mexico',
    image: '/images/drguzman.png',
  },
  {
    slug: 'littledarling',
    name: 'Little Darling',
    category: 'Brand Identity · Canada',
    image: '/images/littledarling.png',
  },
  {
    slug: 'lattente',
    name: 'Lattente Coffee',
    category: 'Branding & Packaging · Argentina / NY',
    image: '/images/lattente.png',
  },
]

export const nextProject: Record<ProjectSlug, ProjectSlug> = {
  nescafe: 'travely',
  travely: 'drguzman',
  drguzman: 'littledarling',
  littledarling: 'lattente',
  lattente: 'nescafe',
}

export const projectName: Record<ProjectSlug, string> = {
  nescafe: 'NESCAFÉ Connect',
  travely: 'Travely',
  drguzman: 'Dr. Guzmán',
  littledarling: 'Little Darling Coffee',
  lattente: 'Lattente',
}
