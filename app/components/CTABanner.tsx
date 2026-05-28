"use client";

interface CTABannerProps {
  light?: boolean;
}

export default function CTABanner({ light }: CTABannerProps) {
  return (
    <section
      style={{
        background: "rgba(0, 13, 18, 1)",
        width: "100%",
        maxWidth: "1440px",
        height: 681,
        padding: "80px 40px",
        position: "relative",  
        overflow: "hidden",   
        margin: "0 auto",
      }}
    >
      {/* CB7 Watermark */}
      <div
        style={{
          position: "absolute",
          top: "-160.72px",
          left: "223.56px",
          width: "1141px",
          height: "687px",
          opacity: 0.5,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 2,
        }}
      >
        <svg width="1141" height="687" viewBox="0 0 1141 687">
          <defs>
            <linearGradient id="ctaStrokeGrad" x1="-5.68%" y1="0%" x2="86.98%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,180,253,1)" />
              <stop offset="100%" stopColor="rgba(0,58,206,1)" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="572"
            fontFamily="Archivo"
            fontWeight="500"
            fontSize="572.63"
            fill="none"
            stroke="url(#ctaStrokeGrad)"
            strokeWidth="1.59"
          >
            CB7
          </text>
        </svg>
      </div>

      {/* Card */}
      <div
        style={{
          maxWidth: "1279px",
          height: 427,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius: "27px",
          background: "linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)",
          position: "relative",  // ← keeps card above CB7
          zIndex: 1,
          padding: "0 80px",
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
            style={{
              width: "208px",
              height: "49px",
              borderRadius: "10px",
              border: "1px solid rgba(233, 244, 249, 1)",
              padding: "15px 59px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "130%",
                textTransform: "uppercase",
                color: "rgba(233, 244, 249, 1)",
                whiteSpace: "nowrap",
              }}
            >
              Contact Us
            </span>
          </button>

          {/* Request Demo */}
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
              padding: "15px 51px",
              background: "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
            }}
          >
            <span
              style={{
                fontFamily: "'Chivo Mono', monospace",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "130%",
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 1)",
                whiteSpace: "nowrap",
              }}
            >
              Request Demo
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}