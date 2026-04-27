import type { ImpactItem } from '../../types'
import Reveal from '../ui/Reveal'
import styles from './ImpactSection.module.scss'

interface ImpactSectionProps {
  heading?: string
  items: ImpactItem[]
}

export default function ImpactSection({ heading = 'Impact & Outcomes', items }: ImpactSectionProps) {
  const [before, ...rest] = heading.split('&')
  return (
    <section className={styles.impact}>
      <Reveal as="div" className={styles.top}>
        <h2 className={styles.heading}>
          {before.trim()} &amp; <em>{rest.join('&').trim()}</em>
        </h2>
      </Reveal>
      <div className={styles.grid}>
        {items.map(item => (
          <div key={item.num} className={styles.item}>
            <span className={styles.num}>{item.num}</span>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
