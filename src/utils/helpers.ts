import type { ProjectSlug } from '../types'
import { projectName } from '../data/projects'

export function getProjectName(slug: ProjectSlug): string {
  return projectName[slug]
}

export function scrollToHash(hash: string) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
