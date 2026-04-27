import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import styles from './ProjectSection.module.scss'

interface ProjectSectionProps {
  label?: string
  heading?: string
  headingEm?: string
  children: React.ReactNode
  showcase?: boolean
}

export default function ProjectSection({
  label,
  heading,
  headingEm,
  children,
  showcase = false,
}: ProjectSectionProps) {
  const renderHeading = () => {
    if (!heading) return null
    if (!headingEm || !heading.includes(headingEm)) {
      return <Reveal as="h2" className={styles.heading}>{heading}</Reveal>
    }
    const [before, after] = heading.split(headingEm)
    return (
      <Reveal as="h2" className={styles.heading}>
        {before}<em>{headingEm}</em>{after}
      </Reveal>
    )
  }

  return (
    <section className={`${styles.section} ${showcase ? styles.showcase : ''}`}>
      {label && (
        <Reveal as="div">
          <SectionLabel text={label} />
        </Reveal>
      )}
      {renderHeading()}
      {children}
    </section>
  )
}
