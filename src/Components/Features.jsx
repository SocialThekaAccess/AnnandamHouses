import { useState, useEffect, useRef } from "react";
import "./Features.css";

function useInView(threshold = 0.15) {
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

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="28" width="48" height="28" rx="2"/>
        <polyline points="4,28 32,8 60,28"/>
        <rect x="24" y="40" width="16" height="16"/>
        <line x1="32" y1="8" x2="32" y2="4"/>
      </svg>
    ),
    title: "Grand Arrival Experience",
    desc: "A polished entry statement with controlled access, surveillance support, and a stronger first impression for residents and guests.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="20" width="52" height="36" rx="2"/>
        <path d="M6 32 h52"/>
        <path d="M20 20 V14 Q32 6 44 14 V20"/>
        <circle cx="32" cy="26" r="4"/>
        <rect x="26" y="38" width="12" height="18"/>
      </svg>
    ),
    title: "Community-Led Amenities",
    desc: "Purposeful shared spaces planned to support recreation, comfort, and a more complete day-to-day lifestyle within the development.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 56 Q16 32 32 24 Q48 32 56 56"/>
        <path d="M20 56 Q24 40 32 36 Q40 40 44 56"/>
        <circle cx="32" cy="18" r="6"/>
        <path d="M24 18 Q20 10 28 8"/>
        <path d="M40 18 Q44 10 36 8"/>
      </svg>
    ),
    title: "Green Open Surroundings",
    desc: "Landscaped pockets, tree-lined stretches, and breathing space that add calm visual character across the community.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="44" height="44" rx="3"/>
        <line x1="10" y1="26" x2="54" y2="26"/>
        <line x1="10" y1="40" x2="54" y2="40"/>
        <line x1="26" y1="10" x2="26" y2="54"/>
        <line x1="40" y1="10" x2="40" y2="54"/>
      </svg>
    ),
    title: "Well-Planned Internal Roads",
    desc: "Wide movement corridors with supporting street lighting and drainage planning for smoother everyday access.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="22"/>
        <path d="M32 10 V32 L46 46"/>
        <circle cx="32" cy="32" r="3" fill="currentColor"/>
        <path d="M22 14 Q10 22 10 32"/>
        <path d="M42 14 Q54 22 54 32"/>
      </svg>
    ),
    title: "Security-Focused Planning",
    desc: "A development approach that prioritizes monitored entry, perimeter definition, and reassurance for modern families.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8 L38 20 L52 22 L42 32 L44 46 L32 40 L20 46 L22 32 L12 22 L26 20 Z"/>
      </svg>
    ),
    title: "Organized Utility Network",
    desc: "Cleaner infrastructure planning for essential services, supporting a more orderly and future-ready neighborhood environment.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 52 L12 28 L32 12 L52 28 L52 52"/>
        <rect x="22" y="36" width="10" height="16"/>
        <rect x="36" y="30" width="10" height="10"/>
        <line x1="8" y1="52" x2="56" y2="52"/>
      </svg>
    ),
    title: "Documentation With Clarity",
    desc: "Approvals, layout understanding, and essential paperwork are handled with greater transparency so decisions feel more secure.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="32" cy="44" rx="20" ry="8"/>
        <path d="M12 44 V32 Q12 16 32 12 Q52 16 52 32 V44"/>
        <path d="M22 32 Q22 24 32 22 Q42 24 42 32"/>
        <circle cx="32" cy="32" r="4"/>
      </svg>
    ),
    title: "Essential Infrastructure Support",
    desc: "Core service planning for water flow, drainage, and long-term functionality across the plotted community.",
  },
];

const VISIBLE = 3;

export default function Features() {
  const [start, setStart] = useState(0);
  const [headerRef, headerVisible] = useInView(0.2);
  const [cardsRef, cardsVisible] = useInView(0.1);

  const prev = () => setStart(s => Math.max(0, s - 1));
  const next = () => setStart(s => Math.min(FEATURES.length - VISIBLE, s + 1));

  const visible = FEATURES.slice(start, start + VISIBLE);

  return (
    <section className="features" id="features">
      <div className="container">
        <div
          ref={headerRef}
          className={`features__header reveal-up${headerVisible ? " is-visible" : ""}`}
        >
          <span className="section-label features__label">Development Highlights</span>
          <h2 className="section-title features__title">
            Carefully Planned Plots With<br />
            <span>Modern Lifestyle Features</span>
          </h2>
          <p className="features__subtitle">
            Inspired by thoughtful large-format communities, Anandam Homes brings together
            infrastructure, presentation, and practical amenities to create a more complete plotted address.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="features__cards-wrap"
        >
          <div className="features__cards">
            {visible.map((f, i) => (
              <div
                key={start + i}
                className={`feat-card reveal-up${cardsVisible ? " is-visible" : ""}`}
                style={{ transitionDelay: cardsVisible ? `${i * 0.12}s` : "0s" }}
              >
                <div className="feat-card__icon">{f.icon}</div>
                <h3 className="feat-card__title">{f.title}</h3>
                <p className="feat-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="features__nav">
            <button
              className={`features__nav-btn${start === 0 ? " disabled" : ""}`}
              onClick={prev}
              disabled={start === 0}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
            </button>

            <div className="features__dots">
              {Array.from({ length: FEATURES.length - VISIBLE + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`features__dot${start === i ? " active" : ""}`}
                  onClick={() => setStart(i)}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>

            <button
              className={`features__nav-btn${start >= FEATURES.length - VISIBLE ? " disabled" : ""}`}
              onClick={next}
              disabled={start >= FEATURES.length - VISIBLE}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
