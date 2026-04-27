import Reveal from '../ui/Reveal'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Left column */}
      <div className={styles.content}>
        <Reveal as="div" className={styles.label}>
          <span className="section-label__rule" />
          <span>UX/UI &amp; Brand Designer</span>
        </Reveal>

        <Reveal as="h1" className={styles.name}>
          <span className={styles.nameFirst}>Karla</span>
          <span className={styles.nameLast}>Ortega</span>
        </Reveal>

        <Reveal as="p" className={styles.title}>
          Crafting experiences that connect brands with people
        </Reveal>

        <Reveal as="p" className={styles.desc}>
          I design digital products and visual identities that are clear, meaningful,
          and human-centered. Based in Canada — working globally.
        </Reveal>

        <Reveal as="div" className={styles.actions}>
          <a href="/#work" className={styles.btnDark}>View Work</a>
          <a
            href="/KOResume.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles.btnLink}
          >
            Download CV →
          </a>
        </Reveal>
      </div>

      {/* Right column — decorative card */}
      <Reveal as="div" className={styles.visual}>
        <div className={styles.card}>
          <div className={styles.frame} />
          <span className={styles.monogram}>KO</span>
          <span className={styles.tag}>Portfolio 2025</span>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Countries</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Years</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
