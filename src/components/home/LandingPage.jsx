import { useState, useEffect } from 'react';
import homeBg from '../../assets/bg/home-1.png';
import homeBg2 from '../../assets/bg/home-2.png';
import luxxLogo from '../../assets/logo/LUXX logo-01.png';
import membershipImg from '../../assets/services/membership-img.jpg';
import eventsImg from '../../assets/services/events-img.jpg';
import coachImg from '../../assets/services/img.jpg';
import leagueImg from '../../assets/services/league-img.jpg';
import sponsorshipImg from '../../assets/services/sponsorship-img.jpg';
import aboutImg from '../../assets/services/about.jpg';
import locationImg from '../../assets/services/location.png';

const LandingPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .first-hero-section {
          margin-top: 160px;
        }
        .scroll-to-top {
          position: fixed;
          bottom: 2.5rem;
          right: 2.5rem;
          background: linear-gradient(135deg, #A37A00 0%, #D1C4B0 100%);
          color: #FFFFFF;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid rgba(209, 196, 176, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 700;
          box-shadow: 0 8px 24px rgba(163, 122, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transform: translateY(30px) scale(0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .scroll-to-top::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #D1C4B0, #A37A00);
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 8px 24px rgba(163, 122, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 8px 24px rgba(163, 122, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(163, 122, 0, 0.4);
          }
        }
        
        .scroll-to-top.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .scroll-to-top:hover {
          background: linear-gradient(135deg, #D1C4B0 0%, #FFD700 100%);
          color: #000000;
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 12px 32px rgba(163, 122, 0, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 215, 0, 0.5);
          animation: none;
        }
        .scroll-to-top:hover::before {
          opacity: 1;
        }
        .scroll-to-top:active {
          transform: translateY(-4px) scale(0.98);
        }
        @media (max-width: 768px) {
          .first-hero-section {
            margin-top: 100px;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .hero-title { 
            font-size: 1.5rem !important; 
            text-align: center !important;
            width: 100% !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .hero-subtitle { 
            font-size: 2.5rem !important; 
            text-align: center !important;
            width: 100% !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .hero-button { padding: 0.8rem 2rem !important; font-size: 0.9rem !important; }
          .services-grid-3 { grid-template-columns: 1fr !important; }
          .services-grid-2 { grid-template-columns: 1fr !important; }
          .split-section { flex-direction: column !important; gap: 0 !important; padding-top: 0 !important; }
          .split-left { width: 100% !important; min-height: 50vh !important; }
          .split-right { width: 100% !important; }
          .about-logo { height: 80px !important; }
          .about-text { font-size: 1rem !important; padding: 3rem 1.5rem !important; }
          .section-padding { padding: 3rem 1.5rem !important; }
          .info-title { font-size: 1rem !important; }
          .court-price-title { font-size: 1.8rem !important; }
          .court-type-title { font-size: 1.2rem !important; }
          .location-title { font-size: 1.5rem !important; }
          .coming-soon-text { font-size: 1.3rem !important; }
          .scroll-to-top {
            width: 55px !important;
            height: 55px !important;
            bottom: 1.5rem !important;
            right: 1.5rem !important;
            font-size: 1.5rem !important;
          }
        }
        @media (max-width: 400px) {
          .first-hero-section {
            margin-top: 90px;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .hero-title { 
            font-size: 1.1rem !important; 
            letter-spacing: 0.1em !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .hero-subtitle { 
            font-size: 1.8rem !important; 
            letter-spacing: 0.1em !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .hero-button { 
            padding: 0.7rem 1.5rem !important; 
            font-size: 0.85rem !important; 
          }
          .scroll-to-top {
            width: 50px !important;
            height: 50px !important;
            bottom: 1rem !important;
            right: 1rem !important;
            font-size: 1.3rem !important;
          }
        }
      `}</style>
      <div
        className="first-hero-section"
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1.5rem'
        }}
      >
        {/* PICKLELUXX */}
        <h1 className="hero-title" style={{
          color: '#A37A00',
          fontSize: '2rem',
          fontWeight: '500',
          letterSpacing: '0.23em',
          margin: 0,
          textTransform: 'uppercase',
          fontFamily: "'Montserrat', sans-serif",
          textAlign: 'center',
          width: '100%'
        }}>
          PICKLELUXX
        </h1>

        {/* CITY CENTRE */}
        <h2 className="hero-subtitle" style={{
          color: '#A37A00',
          fontSize: '4rem',
          fontWeight: '500',
          letterSpacing: '0.23em',
          margin: 0,
          textTransform: 'uppercase',
          fontFamily: '"Times New Roman", serif',
          textAlign: 'center',
          width: '100%'
        }}>
          CITY CENTRE
        </h2>

        {/* BOOK A COURT Button */}
        <a 
          href="https://deeplink.afa-sports.com/Complex/474"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button className="hero-button" style={{
            backgroundColor: '#D1C4B0',
            color: '#000000',
            border: 'none',
            padding: '1rem 3rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: "'Montserrat', sans-serif",
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            transition: 'opacity 0.3s'
          }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            BOOK A COURT
          </button>
        </a>
      </div>

      {/* Second Section with home-2.png */}
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${homeBg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1.5rem'
        }}
      >
        {/* PICKLELUXX */}
        <h1 className="hero-title" style={{
          color: '#A37A00',
          fontSize: '2rem',
          fontWeight: '500',
          letterSpacing: '0.23em',
          margin: 0,
          textTransform: 'uppercase',
          fontFamily: "'Montserrat', sans-serif",
          textAlign: 'center',
          width: '100%'
        }}>
          PICKLELUXX
        </h1>

        {/* CITY CENTER */}
        <h2 className="hero-subtitle" style={{
          color: '#A37A00',
          fontSize: '4rem',
          fontWeight: '500',
          letterSpacing: '0.23em',
          margin: 0,
          textTransform: 'uppercase',
          fontFamily: '"Times New Roman", serif',
          textAlign: 'center',
          width: '100%'
        }}>
          JANDA BAIK
        </h2>

        {/* BOOK A COURT Button */}
        <a 
          href="https://deeplink.afa-sports.com/Complex/474"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button className="hero-button" style={{
            backgroundColor: '#D1C4B0',
            color: '#000000',
            border: 'none',
            padding: '1rem 3rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: "'Montserrat', sans-serif",
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            transition: 'opacity 0.3s'
          }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            BOOK A COURT
          </button>
        </a>

      </div>

      {/* About Section with Maroon Background */}
      <div
        id="about"
        className="about-text"
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#582520',
          margin: 0,
          padding: '4rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '3rem'
        }}
      >
        {/* LUXX Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={luxxLogo}
            alt="LUXX"
            className="about-logo"
            style={{ height: '120px', width: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* About Text */}
        <div
          style={{
            maxWidth: '900px',
            color: '#FFFFFF',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          <p style={{ margin: '0 0 1.5rem 0' }}>
            At Luxx, we redefine what a premium pickleball club can be. As one of the first of its kind in the region,
            we raise the bar for racket sports and exclusive social clubs in Asia.
            Located in the iconic Berjaya Times Square, Kuala Lumpur, Luxx introduces a vibrant and elevated pickleball experience to the heart of the city bringing together sport, lifestyle, and community under one sophisticated space.
          </p>

          <p style={{ margin: '0 0 1.5rem 0' }}>
            Expanding our vision, our second venue at the serene 101 Resort in Janda Baik, Pahang offers a luxurious retreat surrounded by nature, where members enjoy world class courts in a calm, resort style atmosphere.
          </p>

          <p style={{ margin: '0 0 1.5rem 0' }}>
            At Luxx, it's more than the thrill of pickleball it's a full lifestyle. Members indulge in curated food and beverages, fitness offerings, and social gatherings all designed within an elevated environment that blends comfort, elegance, and energy.
          </p>

          <p style={{ margin: 0 }}>
            Luxx is where premium sport meets modern leisure crafted for those who appreciate exclusivity, community, and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" style={{ backgroundColor: '#000000', padding: '0.5rem 0' }}>
        {/* Top Row - 3 Columns */}
        <div className="services-grid-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          padding: '0 0 10px 0'
        }}>
          <ServiceCard title="MEMBERSHIP" image={membershipImg} buttonText="COMING SOON" />
          <ServiceCard title="EVENTS" image={eventsImg} buttonText="COMING SOON" />
          <ServiceCard title="PADEL COACH" image={coachImg} buttonText="COMING SOON" />
        </div>

        {/* Bottom Row - 2 Columns */}
        <div className="services-grid-2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
          padding: '0'
        }}>
          <ServiceCard title="PADEL LEAGUE" image={leagueImg} buttonText="COMING SOON" />
          <ServiceCard title="SPONSORSHIP" image={sponsorshipImg} buttonText="COMING SOON" />
        </div>
      </div>

      {/* Location/Contact Section */}
      <div id="location" className="split-section" style={{ display: 'flex', width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
        {/* Left Column - Image (60%) */}
        <div className="split-left" style={{
          width: '50%',
          backgroundImage: `url(${aboutImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0,
          minHeight: '50vh'
        }}></div>

        {/* Right Column - Information (40%) */}
        <div className="split-right section-padding" style={{
          width: '50%',
          backgroundColor: '#000000',
          padding: '4rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '3.5rem',
          margin: 0
        }}>
          {/* LUXX Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img
              src={luxxLogo}
              alt="LUXX"
              className="about-logo"
              style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* Opening Hours */}
          <div style={{ width: '100%' }}>
            <h3 className="info-title" style={{
              color: '#A37A00',
              fontSize: '1.2rem',
              fontWeight: '500',
              margin: '0 0 1rem 0',
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Opening Hours
            </h3>
            <p style={{
              color: '#A37A00',
              fontSize: '1rem',
              margin: 0,
              lineHeight: '1.6',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Mon - Sun 0800 0000
            </p>
          </div>

          {/* Address */}
          <div style={{ width: '100%' }}>
            <h3 className="info-title" style={{
              color: '#A37A00',
              fontSize: '1.2rem',
              fontWeight: '500',
              margin: '0 0 1rem 0',
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Address
            </h3>
            <p style={{
              color: '#A37A00',
              fontSize: '1rem',
              margin: '0 0 0.5rem 0',
              lineHeight: '1.6',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Berjaya Time Square, 1 Jalan Imbi, 55100 Kuala Lumpur
            </p>
            <p style={{
              color: '#A37A00',
              fontSize: '1rem',
              margin: 0,
              lineHeight: '1.6',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Ashida Villa, Lot 5303, Kampung Janda Baik, Pulau Santap, 28750 Bentong
            </p>
          </div>

          {/* Phone */}
          <div style={{ width: '100%' }}>
            <h3 className="info-title" style={{
              color: '#A37A00',
              fontSize: '1.2rem',
              fontWeight: '500',
              margin: '0 0 1rem 0',
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Phone
            </h3>
            <p style={{
              color: '#A37A00',
              fontSize: '1rem',
              margin: 0,
              lineHeight: '1.6',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              +60 18 224 5123
            </p>
          </div>
        </div>
      </div>

      {/* Court Price Section */}
      <div id="price" className="split-section court-price-section" style={{ display: 'flex', width: '100%', minHeight: '100vh', margin: 0, paddingTop: '0.7rem', paddingBottom: 0, paddingLeft: 0, paddingRight: 0, gap: '10px' }}>
        {/* Left Column - Image (50%) */}
        <div className="split-left" style={{
          width: 'calc(50% - 5px)',
          backgroundImage: `url(${locationImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0,
          minHeight: '50vh'
        }}></div>

        {/* Right Column - Information (50%) */}
        <div className="split-right section-padding" style={{
          width: 'calc(50% - 5px)',
          backgroundColor: '#582520',
          padding: '4rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '3rem',
          margin: 0
        }}>
          {/* COURT PRICE Title */}
          <h2 className="court-price-title" style={{
            color: '#A37A00',
            fontSize: '2.5rem',
            fontWeight: '600',
            margin: 0,
            textTransform: 'uppercase',
            textAlign: 'left',
            width: '100%',
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: '0.05em'
          }}>
            COURT PRICE
          </h2>

          {/* JANDA BAIK Section */}
          <div style={{ width: '100%' }}>
            <h3 className="location-title" style={{
              color: '#D1C4B0',
              fontSize: '2rem',
              fontWeight: '600',
              margin: '0 0 1.5rem 0',
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.1em'
            }}>
              JANDA BAIK
            </h3>
            
            <h4 className="court-type-title" style={{
              color: '#A37A00',
              fontSize: '1.5rem',
              fontWeight: '600',
              margin: '0 0 2rem 0',
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.08em'
            }}>
              ALL DAY
            </h4>
            
            {/* Morning Slot */}
            <div style={{ 
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              borderBottom: '1px solid rgba(163, 122, 0, 0.3)',
              paddingBottom: '1rem'
            }}>
              <span style={{
                color: '#A37A00',
                fontSize: '1.1rem',
                fontWeight: '400',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                7am - 10am
              </span>
              <span style={{
                color: '#A37A00',
                fontSize: '1.5rem',
                fontWeight: '700',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                RM 50.00
              </span>
            </div>

            {/* Afternoon Slot */}
            <div style={{ 
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              borderBottom: '1px solid rgba(163, 122, 0, 0.3)',
              paddingBottom: '1rem'
            }}>
              <span style={{
                color: '#A37A00',
                fontSize: '1.1rem',
                fontWeight: '400',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                11am - 4pm
              </span>
              <span style={{
                color: '#A37A00',
                fontSize: '1.5rem',
                fontWeight: '700',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                RM 35.00
              </span>
            </div>

            {/* Evening Slot */}
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              borderBottom: '1px solid rgba(163, 122, 0, 0.3)',
              paddingBottom: '1rem'
            }}>
              <span style={{
                color: '#A37A00',
                fontSize: '1.1rem',
                fontWeight: '400',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                5pm - 11pm
              </span>
              <span style={{
                color: '#A37A00',
                fontSize: '1.5rem',
                fontWeight: '700',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                RM 70.00
              </span>
            </div>
          </div>

          {/* TIME SQUARE Section */}
          <div style={{ width: '100%', marginTop: '2rem' }}>
            <h3 className="location-title" style={{
              color: '#D1C4B0',
              fontSize: '2rem',
              fontWeight: '600',
              margin: '0 0 1.5rem 0',
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.1em'
            }}>
              TIME SQUARE
            </h3>
            
            <p className="coming-soon-text" style={{
              color: '#A37A00',
              fontSize: '1.8rem',
              fontWeight: '500',
              margin: 0,
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif",
              fontStyle: 'italic',
              letterSpacing: '0.05em'
            }}>
              Coming Soon
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <span style={{ lineHeight: 1, display: 'block', transform: 'translateY(-2px)' }}>▲</span>
      </button>
    </>
  );
};

const ServiceCard = ({ title, image, buttonText }) => {
  return (
    <div style={{
      position: 'relative',
      height: '400px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}></div>

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 2
      }}></div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center'
      }}>
        <h3 style={{
          color: '#FFFFFF',
          fontSize: '1.5rem',
          fontWeight: '400',
          margin: '0 0 1rem 0',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          {title}
        </h3>
        <button style={{
          backgroundColor: '#D1C4B0',
          color: '#000000',
          border: 'none',
          padding: '0.5rem 1.5rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'opacity 0.3s',
          fontFamily: "'Montserrat', sans-serif"
        }}
          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
