import { useScrollReveal } from '../../hooks/useScrollReveal'

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements
  threshold?: number
  children: React.ReactNode
}

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  threshold,
  ...rest
}: RevealProps) {
  const ref = useScrollReveal<HTMLElement>(threshold)
  return (
    // @ts-expect-error — polymorphic ref is compatible at runtime
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
