import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import './Page.css';
import { FaSeedling, FaCloudSun, FaChartLine } from 'react-icons/fa';
import { GiCow, GiWheat } from 'react-icons/gi';

const SATFARM = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCapability, setActiveCapability] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = Array.from({ length: 20 }, (_, i) => i + 1);

  const scrollCarousel = (direction: 'left' | 'right') => {
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
          <p className="hero-subtitle">Digital Agriculture & Technology Platform</p>
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

          {/* Capability Modal */}
          {activeCapability && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.75)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000
              }}
              onClick={() => setActiveCapability(null)}
            >
              <div
                style={{
                  background: '#fff',
                  padding: '32px',
                  maxWidth: '900px',
                  maxHeight: '80vh',
                  overflowY: 'auto',
                  borderRadius: '12px',
                  position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveCapability(null)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    border: 'none',
                    background: '#2a9833ff',
                    color: '#fff',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>

                {activeCapability === 'soil' && (
                  <>
                    <h2>Soil Management</h2>
                    <p>Angaza SATFARM strengthens agroecological farming by combining rapid soil diagnostics with ecological decision-making. Using advanced soil measurement probes, the system analyses key parameters including pH, Nitrogen (N), Phosphorus (P), Potassium (K), temperature, electrical conductivity (EC), moisture, and salinity. The data is processed instantly to generate field-specific recommendations that promote soil restoration rather than short-term input dependency.
This approach supports agroecology by guiding farmers toward balanced nutrient management, improved organic matter practices, and reduced reliance on excessive inorganic fertilisers. By identifying soil acidity, nutrient imbalances, and hidden deficiencies, SATFARM enables corrective measures such as liming, legume integration, bio-fertiliser use, and targeted supplementation.
Instead of blanket fertilisation, farmers adopt precision-based, soil-sensitive interventions that enhance natural soil processes. Over time, this strengthens soil structure, improves nutrient cycling, increases biological activity, and builds resilience against climate stress. By tracking soil conditions season after season, farmers can visibly measure improvements and sustain long-term productivity. SATFARM therefore transforms soil management into a practical agroecological tool—linking science, technology, and ecological principles to restore soil health while improving farmer livelihoods.
</p>
                  </>
                )}

                {activeCapability === 'animal' && (
                  <>
                    <h2>Animal Health</h2>
                    <p>Angaza SATFARM extends its digital intelligence beyond crops to support comprehensive animal management through integrated IoT and AI technologies. The application connects with animal wearable sensors that continuously monitor critical health indicators such as body temperature, movement patterns, activity levels, and behavioral changes. These real-time data streams help detect early warning signs of stress, illness, or reproductive cycles, enabling timely intervention before conditions worsen.

In addition to wearable sensors, SATFARM allows farmers and livestock officers to capture images of affected animal parts, such as skin lesions, wounds, or abnormal swelling. Using AI-driven image analysis, the system supports rapid diagnosis of potential diseases or health conditions. Sensors that monitor animal weight and physical characteristics further enhance precision management by tracking growth performance, feed efficiency, and overall productivity.

By combining IoT-generated data with AI analytics, the platform improves disease prediction accuracy and strengthens evidence-based livestock management. Agricultural officers and animal health workers can use these insights to augment their technical expertise, providing more targeted and effective advisory support to farmers.

The application also generates actionable recommendations, including suggested treatment protocols, medicines, and management practices tailored to the identified condition. This integrated approach reduces livestock mortality, improves herd productivity, lowers treatment costs, and enhances resilience, transforming animal health management into a proactive, data-driven system.
</p>
                  </>
                )}

                {activeCapability === 'iot' && (
                  <>
                    <h2>IoT-Based Crop Pest & Disease Management</h2>
                    <p>Angaza SATFARM integrates IoT and Generative AI to deliver real-time crop pest and disease diagnostics directly to farmers’ smartphones. By capturing images of crop foliage, farmers trigger an AI-powered scan that analyses visual patterns associated with pests, fungal infections, nutrient-related stress, and other plant health issues. Within seconds, the system provides an accurate, data-driven diagnosis, reducing guesswork and delayed intervention.
The platform then generates clear, actionable recommendations tailored to the identified problem. Importantly, SATFARM provides two management pathways: one aligned with organic farming practices, including biological controls and integrated pest management techniques, and another aligned with conventional farming approaches, recommending appropriate pesticide or treatment options. This dual guidance ensures inclusivity, supporting farmers across different production systems.
Beyond individual farmers, agricultural extension officers also use the application to strengthen field diagnostics and advisory services. The tool enhances technical decision-making, offering evidence-based recommendations that improve accuracy and response time. By placing intelligent diagnostic capability in the hands of farmers and officers, SATFARM reduces crop losses, improves productivity, and supports more sustainable pest and disease management practices.
.</p>
                  </>
                )}

                {activeCapability === 'climate' && (
                  <>
                    <h2>Real-Time Climate & Crop Analytics</h2>
                    <p>Angaza SATFARM provides farmers with access to up-to-date climate data, transforming weather information into practical, crop-specific guidance. By integrating real-time and forecasted weather data, the application helps farmers anticipate rainfall patterns, temperature changes, and potential weather shocks before they occur. This early prediction system shifts farmers from being reactive to becoming predictive and better prepared.
Farmers enter their farm location and crop planting date into the app. Using this information, SATFARM not only delivers localized weather forecasts but also generates tailored advice based on the specific crop’s growth requirements. Rather than providing general rainfall or temperature outlooks, the platform analyses whether projected conditions meet the crop’s optimal needs.
If forecasted rainfall is insufficient or excessive for the planted crop, the app advises corrective actions or recommends alternative crops better suited to expected conditions. This targeted guidance improves planting decisions, reduces climate-related risks, enhances resilience, and supports sustainable productivity in increasingly unpredictable weather environments.
</p>
                  </>
                )}

                {activeCapability === 'market' && (
                  <>
                    <h2>Market & Traceability Tools</h2>
                    <p>Angaza SATFARM integrates intelligent market and traceability tools that empower farmers to make informed production and selling decisions. The application continuously scans local markets and selected online trading platforms to provide up-to-date price information specific to the crop chosen by the farmer. This ensures that pricing insights are relevant, location-sensitive, and practical.
Beyond current market prices, SATFARM uses historical trends and predictive analytics to estimate potential sale prices at the expected time of harvest. By accessing this forward-looking data at the time of planting, farmers can better evaluate profitability, select appropriate crops, and plan input investments with greater confidence.
Market information is stratified by geographic regions across the country, enabling farmers to identify high-value markets that align with their production capacity and logistical reach. The platform also connects farmers to multiple online marketplaces, expanding their market access options and reducing reliance on local middlemen.
In addition, traceability features support better record-keeping and transparency, strengthening trust with buyers while enhancing competitiveness and long-term market sustainability.
</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technology Section */}
      <section className="section">
        <div className="container" style={{ marginTop: '48px' }}>
          <div className="content-block">
            <h2>Technology</h2>
            <p>
              Angaza SATFARM is built in partnership with Kodra Holdings Limited. Kodra is a Kenya-based tech startup focused on automation and IoT. Their strength is AI and application development.
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

          <div ref={carouselRef} style={{ overflowX: 'auto', width: '100%', scrollBehavior: 'smooth' }}>
            <div style={{ display: 'flex', gap: '20px', width: 'max-content' }}>
              {images.map((num) => (
                <img
                  key={num}
                  src={`/${num}.png`}
                  alt={`SATFARM ${num}`}
                  style={{ width: '200px', height: '400px', objectFit: 'cover', borderRadius: '6px', cursor: 'pointer' }}
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
              <img src={selectedImage} alt="Preview" style={{ maxHeight: '80vh', maxWidth: '80vw', borderRadius: '8px' }} />
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
