import { Link } from 'react-router-dom'
import './Page.css'

const Consultancy = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Consultancy Services</h1>
          <p className="hero-subtitle">
            Strategic advisory and implementation support for sustainable growth
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Driving Operational Excellence</h2>
            <p>
              Angaza Consultancy provides strategic advisory and implementation support to private sector firms,
              development organizations, and government institutions.
            </p>
            <p>
              We help organizations design scalable systems, improve operational efficiency, and unlock sustainable
              growth through data-driven decision-making and innovation-led approaches.
            </p>
          </div>

          <div className="expertise-section mt-4">
            <h2 className="text-center mb-4">Our Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-card">
                <div className="expertise-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20v-6M6 20V10M18 20V4"/>
                  </svg>
                </div>
                <h3>Business Development</h3>
                <p>Market systems analysis and strategic business planning for growth and expansion</p>
              </div>

              <div className="expertise-card">
                <div className="expertise-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 3h5v5M4 20L21 3"/>
                    <path d="M21 16v5h-5"/>
                    <path d="M15 15l6 6"/>
                    <path d="M4 4l5 5"/>
                  </svg>
                </div>
                <h3>Supply Chain Strengthening</h3>
                <p>End-to-end supply chain optimization and efficiency improvements</p>
              </div>

              <div className="expertise-card">
                <div className="expertise-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
                  </svg>
                </div>
                <h3>Lean Manufacturing</h3>
                <p>Process optimization and waste reduction for maximum efficiency</p>
              </div>

              <div className="expertise-card">
                <div className="expertise-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h3>Automation & Digital Transformation</h3>
                <p>Technology integration and process automation for modern operations</p>
              </div>

              <div className="expertise-card">
                <div className="expertise-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3>Value Addition</h3>
                <p>Agribusiness development and value chain enhancement strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="mb-2">Transform Your Operations</h2>
          <p className="mb-3">Partner with us to unlock sustainable growth and operational excellence</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            <Link to="/contact?proposal=true" className="btn btn-outline">Request a Proposal</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Consultancy
