import { Link } from 'react-router-dom'
import './Page.css'

const Cumulocity = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Cumulocity IoT Solutions</h1>
          <p className="hero-subtitle">
            Secure, scalable, and production-ready IoT solutions
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Partnership with Cumulocity</h2>
            <p>
              Angaza and Cumulocity work together to deliver secure, scalable, and production-ready IoT solutions.
            </p>
            <p>
              Angaza designs and develops IoT applications on the Cumulocity platform, handling device integration,
              data modeling, application development, and solution customization. Cumulocity provides the robust
              core platform for device management, data ingestion, monitoring, and analytics.
            </p>
            <p>
              Through this partnership, Angaza enables organizations to move seamlessly from concept to deployment
              and long-term operations, supported by managed services that ensure system reliability, performance,
              and scalability.
            </p>
          </div>

          <div className="features-grid mt-4">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M6.34 6.34l4.24 4.24m5.66 0l4.24-4.24M1 12h6m6 0h6M6.34 17.66l4.24-4.24m5.66 0l4.24 4.24"/>
                </svg>
              </div>
              <h3>Device Integration</h3>
              <p>Seamless connection and management of diverse IoT devices</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Data Modeling</h3>
              <p>Structured data architecture for meaningful insights</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <h3>Analytics</h3>
              <p>Real-time monitoring and advanced data analytics</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Lifecycle Management</h3>
              <p>Full system support from concept to long-term operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="mb-2">Ready to Deploy Your IoT Solution?</h2>
          <p className="mb-3">Let's discuss how we can bring your IoT project to life</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/contact?proposal=true" className="btn btn-outline">Request a Proposal</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cumulocity
