import styles from './Footer.module.scss'

interface FooterProps {
  dark?: boolean
}

export default function Footer({ dark = false }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${dark ? styles.dark : ''}`}>
      <span>© 2025 Karla Ortega</span>
      <span>UX/UI &amp; Brand Designer</span>
    </footer>
  )
}
