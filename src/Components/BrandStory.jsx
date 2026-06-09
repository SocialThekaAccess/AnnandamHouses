import { useEffect, useRef, useState } from "react";
import "./BrandStory.css";
import BreathesImg from "../assets/BreathesNatures.png";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useInViewCounter(threshold = 0.25) {
  const ref = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRun(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, run];
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

const CHECKLIST = [
  "NANOC title clear project ",
  "Registry-ready property",
  "Immediate Possession",
  "Clear and transparent process",
  "Expert guidance for Dholera investment",
  "Proper documentation assistance",
  "Long-term investment-focused approach",
  "Strategic locations with high growth potential",
  "Market insights and future development updates",
];

const stats = [
  { target: 200, label: "Premium Plots" },
  { target: 25, suffix: "+", label: "Years Experience" },
  { target: 500, suffix: "+", label: "Happy Families" },
  { target: 100, suffix: "%", label: "Buyer-Focused Support" },
];

export default function BrandStory() {
  const [introRef, introVisible] = useInView(0.1);
  const [valuesRef, valuesVisible] = useInView(0.1);
  const [approachRef, approachVisible] = useInView(0.1);
  const [statsRef, statsRun] = useInViewCounter(0.25);

  return (
    <section className="brand-story" id="brand-story">

      {/* ── Intro + What We Stand For ── */}
      <div className="bs-intro-wrap">
        <div className="bs-container">
          <h2 className="bs-intro__main-heading">The Right Partner for Your Property Journey</h2>
          <div
            ref={introRef}
            className={`bs-intro reveal-up${introVisible ? " is-visible" : ""}`}
          >
            <div className="bs-intro__text">
              <h3 className="bs-values__heading">Why Choose Anandam?</h3>
              <p className="bs-intro__para">
               Anandam  brings you a thoughtfully planned residential plotting project locatedin Dholera, one of Gujarat's most promising growth corridors. Surrounded by future-ready development, strong connectivity, and peaceful surroundings, Anandam  is designed for people who want a secure, well-connected, and valuable place for their future home.
              </p>
              <p className="bs-intro__para">
                The project enjoys easy connectivity to important nearby destinations such as Dholera SIR, Dholera Airport, National Highway and National Maritime Heritage Complex. This makes the location ideal for those who want to stay connected to developing infrastructure while enjoying a calm and open environment.
              </p>
              <a
                href="https://wa.me/916384800001"
                className="bs-intro__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to Our Team
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div
              ref={valuesRef}
              className={`bs-values reveal-up${valuesVisible ? " is-visible" : ""}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <ul className="bs-values__list">
                {CHECKLIST.map((item, i) => (
                  <li key={i} className="bs-values__item">
                    <span className="bs-values__check">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Anandam Exotica Section ── */}
      <div className="bs-exotica-wrap">
        <div className="bs-container">
          <div
            ref={approachRef}
            className={`bs-exotica reveal-up${approachVisible ? " is-visible" : ""}`}
          >
            {/* Left: Image */}
            <div className="bs-exotica__img-col">
              <div className="bs-exotica__img-wrap">
                <img src={BreathesImg} alt="Where Luxury Breathes Natures" className="bs-exotica__img" />
              </div>
            </div>

            {/* Right: Heading on top, then desc + stats */}
            <div className="bs-exotica__right">
              <div className="bs-exotica__header">
                <span className="bs-exotica__eyebrow">Anandam Exotica</span>
                <div className="bs-exotica__line" />
                <h2 className="bs-exotica__heading">Where Luxury Breathes Natures</h2>
              </div>

              <p className="bs-exotica__desc">
                Anandam Exotica – A residential plotting destination in Dholera, offering connectivity, comfort, and future-ready value. Anandam Exotica gives you the opportunity to own a residential plot in a location that is peaceful today and promising for tomorrow. With wide internal roads, green surroundings, planned layout, and essential development features, the project is created to offer a clean and organized living environment.
              </p>
              <p className="bs-exotica__desc">
                The location near Lothal and Dholera makes it suitable for people who want to stay close to upcoming infrastructure while still enjoying open space, fresh surroundings, and a calm lifestyle away from crowded city areas.
              </p>

              {/* ── Stats ── */}
              <div className="bs-stats" ref={statsRef}>
                {stats.map((s) => (
                  <div className="bs-stat" key={s.label}>
                    <div className="bs-stat__val">
                      <Counter target={s.target} suffix={s.suffix} run={statsRun} />
                    </div>
                    <div className="bs-stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}