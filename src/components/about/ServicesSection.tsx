import type { ServiceItem } from '../../types'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import styles from './ServicesSection.module.scss'

interface ServicesSectionProps {
  tools: string[]
  services: ServiceItem[]
}

export default function ServicesSection({ tools, services }: ServicesSectionProps) {
  return (
    <section className={styles.services}>
      <Reveal as="h2" className={styles.heading}>
        <SectionLabel text="Services" />
        What I <em>do</em>
      </Reveal>

      <Reveal as="div" className={styles.tools}>
        {tools.map(t => (
          <span key={t} className={styles.pill}>{t}</span>
        ))}
      </Reveal>

      <div className={styles.grid}>
        {services.map(s => (
          <Reveal key={s.name} as="div" className={styles.item}>
            <p className={styles.itemName}>{s.name}</p>
            <p className={styles.itemDesc}>{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
