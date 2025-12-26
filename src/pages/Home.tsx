import { Link } from 'react-router-dom'
import Counter from '../components/Counter'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>WELCOME TO ANGAZA CONSULTANTS</h1>
          <p>
            Local leadership. Global standards. Practical execution.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-white">Talk to Us</Link>
            <Link to="/contact?proposal=true" className="btn btn-outline btn-outline-white">Request a Proposal</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">What We Do</h2>
          <div className="grid-3">
            <div className="card service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Cumulocity IoT Solutions</h3>
              <p>
                Angaza partners with Cumulocity to design, integrate, and deploy scalable IoT solutions.
                We support organizations from concept to production, delivering secure device integration,
                data modeling, analytics, and full lifecycle system management.
              </p>
              <Link to="/cumulocity" className="btn btn-outline">Learn More</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 3v18M3 9h18M3 15h18M15 3v18"/>
                </svg>
              </div>
              <h3>Consultancy</h3>
              <p>
                Angaza provides advisory and implementation services in business development, supply chains,
                value addition, lean manufacturing, and process automation. We help organizations improve
                efficiency, competitiveness, and long-term sustainability through practical, data-driven solutions.
              </p>
              <Link to="/consultancy" className="btn btn-outline">Learn More</Link>
            </div>

            <div className="card service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20"/>
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Digital Agriculture & Technology (SATFARM)</h3>
              <p>
                SATFARM is Angaza's digital agriculture platform that delivers AI-driven advisory services,
                IoT-enabled monitoring, and real-time farm intelligence. It supports climate-smart farming,
                productivity improvement, traceability, and sustainable decision-making across agricultural value chains.
              </p>
              <Link to="/satfarm" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">Impact Snapshot</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number">
                <Counter target={25} suffix="+" duration={2000} />
              </div>
              <p>Endpoint automation and IoT projects delivered</p>
            </div>
            <div className="impact-card">
              <div className="impact-number">
                <Counter target={1900} suffix="+" duration={2500} />
              </div>
              <p>Farmers trained through programs and pilots</p>
            </div>
            <div className="impact-card">
              <div className="impact-number">
                <Counter target={7} suffix="+" duration={1500} />
              </div>
              <p>Countries supported across Africa</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center mb-2">Why Angaza</h2>
          <p className="text-center subtitle mb-4">
            Local leadership. Global standards. Practical execution.
          </p>
          <div className="why-angaza-content">
            <p className="lead-text">
              We combine deep field experience, strong technical expertise, and hands-on implementation
              to deliver measurable, scalable impact. Our strength lies in translating strategy into
              working systems that deliver real value on the ground.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">What Our Partners Say</h2>
          <div className="testimonials">
            <div className="testimonial-card">
              <p className="quote">
                "Angaza combines strong field credibility with excellent technical delivery."
              </p>
            </div>
            <div className="testimonial-card">
              <p className="quote">
                "A practical implementation partner — not just another consulting firm."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2 className="mb-2">Ready to build a profitable, climate-smart value chain?</h2>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white">Book a Consultation</Link>
            <Link to="/contact?proposal=true" className="btn btn-outline btn-outline-white">Request a Proposal</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
