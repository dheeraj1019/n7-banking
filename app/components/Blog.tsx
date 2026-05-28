"use client";

import { ArrowRight, FileX } from "lucide-react";
import { relative } from "path";

const Cross = ({ size = 72 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path
      d="M22 0h36v18H40v22h18v18H40v22H22V58H4V40h18V22H4V0h18z"
      fill="#1da8ff"
    />
  </svg>
);
const XIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
  
   
     {/* Top curve connecting top-left to top-right */}
    <path
      d="M23 5 Q50 45 77 5"
      stroke="rgba(0,180,253,1)" strokeWidth="18"
       fill="none"
    />
    {/* Bottom curve connecting bottom-left to bottom-right */}
    <path
      d="M23 95 Q50 55 77 95"
      stroke="rgba(0,180,253,1)" strokeWidth="18"
    fill="none"
    />
    {/* Left curve connecting top-left to bottom-left */}
    <path
      d="M5 23 Q45 50 5 77"
      stroke="rgba(0,180,253,1)" strokeWidth="18"
      fill="none"
    />
    {/* Right curve connecting top-right to bottom-right */}
    <path
      d="M95 23 Q55 50 95 77"
      stroke="rgba(0,180,253,1)" strokeWidth="18"
       fill="none"
    />
  </svg>
);
const posts = [
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

const border = "1px solid rgba(255,255,255,0.08)";

export default function Blog() {
  return (
    <section
      style={{
        width: "1440px",
        height: "853px",
        background: "rgba(0, 13, 18, 1)",
        padding: "72px 48px",
        fontFamily: "'Inter', sans-serif",
        boxSizing: "border-box",
        position:"relative",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "56px",
          alignItems: "flex-start",
          maxWidth: "1160px",
          margin: "0 auto",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            width: "463px",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <h2
            style={{

              fontFamily: "Archivo",
              fontSize: "32px",
              fontStyle: "Regular",
              lineHeight: "120%",
              letterSpacing: "-1%",
              fontWeight: 400,
              color: "#fff",
              margin: 0,
            }}
          >
            Get yourself up-to-speed on <br />all the things happening in<br /> fintech
          </h2>

          <button
            style={{
              padding: "11px 32px",
              border: "1.5px solid rgba(255,255,255,0.45)",
              color: "#fff",
              background: "transparent",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: "10px",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            INSIGHTS
          </button>
        </div>

        {/* RIGHT */}

        <div
          style={{
            width: "670px",
            height: "318px",
            borderRadius: "18px",
            display: "flex",
            position: "relative",
            backgroundColor: " rgba(1, 20, 27, 1)",
            overflow: "hidden",
          }}
        >
          {/* LEFT BOX */}
        <div
  style={{
    width: "295px",
    height: "267px",
    position: "absolute",
    top: "25.5px",
    left: "24px",
    borderRadius: "8px",
    background: "rgba(7, 25, 60, 1)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
    padding: "28px",
  }}
>
  <XIcon />
  <XIcon />
  <XIcon />
  <XIcon />
</div>

          {/* RIGHT CONTENT */}
          <div
            style={{
              marginLeft: "351px",
              paddingTop: "40px",
              paddingRight: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "11px",
              width: "289px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                opacity: 0.8,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
                fontFamily: "Chivo Mono",
                color: "rgba(36, 144, 187, 1)",
                fontWeight: 400,
                lineHeight: "130%",
              }}
            >
              Getting Started
            </p>

            <h3
              style={{
                color: "rgba(233, 244, 249, 1)",
                margin: 0,
                width: 289.13201904296875,
                height: 96,
                opacity: 1,
                fontFamily: "Archivo",
                fontWeight: 400,
                fontStyle: "Regular",
                fontSize: "27px",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              How to transition from a traditional to a digital bank
            </h3>
            <div style={{
              display: "flex",
              width: "144px",
              height: "18px",
              flexDirection: "row",
              gap: "12px"
            }}>
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Archivo",
                  fontWeight: 400,
                  lineHeight: "130%",
                  letterSpacing: "0px",
                  opacity: 0.8,
                  margin: 0,
                  width: "74px",
                  height: "18px",
                  color: "rgb(100, 168, 196)",
                }}
              >
                David Grohl
              </p>
              <p style={{
                width: "56px",
                height: "18px",
                opacity: 0.8,
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "130%",
                letterSpacing: "0px",
                color: "rgb(100, 168, 196)",
                margin: 0,
              }}>
                17/08/24
              </p>
            </div>
            <button
              style={{
                marginTop: "50px",
                padding: "10px 0",
                border: "1px solid rgba(255,255,255,0.22)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                background: "transparent",
                cursor: "pointer",
                width: "100%",
                height: "38px",
                borderRadius: "10px"
              }}
            >
              READ MORE
            </button>
          </div>
        </div>

      </div>
      <div style={{ position:"absolute",
        left:"690px",
        display:"flex",
        top:"431px",
        gap:"29px"}}>
              <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "11px",
        width: "289px",
        paddingTop: "40px",
        paddingRight: "24px",
       
      }}
    >
      <p
        style={{
          fontSize: "12px",
          opacity: 0.8,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          margin: 0,
          fontFamily: "Chivo Mono",
          color: "rgba(36, 144, 187, 1)",
        }}
      >
        Getting Started
      </p>

      <h3
        style={{
          color: "rgba(233, 244, 249, 1)",
          margin: 0,
          fontFamily: "Archivo",
          fontWeight: 400,
          fontSize: "27px",
          lineHeight: "120%",
        }}
      >
        How to transition from a traditional to a digital bank
      </h3>

      <div style={{ display: "flex", gap: "12px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "rgb(100,168,196)" }}>
          David Grohl
        </p>
        <p style={{ margin: 0, fontSize: "14px", color: "rgb(100,168,196)" }}>
          17/08/24
        </p>
      </div>

      <button
        style={{
          marginTop: "50px",
          height: "38px",
          border: "1px solid rgba(255,255,255,0.22)",
          borderRadius: "10px",
          background: "transparent",
          color: "rgba(255,255,255,0.6)",
          textTransform: "uppercase",
          fontSize: "10px",
          letterSpacing: "0.13em",
          cursor: "pointer",
        }}
      >
        READ MORE
      </button>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "11px",
        width: "289px",
        paddingTop: "40px",
        paddingRight: "24px",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          opacity: 0.8,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          margin: 0,
          fontFamily: "Chivo Mono",
          color: "rgba(36, 144, 187, 1)",
        }}
      >
        Getting Started
      </p>

      <h3
        style={{
          color: "rgba(233, 244, 249, 1)",
          margin: 0,
          fontFamily: "Archivo",
          fontWeight: 400,
          fontSize: "27px",
          lineHeight: "120%",
        }}
      >
        How to transition from a traditional to a digital bank
      </h3>

      <div style={{ display: "flex", gap: "12px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "rgb(100,168,196)" }}>
          David Grohl
        </p>
        <p style={{ margin: 0, fontSize: "14px", color: "rgb(100,168,196)" }}>
          17/08/24
        </p>
      </div>

      <button
        style={{
          marginTop: "50px",
          height: "38px",
          border: "1px solid rgba(255,255,255,0.22)",
          borderRadius: "10px",
          background: "transparent",
          color: "rgba(255,255,255,0.6)",
          textTransform: "uppercase",
          fontSize: "10px",
          letterSpacing: "0.13em",
          cursor: "pointer",
        }}
      >
        READ MORE
      </button>
    </div>
      </div>
         <a
              href="#"
              className="link-blue"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                textDecoration: "none",
                width: "161.56884765625px",
                alignItems: "flex-start",
                position:"absolute",
                left:"1198.43px",
                top:"767px",
                height:"21px",
                
              }}
            >
              {/* Text + Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                 width:"161.56884765625px"
                }}
              >
                <span
                  style={{
                    width: "143px",
                    height: "18px",
                    fontFamily: '"Chivo Mono Medium", monospace',
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "130%",
                    textTransform: "uppercase",
                    color: "rgba(0, 180, 253, 1)",
                  }}
                >
                  read all insights
                </span>

                <ArrowRight size={12} color="rgba(0, 180, 253, 1)" />
              </div>

              {/* Bottom Border Line */}
              <div
                style={{
                  width: "32.58px",
                  height: "0px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  border: "1px solid rgba(0, 180, 253, 1)",
                }}
              />
            </a>
    
    </section >
  );
}