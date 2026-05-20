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

const VALUES = [
  {
    num: "01", title: "Customer First",
    desc: "Focused on the needs of our customers, we create spaces that nurture and inspire. Building trust through transparent processes and unparalleled quality, we place our customers at the heart of every endeavor.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-EpvCwD7NGjjVZ90SDRdEy9WHZMIeBza4Q&s",
  },
  {
    num: "02", title: "Commitment",
    desc: "We stand by every promise made to our customers. From plot delivery timelines to infrastructure quality — our commitment is absolute and non-negotiable at every step of the journey.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
  },
  {
    num: "03", title: "Integrity",
    desc: "Every transaction, every document, every interaction is rooted in complete honesty. GujRERA approved, legally clear titles, zero hidden charges — always.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPqnsrAjLorXpQKUxVd3oyhR8ywXJO49Cjg&s",
  },
  {
    num: "04", title: "Excellence",
    desc: "We don't settle for ordinary. From plot planning to amenities, every detail is crafted to deliver a world-class living experience in Dholera Smart City.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
  },
  {
    num: "05", title: "Transparency",
    desc: "Open books, clear communication. We believe our customers deserve to know exactly what they are investing in — no surprises, no hidden charges, ever.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&auto=format&fit=crop",
  },
  {
    num: "06", title: "One Team One Goal",
    desc: "Our entire team works with a single mission — to help you secure the best investment of your life in India's fastest growing smart city, Dholera.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
  },
];

const PANEL_STATS = [
  { icon: "👨‍👩‍👧‍👦", value: "500+",    label: "Happy Families"   },
  { icon: "✅",        value: "100%",    label: "GujRERA Approved" },
  { icon: "🏆",        value: "15+ Yrs", label: "Of Trust"         },
  { icon: "📍",        value: "Prime",   label: "Locations"        },
];

export default function Values() {
  const [active, setActive] = useState(0);
  const [headerRef, headerVisible] = useInView(0.2);
  const [bodyRef,   bodyVisible]   = useInView(0.1);

  const current = VALUES[active];

  return (
    <section className="values" id="values">
      <div className="container">

        {/* Header */}
        <div ref={headerRef} className={`values__header reveal-up${headerVisible ? " is-visible" : ""}`}>
          <div className="values__header-eyebrow">
            <span className="values__eyebrow-line" />
            <span className="values__eyebrow-text">Our Foundation</span>
            <span className="values__eyebrow-line" />
          </div>
          <h2 className="values__heading">What We <span>Stand For</span></h2>
          <p className="values__subheading">
            Our values are the cornerstone of every decision we make.<br />
            They guide us in creating spaces that last for generations.
          </p>
        </div>

        {/* Body */}
        <div ref={bodyRef} className={`values__body reveal-up${bodyVisible ? " is-visible" : ""}`}>

          {/* LEFT — Image + Description Panel */}
          <div className="values__panel">
            <div className="values__panel-photo">
              <img
                key={active}
                src={current.image}
                alt={current.title}
                className="values__panel-img"
              />
              <div className="values__panel-photo-overlay" />
            </div>
            <div className="values__panel-text">
              <div className="values__panel-num-label">{current.num}</div>
              <h3 className="values__panel-title" key={`title-${active}`}>{current.title}</h3>
              <p className="values__panel-desc" key={`desc-${active}`}>{current.desc}</p>
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

          {/* RIGHT — Vertical Columns */}
          <div className="values__cols">
            {VALUES.map((v, i) => (
              <button
                key={v.num}
                className={`values__col${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                {/* Top arrow icon */}
                <div className="values__col-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="7 17 17 7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>

                {/* Rotated title */}
                <div className="values__col-text-wrap">
                  <span className="values__col-title">{v.title}</span>
                </div>

                {/* Large number at bottom */}
                <div className="values__col-num">{v.num}</div>
              </button>
            ))}
          </div>

        </div>

        {/* Bottom CTA */}
        <div className={`values__cta reveal-up${bodyVisible ? " is-visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
          <div className="values__cta-left">
            <div className="values__cta-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
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