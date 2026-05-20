import { useEffect, useRef, useState } from "react";
import "./About.css";

function Counter({ target, suffix = "", duration = 2000, run }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [run, target, duration]);
  return <>{val}{suffix}</>;
}

export default function About() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setRun(true); }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="container about__grid">

        {/* LEFT — image */}
        <div className="about__media">
          <div className="about__img">
            <div className="about__img-bg" />
            <div className="about__badge">
              <span>India's Most Advanced</span>
              <strong>Smart City</strong>
            </div>
          </div>
          <div className="about__frame-tl" />
          <div className="about__frame-br" />
        </div>

        {/* RIGHT — text */}
        <div className="about__content">
          <span className="section-label">About Dholera</span>
          <h2 className="section-title">
            India's First &amp; Biggest<br />
            <span>Greenfield Smart City</span>
          </h2>

          <p className="about__desc">
            Dholera Smart City is envisioned to be a global manufacturing hub and a smart, sustainable city of the future. Excellent infrastructure, world-class connectivity and government initiatives make it the perfect destination for investment.
          </p>
          <p className="about__desc">
            Anandam Homes brings you an exclusive opportunity to own premium residential plots in this landmark development — backed by RERA approval and transparent processes.
          </p>

          {/* Counters */}
          <div className="about__counters" ref={ref}>
            <div className="about__counter">
              <strong><Counter target={200} suffix="+" run={run} /></strong>
              <span>Premium Plots</span>
            </div>
            <div className="about__counter-divider" />
            <div className="about__counter">
              <strong><Counter target={12} suffix="+" run={run} /></strong>
              <span>Years Experience</span>
            </div>
            <div className="about__counter-divider" />
            <div className="about__counter">
              <strong><Counter target={500} suffix="+" run={run} /></strong>
              <span>Happy Families</span>
            </div>
            <div className="about__counter-divider" />
            <div className="about__counter">
              <strong><Counter target={100} suffix="%" run={run} /></strong>
              <span>RERA Approved</span>
            </div>
          </div>

          <button className="gold-btn" style={{ marginTop: 8 }}>
            Know More
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
