import { Link } from 'react-router-dom'
import type { ProjectSlug } from '../../types'
import { projectName } from '../../data/projects'
import Reveal from '../ui/Reveal'
import styles from './NextProject.module.scss'

interface NextProjectProps {
  slug: ProjectSlug
}

export default function NextProject({ slug }: NextProjectProps) {
  const name = projectName[slug]
  return (
    <section className={styles.next}>
      <Reveal as="span" className={styles.label}>Next Project</Reveal>
      <Reveal>
        <Link to={`/${slug}`} className={styles.name}>{name}</Link>
      </Reveal>
      <Reveal>
        <Link to={`/${slug}`} className={styles.link}>View Case Study →</Link>
      </Reveal>
    </section>
  )
}
