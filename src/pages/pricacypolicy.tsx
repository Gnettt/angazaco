
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

        </div>
      </section>

      <section className="section">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>1. Information We Collect</h2>
            <p>
             We collect limited personal information that is necessary to provide and operate the Angaza application. This may include: Name, Email address, Phone number, Account credentials and authentication information, Purchase and order history, App interaction data and usage information, Device identifiers and diagnostic data
This information is collected only when required for account creation, order processing, customer support, security, and application improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>2. Data Sharing and Third-Party Services</h2>
            <p>
Angaza does not sell user data. We may share limited data with trusted service providers strictly for app functionality and operations, not limited but including: Google Firebase (Authentication, Firestore, Analytics, Crash Reporting)
These service providers process data securely and only according to our instructions.
            </p>
          </div>
        </div>
      </section>

       <section className="section">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>3. Data Security</h2>
            <p>
             User data is protected using industry-standard security measures. All data is encrypted in transit using HTTPS/TLS protocols. Access to data is restricted to authorized systems only
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>4. Account and Data Deletion</h2>
            <p>
             Users may request deletion of their account and associated personal data at any time.
To request account deletion, users can contact us at:
<b>Email: support@angazaconsultants.co.ke</b>
Upon verification of the request, we will permanently delete the account and related data in accordance with applicable legal and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

       <section className="section">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>5. Children's Privacy</h2>
            <p>
            Angaza does not knowingly collect personal information from children under the age of 13. If such data is identified, it will be deleted promptly.
             </p>
          </div>
        </div>
      </section>

       <section className="section section-alt">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be reflected within the application or on our official website.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
