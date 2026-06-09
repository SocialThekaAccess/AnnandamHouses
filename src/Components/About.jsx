import { useEffect, useRef, useState, useCallback } from "react";
import "./About.css";
import img1 from "../assets/AboutSlider1.jpeg";
import img2 from "../assets/AboutSlider2.jpeg";
import img3 from "../assets/AboutSlider3.jpeg";
import img4 from "../assets/AboutSlider4.jpeg";

const CAROUSEL_IMGS = [img1, img2, img3, img4];

function useInView(threshold = 0.12) {
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

const WHY_POINTS = [
  "India's First Special Investment Region (SIR)",
  "Part of the Delhi-Mumbai Industrial Corridor (DMIC)",
  "India's First Semiconductor Hub",
  "Government-Backed Projects",
  "Strong Connectivity via Road, Railway, Sea Port, Airport, MonoRail",
];

export default function About() {
  const [sectionRef, sectionVisible] = useInView(0.08);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const next = useCallback(() => setActiveIdx(i => (i + 1) % CAROUSEL_IMGS.length), []);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 2000);
    return () => clearInterval(intervalRef.current);
  }, [paused, next]);

  return (
    <section className="ae-about" id="about" ref={sectionRef}>
      <div className="ae-container">
        <div className={`ae-grid reveal-up${sectionVisible ? " is-visible" : ""}`}>

          {/* ── LEFT: Carousel ── */}
          <div
            className="ae-carousel-col"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="ae-carousel-wrap">
              {CAROUSEL_IMGS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Dholera ${i + 1}`}
                  loading="lazy"
                  className={`ae-carousel-img${i === activeIdx ? " active" : ""}`}
                />
              ))}

              {/* No arrows or dots — auto-play only */}
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="ae-content">
            <span className="ae-eyebrow">About Dholera</span>

            <h2 className="ae-heading">
              Invest in India's First<br />
              <span>Greenfield</span> Smart City
            </h2>

            <div className="ae-divider">
              <div className="ae-divider-diamond" />
            </div>

            <p className="ae-desc">
              Dholera Smart City is a planned smart city in Gujarat, India, developed as part of the
              Delhi-Mumbai Industrial Corridor (DMIC). It is India's first greenfield smart city,
              building from scratch with modern infrastructure and proper planning. The city is
              designed to become a major industrial, manufacturing, and technology hub, with sectors
              like semiconductors, renewable energy, data centres, and logistics.
            </p>

            <div className="ae-why">
              <p className="ae-why__title">Why Invest in Dholera?</p>
              <ul className="ae-why__list">
                {WHY_POINTS.map((point, i) => (
                  <li key={i} className="ae-why__item">
                    <span className="ae-why__check">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
