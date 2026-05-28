"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

const checkItems: string[] = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
];

const GradientCheckIcon: React.FC = () => (
  <svg
    width="30"
    height="32"
    viewBox="0 0 30 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <defs>
      <linearGradient id="ellipseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00B4FD" />
        <stop offset="100%" stopColor="#003ACE" />
      </linearGradient>
    </defs>
    <circle cx="14.88" cy="16" r="9.26" fill="url(#ellipseGrad)" />
    <path
      d="M11.5 15.8 L14.2 18.5 L18.8 13.5"
      stroke="#E9F4F9"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

interface ComplianceSectionProps {
  /** Path or URL to your iPhone mockup image */
  phoneImage: string | StaticImageData;
  /** Alt text for the image */
  phoneImageAlt?: string;
}

const ComplianceSection: React.FC<ComplianceSectionProps> = ({
  phoneImage,
  phoneImageAlt = "App screenshot",
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        fontFamily: "'Archivo', sans-serif",
        width: 652,
        display: "flex",
        flexDirection: "column",
        gap: 110,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 80,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* ── Phone image — just an <img>, no shell ── */}
        <Image
          src={phoneImage}
          alt={phoneImageAlt}
          style={{
            width: 268,
            height: 543,
            objectFit: "contain",
            flexShrink: 0,
          }}
        />

        {/* ── Right column ── */}
        <div style={{ width: 302, display: "flex", flexDirection: "column", gap: 43 }}>

          {/* Heading + body */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h3
              style={{
                margin: 0,
                width: 269,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "130%",
                color: "rgba(0, 13, 18, 1)",
              }}
            >
              Fully compliant with regulatory requirement
            </h3>
            <p
              style={{
                margin: 0,
                width: 268,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "130%",
                color: "rgba(0, 13, 18, 0.7)",
              }}
            >
              The governance of risk management with regulations is achieved by
              our risk management framework that is fully integrated to work
              with digital bank&apos;s operational-risk protocols and procedures.
            </p>
          </div>

          {/* Checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {checkItems.map((item, i) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-16px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${
                    0.3 + i * 0.1
                  }s`,
                }}
              >
                <GradientCheckIcon />
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: 14,
                    color: "rgba(0, 13, 18, 1)",
                    lineHeight: "130%",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;
