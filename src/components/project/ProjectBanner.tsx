import Reveal from '../ui/Reveal'
import styles from './ProjectBanner.module.scss'

interface ProjectBannerProps {
  src: string
  alt: string
  objectPosition?: string
}

export default function ProjectBanner({ src, alt, objectPosition = 'center 70%' }: ProjectBannerProps) {
  return (
    <Reveal as="div" className={styles.banner}>
      <img src={src} alt={alt} style={{ objectPosition }} />
    </Reveal>
  )
}
