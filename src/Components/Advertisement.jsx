import React, { useRef } from "react";

const DEFAULT_ADS = [
  { id: 1, text: "🔥 50% OFF Course Bundle — Limited Time Offer!", href: "#offer1" },
  { id: 2, text: "New: Advanced React Bootcamp — Enroll Now", href: "#offer2" },
  { id: 3, text: "Invite Friends, Earn Credits — Refer & Save", href: "#offer3" },
  { id: 4, text: "Live Webinar: UX Design — Free Seats Available", href: "#offer4" },
];

const Advertisement = ({ ads = DEFAULT_ADS, speed = 6 }) => {
  const marqueeRef = useRef(null);

  return (
    <div style={styles.adWrap} aria-hidden="true">
      <marquee
        ref={marqueeRef}
        behavior="scroll"
        direction="left"
        scrollAmount={speed}
        style={styles.adMarquee}
        onMouseEnter={() => marqueeRef.current && marqueeRef.current.stop && marqueeRef.current.stop()}
        onMouseLeave={() => marqueeRef.current && marqueeRef.current.start && marqueeRef.current.start()}
      >
        {ads.map((ad, i) => (
          <a key={ad.id || i} href={ad.href || "#"} style={styles.adLink}>
            {ad.text}
            {i < ads.length - 1 && <span style={styles.separator}> &nbsp;|&nbsp; </span>}
          </a>
        ))}
      </marquee>
    </div>
  );
};

const styles = {
  adWrap: {
    width: "100%",
    background: "#FFF8E1",
    borderBottom: "1px solid #fde3a7",
    padding: "6px 12px",
    boxSizing: "border-box",
    // zIndex: 1,
  },
  adMarquee: {
    fontSize: 14,
    color: "#92400e",
    lineHeight: "24px",
    whiteSpace: "nowrap",
  },
  adLink: {
    color: "#92400e",
    textDecoration: "none",
    fontWeight: 600,
  },
  separator: {
    color: "#92400e",
    opacity: 0.7,
  },
};
 
export default Advertisement;