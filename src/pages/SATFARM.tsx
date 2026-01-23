import { useState, useRef } from 'react';
import './Page.css';

const SATFARM = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
              <div className="feature-card-large">
                <div className="feature-icon-large">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>AI-Powered Advisory Services</h3>
                <p>
                  Intelligent recommendations based on real-time data analysis, helping farmers make informed
                  decisions about planting, irrigation, fertilization, and pest management.
                </p>
              </div>

              <div className="feature-card-large">
                <div className="feature-icon-large">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h3>IoT-Based Farm Monitoring</h3>
                <p>
                  Connected sensors and devices provide continuous monitoring of soil conditions, weather patterns,
                  crop health, and other critical farm parameters.
                </p>
              </div>

              <div className="feature-card-large">
                <div className="feature-icon-large">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </div>
                <h3>Real-Time Climate & Crop Analytics</h3>
                <p>
                  Access to up-to-date climate data, weather forecasts, and crop performance analytics to support
                  climate-smart farming practices.
                </p>
              </div>

              <div className="feature-card-large">
                <div className="feature-icon-large">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3>Market & Traceability Tools</h3>
                <p>
                  Connect farmers to markets while ensuring product traceability throughout the value chain,
                  enhancing market access and product quality assurance.
                </p>
              </div>
            </div>
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
              background: '#787878cc)',
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
              background: '#787878cc)',
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
                width: 'max-content'
              }}
            >
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
                    cursor: 'pointer'
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
            <div
              style={{ position: 'relative' }}
              onClick={(e) => e.stopPropagation()}
            >
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
    </div>
  );
};

export default SATFARM;
