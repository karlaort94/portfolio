import type { AppImage, AppGridVariant } from '../../types'
import Reveal from '../ui/Reveal'
import styles from './ApplicationsGrid.module.scss'

interface ApplicationsGridProps {
  variant: AppGridVariant
  heading?: string
  bodyText?: string
  bullets?: string[]
  images: AppImage[]
}

export default function ApplicationsGrid({
  variant,
  heading,
  bodyText,
  bullets,
  images,
}: ApplicationsGridProps) {
  if (variant === 'single') {
    return (
      <div className={styles.gridSingle}>
        <div className={styles.text}>
          {heading && (
            <Reveal as="h2" className={styles.heading}>
              <em>{heading}</em>
            </Reveal>
          )}
          {bodyText && <Reveal as="p" className={styles.body}>{bodyText}</Reveal>}
          {bullets && (
            <Reveal as="ul" className="p-list">
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </Reveal>
          )}
        </div>
        <Reveal as="div" className={styles.img}>
          <img src={images[0].src} alt={images[0].alt} />
        </Reveal>
      </div>
    )
  }

  const galleryClass = variant === 'gallery-2col' ? styles.gallery2col : styles.gallery

  return (
    <div className={galleryClass}>
      {images.map((img, i) => (
        <Reveal key={i}>
          <img src={img.src} alt={img.alt} />
        </Reveal>
      ))}
    </div>
  )
}
