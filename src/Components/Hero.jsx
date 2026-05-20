import { useState, useEffect } from "react";
import "./Hero.css";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
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

const STATS = [
  { num: "200+",  label: "Premium Plots"  },
  { num: "₹2.5L", label: "Starting Price" },
  { num: "RERA",  label: "Approved"       },
  { num: "2026",  label: "Possession"     },
];

function EnquiryCard({ show }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", plot: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", email: "", plot: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className={`hero__card${show ? " hero__card--visible" : ""}`}>
      {/* Animated gold top bar */}
      <div className="hero__card-topbar" />

      <div className="hero__card-body">
        <div className="hero__card-header">
          <p className="hero__card-eyebrow">Book Your Site Visit</p>
          <h3 className="hero__card-title">Enquire Now</h3>
          <p className="hero__card-sub">Free visit &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; RERA Approved</p>
        </div>

        {sent && (
          <div className="hero__success">
            ✓ Thank you! We'll call you within 30 minutes.
          </div>
        )}

        <form className="hero__form" onSubmit={handleSubmit}>
          <input
            className="hero__input" type="text" name="name"
            placeholder="Your Full Name" required
            value={form.name} onChange={handleChange}
          />
          <input
            className="hero__input" type="tel" name="phone"
            placeholder="Mobile Number" required
            value={form.phone} onChange={handleChange}
          />
          <input
            className="hero__input" type="email" name="email"
            placeholder="Email Address (optional)"
            value={form.email} onChange={handleChange}
          />
          <select className="hero__select" name="plot" value={form.plot} onChange={handleChange}>
            <option value="">Select Plot Size</option>
            <option>100 Sq. Yd — ₹2.5 Lakh</option>
            <option>150 Sq. Yd — ₹3.8 Lakh</option>
            <option>200 Sq. Yd — ₹5.2 Lakh</option>
            <option>500 Sq. Yd — ₹12 Lakh</option>
          </select>
          <textarea
            className="hero__textarea" name="message"
            placeholder="Any specific requirements?"
            value={form.message} onChange={handleChange}
          />
          <button type="submit" className="hero__submit">
            <SendIcon /> Get Free Callback
          </button>
        </form>

        <p className="hero__privacy">🔒 Your data is 100% secure &amp; private</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  // Show form after 6 seconds with smooth transformation
  useEffect(() => { const t = setTimeout(() => setShowForm(true), 3000); return () => clearTimeout(t); }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__grid-pattern" />

      <div className="hero__container">

        {/* LEFT */}
        <div className={`hero__left${loaded ? "" : " hidden"}`}>

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">Now Selling — Phase 1 Launch</span>
          </div>

          <h1 className="hero__headline">
            Anandam
            <span className="hero__headline-gold">Homes</span>
          </h1>

          <div className="hero__rule" />

          <div className="hero__location">
            <MapPinIcon />
            Dholera Smart City, Gujarat — India's First Greenfield Smart City
          </div>

          <p className="hero__sub">
            Own a piece of tomorrow. <strong>200+ RERA-approved</strong> residential
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

        {/* RIGHT — white enquiry card */}
        <EnquiryCard show={showForm} />
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll">
        <span className="hero__scroll-label">Scroll</span>
        <ChevronDown />
      </a>
    </section>
  );
}
