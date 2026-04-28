import styles from './Marquee.module.scss'

const skills = [
  'UX Research', 'UI Design', 'Brand Identity', 'Prototyping',
  'Figma', 'User Testing', 'Visual Design', 'Packaging',
  'After Effects', 'Illustrator', 'Design Systems', 'Photoshop',
]

export default function Marquee() {
  const doubled = [...skills, ...skills]

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {doubled.map((skill, i) => (
          <span key={i}>
            {skill}
            {i < doubled.length - 1 && <span className={styles.dot}> ✦ </span>}
          </span>
        ))}
      </div>
    </div>
  )
}
