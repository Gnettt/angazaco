import { useSearchParams } from 'react-router-dom'
import './Page.css'

const Contact = () => {
  const [searchParams] = useSearchParams()
  const isProposal = searchParams.get('proposal') === 'true'

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>{isProposal ? 'Request a Proposal' : 'Contact Us'}</h1>
          <p className="hero-subtitle">
            {isProposal
              ? 'Let\'s discuss your project and create a tailored solution'
              : 'Get in touch with our team'}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info-section">
              <h2>Let's Connect</h2>
              <p className="mb-3">
                {isProposal
                  ? 'Ready to start your project? Reach out to us and we\'ll prepare a comprehensive proposal tailored to your needs.'
                  : 'We\'re here to answer your questions and discuss how we can help transform your operations.'}
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:angazaconsult@gmail.com">angazaconsult@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+254799989460">+254 799 989 460</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM EAT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <div className="contact-form-card">
                <h3 className="mb-2">{isProposal ? 'Proposal Request Form' : 'Send us a Message'}</h3>
                <p className="form-description">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">Organization</label>
                    <input type="text" id="organization" name="organization" />
                  </div>

                  {isProposal && (
                    <div className="form-group">
                      <label htmlFor="service">Service Interest *</label>
                      <select id="service" name="service" required>
                        <option value="">Select a service...</option>
                        <option value="cumulocity">Cumulocity IoT Solutions</option>
                        <option value="consultancy">Consultancy Services</option>
                        <option value="satfarm">SATFARM - Digital Agriculture</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="message">
                      {isProposal ? 'Project Details *' : 'Message *'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder={isProposal ? 'Tell us about your project requirements...' : 'How can we help you?'}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    {isProposal ? 'Submit Proposal Request' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
