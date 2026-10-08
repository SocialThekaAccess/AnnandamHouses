import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Anandamhomes1 from "../assets/AnnandamHomes1-compressed.jpg";
import logoImg from "../assets/anandamhomeslogo.png";
import Anandamslider2 from "../assets/Anandamslider2-compressed.jpg";
import Anandamslider3 from "../assets/sliderhome3-compressed.jpg";
import Anandamslider2Mobile from "../assets/AnandamExoticaSlider2Mobileview.png";
import { useCallModal } from "../context/CallModalContext";

const ChevronDown = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

// pos = desktop crop, posMobile = mobile crop (optional)
const SLIDES = [
  {
    bg: Anandamhomes1,
    pos: "center 35%",
    posMobile: "center 30%",
    headline: <>Thoughtfully<br />Planned Living</>,
    tagline: <>Premium plotted spaces shaped with trust,<br />clarity, and future-ready vision.</>,
  },
  {
    bg: Anandamslider2,
    bgMobile: Anandamslider2Mobile,
    pos: "center center",
    posMobile: "center center",
    headline: <>Built Around<br />Real Value</>,
    tagline: <>Designed for families, end users,<br />and long-term confidence.</>,
  },
  {
    bg: Anandamslider3,
    pos: "center 40%",
    posMobile: "center 40%",
    headline: <>A Better<br />Address Ahead</>,
    tagline: <>Infrastructure-led growth, refined presentation,<br />and a smoother buying journey.</>,
  },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const introTimeoutRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const { setOpen } = useCallModal();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    return () => {
      if (introTimeoutRef.current) clearTimeout(introTimeoutRef.current);
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  // Preload all slide images so mobile doesn't show blank on switch
  useEffect(() => {
    SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.bg;
      if (s.bgMobile) {
        const m = new Image();
        m.src = s.bgMobile;
      }
    });
  }, []);

  const goTo = useCallback((idx) => {
    if (idx === current || fading) return;

    if (introTimeoutRef.current) clearTimeout(introTimeoutRef.current);
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);

    setTextVisible(false);
    introTimeoutRef.current = setTimeout(() => {
      setPrev(current);
      setFading(true);
      setCurrent(idx);
      transitionTimeoutRef.current = setTimeout(() => {
        setTextVisible(true);
        setPrev(null);
        setFading(false);
        transitionTimeoutRef.current = null;
      }, 500);
      introTimeoutRef.current = null;
    }, 300);
  }, [current, fading]);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [current, goTo]);

  const slide = SLIDES[current];
  const renderImg = (s, extra = {}) => (
    <picture>
      {s.bgMobile && <source media="(max-width: 768px)" srcSet={s.bgMobile} />}
      <img
        src={s.bg}
        alt=""
        className="hero__slide-img"
        loading="eager"
        decoding="async"
        style={posVars(s)}
        {...extra}
      />
    </picture>
  );
  const posVars = (s) => ({
    "--pos": s.pos,
    "--pos-m": s.posMobile || s.pos,
  });

  return (
    <section id="home" className="hero" style={{ position: "relative" }}>
      <div className="hero__slides-desktop">
        {prev !== null && (
          <div className="hero__slide hero__slide--prev">
            {renderImg(SLIDES[prev])}
          </div>
        )}
        <div className="hero__slide hero__slide--active">
          {renderImg(slide, { fetchPriority: "high" })}
        </div>
      </div>

      <div className="hero__overlay" />
      <div className="hero__grid-pattern" />

      {/* Logo — desktop only */}
      <Link to="/" className="hero__logo" aria-label="Anandam Properties — Home">
        <img src={logoImg} alt="Anandam Properties" />
      </Link>

      {/* Call Now — desktop only */}
      <button
        type="button"
        className="hero__call-btn"
        aria-label="Call Now"
        onClick={() => setOpen(true)}
      >
        <span className="hero__call-btn__icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </span>
        <span className="hero__call-btn__text">Call Now</span>
      </button>

      {/* Text content */}
      <div className="hero__container">
        <div className={`hero__left${loaded ? "" : " hidden"}${textVisible ? "" : " text-out"}`}>
          <h1 className="hero__headline">{slide.headline}</h1>
          <p className="hero__tagline">{slide.tagline}</p>
          <div className="hero__rule" />
        </div>
      </div>

      {/* Slide numbers */}
      <div className="hero__slider-nums">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero__slider-num${current === i ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="hero__progress">
        <div key={current} className="hero__progress-bar" />
      </div>

      <button
        type="button"
        className="hero__scroll"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        aria-label="Scroll to About section"
      >
        <div className="hero__scroll-circle">
          <ChevronDown />
        </div>
      </button>
    </section>
  );
}