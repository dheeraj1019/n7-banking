"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import hero from "../assests/image1.png";
import "./csss/button-primary.css"
import vector1 from "../assests/Vector (1).png";
import vector2 from "../assests/Vector (2).png";import vector3 from "../assests/Vector (3).png";
import group45 from "../assests/Group 45.png";
import group46 from "../assests/Group 46.png";
import group47 from "../assests/Group 47.png"

const trustedBrands = [
  {
    name: "SHELLS",
    icon: vector1,
  },
  {
    name: "SmartFinder",
    icon: group45,
  },
  {
    name: "Zoomerr",
    icon: vector2,
  },
  {
    name: "ArtVenue",
    icon: group46,
  },
  {
    name: "kontrastr",
    icon: vector3,
  },
  {
    name: "WAVESMARATHON",
    icon: group47,
    smallText: true,
  },
];

export default function Hero() {
   const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
  <section
      style={{
        minHeight: "811px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "rgba(0, 13, 18, 1)"
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          

       //   backgroundImage:
         //   "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1440px",
          width: "100%",
          margin: "0 auto",
          padding: isMobile ? "100px 24px 60px" : isTablet ? "100px 40px 60px" : "0 80px",
          position: "relative",
          zIndex: 2,
          boxSizing: "border-box",
        }}
      >
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
            alignItems: "center",
            gap: isMobile ? "48px" : isTablet ? "48px" : "60px",
            minHeight: isMobile ? "auto" : "811px",
          }}
        >
          {/* ── LEFT SIDE ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "52px",
              maxWidth: isTablet ? "100%" : "607px",
            }}
          >
            {/* Heading + Description */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h1
                style={{
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 500,
                  fontSize: isMobile ? "40px" : isTablet ? "52px" : "67px",
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                  color: "rgba(233, 244, 249, 1)",
                  margin: 0,
                  whiteSpace:"nowrap"
                }}
              >
                The new foundation
                <br />
                of modern banking
              </h1>

              <p
                style={{
                  maxWidth: "420px",
                  opacity: 0.8,
                  color: "rgba(233, 244, 249, 1)",
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "130%",
                  margin: 0,
                }}
              >
                We drive innovation and growth, provide seamless customer
                experience and operational excellence
              </p>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                className="requestDemo"
                style={isMobile ? { width: "100%" } : {}}
              >
                Request Demo
              </button>

              <button
                className="contactButton"
                style={isMobile ? { width: "100%" } : {}}
              >
                Contact Us
              </button>
            </div>

            {/* Trusted By */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "40px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "Archivo, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "130%",
                  opacity: 0.7,
                  color: "rgba(233, 244, 249, 0.7)",
                }}
              >
                Trusted By:
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18.4px",
                  flexWrap: "wrap",
                  opacity: 0.9,
                }}
              >
                {trustedBrands.map((brand, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4.6px",
                    }}
                  >
                    {/* Icon */}
                    {brand.icon ? (
                      <Image
                        src={brand.icon}
                        alt={brand.name}
                        width={18}
                        height={18}
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          border: "2px solid rgba(88,110,132,1)",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          border: "2px solid rgba(88,110,132,1)",
                          position: "relative",
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            inset: "3px",
                            borderRadius: "50%",
                            border: "2px solid rgba(88,110,132,1)",
                          }}
                        />
                      </div>
                    )}

                    {/* Brand name */}
                    <span
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 700,
                        fontSize: "13.8px",
                        lineHeight: "110%",
                        color: "rgba(88,110,132,1)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDE ── */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              order: isMobile ? -1 : 0, // image on top on mobile
            }}
          >
            {/* Glow — Ellipse 1: 398px circle, top:204px left:873px on 1440 canvas */}
            <div
              style={{
                width: "398px",
                height: "398px",
                borderRadius: "50%",
                opacity: 0.5,
                background:
                  "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
                filter: "blur(100px)",
                position: "absolute",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            {/* Main Image — Frame 114: 562×301 */}
            <Image
              src={hero}
              alt="Banking Dashboard"
              width={562}
              height={301}
              priority
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: isMobile ? "100%" : "562px",
                height: "auto",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}