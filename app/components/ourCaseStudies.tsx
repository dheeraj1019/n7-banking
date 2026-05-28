"use client";
import { useState } from "react";

const cases = [
  {
    tag: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
  },
  {
    tag: "GROWTH",
    title: "How we scaled digital banking for enterprise",
    company: "FinTech Co",
  },
  {
    tag: "INNOVATION",
    title: "Building next-gen loan origination systems",
    company: "LendPro",
  },
];

// X-shape icon matching the Figma

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
// const XIcon = () => (
//   <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    
//     <path d="M23 5 Q50 45 77 5"
//       stroke="rgba(0,180,253,1)" strokeWidth="18"
//       strokeLinecap="square" fill="none"
//     />
//     <path d="M23 95 Q50 55 77 95"
//       stroke="rgba(0,180,253,1)" strokeWidth="18"
//       strokeLinecap="square" fill="none"
//     />
//     <path d="M5 23 Q45 50 5 77"
//       stroke="rgba(0,180,253,1)" strokeWidth="18"
//       strokeLinecap="square" fill="none"
//     />
//     <path d="M95 23 Q55 50 95 77"
//       stroke="rgba(0,180,253,1)" strokeWidth="18"
//       strokeLinecap="square" fill="none"
//     />
//   </svg>
// );

const NavArrow = ({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) => (
  <button onClick={onClick} style={{
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "transparent",
    border: "1.36px solid rgba(0,180,253,1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
  }}>
    <svg width="18" height="18" viewBox="0 0 21 21" fill="none"
      style={{ transform: direction === "left" ? "rotate(180deg)" : "none" }}>
      <line x1="1" y1="10.47" x2="15" y2="10.47" stroke="rgba(0,180,253,1)" strokeWidth="1.2" />
      <polyline points="8,3.5 15,10.47 8,17.5" fill="none" stroke="rgba(0,180,253,1)" strokeWidth="1.2" />
    </svg>
  </button>
);

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((p) => (p === 0 ? cases.length - 1 : p - 1));
  const next = () => setActive((p) => (p === cases.length - 1 ? 0 : p + 1));

  return (
    <section style={{
      position: "relative",
      width: "1440px",
      height: "872px",
      background: "rgba(0, 13, 18, 1)",
      overflow: "hidden",
      fontFamily: "Archivo, sans-serif",
    }}>

      {/* ── Title ── */}
      <div style={{
        position: "absolute",
        top: "43.17px",
        left: "488.37px",
        width: "463.26px",
        fontSize: "53px",
        fontWeight: 400,
        lineHeight: "120%",
        letterSpacing: "-0.01em",
        textAlign: "center",
        color: "rgba(233,244,249,1)",
        whiteSpace: "nowrap",
      }}>
        Our Case Studies
      </div>

      {/* ── Ghost cards left ── */}
      <div style={{
        position: "absolute",
        top: "220px",
        left: "30px",
        width: "180px",
        height: "440px",
        borderRadius: "16px",
        background: "rgba(5,18,45,0.5)",
        overflow: "hidden",
        opacity: 0.5,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "8px",
          padding: "24px 16px",
          height: "100%",
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              flex: 1,
              borderRadius: "8px",
              background: "rgba(8,28,65,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.6,
            }}>
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                <path d="M30 10 Q50 30 70 10" stroke="rgba(0,140,200,0.5)" strokeWidth="14" strokeLinecap="round" fill="none" />
                <path d="M30 90 Q50 70 70 90" stroke="rgba(0,140,200,0.5)" strokeWidth="14" strokeLinecap="round" fill="none" />
                <path d="M10 30 Q30 50 10 70" stroke="rgba(0,140,200,0.5)" strokeWidth="14" strokeLinecap="round" fill="none" />
                <path d="M90 30 Q70 50 90 70" stroke="rgba(0,140,200,0.5)" strokeWidth="14" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main card ── */}
      <div style={{
        position: "absolute",
        top: "179.17px",
        left: "230px",
        width: "1090px",
        height: "490px",
        borderRadius: "20px",
        background: "rgba(5, 18, 40, 1)",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}>

        {/* Left — X icon 2×2 grid */}
        <div style={{
          width: "480px",
          height: "100%",
          background: "rgba(8, 28, 65, 1)",
          flexShrink: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          padding: "28px",
        }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{
              borderRadius: "12px",
              background: "rgba(10, 35, 85, 1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <XIcon />
            </div>
          ))}
        </div>

        {/* Right — content */}
        <div style={{
          flex: 1,
          padding: "52px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "24px",
        }}>

          {/* Tag */}
          <span style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: "rgba(0,180,253,1)",
            textTransform: "uppercase",
          }}>
            {cases[active].tag}
          </span>

          {/* Title */}
          <h2 style={{
            fontSize: "44px",
            fontWeight: 400,
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            color: "rgba(233,244,249,1)",
            margin: 0,
          }}>
            {cases[active].title}
          </h2>

          {/* Company */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "28px", height: "28px",
              borderRadius: "50%",
              background: "rgba(40,42,60,1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2 L12 7 L7 12 L2 7 Z" stroke="rgba(160,160,180,0.8)" strokeWidth="1" fill="none" />
                <circle cx="7" cy="7" r="2" stroke="rgba(160,160,180,0.8)" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <span style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(233,244,249,0.7)",
            }}>
              {cases[active].company}
            </span>
          </div>

          {/* READ MORE */}
          <button style={{
            width: "100%",
            height: "52px",
            background: "transparent",
            border: "1px solid rgba(233,244,249,0.2)",
            borderRadius: "8px",
            color: "rgba(233,244,249,0.8)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: "Archivo, sans-serif",
          }}>
            READ MORE
          </button>

        </div>
      </div>

      {/* ── Bottom nav row — arrows + dots + VIEW ALL ── */}
      <div style={{
        position: "absolute",
        top: "710px",
        left: "0",
        width: "1440px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "31px",
      }}>

        <NavArrow direction="left" onClick={prev} />

        {/* Dots */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {cases.map((_, i) => (
            <div key={i} onClick={() => setActive(i)} style={{
              width: i === active ? "32px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === active ? "rgba(0,180,253,1)" : "rgba(233,244,249,0.3)",
              cursor: "pointer",
              transition: "width 0.3s ease",
            }} />
          ))}
        </div>

        <NavArrow direction="right" onClick={next} />

        {/* VIEW ALL — absolute right */}
        <div style={{
          position: "absolute",
          right: "123px",
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          cursor: "pointer",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: "rgba(0,180,253,1)",
              textTransform: "uppercase",
            }}>
              VIEW ALL
            </span>
            <svg width="12" height="12" viewBox="0 0 14 15" fill="none">
              <line x1="0" y1="5.79" x2="10.92" y2="5.79" stroke="rgba(0,180,253,1)" strokeWidth="0.94" />
              <polyline points="5.46,0.33 10.92,5.79 5.46,11.25" fill="none" stroke="rgba(0,180,253,1)" strokeWidth="0.94" />
            </svg>
          </div>
          <div style={{ width: "32.58px", borderTop: "1px solid rgba(0,180,253,1)" }} />
        </div>

      </div>

    </section>
  );
}