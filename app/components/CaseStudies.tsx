"use client";
import { ArrowRight } from "lucide-react";

const cases = [
  { letter: "N", color: "#2563eb", desc: "How we help brand reach out to more people", client: "Dimdson" },
  { letter: "7", color: "#3b82f6", desc: "Transforming digital banking operations", client: "FinCore" },
  { letter: "C", color: "#1d4ed8", desc: "Accelerating core system modernization", client: "BankTech" },
  { letter: "B", color: "#1e40af", desc: "Building compliance-ready digital platforms", client: "RegulAI" },
];

export default function CaseStudies() {
  return (
    <section style={{ background: "#070b16", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}
          className="md:grid-cols-2 grid-cols-1">

          {/* Left column with logo grid */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              {cases.map((c, i) => (
                <div key={i} style={{
                  background: c.color,
                  borderRadius: "12px",
                  aspectRatio: "1",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                  cursor: "pointer", transition: "transform 0.2s ease"
                }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
                    <div style={{
                      width: "120%", height: "120%",
                      border: "20px solid rgba(255,255,255,0.3)",
                      borderRadius: "40%",
                      position: "absolute", top: "-30%", left: "-30%"
                    }} />
                    <div style={{
                      width: "80%", height: "80%",
                      border: "15px solid rgba(255,255,255,0.2)",
                      borderRadius: "30%",
                      position: "absolute", bottom: "-20%", right: "-20%"
                    }} />
                  </div>
                  <span style={{
                    fontFamily: "Syne, sans-serif", fontSize: "36px", fontWeight: 800,
                    color: "rgba(255,255,255,0.9)", position: "relative", zIndex: 1
                  }}>{c.letter}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
              {[0,1,2,3].map((i) => (
                <div key={i} style={{
                  width: i === 0 ? "24px" : "8px", height: "8px",
                  borderRadius: "4px",
                  background: i === 0 ? "#2563eb" : "rgba(255,255,255,0.15)"
                }} />
              ))}
            </div>
          </div>

          {/* Right: Case study detail */}
          <div>
            <p style={{ fontSize: "12px", color: "#60a5fa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
              CASE STUDIES
            </p>
            <h2 style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800, color: "white", lineHeight: 1.2,
              marginBottom: "24px"
            }}>
              Our Case Studies
            </h2>

            {/* Featured case */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px", padding: "28px",
              marginBottom: "20px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "8px",
                  background: "#2563eb",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "Syne, sans-serif", fontWeight: 800, color: "white", fontSize: "16px"
                }}>N</div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "white" }}>How we help brand reach out to more people</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>⊙ Dimdson</p>
                </div>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                N7 helps financial institutions transform their digital presence and reach new customers through innovative banking solutions and modern platform design.
              </p>
              <a href="#" className="link-blue" style={{ marginTop: "16px", display: "inline-flex" }}>
                Read Case Study <ArrowRight size={12} />
              </a>
            </div>

            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              <button className="btn-outline" style={{ padding: "8px 20px", fontSize: "12px" }}>← Prev</button>
              <button className="btn-primary" style={{ padding: "8px 20px", fontSize: "12px" }}>Next →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
