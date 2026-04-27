import Reveal from '../ui/Reveal'
import styles from './ContactSection.module.scss'

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.left}>
        <Reveal as="h2" className={styles.heading}>
          Let's create <em>something</em><br />together
        </Reveal>
        <Reveal as="p" className={styles.sub}>
          Open to freelance projects, collaborations, and full-time opportunities.
        </Reveal>
      </div>

      <div className={styles.right}>
        <Reveal as="span" className={styles.prompt}>Get in touch</Reveal>
        <Reveal>
          <a
            href="mailto:karla.ort@icloud.com"
            className={styles.email}
          >
            karla.ort@icloud.com
          </a>
        </Reveal>
      </div>
    </section>
  )
}
