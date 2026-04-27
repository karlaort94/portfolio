import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import styles from './AboutSection.module.scss'

const skills = [
  { name: 'UX Design', desc: 'Research, wireframes, user flows, usability testing' },
  { name: 'UI Design', desc: 'High-fidelity interfaces, design systems, components' },
  { name: 'Branding', desc: 'Visual identity, packaging, brand guidelines' },
  { name: 'Motion', desc: 'Micro-interactions and transitions in After Effects' },
]

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles.left}>
        <Reveal as="h2" className={styles.heading}>
          Design with <em>purpose</em><br />and <em>intention</em>
        </Reveal>
        <Reveal as="p" className={styles.desc}>
          I'm a graphic designer transitioning into UX/UI — combining visual communication
          expertise with user-centered thinking. I care deeply about craft, clarity, and
          creating work that truly resonates.
        </Reveal>
        <Reveal as="div">
          <Link to="/about" className={styles.link}>
            More about me →
          </Link>
        </Reveal>
      </div>

      <div className={styles.skills}>
        {skills.map(s => (
          <Reveal key={s.name} as="div" className={styles.skill}>
            <span className={styles.skillRule} />
            <span className={styles.skillName}>{s.name}</span>
            <p className={styles.skillDesc}>{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
