"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import "./csss/button-primary.css"
import iphone13 from "../assests/iphone13.png";
import iphone13pro from "../assests/iphone13_pro.png";
import iphone13max from "../assests/Iphone13_max.png";
import Ticker from "./Ticker";
import ComplianceSection from "./ComplianceSection";
import vector26 from "../assests/Vector (4).png"

const GradientCheckIcon: React.FC = () => (
  <svg
    width="30"
    height="32"
    viewBox="0 0 30 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <defs>
      <linearGradient id="ellipseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00B4FD" />
        <stop offset="100%" stopColor="#003ACE" />
      </linearGradient>
    </defs>
    <circle cx="14.88" cy="16" r="9.26" fill="url(#ellipseGrad)" />
    <path
      d="M11.5 15.8 L14.2 18.5 L18.8 13.5"
      stroke="#E9F4F9"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const checkItems: string[] = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
];
//const [visible, setVisible] = useState<boolean>(false);
export default function DigitalBanking() {
  return (
    <section
      style={{
        width: "1440px",
        height: "2763px",
        //padding: "100px 40px",
        background: "rgba(255, 255, 255, 1)",
        // boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Ticker />
      {/* MAIN WRAPPER */}
      <div
        style={{
          maxWidth: "1440px",
          minHeight: "2647px",
          height: "fit-content",
          position: "relative",
          background: "rgba(233, 244, 249, 1)",
          overflow: "hidden"
        }}
      >
        {/* LEFT TEXT */}
        <div style={{ position: "absolute", width: "438px", height: 308, top: 100, left: 81, display: "flex", flexDirection: "column", gap: "16px", zIndex: 2 }}>
          <h2
            style={{
              fontFamily: "Archivo",
              fontSize: "53px",
              fontWeight: 400,
              lineHeight: "120%",
              color: "#000D12",
              margin: 0,
            }}
          >
            Digital banking <br />
            out-of-the-box
          </h2>

          <p style={{ fontSize: "16px", color: "rgba(10,14,26,0.7)", margin: 0 }}>
            N7 helps your financial institution improve the client experience,
            automate and optimize procedures
          </p>

          <button
            className="requestDemo"

          >
            Request Demo
          </button>

          <a href="#" className="link-blue">
            {/* Text + Icon */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span
                style={{
                  fontFamily: '"Chivo Mono Medium", monospace',
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "130%",
                  textTransform: "uppercase",
                  color: "rgba(0, 180, 253, 1)",
                }}
              >
                Learn More
              </span>

              <ArrowRight size={12} color="rgba(0, 180, 253, 1)" />
            </div>

            {/* Animated Line */}
            <div className="hoverLine" />
          </a>
        </div>

        {/* RIGHT SIDE */}


        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "622px",

            minWidth: "651.70556640625px",
            width: "fit-content",
            minHeight: "1848.7000732421875px",
            display: "flex",
            flexDirection: "column",
            gap: "110px",
            zIndex: 2
          }}
        >
          {/* CARD 1 */}
          <ComplianceSection phoneImage={iphone13} />
          {/* CARD 2 */}
          <div
            // ref={sectionRef}
            style={{
              fontFamily: "'Archivo', sans-serif",
              width: 652,
              display: "flex",
              flexDirection: "column",
              gap: 110,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 80,
                opacity: 1,
                transform: "translateY(0)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {/* ── Right column ── */}
              <div style={{ width: 302, display: "flex", flexDirection: "column", gap: 43 }}>

                {/* Heading + body */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <h3
                    style={{
                      margin: 0,
                      width: 269,
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: "130%",
                      color: "rgba(0, 13, 18, 1)",
                    }}
                  >
                    Fully compliant with regulatory requirement
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      width: 268,
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "130%",
                      color: "rgba(0, 13, 18, 0.7)",
                    }}
                  >
                    The governance of risk management with regulations is achieved by
                    our risk management framework that is fully integrated to work
                    with digital bank&apos;s operational-risk protocols and procedures.
                  </p>
                </div>

                {/* Checklist */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {checkItems.map((item, i) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        opacity: 1,
                        transform: "translateX(0)",
                        transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1
                          }s`,
                      }}
                    >
                      <GradientCheckIcon />
                      <span
                        style={{
                          fontWeight: 400,
                          fontSize: 14,
                          color: "rgba(0, 13, 18, 1)",
                          lineHeight: "130%",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* ── Phone image — just an <img>, no shell ── */}
              <Image
                src={iphone13pro}
                alt="hello"
                style={{
                  width: 268,
                  height: 543,
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />


            </div>
          </div>

          {/* CARD 3 */}
          <ComplianceSection phoneImage={iphone13max} ></ComplianceSection>
        </div>
        {/* CARD SECTION */}
        <div
          style={{
            position: "absolute",
            top: "2104.43px",
            left: "81px",
            minWidth: "1279px",
            width: "auto",
            height: 427,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "27px",
            background: "linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)",
            zIndex: 1,

          }}
        >
          {/* Left — text */}
          <div
            style={{
              width: "607px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "32px",
            }}
          >
            <h2
              style={{
                width: "1007.83px",
                fontFamily: "Archivo",
                fontWeight: 400,
                fontSize: "53px",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
                color: "rgba(233, 244, 249, 1)",
                margin: 0,
                textAlign: "left",
              }}
            >
              Take the full advantage of<br /> going paper-less now.
            </h2>

            <p
              style={{
                width: "462.92px",
                fontFamily: "Archivo",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "130%",
                letterSpacing: "0%",
                color: "rgba(233, 244, 249, 1)",
                opacity: 0.8,
                margin: 0,
                textAlign: "left",
              }}
            >
              CB7 helps your financial institution improve the client experience, automate
              and optimize procedures, simplify banking operations
            </p>
          </div>

          {/* Right — buttons */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/* Contact Us */}
            <button
              className="contactButton"
            >

              Contact Us

            </button>

            {/* Request Demo */}
            <button
              className="requestDemo"
            >
              Request Dem0
            </button>
          </div>
        </div>
        {/* n7 */}
        <div
          style={{
            width: "744px",
            height: "687px",
            transform: "rotate(0deg)",
            opacity: 0.5,
            position: "absolute",
            top: "-66.74px",
            left: "277px",
          }}
        >
          <svg width="744" height="687" viewBox="0 0 744 687" >
            <defs>
              <linearGradient
                id="strokeGradN7"
                x1="0%"
                y1="105.68%"
                x2="100%"
                y2="-6.98%"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="#f2f5f7" />
                <stop offset="100%" stopColor="#003ACE" />
              </linearGradient>

              <linearGradient
                id="fadeGradN7"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="black" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="574"
              fontFamily="Archivo"
              fontWeight="500"
              fontSize="572.63"
              fill="none"
              stroke="url(#strokeGradN7)"
              strokeWidth="1.59"
            >
              N7
            </text>
          </svg>
        </div>
        {/* eclipse */}
        <div
          style={{
            width: "778.742919921875px",
            height: "778.742919921875px",
            borderRadius: "50%",
            background: "linear-gradient(103.43deg, #FDA700 -1.02%, #CE5700 83.53%)",
            backdropFilter: "blur(100px)",
            WebkitBackdropFilter: "blur(100px)",
            filter: "blur(100px)",
            opacity: 0.05,
            position: "absolute",
            top: "-91.57px",
            left: "661.26px",
            transform: "rotate(0deg)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
         <div
          style={{
            width: "585.8502807617188px",
            height: "585.8502807617188px",
            borderRadius: "50%",
            background: "linear-gradient(103.43deg, #FDA700 -1.02%, #CE5700 83.53%)",
            backdropFilter: "blur(100px)",
            WebkitBackdropFilter: "blur(100px)",
            filter: "blur(100px)",
            opacity: 0.02,
            position: "absolute",
            top: "-260.85px",
            left: "-85.85px",
            transform: "rotate(0deg)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        {/* 7*/}
        <div
          style={{
            width: "861px",
            height: "1829",
            transform: "rotate(0deg)",
            opacity: 0.5,
            position: "absolute",
            top: "957.28px",
            left: "886.92px",
          }}
        >
          <svg width="861" height="1829" viewBox="0 0 861 1829" >
            <defs>
              <linearGradient
                id="strokeGradN7"
                x1="0%"
                y1="105.68%"
                x2="100%"
                y2="-6.98%"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="#f2f5f7" />
                <stop offset="100%" stopColor="#003ACE" />
              </linearGradient>

              <linearGradient
                id="fadeGradN7"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="black" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="574"
              fontFamily="Archivo"
              fontWeight="500"
              fontSize="1524.1px"
              fill="none"
              stroke="url(#strokeGradN7)"
              strokeWidth="1.59"
            >
              7
            </text>
          </svg>
        </div>

         <div
          style={{
            width: "778.742919921875px",
            height: "778.742919921875px",
            borderRadius: "50%",
           background: "linear-gradient(100.92deg, #00CFFD 35.49%, #0015CE 82.38%)",

            //background: "linear-gradient(103.43deg, #FDA700 -1.02%, #CE5700 83.53%)",
            backdropFilter: "blur(100px)",
            WebkitBackdropFilter: "blur(100px)",
            filter: "blur(100px)",
            opacity: 0.1,
            position: "absolute",
            top: "1928.56px",
            left: "-364.23px",
            transform: "rotate(0deg)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        {/* added */}
          <Image src={vector26} alt="vector" style={{
            width:"1243.248779296875px",
            height:"1245.2142333984375px",
            top:"418.17px",
            left:"-763.25px",
            border:"1px",
            opacity:0.2
          }}/>
      </div>
        
         

    </section>
  );
}