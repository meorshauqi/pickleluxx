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
  return (
    <>
      <div
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
        <h1 style={{
          color: '#A37A00',
          fontSize: '2rem',
          fontWeight: '500',
          letterSpacing: '0.23em',
          margin: 0,
          textTransform: 'uppercase',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          PICKLELUXX
        </h1>

        {/* CITY CENTRE */}
        <h2 style={{
          color: '#A37A00',
          fontSize: '4rem',
          fontWeight: '500',
          letterSpacing: '0.23em',
          margin: 0,
          textTransform: 'uppercase',
          fontFamily: '"Times New Roman", serif'
        }}>
          CITY CENTRE
        </h2>

        {/* BOOK A COURT Button */}
        <button style={{
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
        <h1 style={{
          color: '#A37A00',
          fontSize: '2rem',
          fontWeight: '500',
          letterSpacing: '0.23em',
          margin: 0,
          textTransform: 'uppercase',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          PICKLELUXX
        </h1>

        {/* CITY CENTER */}
        <h2 style={{
          color: '#A37A00',
          fontSize: '4rem',
          fontWeight: '500',
          letterSpacing: '0.23em',
          margin: 0,
          textTransform: 'uppercase',
          fontFamily: '"Times New Roman", serif'
        }}>
          JANDA BAIK
        </h2>

        {/* BOOK A COURT Button */}
        <button style={{
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

      </div>

      {/* About Section with Maroon Background */}
      <div
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
      <div style={{ backgroundColor: '#000000', padding: '0.5rem 0' }}>
        {/* Top Row - 3 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          padding: '0 0 10px 0'
        }}>
          <ServiceCard title="MEMBERSHIP" image={membershipImg} buttonText="Sign up" />
          <ServiceCard title="EVENTS" image={eventsImg} buttonText="Sign up" />
          <ServiceCard title="PADEL COACH" image={coachImg} buttonText="Sign up" />
        </div>

        {/* Bottom Row - 2 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
          padding: '0'
        }}>
          <ServiceCard title="PADEL LEAGUE" image={leagueImg} buttonText="COMING SOON" />
          <ServiceCard title="SPONSORSHIP" image={sponsorshipImg} buttonText="Read more" />
        </div>
      </div>

      {/* Location/Contact Section */}
      <div style={{ display: 'flex', width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
        {/* Left Column - Image (60%) */}
        <div style={{
          width: '50%',
          backgroundImage: `url(${aboutImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0
        }}></div>

        {/* Right Column - Information (40%) */}
        <div style={{
          width: '50%',
          backgroundColor: '#000000',
          padding: '4rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '3rem',
          margin: 0
        }}>
          {/* LUXX Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img
              src={luxxLogo}
              alt="LUXX"
              style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
            />
          </div>

          {/* Opening Hours */}
          <div style={{ width: '100%' }}>
            <h3 style={{
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
            <h3 style={{
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
        </div>
      </div>

      {/* Court Price Section */}
      <div style={{ display: 'flex', width: '100%', minHeight: '100vh', margin: 0, paddingTop: '0.7rem', paddingBottom: 0, paddingLeft: 0, paddingRight: 0, gap: '10px' }}>
        {/* Left Column - Image (50%) */}
        <div style={{
          width: 'calc(50% - 5px)',
          backgroundImage: `url(${locationImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0
        }}></div>

        {/* Right Column - Information (50%) */}
        <div style={{
          width: 'calc(50% - 5px)',
          backgroundColor: '#582520',
          padding: '4rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '2.5rem',
          margin: 0
        }}>
          {/* COURT PRICE Title */}
          <h2 style={{
            color: '#A37A00',
            fontSize: '2rem',
            fontWeight: '500',
            margin: 0,
            textTransform: 'uppercase',
            textAlign: 'left',
            width: '100%',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            COURT PRICE
          </h2>

          {/* VIP COURT */}
          <div style={{ width: '100%' }}>
            <h3 style={{
              color: '#A37A00',
              fontSize: '1.5rem',
              fontWeight: '500',
              margin: '0 0 0.5rem 0',
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              VIP COURT
            </h3>
            <p style={{
              color: '#A37A00',
              fontSize: '1rem',
              margin: 0,
              lineHeight: '1.6',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              MYR --
            </p>
          </div>

          {/* INDOOR COURT */}
          <div style={{ width: '100%' }}>
            <h3 style={{
              color: '#A37A00',
              fontSize: '1.5rem',
              fontWeight: '500',
              margin: '0 0 0.5rem 0',
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              INDOOR COURT
            </h3>
            <p style={{
              color: '#A37A00',
              fontSize: '1rem',
              margin: 0,
              lineHeight: '1.6',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              MYR --
            </p>
          </div>

          {/* OUTDOOR COURT */}
          <div style={{ width: '100%' }}>
            <h3 style={{
              color: '#A37A00',
              fontSize: '1.5rem',
              fontWeight: '500',
              margin: '0 0 0.5rem 0',
              textTransform: 'uppercase',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              OUTDOOR COURT
            </h3>
            <p style={{
              color: '#A37A00',
              fontSize: '1rem',
              margin: 0,
              lineHeight: '1.6',
              textAlign: 'left',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              MYR --
            </p>
          </div>
        </div>
      </div>
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
