import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/angaza_logo_image.jpeg" alt="Angaza Consultants" className="footer-logo" />
            <p>Local leadership. Global standards. Practical execution.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/cumulocity">Cumulocity</Link>
              <Link to="/consultancy">Consultancy</Link>
              <Link to="/satfarm">SATFARM</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:angazaconsult@gmail.com">angazaconsult@gmail.com</a>
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+254799989460">+254 799 989 460</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Angaza Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
