"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import image from "../assests/preview.webp";
import image4 from "../assests/image4.png"
import "./csss/button-primary.css"
const DASHBOARD_ROWS = [
  "Customer On-Boarding",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];
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
const FEATURES_RIGHT = [
  "CRM Adminew",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

export default function CloudBanking() {
  return (
    <>
      <section
        style={{
          width: "1440px",
          height: "619px",
          background: "rgba(0, 13, 18, 1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* LEFT SIDE — absolute positioned */}
        <div
          style={{
            position: "absolute",
            top: "156.88px",
            left: "80px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "607.8348999023438px",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h1
              style={{
                fontFamily: "Archivo",
                fontWeight: 400,
                fontSize: "clamp(40px, 4.5vw, 68px)",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
                color: "rgba(233, 244, 249, 1)",
                whiteSpace: "nowrap",
                margin: 0,
              }}
            >
              A complete cloud-based <br />
              core banking.
            </h1>

            <p
              style={{
                fontFamily: "Archivo",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                color: "rgba(233, 244, 249, 0.8)",
                margin: 0,
                maxWidth: "420px",
              }}
            >
              Faster time to market with our cloud-based <br />core banking services
            </p>
          </div>

          {/* Button */}
          <button
            style={{
              width: "210px",
              height: "49px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "15px 51px",
              background: "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
            }}
          >
            <span
              style={{
                width: "108px",
                height: "19px",
                fontFamily: "'Chivo Mono', monospace",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "130%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 1)",
                whiteSpace: "nowrap",
              }}
            >
              Request Demo
            </span>
          </button>
          {/* Learn More */}

          <a href="#" className="link-blue">

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
        {/* RIGHT SIDE — dashboard card, absolute, overflows right edge */}
        <div
          style={{
            position: "absolute",
            top: "80.17px",
            right: "0",
            left: "927px",
            width: "651.67px",
            height: 461,
            zIndex: 2,
          }}
        >
          {/* Main bordered container */}
          <div
            style={{
              width: "651.67px",
              height: "431.99px",
              borderTopLeftRadius: "15.77px",
              borderTopRightRadius: "15.77px",
              border: "1.05px solid transparent",
              background:
                "linear-gradient(#02171F, #02171F) padding-box, linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%) border-box",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Dashboard image */}
            <Image
              src={image}
              alt="AML Dashboard"
              style={{
                position: "absolute",
                top: "7.57px",
                left: "10.22px",
                width: "631.15px",
                height: "410.14px",
                opacity: 0.8,
                display: "block",
                borderTopLeftRadius: "5.77px"
              }}
            />

            {/* Overlay tint */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "631.15px",
                height: "408.8px",
                //  background: "rgba(217, 217, 217, 1)",
                borderTopLeftRadius: "5.26px",
                borderTopRightRadius: "5.26px",
                opacity: 0.15,
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Bottom bar */}
          <div
            style={{
              width: "765.94px",
              height: "30.3px",
              position: "relative",
              left: "-57.14px",
              borderTopLeftRadius: "5.26px",
              borderTopRightRadius: "5.26px",
              borderBottomRightRadius: "14.72px",
              borderBottomLeftRadius: "14.72px",
              border: "1.05px solid transparent",
              background:
                "linear-gradient(#02171F, #02171F) padding-box, linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%) border-box",
            }}
          />
        </div>
        {/* CB7 */}
        <div
          style={{
            width: "1141px",
            height: "687px",
            transform: "rotate(0deg)",
            opacity: 0.5,
            position: "absolute",
            top: "-2.25px",
            left: "-163.31px",
          }}
        >
          <svg width="1141" height="687" viewBox="0 0 1141 687">
            <defs>
              <linearGradient
                id="strokeGrad"
                x1="0%"
                y1="105.68%"
                x2="100%"
                y2="-6.98%"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="rgba(0,180,253,0.5)" />
                <stop offset="100%" stopColor="rgba(0,58,206,0.5)" />
              </linearGradient>

              <linearGradient
                id="fadeGrad"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="black" />
              </linearGradient>
            </defs>

            <rect
              x="0.795"
              y="0.795"
              width="1139.41"
              height="685.41"
              fill="none"
              stroke="url(#strokeGrad)"
              strokeWidth="1.59"
            />

            <text
              x="0"
              y="574"
              fontFamily="Archivo"
              fontWeight="500"
              fontSize="572.63"
              fill="none"
              stroke="url(#strokeGrad)"
              strokeWidth="1.59"
            >
              CB7
            </text>

            {/* gradient overlay on top of everything */}
            <rect
              x="0"
              y="0"
              width="1141"
              height="687"
              fill="url(#fadeGrad)"
            />
          </svg>
        </div>



      </section>

      {/* SECTION 2 — unchanged */}
      <section style={{ position: "relative", width: "1440px", height: "681px", background: "rgba(0, 13, 18, 1)" }}>
        {/* RIGHT — text content */}
        <div style={{ position: "absolute", display: "flex", flexDirection: "column", width: 590, height: 350.40771484375, top: "168.68px", left: "770px", gap: "34px" }}>
          <h2
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400,
              fontSize: "27px",
              lineHeight: "130%",
              letterSpacing: "0%",
              width: "495px",
              height: "70px",
              opacity: 1,
              color: "rgba(233, 244, 249, 1)",
              margin: 0,
            }}
          >
            Run a more efficient, flexible and digitally connected core banking system
          </h2>
          <div style={{ display: "flex", flexDirection: "column", width: "fit-content", height: "fit-content", minWidth: "590px", minHeight: "246.41px", gap: "14px" }}>
            <p
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "130%",
                letterSpacing: "0%",
                width: "129px",
                height: "21px",
                opacity: 1,
                color: "rgba(233, 244, 249, 1)",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              What you will get:
            </p>
            <div style={{ minWidth: 590, minHeight: 211.41, width: "auto", height: "auto", display: "flex", gap: "29px" }}>
              <div style={{ width: 296, height: 204.6309051513672, gap: "4px" }}>
                {DASHBOARD_ROWS.map((item, i) => (
                  <div
                    key={item}
                    style={{
                      width: "296px",

                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      opacity: 0.8,
                      transform: "translateX(0)",
                      transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                    }}
                  >
                    <GradientCheckIcon />
                    <span
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: "background: rgba(233, 244, 249, 1)",
                        lineHeight: "130%",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                {FEATURES_RIGHT.map((item, i) => (
                  <div
                    key={item}
                    style={{
                      width: 296,

                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      opacity: 0.8,
                      transform: "translateX(0)",
                      transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                    }}
                  >
                    <GradientCheckIcon />
                    <span
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: "background: rgba(233, 244, 249, 1)",
                        lineHeight: "130%",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>

        {/* LEFT — dashboard image */}
        <div style={{ width:651.6660766601562,height:461.421630859375,position: "relative", top:"110px" ,left:"-159px"}}>
          {/* Main bordered container */}
          <div
            style={{
              width: "651.6660766601562px",
              aspectRatio: "651.67 / 431.99",
              borderTopLeftRadius: "15.77px",
              borderTopRightRadius: "15.77px",
              border: "1.05px solid transparent",
              background:
                "linear-gradient(#02171F, #02171F) padding-box, linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%) border-box",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Dashboard image */}
            <Image
              src={image4}
              alt="AML Dashboard"
              style={{
                position: "absolute",
                top: "7.57px",
                left: "-10.22px",
                width: "651.2000122070312px",
                height: "94%",
                opacity: 0.8,
                display: "block",
                borderTopRightRadius: "5.77px",
              }}
            />

            {/* Overlay tint */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "95%",
               // background: "rgba(217, 217, 217, 1)",
                borderTopLeftRadius: "5.26px",
                borderTopRightRadius: "5.26px",
                opacity: 0.15,
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Bottom bar */}
          <div
            style={{
              width: "765.9437255859375px",
              height: "30.3px",
              position: "relative",
              left:"-57.14px",
              borderTopLeftRadius: "5.26px",
              borderTopRightRadius: "5.26px",
              borderBottomRightRadius: "14.72px",
              borderBottomLeftRadius: "14.72px",
              border: "1.05px solid transparent",
              background:
                "linear-gradient(#02171F, #02171F) padding-box, linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%) border-box",
            }}
          />
        </div>


      </section>
    </>
  );
}