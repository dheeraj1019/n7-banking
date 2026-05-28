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
          padding: isMobile ? "9px 16px" : "9px 10px",
          gap: isMobile ? "0px" : "160px",
          borderRadius: "12px",
          background: "rgba(47,47,47,0.7)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          width: isMobile ? "calc(100vw - 32px)" : "fit-content",
          minHeight: "47px",
          zIndex: 100,
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "Archivo, sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "120%",
            color: "rgba(233, 244, 249, 1)",
            userSelect: "none",
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
              gap: "20px",
            }}
          >
            {["Solutions", "Resources", "About us"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontFamily: "'Chivo Mono', monospace",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "130%",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  color: "rgba(233, 244, 249, 1)",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {item}
                <ChevronDown size={14} strokeWidth={1.4} style={{ color: "rgba(233, 244, 249, 1)" }} />
              </a>
            ))}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <button className="navbarButton">
            Request Demo
          </button>
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
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobile && (
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
      )}

      {/* Mobile backdrop */}
      {isMobile && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 98,
            background: "rgba(0,0,0,0.3)",
          }}
        />
      )}
    </>
  );
}
