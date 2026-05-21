import { useState, useEffect, useRef } from "react";
import "./Values.css";
import Value1 from "../assets/Value1.png";
import Value2 from "../assets/Value2.png";
import Value3 from "../assets/Value3.png";
import Value4 from "../assets/Value4.png";

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
<<<<<<< HEAD
    num: "01",
    title: "Customer First",
    desc: "Focused on the needs of our customers, we create spaces that nurture and inspire. Building trust through transparent processes and unparalleled quality, we place our customers at the heart of every endeavor.",
    image: Value1,
    imagePosition: "center center",
  },
  {
    num: "02",
    title: "Commitment",
    desc: "We stand by every promise made to our customers. From plot delivery timelines to infrastructure quality — our commitment is absolute and non-negotiable at every step of the journey.",
    image: Value2,
    imagePosition: "center center",
  },
  {
    num: "03",
    title: "Integrity",
    desc: "Every transaction, every document, every interaction is rooted in complete honesty. GujRERA approved, legally clear titles, zero hidden charges — always.",
    image: Value3,
    imagePosition: "center center",
  },
  {
    num: "04",
    title: "Excellence",
    desc: "We don't settle for ordinary. From plot planning to amenities, every detail is crafted to deliver a world-class living experience in Dholera Smart City.",
=======
    num: "01", title: "Customer First",
    desc: "Every decision begins with the buyer. We shape communication, support, and project presentation around what helps families and investors feel informed, comfortable, and confident.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop",
  },
  {
    num: "02", title: "Commitment",
    desc: "We believe a real estate promise should mean something. That is why we focus on dependable communication, realistic expectations, and follow-through at every stage of the journey.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
  },
  {
    num: "03", title: "Integrity",
    desc: "Honesty is not a marketing line for us. From documentation to conversations, we aim for openness, accountability, and a buying process that avoids confusion and hidden surprises.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop",
  },
  {
    num: "04", title: "Excellence",
    desc: "We keep raising the bar in planning, presentation, and buyer service. The goal is not just to sell plots, but to deliver an experience that feels polished and professionally managed.",
>>>>>>> b8abe67fdb71064610405531a00ff72f7613c9d7
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    imagePosition: "center center",
  },
  {
<<<<<<< HEAD
    num: "05",
    title: "Transparency",
    desc: "Open books, clear communication. We believe our customers deserve to know exactly what they are investing in — no surprises, no hidden charges, ever.",
=======
    num: "05", title: "Transparency",
    desc: "Clear information builds stronger trust. We communicate with simplicity, explain practical details properly, and help buyers understand what they are choosing and why it matters.",
>>>>>>> b8abe67fdb71064610405531a00ff72f7613c9d7
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&auto=format&fit=crop",
    imagePosition: "center center",
  },
  {
<<<<<<< HEAD
    num: "06",
    title: "One Team One Goal",
    desc: "Our entire team works with a single mission — to help you secure the best investment of your life in India's fastest growing smart city, Dholera.",
    image: Value4,
    imagePosition: "center center",
=======
    num: "06", title: "One Team One Goal",
    desc: "A strong project experience takes coordinated effort. Our team works with a shared purpose: to make the path from first enquiry to site visit feel seamless, respectful, and reliable.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
>>>>>>> b8abe67fdb71064610405531a00ff72f7613c9d7
  },
];

const ArrowIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 7 7 17" /><polyline points="7 7 7 17 17 17" />
  </svg>
);
const ArrowOut = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="7 17 17 7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Values() {
  const [active, setActive] = useState(null);
  const [headerRef, headerVisible] = useInView(0.2);
  const [bodyRef, bodyVisible] = useInView(0.1);

  const current = active !== null ? VALUES[active] : null;

  // Build the flat list of items to render:
  // all tabs, with the panel injected right after the active tab
  const items = [];
  VALUES.forEach((v, i) => {
    items.push({ type: "tab", v, i });
    if (active === i) {
      items.push({ type: "panel", v, i });
    }
  });

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
          <h2 className="values__heading">The Principles <span>We Build With</span></h2>
          <p className="values__subheading">
            It is trust, quality thinking, and customer care that stays consistent.
          </p>
        </div>

<<<<<<< HEAD
        <div ref={bodyRef} className={`values__slider reveal-up${bodyVisible ? " is-visible" : ""}`}>
          <div className="values__content">
            <div className="values__content-img-wrap" key={active}>
              <img
                src={current.image}
                alt={current.title}
                className="values__content-img"
                style={{ objectPosition: current.imagePosition || "center center" }}
              />
            </div>
            <div className="values__content-text" key={`text-${active}`}>
              <h3 className="values__content-title">{current.title}</h3>
              <p className="values__content-desc">{current.desc}</p>
            </div>
          </div>
=======
        {/* Accordion Row */}
        <div
          ref={bodyRef}
          className={`values__row reveal-up${bodyVisible ? " is-visible" : ""}`}
        >
          {items.map((item) => {
            if (item.type === "tab") {
              const { v, i } = item;
              const isActive = active === i;
              return (
                <button
                  key={`tab-${v.num}`}
                  type="button"
                  className={`values__tab${isActive ? " active" : ""}`}
                  onClick={() => setActive(isActive ? null : i)}
                  aria-pressed={isActive}
                  aria-label={v.title}
                >
                  <div className="values__tab-arrow">
                    {isActive ? <ArrowIn /> : <ArrowOut />}
                  </div>
                  <span className="values__tab-title">{v.title}</span>
                  <span className="values__tab-num">{v.num}</span>
                </button>
              );
            }
>>>>>>> b8abe67fdb71064610405531a00ff72f7613c9d7

            // panel
            return (
              <div key="panel" className="values__panel">
                <div className="values__panel-img-wrap">
                  <img src={item.v.image} alt={item.v.title} className="values__panel-img" />
                  <div className="values__panel-img-overlay" aria-hidden="true" />
                </div>
                <div className="values__panel-text">
                  <div className="values__panel-kicker">Core Value {item.v.num}</div>
                  <h3 className="values__panel-title">{item.v.title}</h3>
                  <p className="values__panel-desc">{item.v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`values__cta reveal-up${bodyVisible ? " is-visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
          <div className="values__cta-left">
            <div className="values__cta-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <p className="values__cta-label">Ready to explore the opportunity?</p>
              <p className="values__cta-title">Schedule Your Guided Visit Today</p>
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
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
