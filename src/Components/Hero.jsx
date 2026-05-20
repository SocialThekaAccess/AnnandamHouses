// ─── Hero.jsx — Anandam Homes ─────────────────────────────────────────────────
import { useState, useEffect } from "react";
import "./Hero.css";

// ── Icon helpers ──────────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

// ── Stats data ────────────────────────────────────────────────────────────────
const STATS = [
  { num: "200+",  label: "Residential Plots" },
  { num: "₹2.5L", label: "Starting Price"    },
  { num: "RERA",  label: "Approved"           },
  { num: "2026",  label: "Possession"         },
];

// ── Enquiry Card ──────────────────────────────────────────────────────────────
function EnquiryCard() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", plot: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", email: "", plot: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="hero__card">
      {/* Shimmer top accent */}
      <div className="hero__card-topbar" />

      <h3 className="hero__card-title">Enquire Now</h3>
      <p className="hero__card-sub">Free site visit &nbsp;•&nbsp; No obligation</p>

      {sent && (
        <div className="hero__success">
          ✓ Thank you! We'll call you within 30 minutes.
        </div>
      )}

      <form className="hero__form" onSubmit={handleSubmit}>
        <input
          className="hero__input"
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="hero__input"
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          required
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className="hero__input"
          type="email"
          name="email"
          placeholder="Email Address (optional)"
          value={form.email}
          onChange={handleChange}
        />

        <select
          className="hero__select"
          name="plot"
          value={form.plot}
          onChange={handleChange}
        >
          <option value="">Select Plot Size</option>
          <option>100 Sq. Yd — ₹2.5 Lakh</option>
          <option>150 Sq. Yd — ₹3.8 Lakh</option>
          <option>200 Sq. Yd — ₹5.2 Lakh</option>
          <option>500 Sq. Yd — ₹12 Lakh</option>
        </select>

        <textarea
          className="hero__textarea"
          name="message"
          placeholder="Any specific requirements?"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" className="hero__submit">
          <SendIcon /> Get Free Callback
        </button>
      </form>

      <p className="hero__privacy">🔒 Your data is 100% secure &amp; private</p>
    </div>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────────
export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  const scrollToContact  = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      {/* Background layers */}
      <div className="hero__bg" />
      <div className="hero__bg-radial" />
      <div className="hero__grid-pattern" />
      <div className="hero__orb-gold" />
      <div className="hero__orb-blue" />

      {/* Main grid */}
      <div className="hero__container">

        {/* ── Left column ── */}
        <div className={`hero__left${loaded ? "" : " hidden"}`}>

          {/* Live badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">Now Selling — Phase 1 Launch</span>
          </div>

          {/* Headline */}
          <h1 className="hero__headline">
            ANANDAM
            <span className="hero__headline-gold">HOMES</span>
          </h1>

          {/* Location */}
          <div className="hero__location">
            <MapPinIcon />
            <span>Dholera Smart City, Gujarat — India's First Greenfield Smart City</span>
          </div>

          {/* Subtext */}
          <p className="hero__sub">
            Own a piece of tomorrow. 200+ RERA-approved residential plots in the
            fastest-growing smart city of India — built for those who invest in the future.
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <button className="hero__btn-primary" onClick={scrollToContact}>
              Book Free Site Visit <ArrowIcon />
            </button>
            <button className="hero__btn-secondary" onClick={scrollToProjects}>
              View Plots
            </button>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="hero__stat">
                <div className="hero__stat-num">{s.num}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — Enquiry Card ── */}
        <EnquiryCard />
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-label">Scroll</span>
        <ChevronDownIcon />
      </div>
    </section>
  );
}