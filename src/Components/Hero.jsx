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
    headline: <>Anandam<br />Homes</>,
    tagline: <>through Luxury, Trust<br />&amp; Smart Living.</>,
  },
  {
    bg: "https://images.pexels.com/photos/8654110/pexels-photo-8654110.jpeg",
    pos: "center center",
    headline: <>Modern<br />Spaces</>,
    tagline: <>Crafted for comfort,<br />designed for life.</>,
  },
  {
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85&auto=format&fit=crop",
    pos: "center 40%",
    headline: <>Your Dream<br />Address</>,
    tagline: <>Where every detail<br />tells your story.</>,
  },
];

export default function Hero() {
  const [loaded,      setLoaded]      = useState(false);
  const [current,     setCurrent]     = useState(0);
  const [prev,        setPrev]        = useState(null);
  const [fading,      setFading]      = useState(false);
  const [textVisible, setTextVisible] = useState(true); // ← new

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((idx) => {
    if (idx === current || fading) return;

    // 1) fade text OUT
    setTextVisible(false);

    setTimeout(() => {
      // 2) swap slide
      setPrev(current);
      setFading(true);
      setCurrent(idx);

      // 3) fade text IN after slide starts
      setTimeout(() => {
        setTextVisible(true);
        setPrev(null);
        setFading(false);
      }, 500);

    }, 300); // text fades out in 300ms, then slide starts

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
        <div className={`hero__left${loaded ? "" : " hidden"}${textVisible ? "" : " text-out"}`}>

          {/* Big bold headline — per slide */}
          <h1 className="hero__headline">
            {slide.headline}
          </h1>

          {/* Tagline — per slide */}
          <p className="hero__tagline">
            {slide.tagline}
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

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll">
        <div className="hero__scroll-circle">
          <ChevronDown />
        </div>
      </a>

    </section>
  );
}