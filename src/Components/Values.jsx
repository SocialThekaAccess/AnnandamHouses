import { useState } from "react";
import "./Values.css";

const VALUES = [
  { num: "01", title: "Customer First",    desc: "Focused on the needs of our customers, we create spaces that nurture and inspire. Building trust through transparent processes and unparalleled quality, we place our customers at the heart of every decision." },
  { num: "02", title: "Commitment",        desc: "We stand by every promise made to our customers. From plot delivery timelines to infrastructure quality — our commitment is absolute and non-negotiable." },
  { num: "03", title: "Integrity",         desc: "Every transaction, every document, every interaction is rooted in complete honesty. RERA approved, legally clear titles, zero hidden charges — always." },
  { num: "04", title: "Excellence",        desc: "We don't settle for ordinary. From plot planning to amenities, every detail is crafted to deliver a world-class living experience in Dholera Smart City." },
  { num: "05", title: "Transparency",      desc: "Open books, clear communication. We believe our customers deserve to know exactly what they are investing in — no surprises, ever." },
  { num: "06", title: "One Team One Goal", desc: "Our entire team works with a single mission — to help you secure the best investment of your life in India's fastest growing smart city." },
];

export default function Values() {
  const [active, setActive] = useState(0);

  return (
    <section className="values" id="values">
      <div className="container">
        <div className="values__header">
          <span className="section-label" style={{ color: "var(--gold)" }}>Our Foundation</span>
          <h2 className="section-title" style={{ color: "#F8EEE1" }}>What We Stand For</h2>
        </div>

        <div className="values__body">
          {/* Left tabs */}
          <div className="values__tabs">
            {VALUES.map((v, i) => (
              <button
                key={v.num}
                className={`values__tab${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="values__tab-num">{v.num}</span>
                <span className="values__tab-title">{v.title}</span>
                <svg className="values__tab-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Right panel */}
          <div className="values__panel">
            <div className="values__panel-img">
              <div className="values__img-bg" />
              <span className="values__img-num">{VALUES[active].num}</span>
            </div>
            <div className="values__panel-text">
              <h3 className="values__panel-title">{VALUES[active].title}</h3>
              <p className="values__panel-desc">{VALUES[active].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
