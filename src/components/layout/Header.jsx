import { Link } from 'react-router-dom';
import lynxLogo from '../../assets/logo/lynx.png';
import luxxLogo from '../../assets/logo/LUXX logo-01.png';

const Header = () => {
  return (
    <header className="w-full" style={{ backgroundColor: '#000000', margin: 0, padding: 0 }}>
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: 0, paddingRight: 0, width: '100%' }}>
        <div className="flex items-center gap-3">
          <img 
            src={lynxLogo} 
            alt="Lynx Logo" 
            style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
          />
          <img 
            src={luxxLogo} 
            alt="LUXX" 
            style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
          />
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

      {/* Navigation Bar */}
      <nav style={{ padding: '1rem 0', margin: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
          <Link 
            to="/" 
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
          </Link>
          <Link 
            to="/about" 
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
          </Link>
          <Link 
            to="/services" 
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
          </Link>
          <Link 
            to="/price" 
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
          </Link>
          <Link 
            to="/location" 
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
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
