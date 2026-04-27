interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`section-label ${className}`}>
      <span className="section-label__rule" />
      <span>{text}</span>
    </div>
  )
}
