import { useEffect } from 'react'
import type { ScreenItem } from '../../types'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Reveal from '../ui/Reveal'
import styles from './ScreensGallery.module.scss'

interface ScreensGalleryProps {
  sublabel?: string
  heading: string
  headingEm: string
  prototypeUrl?: string
  screens: ScreenItem[]
}

export default function ScreensGallery({
  sublabel = 'App Screens',
  heading,
  headingEm,
  prototypeUrl,
  screens,
}: ScreensGalleryProps) {
  const galleryRef = useScrollReveal<HTMLDivElement>()
  const dragRef = galleryRef

  useEffect(() => {
    const el = dragRef.current
    if (!el) return
    let isDown = false, startX = 0, scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }
    const onMouseLeave = () => { isDown = false }
    const onMouseUp = () => { isDown = false }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.5
    }

    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mousemove', onMouseMove)
    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mouseleave', onMouseLeave)
      el.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const [before, after] = heading.split(headingEm)

  return (
    <>
      <div className={styles.header}>
        <div>
          <Reveal as="p" className={styles.sublabel}>{sublabel}</Reveal>
          <Reveal as="h2" className={styles.heading}>
            {before}<em>{headingEm}</em>{after}
          </Reveal>
        </div>
        {prototypeUrl && (
          <Reveal>
            <a
              href={prototypeUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.protoBtn}
            >
              ↗ View Prototype
            </a>
          </Reveal>
        )}
      </div>

      <div ref={galleryRef} className={`reveal ${styles.gallery}`}>
        {screens.map((s, i) => (
          <div key={i} className={styles.card}>
            <img src={s.src} alt={s.alt} />
          </div>
        ))}
      </div>
    </>
  )
}
