"use client";

interface CTABannerProps {
    light?: boolean;
}

export default function CTA({ light }: CTABannerProps) {
    return (
  <section
  style={{
    background: "rgba(0, 13, 18, 1)",
    width: "100%",
    maxWidth: "1440px",
    height: "316px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "0 auto",
    padding: "57px 80px",
    boxSizing: "border-box",
    gap: "80px",
    position: "relative",  
    
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
              width: "607.83px",
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
           
              Request Demo

          </button>
        </div>
</section>
    );
}