import { useState, useEffect, useRef } from "react";
import "./Values.css";

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

/* ── Tab icons ── */
const Icons = {
  "01": () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
      <path d="M12 11v2M10 13h4"/>
    </svg>
  ),
  "02": () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4"/>
      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.21.45 4.55 1.23"/>
    </svg>
  ),
  "03": () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  "04": () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  "05": () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8" x2="11" y2="14"/>
      <line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
  ),
  "06": () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
};

const VALUES = [
  { num: "01", title: "Customer First",    short: "Your trust is our highest priority.",      desc: "Focused on the needs of our customers, we create spaces that nurture and inspire. Building trust through transparent processes and unparalleled quality." },
  { num: "02", title: "Commitment",        short: "Dedicated to delivering promises.",         desc: "We stand by every promise made to our customers. From plot delivery timelines to infrastructure quality — our commitment is absolute and non-negotiable." },
  { num: "03", title: "Integrity",         short: "Honest, transparent & ethical.",            desc: "Every transaction, every document, every interaction is rooted in complete honesty. RERA approved, legally clear titles, zero hidden charges — always." },
  { num: "04", title: "Excellence",        short: "Quality in every detail we build.",         desc: "We don't settle for ordinary. From plot planning to amenities, every detail is crafted to deliver a world-class living experience in Dholera Smart City." },
  { num: "05", title: "Transparency",      short: "Clear communication always.",               desc: "Open books, clear communication. We believe our customers deserve to know exactly what they are investing in — no surprises, ever." },
  { num: "06", title: "One Team One Goal", short: "Together we achieve more.",                 desc: "Our entire team works with a single mission — to help you secure the best investment of your life in India's fastest growing smart city." },
];

const PANEL_STATS = [
  { icon: "👨‍👩‍👧‍👦", value: "500+",   label: "Happy Families" },
  { icon: "✅",       value: "100%",   label: "RERA Approved"  },
  { icon: "🏆",       value: "15+ Yrs", label: "Of Trust"      },
  { icon: "📍",       value: "Prime",  label: "Locations"      },
];

export default function Values() {
  const [active, setActive] = useState(0);
  const [headerRef, headerVisible] = useInView(0.2);
  const [bodyRef,   bodyVisible]   = useInView(0.1);

  return (
    <section className="values" id="values">
      <div className="container">

        {/* ── Header ── */}
        <div ref={headerRef} className={`values__header reveal-up${headerVisible ? " is-visible" : ""}`}>
          <div className="values__header-eyebrow">
            <span className="values__eyebrow-line" />
            <span className="values__eyebrow-text">Our Foundation</span>
            <span className="values__eyebrow-line" />
          </div>
          <h2 className="values__heading">
            What We <span>Stand For</span>
          </h2>
          <p className="values__subheading">
            Our values are the cornerstone of every decision we make.<br />
            They guide us in creating spaces that last for generations.
          </p>
        </div>

        {/* ── Body ── */}
        <div ref={bodyRef} className={`values__body reveal-up${bodyVisible ? " is-visible" : ""}`}>

          {/* LEFT — Tabs */}
          <div className="values__tabs">
            {VALUES.map((v, i) => {
              const Icon = Icons[v.num];
              return (
                <button
                  key={v.num}
                  className={`values__tab${active === i ? " active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <div className="values__tab-icon"><Icon /></div>
                  <div className="values__tab-num">{v.num}</div>
                  <div className="values__tab-text">
                    <span className="values__tab-title">{v.title}</span>
                    <span className="values__tab-short">{v.short}</span>
                  </div>
                  <svg className="values__tab-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              );
            })}
          </div>

          {/* RIGHT — Panel */}
          <div className="values__panel">
            {/* Photo */}
            <div className="values__panel-photo">
              <div className="values__panel-photo-bg" />
              <div className="values__panel-photo-overlay" />
              {/* Play button */}
              <button className="values__play-btn" aria-label="Play video">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </button>
              {/* Watermark number */}
              <span className="values__panel-num">{VALUES[active].num}</span>
            </div>

            {/* Text */}
            <div className="values__panel-text">
              <h3 className="values__panel-title">{VALUES[active].title}</h3>
              <p className="values__panel-desc">{VALUES[active].desc}</p>

              {/* Stats row */}
              <div className="values__panel-stats">
                {PANEL_STATS.map((s) => (
                  <div key={s.label} className="values__panel-stat">
                    <div className="values__panel-stat-icon">{s.icon}</div>
                    <div>
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom CTA Band ── */}
        <div className={`values__cta reveal-up${bodyVisible ? " is-visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
          <div className="values__cta-left">
            <div className="values__cta-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <p className="values__cta-label">Ready to invest in your future?</p>
              <p className="values__cta-title">Book Your Site Visit Today!</p>
            </div>
          </div>
          <div className="values__cta-mid">
            <span className="values__cta-meta">Call Us</span>
            <a href="tel:+916384800001" className="values__cta-val">+91 63848 00001</a>
          </div>
          <div className="values__cta-mid">
            <span className="values__cta-meta">Our Location</span>
            <span className="values__cta-val">Dholera Smart City, Gujarat</span>
          </div>
          <button
            className="values__cta-btn"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
