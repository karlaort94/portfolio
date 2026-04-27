interface ToolPillProps {
  label: string
}

export default function ToolPill({ label }: ToolPillProps) {
  return <span className="tool-pill">{label}</span>
}
