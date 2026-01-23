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

      {/* ...everything above remains unchanged ... */}

      <section className="section">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>Account Deletion</h2>
            <p>
              Users may request deletion of their account and associated personal data at any time.
              To request account deletion, users can contact us at;
              <b> Email: support@kodraholdings.com</b>. Upon verification of the request,
              we will permanently delete the account and related data in accordance with
              applicable legal and regulatory requirements.
            </p>

            {/* Account Deletion Button */}
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
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#44963F')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#52B04B')
              }
            >
              Request Account Deletion
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
