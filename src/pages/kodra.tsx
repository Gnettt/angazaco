import { Link } from 'react-router-dom'
import './Page.css'

export default function Kodra() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Kodra Marketplace</h1>
          <p className="hero-subtitle">
            Kenya’s first zero-commission marketplace.
          </p>
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

          <div className="container">
            <div className="content-block">
              <h2>Business Model</h2>

              <div className="features-grid mt-4">
                <div className="feature-item">
                  <h3>100% Vendor Earnings</h3>
                  <p>Vendors keep every shilling they earn with zero commission.</p>
                </div>

                <div className="feature-item">
                  <h3>Free Kodra Logistics</h3>
                  <p>In-house delivery at no cost to vendors or customers.</p>
                </div>

                <div className="feature-item highlight">
                  <h3>Affiliate to Employee</h3>
                  <p>Top 3 affiliates monthly join our marketing team.</p>
                </div>

                <div className="feature-item">
                  <h3>Trusted Vendors</h3>
                  <p>Verified sellers with reviews and ratings for quality.</p>
                </div>

                <div className="feature-item">
                  <h3>24/7 Support</h3>
                  <p>Dedicated customer support via chat, call, or email.</p>
                </div>

                <div className="feature-item">
                  <h3>Easy Returns</h3>
                  <p>7-day free returns for damaged or unsatisfactory items.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>Why Kodra?</h2>
            <p>
              <b>SATFARM</b> is developed by <b>Kodra Holdings</b> in collaboration with{' '}
              <b>Angaza Consultants</b>, blending Angaza’s strategic vision with Kodra’s
              technical expertise. Kodra Holdings designed and built the platform,
              while Angaza Consultants manage hardware operations and manpower.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>Account Deletion</h2>
            <p>
              Users may request deletion of their account and associated personal data
              at any time. Requests are reviewed and permanently processed in
              accordance with legal and regulatory requirements.
            </p>

            <Link
              to="/accountdeletion"
              style={{
                display: 'inline-block',
                marginTop: '24px',
                padding: '12px 24px',
                backgroundColor: '#52B04B',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Request Account Deletion
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
