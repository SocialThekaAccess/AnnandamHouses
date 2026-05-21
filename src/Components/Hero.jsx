import { useState, useEffect, useCallback } from "react";
import "./Hero.css";
import Anandamhomes1 from "../assets/AnnandamHomes1.png";  // ya .png / .webp

const ChevronDown = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const SLIDES = [
  {
    bg: Anandamhomes1,
    pos: "center 35%",
  },
  {
    bg: "https://images.pexels.com/photos/8654110/pexels-photo-8654110.jpeg",
    pos: "center center",
  },
  {
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85&auto=format&fit=crop",
    pos: "center 40%",
  },
];

export default function Hero() {
  const [loaded,  setLoaded]  = useState(false);
  const [current, setCurrent] = useState(0);
  const [prev,    setPrev]    = useState(null);
  const [fading,  setFading]  = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((idx) => {
    if (idx === current || fading) return;
    setPrev(current);
    setFading(true);
    setCurrent(idx);
    setTimeout(() => { setPrev(null); setFading(false); }, 900);
  }, [current, fading]);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [current, goTo]);

  return (
    <section id="home" className="hero">

      {/* Slider backgrounds */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero__slide${i === current ? " hero__slide--active" : ""}${i === prev ? " hero__slide--prev" : ""}`}
          style={{ backgroundImage: `url(${s.bg})`, backgroundPosition: s.pos }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="hero__overlay" />

      {/* Main content */}
      <div className="hero__container">
        <div className={`hero__left${loaded ? "" : " hidden"}`}>

          {/* Big bold headline */}
          <h1 className="hero__headline">
            Anandam<br />Homes
          </h1>

          {/* Tagline */}
          <p className="hero__tagline">
            through Luxury, Trust<br />&amp; Smart Living.
          </p>

          {/* Thin divider */}
          <div className="hero__rule" />

        </div>
      </div>

      {/* Slide numbers — bottom right */}
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

      {/* Progress bar */}
      <div className="hero__progress">
        <div key={current} className="hero__progress-bar" />
      </div>

      {/* Scroll indicator — circle style */}
      <a href="#about" className="hero__scroll">
        <div className="hero__scroll-circle">
          <ChevronDown />
        </div>
      </a>

    </section>
  );
}