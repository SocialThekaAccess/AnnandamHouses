import { useState, useEffect, useCallback } from "react";
import "./Hero.css";
import Anandamhomes1 from "../assets/AnnandamHomes1.png";
import logoImg from "../assets/anandamhomeslogo.png";
import Anandamslider2 from "../assets/Anandamslider2.png";
import { useCallModal } from "../context/CallModalContext";

const ChevronDown = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const SLIDES = [
  {
    bg: Anandamhomes1,
    pos: "center 35%",
    mobilePos: "center 55%",   // show building structure, skip top sky
    headline: <>Thoughtfully<br />Planned Living</>,
    tagline: <>Premium plotted spaces shaped with trust,<br />clarity, and future-ready vision.</>,
  },
  {
    bg: Anandamslider2,
    pos: "center center",
    mobilePos: "center center",
    headline: <>Built Around<br />Real Value</>,
    tagline: <>Designed for families, end users,<br />and long-term confidence.</>,
  },
  {
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85&auto=format&fit=crop",
    pos: "center 40%",
    mobilePos: "center 40%",
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
  const { setOpen } = useCallModal();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((idx) => {
    if (idx === current || fading) return;

    setTextVisible(false);

    setTimeout(() => {
      setPrev(current);
      setFading(true);
      setCurrent(idx);

      setTimeout(() => {
        setTextVisible(true);
        setPrev(null);
        setFading(false);
      }, 500);
    }, 300);
  }, [current, fading]);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [current, goTo]);

  const slide = SLIDES[current];

  return (
    <section id="home" className="hero">
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero__slide${i === current ? " hero__slide--active" : ""}${i === prev ? " hero__slide--prev" : ""}`}
          style={{
            backgroundImage: `url(${s.bg})`,
            backgroundPosition: s.pos,
            "--mobile-pos": s.mobilePos,
          }}
        />
      ))}

      <div className="hero__overlay" />
      <div className="hero__grid-pattern" />

      {/* Logo */}
      <div className="hero__logo">
        <img src={logoImg} alt="Anandam Homes" />
      </div>

      {/* Call Now button — top right */}
      <a href="tel:+916384800001" className="hero__call-btn" aria-label="Call Now">
        <span className="hero__call-btn__icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </span>
        <span className="hero__call-btn__text">Call Now</span>
      </a>

      <div className="hero__container">
        <div className={`hero__left${loaded ? "" : " hidden"}${textVisible ? "" : " text-out"}`}>
          <h1 className="hero__headline">
            {slide.headline}
          </h1>

          <p className="hero__tagline">
            {slide.tagline}
          </p>

          <div className="hero__rule" />
        </div>
      </div>

      <div className="hero__slider-nums">
        {SLIDES.map((_, i) => (
          <button
            key={i}
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

      <a href="#about" className="hero__scroll">
        <div className="hero__scroll-circle">
          <ChevronDown />
        </div>
      </a>
    </section>
  );
}