"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: isMobile ? "12px" : "31px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "fit-content",
          minWidth: "716.4559326171875px",
          minHeight: "47px",
          padding: isMobile ? "9px 16px" : "9px 10px",
          gap: isMobile ? "0px" : "160px",
          borderRadius: "12px",
          boxSizing: "border-box",
          background: "rgba(47,47,47,0.7)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "Archivo",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "120%",
            color: "rgba(233, 244, 249, 1)",
            userSelect: "none",
            width: 32,
            height: 29,
          }}
        >
          N7
        </div>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              minWidth: "504.4559326171875px",
              height: "fit-content",
              minHeight: "26px",
              gap: "80px",
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              width: 263.4559326171875,
              height: "16px",
              gap: "20px",

            }}>
              {["Solutions", "Resources"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    width: "auto",
                    minWidth: "82.72796630859375px",
                    height: "16px",
                    
                    opacity: 1,
                    fontFamily: "'Chivo Mono', monospace",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "12.5px",
                    lineHeight: "150%",
                    letterSpacing: "0.02%",
                    textTransform: "uppercase",
                    color:"rgba(233, 244, 249, 1)"

                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  
                    {item}
                

                  <ChevronDown
                    size={14}
                    strokeWidth={1.4}
                    style={{

                      color: "rgba(233, 244, 249, 1)",
                    }}
                  />

                </div>
              ))}
              <div style={{
                display: "flex",
                width: "58px",
                height: "16px",
                opacity: 1,
                gap: "4px",
                fontFamily: '"Chivo Mono", monospace',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "12.5px",
                lineHeight: "130%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                color: "rgba(233, 244, 249, 1)"
              }}>
                About us
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="navbardiv">
              <button className="navbarButton"   >
                Request Demo
              </button>

            </div>

          </div>
        )}


        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(233, 244, 249, 1)",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </nav >

      {/* Mobile Dropdown Menu */}
      {
        isMobile && (
          <div
            style={{
              position: "fixed",
              top: menuOpen ? "72px" : "-300px",
              left: "16px",
              right: "16px",
              background: "rgba(30, 30, 30, 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "12px",
              padding: menuOpen ? "24px" : "0 24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              zIndex: 99,
              overflow: "hidden",
              maxHeight: menuOpen ? "400px" : "0px",
              opacity: menuOpen ? 1 : 0,
              transition: "top 0.3s ease, max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {["Solutions", "Resources", "About us"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "'Chivo Mono', monospace",
                  fontWeight: 400,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  color: "rgba(233, 244, 249, 1)",
                  textDecoration: "none",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {item}
                <ChevronDown size={16} strokeWidth={1.4} style={{ color: "rgba(233, 244, 249, 0.6)" }} />
              </a>
            ))}

            <button
              className="navbarButton"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Request Demo
            </button>
          </div>
        )
      }

      {/* Mobile backdrop */}
      {
        isMobile && menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 98,
              background: "rgba(0,0,0,0.3)",
            }}
          />
        )
      }
    </>
  );
}
