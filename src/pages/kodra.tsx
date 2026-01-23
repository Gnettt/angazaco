
import './Page.css'

const Kodra = () => {
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
          <div className="container" style={{ marginTop: '48px' }} >
            <div className="content-block">
              <h2>What is Kodra?</h2>
              <p>
               The revolutionary Kenyan startup where vendors keep 100% of their sales! Discover authentic fashion, quality electronics, and unique thrift finds with free delivery by Kodra Logistics.
              </p>
            </div>

            <div className="container">
                <div className="content-block">
                    <h2>Business Model</h2>
                <div className="features-grid mt-4">
            {/* 100% Vendor Earnings */}
         <div className="feature-item">
             <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" />
                    <line x1="12" y1="6" x2="12" y2="18" />
                </svg>
            </div>
            <h3>100% Vendor Earnings</h3>
            <p>Vendors keep every shilling they earn with zero commission.</p>
            </div>

    {/* Free Kodra Logistics */}
    <div className="feature-item">
        <div className="feature-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="3" width="15" height="13" />
            <path d="M16 8h4l3 3v5h-7" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
        </div>
        <h3>Free Kodra Logistics</h3>
        <p>In-house delivery at no cost to vendors or customers.</p>
    </div>

    {/* Affiliate to Employee */}
    <div className="feature-item highlight">
        <div className="feature-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M6 18c1.5-3 10.5-3 12 0" />
        </svg>
        </div>
        <h3>Affiliate to Employee</h3>
        <p>Top 3 affiliates monthly join our marketing team.</p>
    </div>

    {/* Trusted Vendors */}
    <div className="feature-item">
        <div className="feature-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 8.5 12 2" />
        </svg>
        </div>
        <h3>Trusted Vendors</h3>
        <p>Verified sellers with reviews and ratings for quality.</p>
    </div>

    {/* 24/7 Support */}
    <div className="feature-item">
        <div className="feature-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
        </div>
        <h3>24/7 Support</h3>
        <p>Dedicated customer support via chat, call, or email.</p>
    </div>

    {/* Easy Returns */}
    <div className="feature-item">
        <div className="feature-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 14l-4-4 4-4" />
            <path d="M5 10h9a5 5 0 1 1 0 10h-1" />
        </svg>
        </div>
        <h3>Easy Returns</h3>
        <p>7-day free returns for damaged or unsatisfactory items.</p>
    </div>
    </div>
          </div>
          </div>
    </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ marginTop: '48px' }} >
            <div className="content-block">
              <h2>Why Kodra?</h2>
              <p>
               <b>SATFARM</b> is developed by <b>Kodra Holdings</b> in collaboration with <b>Angaza Consultants</b>, reflecting a collaborative partnership that blends Angaza’s strategic vision and business leadership with Kodra’s technical expertise and product development capabilities. Through this collaboration, Kodra Holdings designed and built the platform to meet Angaza Consultants’ goals, ensuring a scalable, reliable, and user-focused solution aligned with Angaza’s mission and long-term growth. It’s a joint venture where Kodra Holdings develops the software Angaza Consultants deals with the hardware and man power.
              </p>
            </div>
            </div>
      </section>

 <section className="section">
  <div className="container" style={{ marginTop: '48px' }}>
    <div className="content-block">
      <h2>Account Deletion</h2>
      <p>
       Users may request deletion of their account and associated personal data at any time. To request account deletion, users can contact us at; <b>Email: support@kodraholdings.com</b>. Upon verification of the request, we will permanently delete the account and related data in accordance with applicable legal and regulatory requirements.
      </p>

      {/* Account Deletion Button */}
      <a
        href="/accountdeletion"
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
      </a>
    </div>
  </div>
</section>


    </div>
  )
}

export default Kodra
