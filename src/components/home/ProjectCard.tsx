import { Link } from 'react-router-dom'
import type { ProjectCard as ProjectCardType } from '../../types'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({ slug, name, category, image, tall }: ProjectCardType) {
  return (
    <Link
      to={`/${slug}`}
      className={`${styles.card} ${tall ? styles.tall : ''}`}
    >
      <div className={styles.imgWrap}>
        <img src={image} alt={name} />
      </div>
      <span className={styles.btn}>→</span>
      <div className={styles.overlay}>
        <span className={styles.category}>{category}</span>
        <span className={styles.name}>{name}</span>
      </div>
    </Link>
  )
}
