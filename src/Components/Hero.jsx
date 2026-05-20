import { useState, useEffect, useCallback } from "react";
import "./Hero.css";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

/* ── Slider images ── */
const SLIDES = [
  {
    bg: "https://www.plotsindholera.in/assets/img/dholera-smart-city.webp",
    pos: "center 35%",
  },
  {
    bg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85&auto=format&fit=crop",
    pos: "center center",
  },
  {
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85&auto=format&fit=crop",
    pos: "center 40%",
  },
];

const STATS = [
  { num: "200+",    label: "Premium Plots"  },
  { num: "₹2.5L",  label: "Starting Price" },
  { num: "GujRERA", label: "Approved"       },
  { num: "2026",    label: "Possession"     },
];

export default function Hero() {
  const [loaded,  setLoaded]  = useState(false);
  const [current, setCurrent] = useState(0);
  const [prev,    setPrev]    = useState(null);
  const [fading,  setFading]  = useState(false);

  /* initial load animation */
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* go to slide */
  const goTo = useCallback((idx) => {
    if (idx === current || fading) return;
    setPrev(current);
    setFading(true);
    setCurrent(idx);
    setTimeout(() => { setPrev(null); setFading(false); }, 900);
  }, [current, fading]);

  /* auto-play every 5s */
  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [current, goTo]);

  return (
    <section id="home" className="hero">

      {/* ── Slider backgrounds ── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero__slide${i === current ? " hero__slide--active" : ""}${i === prev ? " hero__slide--prev" : ""}`}
          style={{ backgroundImage: `url(${s.bg})`, backgroundPosition: s.pos }}
        />
      ))}

      <div className="hero__overlay" />
      <div className="hero__grid-pattern" />

      {/* ── Main content ── */}
      <div className="hero__container">
        <div className={`hero__left${loaded ? "" : " hidden"}`}>

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">Now Selling — Phase 1 Launch</span>
          </div>

          <h1 className="hero__headline">
            Anandam
            <span className="hero__headline-gold">Homes</span>
            <span className="hero__headline-italic">Luxury Living Redefined</span>
          </h1>

          <div className="hero__rule" />

          <div className="hero__location">
            <MapPinIcon />
            Dholera Smart City, Gujarat — India's First Greenfield Smart City
          </div>

          <p className="hero__sub">
            Own a piece of tomorrow. <strong>200+ GujRERA-approved</strong> residential
            plots in the fastest-growing smart city of India — built for those who
            invest in the future.
          </p>

          <div className="hero__ctas">
            <button
              className="hero__btn-primary"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Free Site Visit <ArrowIcon />
            </button>
            <button
              className="hero__btn-secondary"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Plots
            </button>
          </div>

          <div className="hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="hero__stat">
                <div className="hero__stat-num">{s.num}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Slide numbers — bottom right (Jubilee style) ── */}
      <div className="hero__slider-nums">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero__slider-num${current === i ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="hero__progress">
        <div
          key={current}
          className="hero__progress-bar"
        />
      </div>

      {/* ── Scroll indicator ── */}
      <a href="#about" className="hero__scroll">
        <span className="hero__scroll-label">Scroll</span>
        <ChevronDown />
      </a>

    </section>
  );
}
