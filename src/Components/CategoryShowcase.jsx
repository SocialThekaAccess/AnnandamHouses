import { useRef, useEffect, useState } from "react";
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
    title: "Residential Plots",
    subtitle: "Thoughtfully Planned",
    desc: "Spaces shaped for end use, family comfort, and long-term ownership.",
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85&auto=format&fit=crop",
    href: "#contact",
  },
  {
    title: "Growth Potential",
    subtitle: "Location Advantage",
    desc: "Positioned to benefit from expanding infrastructure and stronger future visibility.",
    bg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85&auto=format&fit=crop",
    href: "#about",
  },
  {
    title: "Curated Inventory",
    subtitle: "Premium Selection",
    desc: "A focused mix of plotted opportunities presented with clarity and personalized guidance.",
    bg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85&auto=format&fit=crop",
    href: "#values",
  },
];

export default function CategoryShowcase() {
  const [ref, visible] = useInView(0.1);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="cat-showcase" ref={ref}>
      {CATEGORIES.map((cat, i) => (
        <div
          key={cat.title}
          className={`cat-panel${visible ? " is-visible" : ""}`}
          style={{ transitionDelay: `${i * 0.15}s` }}
        >
          <div
            className="cat-panel__bg"
            style={{ backgroundImage: `url(${cat.bg})` }}
          />

          <div className="cat-panel__overlay" />
          <div className="cat-panel__accent" />

          <div className="cat-panel__content">
            <span className="cat-panel__sub">{cat.subtitle}</span>
            <h2 className="cat-panel__title">{cat.title}</h2>
            <span className="cat-panel__desc">{cat.desc}</span>

            <button
              className="cat-panel__btn"
              onClick={() => scrollTo(cat.href)}
            >
              Explore More <ArrowIcon />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
