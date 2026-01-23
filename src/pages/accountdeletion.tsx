import './Page.css'

export default function AccountDeletion() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Account Deletion</h1>
          <p className="hero-subtitle">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>How to delete your Angaza account?</h2>
            <p>
              Users may request deletion of their account and associated personal
              data at any time. To request account deletion, users can contact us
              at <b>support@kodraholdings.com</b>. Upon verification of the
              request, we will permanently delete the account and related data
              in accordance with applicable legal and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>Account Deletion Request</h2>
            <p>
              To request deletion of your account, please fill out the form
              below. Our support team will review your request and contact you
              if further verification is required.
            </p>

            <form
              action="mailto:support@kodraholdings.com"
              method="POST"
              encType="text/plain"
              style={{ marginTop: '32px', maxWidth: '520px' }}
            >
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="Name"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="Phone"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '6px' }}>
                  Reason for Account Deletion
                </label>
                <textarea
                  name="Reason"
                  rows={4}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#52B04B',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
