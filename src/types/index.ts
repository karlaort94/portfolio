export type ProjectSlug =
  | 'nescafe'
  | 'travely'
  | 'drguzman'
  | 'lattente'
  | 'littledarling'

export interface ProjectCard {
  slug: ProjectSlug
  name: string
  category: string
  image: string
  tall?: boolean
}

export interface ServiceItem {
  name: string
  desc: string
}

export interface TimelineItem {
  year: string
  role: string
  place: string
}

export interface ScreenItem {
  src: string
  alt: string
}

export interface ImpactItem {
  num: string
  text: string
}

export interface AppImage {
  src: string
  alt: string
}

export type AppGridVariant = 'single' | 'gallery' | 'gallery-2col'
