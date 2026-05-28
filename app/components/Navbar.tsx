"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: "31px",
        left: "50%",
        transform: "translateX(-50%)",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: "9px 10px",
        gap: "160px",

        borderRadius: "12px",

        background: "rgba(47,47,47,0.7)",
        backdropFilter: "blur(15px)",

        width: "fit-content",
        minHeight: "47px",

        zIndex: 100,
      }}
    >

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{
          width: "32px",
          height: "29px",
          borderRadius: "8px",
          fontFamily: "Archivo",
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: "24px",
          lineHeight: "120%",
          letterSpacing: "0%",
          color: "background: rgba(233, 244, 249, 1)"
        }}>N7</div>
      </div>

      {/* Desktop Nav */}
      <div
        className="hidden md:flex"
        style={{
          width: "263.46px",
          height: "16px",
          gap: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {["Solutions", "Resources", "About us"].map((item) => (
          <a
            key={item}
            href="#"
            className="nav-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",

              fontFamily: "Chivo Mono",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "130%",
              textTransform: "uppercase",
               whiteSpace: "nowrap",
              color: "rgba(233, 244, 249, 1)",
              textDecoration: "none",
            }}
          >
            {item}

            <ChevronDown
              size={20}
              strokeWidth={1.14}
              style={{
                color: "border: 1.14px solid rgba(233, 244, 249, 1)",
                transform: "rotate(0deg)",
              }}
            />
          </a>
        ))}
      </div>

      {/* CTA */}
     <div
  className="hidden md:flex"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "20px",

    width: "fit-content",
    height: "fit-content",

    opacity: 1,
  }}
>
  <button
    
   className="navbarButton"
  >
    Request Demo
  </button>
</div>

      {/* Mobile toggle */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "64px", left: 0, right: 0,
          background: "rgba(10,14,26,0.98)", padding: "24px",
          display: "flex", flexDirection: "column", gap: "20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)"
        }}>
          {["Solutions", "Products", "Resources", "Company"].map((item) => (
            <a key={item} href="#" className="nav-link" style={{ fontSize: "16px" }}>{item}</a>
          ))}
          <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Request Demo</button>
          <button className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>Contact Us</button>
        </div>
      )}
    </nav>
  );
}
