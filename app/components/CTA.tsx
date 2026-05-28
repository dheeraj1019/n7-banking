"use client";

interface CTABannerProps {
    light?: boolean;
}

export default function CTA({ light }: CTABannerProps) {
    return (
        <section
            style={{
                background: "rgba(0, 13, 18, 1)",
                width: 1440,
                height: 681,
                position: "relative",
            }}
        >
            <div style={{
                position:"absolute",
                width: 1279,
                height: 427,
                opacity: 1,
                top: "127px",
                left: "81px",
                borderRadius: "27px",
                background: "linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)",
                zIndex:1000

            }}>
                {/* Left — text */}
               {/* Left — text */}
<div
  style={{
    position: "absolute",
    top: "112.6px",
    left: "65px",
    width: "607px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "32px",
    zIndex: 2,
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
                {/* Right — buttons */}
<div
  style={{
    position: "absolute",
    width: "458px",
    height: "49px",
    top: "189px",
    left: "757px",
    display: "flex",
    gap: "40px",
    alignItems: "center",
    zIndex: 2,
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
                     {/* CB7 */}
       {/* CB7 Background Text */}
<div
  style={{
    width: "1141px",
    height: "687px",
    opacity: 0.5,
    position: "absolute",
    top: "-160.72px",
    left: "223.56px",
    pointerEvents: "none",
    overflow: "hidden",
  }}
>
  <svg width="1141" height="687" viewBox="0 0 1141 687">
    <defs>
      {/* Stroke Gradient */}
      <linearGradient
        id="strokeGrad"
        x1="0"
        y1="0"
        x2="1141"
        y2="687"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#00B4FD" />
        <stop offset="100%" stopColor="#003ACE" />
      </linearGradient>

      {/* Fill Gradient */}
      <linearGradient
        id="fadeGrad"
        x1="0"
        y1="0"
        x2="0"
        y2="687"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>

    <text
      x="0"
      y="574"
      fontFamily="Archivo"
      fontWeight="500"
      fontSize="572.63"
      stroke="url(#strokeGrad)"
      strokeWidth="1.59"
      fill="url(#fadeGrad)"
    >
      CB7
    </text>
  </svg>
</div>
            </div>

        </section>
    );
}