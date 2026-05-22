import { useEffect, useRef, useState } from "react";
import "./About.css";
import doleaImg from "../assets/Dolera.png";

function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Counter({ target, suffix = "", duration = 2400, run }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!run) return;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [run, target, duration]);

  return <>{val}{suffix}</>;
}

const icons = {
  skyline: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V9l4-3v15" />
      <path d="M9 21V4h6v17" />
      <path d="M15 21V8h4v13" />
      <path d="M7 12h.01M7 15h.01M11 8h.01M13 8h.01M11 12h.01M13 12h.01M17 12h.01M17 15h.01" />
    </svg>
  ),
  factory: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V11l5 3v-3l5 3v-4h4v11" />
      <path d="M8 18h2M13 18h2M18 18h1" />
    </svg>
  ),
  leaf: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4c-7 1-12 5-14 12" />
      <path d="M4 20c2-8 8-14 16-16 1 7-3 14-10 16-2 .5-4 .3-6 0Z" />
    </svg>
  ),
  network: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="5" cy="7" r="2" />
      <circle cx="19" cy="7" r="2" />
      <circle cx="5" cy="17" r="2" />
      <circle cx="19" cy="17" r="2" />
      <path d="m7 8.5 3.1 2.2M16.9 8.5l-3.1 2.2M7 15.5l3.1-2.2M16.9 15.5l-3.1-2.2" />
    </svg>
  ),
  shield: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  ),
  plots: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M8 20v-7h8v7" />
      <path d="M10 16h4" />
    </svg>
  ),
  star: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </svg>
  ),
  family: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
      <circle cx="12" cy="9" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M2 21v-2a4 4 0 0 1 3-3.87" />
    </svg>
  ),
  pin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  arrow: (
    <svg width="36" height="16" viewBox="0 0 38 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 9h34" />
      <path d="m28 2 7 7-7 7" />
    </svg>
  ),
};

const features = [
  { icon: "factory", label: "Growth-Led Investment Zone" },
  { icon: "leaf", label: "Planned Green Urban Expansion" },
  { icon: "network", label: "Modern Roads and Connectivity" },
  { icon: "shield", label: "Clear Process and Documentation" },
];

const stats = [
  { icon: "plots", target: 200, suffix: "+", label: "Premium Plots" },
  { icon: "star", target: 25, suffix: "+", label: "Years Experience" },
  { icon: "family", target: 500, suffix: "+", label: "Happy Families" },
  { icon: "shield", target: 100, suffix: "%", label: "Buyer-Focused Support" },
];

export default function About() {
  const [sectionRef] = useInView(0.08);
  const [mediaRef, mediaVisible] = useInView(0.15);
  const [contentRef, contentVisible] = useInView(0.15);
  const [countersRef, countersRun] = useInView(0.25);

  return (
    <section
      className="ae-about"
      id="about"
      ref={sectionRef}
    >
      <div className="ae-dots" aria-hidden="true">
        {Array.from({ length: 32 }).map((_, i) => <span key={i} />)}
      </div>
      <div className="ae-side-accent" aria-hidden="true" />

      <div className="ae-container">
        <div className="ae-grid">
          <div
            ref={mediaRef}
            className={`ae-media ae-reveal-left${mediaVisible ? " vis" : ""}`}
          >
            <div className="ae-img-wrap">
              <div className="ae-corner ae-corner--tl" aria-hidden="true" />
              <div className="ae-corner ae-corner--br" aria-hidden="true" />
              <div className="ae-img-photo">
                <img
                  src={doleaImg}
                  alt="Dholera Smart City — Anandam Homes"
                  className="ae-img-bg"
                />
                <div className="ae-img-overlay" aria-hidden="true" />
              </div>

              <div className="ae-feature-strip">
                {features.map((f) => (
                  <div className="ae-feature" key={f.label}>
                    {icons[f.icon]}
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="ae-signature">Creating lasting value through planning, trust, and buyer-focused development</p>
          </div>

          <div
            ref={contentRef}
            className={`ae-content ae-reveal-right${contentVisible ? " vis" : ""}`}
          >
            <div className="ae-eyebrow">About Anandam Homes</div>

            <h2 className="ae-heading">
              Invest in India&apos;s
              First Greenfield Smart City
            </h2>

            <div className="ae-divider" aria-hidden="true">
              <div className="ae-divider-diamond" />
            </div>

            <p className="ae-desc">
              Dholera Smart City is envisioned to be a global manufacturing hub and a smart,
              sustainable city of the future. Excellent infrastructure, world-class connectivity
              and government initiatives make it the perfect destination for investment.
            </p>
            <p className="ae-desc">
              Anandam Exotica brings you an exclusive opportunity to own premium residential plots
              in this landmark development - backed by GujRERA approval and transparent processes.
            </p>

            <div className="ae-counters" ref={countersRef}>
              {stats.map((s) => (
                <div className="ae-counter" key={s.label}>
                  {icons[s.icon]}
                  <div className="ae-counter-val">
                    <Counter target={s.target} suffix={s.suffix} run={countersRun} />
                  </div>
                  <div className="ae-counter-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* <button
              className="ae-cta"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="ae-cta-icon">{icons.pin}</div>
              <span className="ae-cta-text">Explore Premium Plot Options</span>
              <span className="ae-cta-arrow">{icons.arrow}</span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
