import { useState } from 'react';
import lynxLogo from '../../assets/logo/lynx.png';
import luxxLogo from '../../assets/logo/LUXX logo-01.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full" style={{ backgroundColor: '#000000', margin: 0, padding: 0, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999 }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          padding-top: 0;
        }
        
        .burger-icon {
          display: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .burger-line {
          width: 25px;
          height: 3px;
          background-color: #A37A00;
          margin: 5px 0;
          transition: 0.3s;
        }
        
        .mobile-menu {
          display: none;
        }
        
        @media (max-width: 768px) {
          .header-logo { height: 60px !important; }
          .header-logo-small { height: 55px !important; }
          .logo-section div { margin-left: -40px !important; }
          
          .burger-icon {
            display: block;
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1001;
          }
          
          .burger-icon.open .burger-line:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
          }
          
          .burger-icon.open .burger-line:nth-child(2) {
            opacity: 0;
          }
          
          .burger-icon.open .burger-line:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
          }
          
          .nav-container {
            display: none !important;
          }
          
          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: #000000;
            transition: right 0.3s ease-in-out;
            z-index: 1000;
            padding: 5rem 2rem 2rem 2rem;
            gap: 2rem;
            border-left: 1px solid #A37A00;
          }
          
          .mobile-menu.open {
            right: 0;
          }
          
          .mobile-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 999;
          }
          
          .mobile-overlay.open {
            display: block;
          }
          
          .mobile-nav-link {
            color: #A37A00 !important;
            font-size: 1.2rem !important;
            padding: 1rem 0 !important;
            border-bottom: 1px solid #333 !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
      {/* Logo Section */}
      <div className="logo-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: 0, paddingRight: 0, width: '100%', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '-80px' }}>
          <img 
            src={lynxLogo} 
            alt="Lynx Logo" 
            className="header-logo"
            style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
          />
          <img 
            src={luxxLogo} 
            alt="LUXX" 
            className="header-logo-small"
            style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
          />
        </div>
        
        {/* Burger Icon */}
        <div 
          className={`burger-icon ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>

      {/* Divider Line */}
      <div 
        style={{ 
          height: '1px',
          backgroundColor: '#FFD700',
          width: '100%',
          margin: 0,
          padding: 0
        }}
      ></div>

      {/* Navigation Bar - Desktop */}
      <nav style={{ padding: '1rem 0', margin: 0 }}>
        <div className="nav-container" style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0, paddingLeft: '6rem', marginLeft: '-80px' }}>
          <a 
            href="https://deeplink.afa-sports.com/Complex/474"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ 
              color: '#8B6914', 
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem',
              marginRight: '2rem',
              fontFamily: "'Montserrat', sans-serif"
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Book a court
          </a>
          <a 
            href="#about" 
            className="nav-link"
            style={{ 
              color: '#8B6914', 
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem',
              marginRight: '2rem',
              fontFamily: "'Montserrat', sans-serif"
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            About us
          </a>
          <a 
            href="#services" 
            className="nav-link"
            style={{ 
              color: '#8B6914', 
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem',
              marginRight: '2rem',
              fontFamily: "'Montserrat', sans-serif"
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Services
          </a>
          <a 
            href="#price" 
            className="nav-link"
            style={{ 
              color: '#8B6914', 
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem',
              marginRight: '2rem',
              fontFamily: "'Montserrat', sans-serif"
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Price
          </a>
          <a 
            href="#location" 
            className="nav-link"
            style={{ 
              color: '#8B6914', 
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1rem',
              fontFamily: "'Montserrat', sans-serif"
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Location
          </a>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div 
        className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a 
          href="https://deeplink.afa-sports.com/Complex/474"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-nav-link"
          onClick={closeMenu}
          style={{ 
            color: '#A37A00', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1.2rem',
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          Book a court
        </a>
        <a 
          href="#about" 
          className="mobile-nav-link"
          onClick={closeMenu}
          style={{ 
            color: '#A37A00', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1.2rem',
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          About us
        </a>
        <a 
          href="#services" 
          className="mobile-nav-link"
          onClick={closeMenu}
          style={{ 
            color: '#A37A00', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1.2rem',
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          Services
        </a>
        <a 
          href="#price" 
          className="mobile-nav-link"
          onClick={closeMenu}
          style={{ 
            color: '#A37A00', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1.2rem',
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          Price
        </a>
        <a 
          href="#location" 
          className="mobile-nav-link"
          onClick={closeMenu}
          style={{ 
            color: '#A37A00', 
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1.2rem',
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          Location
        </a>
      </div>
    </header>
  );
};

export default Header;
