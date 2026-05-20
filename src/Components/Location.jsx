import { useEffect, useRef, useState } from "react";
import "./Location.css";

function useInView(threshold = 0.15) {
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

const POINTS = [
  { num: "01", text: "Located inside Dholera Special Investment Region (SIR) — India's first planned greenfield smart city." },
  { num: "02", text: "Adjacent to the upcoming Dholera International Airport — one of India's largest greenfield airports." },
  { num: "03", text: "Connected via 6-lane Ahmedabad–Dholera Expressway for seamless city access." },
  { num: "04", text: "Metro rail connectivity planned under the Dholera Metro Rail project." },
  { num: "05", text: "Close proximity to DMIC (Delhi–Mumbai Industrial Corridor) industrial zones." },
  { num: "06", text: "Within 100 km of Ahmedabad — Gujarat's commercial and financial capital." },
];

export default function Location() {
  const [leftRef,  leftVisible]  = useInView(0.15);
  const [rightRef, rightVisible] = useInView(0.15);

  return (
    <section className="location" id="location">
      <div className="container">

        {/* Header */}
        <div className={`location__header reveal-up${leftVisible ? " is-visible" : ""}`} ref={leftRef}>
          <div>
            <span className="section-label">Strategic Location</span>
            <h2 className="section-title">
              Our Location<br />
              <span>Dholera Smart City</span>
            </h2>
          </div>
          <p className="location__intro">
            Dholera Smart City is more than just an address — it's a dynamic hub
            in a prime location, presenting a rapidly growing investment opportunity
            set to redefine India's future. Strategically positioned with world-class
            connectivity on all fronts.
          </p>
        </div>

        {/* Grid */}
        <div className="location__grid">

          {/* Left — Map */}
          <div className={`location__map-wrap reveal-left${leftVisible ? " is-visible" : ""}`}>
            <div className="location__map">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format&fit=crop"
                alt="Dholera Smart City aerial view"
                className="location__map-img"
              />
              <div className="location__map-overlay" />

              {/* Pin markers */}
              {[
                { top: "22%", left: "28%", n: "1" },
                { top: "18%", left: "52%", n: "2" },
                { top: "30%", left: "68%", n: "3" },
                { top: "45%", left: "58%", n: "4" },
                { top: "55%", left: "38%", n: "5" },
                { top: "38%", left: "44%", n: "6" },
              ].map((p) => (
                <div key={p.n} className="location__pin" style={{ top: p.top, left: p.left }}>
                  <span>{p.n}</span>
                </div>
              ))}

              {/* Badge */}
              <div className="location__map-badge">
                <span>Dholera SIR</span>
                <strong>Gujarat, India</strong>
              </div>
            </div>
          </div>

          {/* Right — Points */}
          <div
            ref={rightRef}
            className={`location__points reveal-right${rightVisible ? " is-visible" : ""}`}
          >
            {POINTS.map((p, i) => (
              <div
                key={p.num}
                className="location__point"
                style={{ transitionDelay: rightVisible ? `${i * 0.08}s` : "0s" }}
              >
                <span className="location__point-num">{p.num}.</span>
                <p className="location__point-text">{p.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
