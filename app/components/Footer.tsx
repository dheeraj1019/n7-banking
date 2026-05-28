"use client";
import "./csss/footer.css"
const ArrowIcon = () => (
  <svg width="13.57" height="14.5" viewBox="0 0 14 15" fill="none">
    <line x1="0" y1="5.79" x2="10.92" y2="5.79" stroke="rgba(0,180,253,1)" strokeWidth="0.94" />
    <polyline points="5.46,0.33 10.92,5.79 5.46,11.25" fill="none" stroke="rgba(0,180,253,1)" strokeWidth="0.94" />
  </svg>
)

const addresses = [
  {
    city: 'London',
    address: 'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.'
  },
  {
    city: 'Dubai',
    address: 'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates'
  },
  {
    city: 'London',
    address: 'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India'
  },
]

const solutions = [
  'Core Banking CB7', 'Digital Banking N7', 'Open Banking',
  'Loan Origination System', 'Loan Management System', 'Digital Transformation'
]

const banking = [
  'About Us', 'Solutions', 'Contact', 'Company',
  'Careers', 'Insights', 'Core Team', 'Brand Center'
]

const socials = ['LinkedIn', 'X']

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      width: '1440px',
      height: '787px',
      background: 'rgba(0, 13, 18, 1)',
      overflow: 'hidden',
      fontFamily: 'Archivo, sans-serif',
    }}>

      {/* ── Ellipse 1 — background glow ── */}
      <div style={{
        position: 'absolute',
        width: '1440px',
        height: '556.77px',
        top: '547.54px',
        left: '0px',
        background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
        backdropFilter: 'blur(200px)',
        borderRadius: '50%',
        opacity: 0.05,
        pointerEvents: 'none',
      }} />

      {/* ── N7 Logo — left, top: 130px, left: 0 ── */}
      <div style={{
        position: 'absolute',
        top: '130px',
        left: '40px',
        width: '440px',
        height: '232px',
        overflow: 'hidden',
        background: '#000',
      }}>
        
        {/* N7 text */}
        <span style={{
          position: 'absolute',
          top: '-53px',
          left: '-99.47px',
          width: '660.72px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          fontFamily: 'Archivo, sans-serif',
          fontWeight: 500,
          fontSize: '338.3px',
          lineHeight: '100%',
          letterSpacing: '0',
          whiteSpace: 'nowrap',
          background: 'linear-gradient(160deg, #01cffd 0%, #01b4fd 30%, #0180e0 60%, #0a4fc4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          N7
        </span>
      </div>

      {/* ── Frame 120 — right side, top: 130px, left: 543.68px ── */}
      <div style={{
        position: 'absolute',
        top: '130px',
        left: '543.68px',
        width: '816px',
        height:509,
        display: 'flex',
        flexDirection: 'column',
        gap: '34px',
      }}>

        {/* Row 1 — 3 address columns */}
       
        {/* Row 2 — 3 nav columns */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '34px' }}>

          {/* Solutions */}
          <div className="footerDiv">
            <div className="addressDiv">
              <h3 className="cityName">
                London
              </h3>
              <p className="addressP">
                Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge,TN14 6EP, England, United Kingdom.
              </p>

            </div>
            <div className="bottomDiv">
                <p className="addressP">Solutions</p>
                 <div className="addressSolution">
             {solutions.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', cursor: 'pointer' }}>
                <span style={{ fontSize: '16px', fontWeight: 400, lineHeight: '130%', color: 'rgba(233,244,249,0.7)' }}>{item}</span>
                <ArrowIcon />
              </div>
            ))}

            </div>
            </div>
           
          </div>
          {/* solution2 */}
          <div className="footerDiv">
            <div className="addressDiv">
              <h3 className="cityName">
                Dubai
              </h3>
              <p className="addressP">
                Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
              </p>

            </div>
            <div className="bottomDiv">
                <p className="addressP">N7 Banking</p>
                 <div className="addressSolution">
             {banking.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', cursor: 'pointer' }}>
                <span style={{ fontSize: '16px', fontWeight: 400, lineHeight: '130%', color: 'rgba(233,244,249,0.7)' }}>{item}</span>
                <ArrowIcon />
              </div>
            ))}

            </div>
            </div>
           
          </div>
          {/* sol3 */}
          <div className="footerDiv">
            <div className="addressDiv">
              <h3 className="cityName">
                London
              </h3>
              <p className="addressP">
                Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge,TN14 6EP, England, United Kingdom.
              </p>

            </div>
            <div className="bottomDiv">
                <p className="addressP">Our Socials</p>
                 <div className="addressSolution">
             {socials.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', cursor: 'pointer' }}>
                <span style={{ fontSize: '16px', fontWeight: 400, lineHeight: '130%', color: 'rgba(233,244,249,0.7)' }}>{item}</span>
                <ArrowIcon />
              </div>
            ))}

            </div>
            </div>
           
          </div>
        </div>
        
      </div>

      {/* ── Copyright — bottom ── */}
      <div style={{
        position: 'absolute',
        width: '779.43px',
        height: '36px',
        top: '718.96px',
        left: '543.68px',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '130%',
        color: 'rgba(233, 244, 249, 1)',
        opacity: 0.3,
        whiteSpace: 'normal',
      }}>
        Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
      </div>
   

    </footer>
  )
}