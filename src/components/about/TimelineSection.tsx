import type { TimelineItem } from '../../types'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import styles from './TimelineSection.module.scss'

interface TimelineSectionProps {
  heading: string
  headingEm: string
  items: TimelineItem[]
  label: string
}

export default function TimelineSection({ heading, headingEm, items, label }: TimelineSectionProps) {
  const [before, after] = heading.split(headingEm)
  return (
    <section className={styles.timeline}>
      <Reveal as="h2" className={styles.heading}>
        <SectionLabel text={label} />
        {before}<em>{headingEm}</em>{after}
      </Reveal>

      <div className={styles.list}>
        {items.map((item, i) => (
          <Reveal key={i} as="div" className={styles.item}>
            <span className={styles.year}>{item.year}</span>
            <p className={styles.role}>{item.role}</p>
            <p className={styles.place}>{item.place}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
