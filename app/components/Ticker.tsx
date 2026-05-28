"use client";

import React, { useRef, useEffect } from "react";

interface StarIconProps {
  opacity?: number;
}

interface TickerProps {
  speed?: number;
}

type TickerItemType =
  | "star"
  | "n7"
  | "cb7"
  | "say"
  | "wave"
  | "banking";

interface TickerItem {
  type: TickerItemType;
}

const StarIcon: React.FC<StarIconProps> = ({ opacity = 0.3 }) => (
  <svg
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ opacity, flexShrink: 0 }}
  >
    <path
      d="M29 0 L31.5 26.5 L58 29 L31.5 31.5 L29 58 L26.5 31.5 L0 29 L26.5 26.5 Z"
      fill="#000D12"
    />
  </svg>
);

const tickerItems: TickerItem[] = [
  { type: "star" },
  { type: "n7" },
  { type: "star" },
  { type: "say" },
  { type: "wave" },
  { type: "banking" },
  { type: "star" },
  { type: "cb7" },
  { type: "star" },
  { type: "say" },
];

const styles: Record<string, React.CSSProperties> = {
  outer: {
    width: "100%",
    height: "116px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    borderBottom: "0.5px solid rgba(0,0,0,0.1)",
    borderTop: "0.5px solid rgba(0,0,0,0.1)",
  },

  track: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    whiteSpace: "nowrap",
    willChange: "transform",
    flexShrink: 0,
  },

  group: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    flexShrink: 0,
  },

  n7: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 500,
    fontSize: "47px",
    lineHeight: "120%",
    background: "linear-gradient(107deg, #00B4FD -5.68%, #003ACE 86.98%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    flexShrink: 0,
  },

  cb7: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 500,
    fontSize: "47px",
    lineHeight: "120%",
    background: "linear-gradient(107deg, #00B4FD -5.68%, #003ACE 86.98%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    flexShrink: 0,
  },

  say: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 600,
    fontSize: "47px",
    lineHeight: "120%",
    color: "#000D12",
    flexShrink: 0,
  },

  banking: {
    fontFamily: "'Archivo', sans-serif",
    fontWeight: 600,
    fontSize: "47px",
    lineHeight: "120%",
    color: "#000D12",
    flexShrink: 0,
  },

  wave: {
    fontSize: "52px",
    lineHeight: 1,
    flexShrink: 0,
    userSelect: "none",
  },
};

const TickerGroup: React.FC = () => (
  <div style={styles.group}>
    {tickerItems.map((item, i) => {
      if (item.type === "star") {
        return <StarIcon key={i} />;
      }

      if (item.type === "n7") {
        return (
          <span key={i} style={styles.n7}>
            N7
          </span>
        );
      }

      if (item.type === "cb7") {
        return (
          <span key={i} style={styles.cb7}>
            CB7
          </span>
        );
      }

      if (item.type === "say") {
        return (
          <span key={i} style={styles.say}>
            Say
          </span>
        );
      }

      if (item.type === "wave") {
        return (
          <span key={i} style={styles.wave}>
            👋
          </span>
        );
      }

      if (item.type === "banking") {
        return (
          <span key={i} style={styles.banking}>
            to the new way of banking
          </span>
        );
      }

      return null;
    })}
  </div>
);

const Ticker: React.FC<TickerProps> = ({ speed = 80 }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<number | null>(null);
  const xRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);

  useEffect(() => {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600&display=swap";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let lastTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!lastTime) {
        lastTime = timestamp;
      }

      const delta = timestamp - lastTime;
      lastTime = timestamp;

      if (!pausedRef.current) {
        const groupWidth = track.scrollWidth / 2;

        xRef.current -= (speed * delta) / 1000;

        if (Math.abs(xRef.current) >= groupWidth) {
          xRef.current = 0;
        }

        track.style.transform = `translateX(${xRef.current}px)`;
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [speed]);

  return (
    <div
      style={styles.outer}
      role="marquee"
      aria-label="Say hello to the new way of banking"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div ref={trackRef} style={styles.track}>
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
};

export default Ticker;