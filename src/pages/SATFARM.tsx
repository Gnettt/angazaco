import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';
import './Page.css';
import { FaSeedling, FaCloudSun, FaChartLine } from 'react-icons/fa';
import { GiCow, GiWheat } from 'react-icons/gi';

const SATFARM = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCapability, setActiveCapability] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = Array.from({ length: 20 }, (_, i) => i + 1);

  const scrollCarousel = (direction: string) => {
    if (carouselRef.current) {
      const scrollAmount = 180;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>SATFARM</h1>
          <p className="hero-subtitle">
            Digital Agriculture & Technology Platform
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="content-block">
            <h2>Empowering Smallholder Farmers Through Technology</h2>
            <p>
              SATFARM is Angaza's in-house digital agriculture platform designed to empower smallholder farmers
              through technology. The project concept and execution has been done with 4 strategic learning
              institutions to deliver impact across Africa.
            </p>
            <p>
              SATFARM enables smarter decisions, improved productivity, climate resilience, and sustainable farm
              management across diverse agricultural value chains.
            </p>
          </div>

          {/* Partners Section */}
          <div className="partners-section mt-4 mb-4">
            <h3 className="text-center mb-3">Strategic Partners</h3>
            <div className="partners-grid">
              <a href="https://kibu.ac.ke/" target="_blank" rel="noopener noreferrer" className="partner-logo-card">
                <div className="partner-logo-content">
                  <img src="/kibabiilogo.png" alt="Kibabii University" />
                  <p className="partner-name">Kibabii University<br />in Kenya</p>
                </div>
              </a>
              <a href="https://mak.ac.ug/" target="_blank" rel="noopener noreferrer" className="partner-logo-card">
                <div className="partner-logo-content">
                  <img src="/makererelogo.png" alt="Makerere University" />
                  <p className="partner-name">Makerere University<br />in Uganda</p>
                </div>
              </a>
              <a href="https://www.unn.edu.ng/" target="_blank" rel="noopener noreferrer" className="partner-logo-card">
                <div className="partner-logo-content">
                  <img src="/universityofnigeria.png" alt="University of Nigeria" />
                  <p className="partner-name">University of Nigeria</p>
                </div>
              </a>
              <a href="https://www.uneswa.ac.sz/" target="_blank" rel="noopener noreferrer" className="partner-logo-card">
                <div className="partner-logo-content">
                  <img src="/university-of-eswatini-logo.png" alt="University of Eswatini" />
                  <p className="partner-name">University of Eswatini</p>
                </div>
              </a>
            </div>
          </div>

          {/* Platform Features */}
          <div className="platform-features mt-4">
            <h2 className="text-center mb-4">Platform Capabilities</h2>
            <div className="features-grid-large">
              <div className="feature-card-large" onClick={() => setActiveCapability('soil')}>
                <div className="feature-icon-large"><FaSeedling /></div>
                <h3>Soil Management</h3>
                <p>Rapid soil diagnostics and precision-based agroecological recommendations.</p>
              </div>

              <div className="feature-card-large" onClick={() => setActiveCapability('animal')}>
                <div className="feature-icon-large"><GiCow /></div>
                <h3>Animal Health</h3>
                <p>IoT and AI-powered livestock health monitoring and diagnostics.</p>
              </div>

              <div className="feature-card-large" onClick={() => setActiveCapability('iot')}>
                <div className="feature-icon-large"><GiWheat /></div>
                <h3>IoT-Based Crop Pest & Disease Management</h3>
                <p>AI-driven crop diagnostics with organic and conventional treatment pathways.</p>
              </div>

              <div className="feature-card-large" onClick={() => setActiveCapability('climate')}>
                <div className="feature-icon-large"><FaCloudSun /></div>
                <h3>Real-Time Climate & Crop Analytics</h3>
                <p>Localised climate forecasts translated into crop-specific guidance.</p>
              </div>

              <div className="feature-card-large" onClick={() => setActiveCapability('market')}>
                <div className="feature-icon-large"><FaChartLine /></div>
                <h3>Market & Traceability Tools</h3>
                <p>Predictive pricing, regional market insights and traceability features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>Technology</h2>
            <p>
              Angaza SATFARM is built in partnership with Kodra Holdings Limited. Kodra is a Kenya based tech startup that is focused on automation and IoT. Their strength is AI and application development. 
            </p>
            <p><b>Kodra Holding Ltd</b></p>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
<section className="section section-alt" style={{ position: 'relative' }}>
  <div className="container">
    <h2 className="text-center mb-4">SATFARM in Action</h2>

    {/* Carousel buttons */}
    <button
      onClick={() => scrollCarousel('left')}
      style={{
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        background: '#787878cc',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      ‹
    </button>

    <button
      onClick={() => scrollCarousel('right')}
      style={{
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        background: '#787878cc',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      ›
    </button>

    <div
      ref={carouselRef}
      style={{
        overflowX: 'auto',
        width: '100%',
        scrollBehavior: 'smooth',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', width: 'max-content' }}>
        {images.map((num) => (
          <img
            key={num}
            src={`/${num}.png`}
            alt={`SATFARM ${num}`}
            style={{
              width: '200px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '6px',
              display: 'block',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedImage(`/${num}.png`)}
          />
        ))}
      </div>
    </div>
  </div>

  {/* Lightbox overlay */}
  {selectedImage && (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={() => setSelectedImage(null)}
    >
      <div style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedImage}
          alt="Preview"
          style={{ maxHeight: '80vh', maxWidth: '80vw', borderRadius: '8px' }}
        />
        <button
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            background: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          ✕
        </button>
      </div>
    </div>
  )}
</section>

{/* Support Section */}
<section className="section">
  <div className="container text-center">
    <h2 className="mb-2">Need Support?</h2>
    <p className="mb-3">Contact us for assistance with any issues or questions.</p>
    <div className="cta-buttons">
      <Link to="/contact" className="btn btn-primary">Request support</Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default SATFARM;
