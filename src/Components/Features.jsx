import { useState, useEffect, useRef } from "react";
import "./Features.css";
import imgGrand from "../assets/Grand Arrival Experience.png";
import imgCommunity from "../assets/Community-Led Amenities.png";
import imgGreen from "../assets/Green Open Surroundings.png";
import imgRoads from "../assets/Well-Planned Internal Roads.png";
import imgSecurity from "../assets/Security-Focused Planning.png";
import imgUtility from "../assets/Organized Utility Network.png";
import imgDoc from "../assets/Documentation With Clarity.png";
import imgInfra from "../assets/Essential Infrastructure Support.png";

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
    img: imgGrand,
    title: "Grand Arrival Experience",
    desc: "A polished entry statement with controlled access, surveillance support, and a stronger first impression for residents and guests.",
  },
  {
    img: imgCommunity,
    title: "Community-Led Amenities",
    desc: "Purposeful shared spaces planned to support recreation, comfort, and a more complete day-to-day lifestyle within the development.",
  },
  {
    img: imgGreen,
    title: "Green Open Surroundings",
    desc: "Landscaped pockets, tree-lined stretches, and breathing space that add calm visual character across the community.",
  },
  {
    img: imgRoads,
    title: "Well-Planned Internal Roads",
    desc: "Wide movement corridors with supporting street lighting and drainage planning for smoother everyday access.",
  },
  {
    img: imgSecurity,
    title: "Security-Focused Planning",
    desc: "A development approach that prioritizes monitored entry, perimeter definition, and reassurance for modern families.",
  },
  {
    img: imgUtility,
    title: "Organized Utility Network",
    desc: "Cleaner infrastructure planning for essential services, supporting a more orderly and future-ready neighborhood environment.",
  },
  {
    img: imgDoc,
    title: "Documentation With Clarity",
    desc: "Approvals, layout understanding, and essential paperwork are handled with greater transparency so decisions feel more secure.",
  },
  {
    img: imgInfra,
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
            Modern Lifestyle Features
          </h2>
          <p className="features__subtitle">
            Inspired by thoughtful large-format communities, Anandam  brings together
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
                <div className="feat-card__icon">
                  <img src={f.img} alt={f.title} className="feat-card__img" />
                </div>
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
