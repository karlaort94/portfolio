import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.scss'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const isAbout = location.pathname === '/about'

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>Karla Ortega</Link>

      <button
        className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}
        aria-label="Menú"
        onClick={() => setIsOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
        <li><Link to="/#work">Work</Link></li>
        <li>
          <Link to="/about" className={isAbout ? styles.active : ''}>About</Link>
        </li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
