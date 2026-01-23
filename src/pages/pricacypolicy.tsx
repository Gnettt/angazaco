import { Link } from 'react-router-dom'
import './Page.css'

export default function Privacypolicy() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="hero-subtitle">
            Last updated: January 2026
          </p>

          {/* Uses Link so import is valid */}
          <Link
            to="/"
            style={{
              display: 'inline-block',
              marginTop: '16px',
              color: '#52B04B',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>What is Kodra?</h2>
            <p>
              The revolutionary Kenyan startup where vendors keep 100% of their sales!
              Discover authentic fashion, quality electronics, and unique thrift finds
              with free delivery by Kodra Logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>What is Kodra?</h2>
            <p>
              The revolutionary Kenyan startup where vendors keep 100% of their sales!
              Discover authentic fashion, quality electronics, and unique thrift finds
              with free delivery by Kodra Logistics.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
