"use client";
import { ArrowRight } from "lucide-react";
import frame26 from "../assests/Frame 26.png"
import Image from "next/image"
import "./csss/button-primary.css"
import frame262 from "../assests/Frame 26 (2).png"
import frame263 from "../assests/Frame 26 (3).png"
import frame264 from "../assests/Frame 26 (4).png"
import frame261 from "../assests/Frame 26 (1).png"
const solutions = [
  {
    icon: frame26,
    title: "Core Banking CBT",
    desc: "CBT helps your financial institution transform and optimize processes, automate and streamline procedures, set up flexible banking systems for your customers. Our approach to banking digital means is specifically designed for financial institutions.",
  },
  {
    icon: frame261,
    title: "Digital Banking N7",
    desc: "N7's digital banking capabilities allow your institution to deliver an experience-centric strategy, human-centered design philosophies, engineering and data operations, delivering and innovating products. Our approach to building digital teams is specifically designed to help clients.",
  },
  {
    icon: frame262,
    title: "Open Banking",
    desc: "Our API banking helps you to gain an API strategy, human-centered design philosophies, streamline and orchestrate, management, offer alternative budgeting. Our platform can help banks to grow, and simplify banking operations.",
  },
  {
    icon: frame263,
    title: "Loan Origination System",
    desc: "N7 brings full capabilities across strategy, human-centered design philosophies, engineering and data operations, engineering and data operations, delivering and innovating products. Our approach is to build digital teams is specifically designed to help clients.",
  },
  {
    icon: frame264,
    title: "Loan Management System",
    desc: "N7 brings full capabilities across strategy, human-centered design philosophies, engineering and data operations, engineering and data operations, delivering and innovating products. Our approach is to build digital teams is specifically designed to help clients.",
  },
];

export default function Solutions() {
  return (
    <section
      style={{
        width: "1440px",
        minHeight: "1250px",
        background: "rgba(0, 13, 18, 1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blur Background */}
      <div
        style={{
          width: "556.7720947265625px",
          height: "556.7720947265625px",
          borderRadius: "50%",
          opacity: 0.1,
          background:
            "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
          filter: "blur(200px)",
          position: "absolute",
          top: "447.5px",
          left: "968.64px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "47.09px",
          left: "80px",
          display: "flex",
          flexDirection: "column",
          minWidth: "433px",
          width: "auto",
          height: "fit-content",
          minHeight: "185px",
          gap: "48px",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            width: "433px",
            height: "88px",
            fontFamily: "Archivo, sans-serif",
            fontWeight: 400,
            fontSize: "37px",
            lineHeight: "120%",
            letterSpacing: "-1%",
            color: "rgba(233, 244, 249, 1)",
            margin: 0,
          }}
        >
          All of our solutions are tailor-made to your needs
        </h2>

        <button className="secondaryButton">
          Request Demo
        </button>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          position: "absolute",
          left: "730px",
          top: "47.09px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          width: "613px",
          height: "1085px",
          gap: "76px",
          borderRadius: "16px",
          alignItems: "stretch",
          justifyItems: "stretch",
          zIndex: 2,
        }}
      >
        {solutions.map((s) => (
          <div
            key={s.title}
            style={{
              width: "268.506px",
              height: "327px",
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              position: "relative",
              cursor: "pointer",
              
            }}
          >
            {/* Icon */}
            <Image
              src={s.icon}
              alt={s.title}
              style={{
                width: "47px",
                height: "49px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />

            {/* Content */}
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              <h3
                style={{
                  width: "263.718px",
                  fontFamily: "Archivo",
                  fontWeight: 400,
                  fontSize: "22px",
                  lineHeight: "120%",
                  color: "rgba(233, 244, 249, 1)",
                  margin: 0,
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  width: "268.506px",
                  opacity: 0.7,
                  fontFamily: "Archivo",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "130%",
                  color: "rgba(233, 244, 249, 1)",
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </div>

            {/* Link */}
            <a
              href="#"
              className="link-blue"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                textDecoration: "none",
                width: "fit-content",
              }}
            >
              {/* Text + Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    fontFamily: '"Chivo Mono", monospace',
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "130%",
                    textTransform: "uppercase",
                    color: "rgba(0, 180, 253, 1)",
                  }}
                >
                  Learn More
                </span>

                <ArrowRight
                  size={12}
                  color="rgba(0, 180, 253, 1)"
                />
              </div>

              {/* Animated Line */}
              <div className="hoverLine" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
