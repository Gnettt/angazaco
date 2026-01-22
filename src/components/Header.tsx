import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/angaza_logo_image.jpeg" alt="Angaza Consultants" />
        </Link>

        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/cumulocity" onClick={closeMenu}>Cumulocity</Link>
          <Link to="/consultancy" onClick={closeMenu}>Consultancy</Link>
          <Link to="/satfarm" onClick={closeMenu}>SatFarm</Link>
          <Link to="/kodra" onClick={closeMenu}>Kodra</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/pricacypolicy" onClick={closeMenu}>Privacy Policy</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
