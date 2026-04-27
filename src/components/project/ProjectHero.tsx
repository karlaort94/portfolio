import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import styles from './ProjectHero.module.scss'

interface ProjectHeroProps {
  category: string
  title: string
  subtitle: string
  role: string
  tools: string
  year: string
}

export default function ProjectHero({ category, title, subtitle, role, tools, year }: ProjectHeroProps) {
  return (
    <section className={styles.hero}>
      <Reveal as="div">
        <Link to="/#work" className={styles.back}>← Back to Work</Link>
      </Reveal>

      <Reveal as="div" className={styles.label}>
        <span className="section-label__rule" />
        <span>{category}</span>
      </Reveal>

      <Reveal as="h1" className={styles.title}>{title}</Reveal>
      <Reveal as="p" className={styles.sub}>{subtitle}</Reveal>

      <Reveal as="div" className={styles.meta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Role</span>
          <span className={styles.metaValue}>{role}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Tools</span>
          <span className={styles.metaValue}>{tools}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Year</span>
          <span className={styles.metaValue}>{year}</span>
        </div>
      </Reveal>
    </section>
  )
}
