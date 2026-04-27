import type { ProjectCard as ProjectCardType } from '../../types'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import ProjectCard from './ProjectCard'
import styles from './WorkSection.module.scss'

interface WorkSectionProps {
  projects: ProjectCardType[]
}

export default function WorkSection({ projects }: WorkSectionProps) {
  return (
    <section id="work" className={styles.work}>
      <Reveal as="div">
        <SectionLabel text="Selected Work" />
      </Reveal>
      <Reveal as="h2" className={styles.title}>
        Recent <em>Projects</em>
      </Reveal>
      <div className={styles.grid}>
        {projects.map(p => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </section>
  )
}
