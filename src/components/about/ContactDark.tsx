import Reveal from '../ui/Reveal'
import styles from './ContactDark.module.scss'

export default function ContactDark() {
  return (
    <section className={styles.contact}>
      <Reveal as="h2" className={styles.heading}>
        Let's work <em>together</em>
      </Reveal>
      <Reveal as="p" className={styles.sub}>
        Available for freelance projects & full-time opportunities
      </Reveal>
      <div className={styles.links}>
        <a href="mailto:karla.ort@icloud.com" className={styles.email}>
          karla.ort@icloud.com
        </a>
        <span className={styles.divider}>·</span>
        <span className={styles.phone}>+1 587 568 4425 (Canada)</span>
      </div>
    </section>
  )
}
