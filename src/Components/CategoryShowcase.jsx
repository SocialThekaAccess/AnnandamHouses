import { useRef, useEffect, useState } from "react";
import doleraVideo from "../assets/dholeravideo.mp4";
import "./CategoryShowcase.css";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const CATEGORIES = [
  {
    href: "#about",
    showBtn: false,
  },
  {
    title: "Residential Plots",
    subtitle: "Thoughtfully Planned",
    desc: "Spaces shaped for end use, family comfort, and long-term ownership.",
    href: "#contact",
    showBtn: true,
  },
  {
    href: "#values",
    showBtn: false,
  },
];

export default function CategoryShowcase() {
  const [ref, visible] = useInView(0.1);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="cat-showcase" ref={ref}>
      <video
        className="cat-showcase__video"
        src={doleraVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="cat-showcase__video-overlay" />

      {CATEGORIES.map((cat, i) => (
        <div
          key={i}
          className={`cat-panel${visible ? " is-visible" : ""}`}
          style={{ transitionDelay: `${i * 0.15}s` }}
        >
          <div className="cat-panel__overlay" />

          <div className="cat-panel__content">
            {cat.subtitle && <span className="cat-panel__sub">{cat.subtitle}</span>}
            {cat.title && <h2 className="cat-panel__title">{cat.title}</h2>}
            {cat.desc && <span className="cat-panel__desc">{cat.desc}</span>}

            {cat.showBtn && (
              <button
                className="cat-panel__btn"
                onClick={() => scrollTo(cat.href)}
              >
                Explore More <ArrowIcon />
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}