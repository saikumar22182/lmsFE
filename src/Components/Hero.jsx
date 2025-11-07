import React from 'react'
import awsLogo from '../assets/aws1.png'
import dellLogo from '../assets/dell.png'
import intelLogo from '../assets/intel.png'
import metaLogo from '../assets/meta.jpeg'
import oracleLogo from '../assets/oracle.png'
import sonyLogo from '../assets/sony.png'

const COMPANIES = [
  {
    name: 'AWS',
    logo: awsLogo,
    careerUrl: 'https://www.amazon.jobs/en/teams/aws'
  },
  {
    name: 'Dell',
    logo: dellLogo,
    careerUrl: 'https://jobs.dell.com'
  },
  {
    name: 'Intel',
    logo: intelLogo,
    careerUrl: 'https://jobs.intel.com'
  },
  {
    name: 'Meta',
    logo: metaLogo,
    careerUrl: 'https://www.metacareers.com'
  },
  {
    name: 'Oracle',
    logo: oracleLogo,
    careerUrl: 'https://www.oracle.com/careers'
  },
  {
    name: 'Sony',
    logo: sonyLogo,
    careerUrl: 'https://www.sony.com/en/careers'
  }
];

const Hero = () => {
  const [isPaused, setIsPaused] = React.useState(false);

  const handleCompanyClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section style={styles.hero}>
      <h2 style={styles.title}>Recruitment partners</h2>
      
      <div style={styles.marqueeContainer} >
        <div 
          style={styles.marqueeWrap}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{
            ...styles.marquee,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}>
            {/* Three copies for smoother infinite loop */}
            {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, index) => (
              <div 
                key={index} 
                style={styles.companyCard}
                onClick={() => handleCompanyClick(company.careerUrl)}
                role="button"
                tabIndex={0}
                aria-label={`Visit ${company.name} careers page`}
              >
                <div style={styles.logoBox}>
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    style={styles.logo}
                  />
                </div>
                <span style={styles.companyName}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    padding: '60px 0',
    background: '#ffffff',
    overflow: 'hidden',
    borderBottom: '1px solid #e5e7eb',
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: 'center',
    color: '#1f2937',
    marginBottom: 40,
  },
  marqueeContainer: {
    position: 'relative',
    maxWidth: '100%',
    overflow: 'hidden',
    background: 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0) 2%, rgba(255,255,255,0) 98%, #fff 100%)',
  },
  marqueeWrap: {
    width: '100%',
    overflow: 'hidden',
    padding: '30px 0',
    position: 'relative',
  },
  marquee: {
    display: 'flex',
    animation: 'marquee 5s linear infinite',
    gap: 64,
    willChange: 'transform',
  },
  companyCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    cursor: 'pointer',
    padding: '16px 32px',
    borderRadius: 16,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    background: 'transparent',
    '&:hover': {
      transform: 'translateY(-8px)',
      background: '#f8fafc',
    },
  },
  logoBox: {
    width: 140,
    height: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: '16px',
    background: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      transform: 'scale(1.05)',
    },
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  companyName: {
    fontSize: 16,
    fontWeight: 600,
    color: '#374151',
    textAlign: 'center',
  }
}

// Add the keyframe animation to the document
const styleSheet = document.createElement('style')
styleSheet.textContent = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-100% / 3)); }
  }

  .marquee {
    will-change: transform;
    transition: all 0.3s ease;
  }

  .company-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .company-card:hover {
    transform: translateY(-8px);
    background: #f8fafc;
  }

  .logo-box {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .logo-box:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    transform: scale(1.05);
  }
`
document.head.appendChild(styleSheet)

export default Hero
