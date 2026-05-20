import { useEffect, useRef, useState } from "react";
import "./Founder.css";

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

const ACHIEVEMENTS = [
  { num: "15+", label: "Years in Real Estate" },
  { num: "500+", label: "Families Served" },
  { num: "200+", label: "Plots Delivered" },
  { num: "100%", label: "GujRERA Compliant" },
];

export default function Founder() {
  const [leftRef,  leftVisible]  = useInView(0.15);
  const [rightRef, rightVisible] = useInView(0.15);

  return (
    <section className="founder" id="founder">
      <div className="container">
        <div className="founder__grid">

          {/* LEFT — Photo */}
          <div
            ref={leftRef}
            className={`founder__media reveal-left${leftVisible ? " is-visible" : ""}`}
          >
            <div className="founder__photo-wrap">
              <div className="founder__photo-bg" />
              <div className="founder__photo-frame-tl" />
              <div className="founder__photo-frame-br" />
              <div className="founder__photo-badge">
                <span>Founder &amp; Director</span>
                <strong>Anandam Homes</strong>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div
            ref={rightRef}
            className={`founder__content reveal-right${rightVisible ? " is-visible" : ""}`}
          >
            <span className="section-label">Meet the Founder</span>
            <h2 className="section-title founder__title">
              Strategic <span>Visionary</span>
            </h2>

            <p className="founder__desc">
              With over 15 years of experience in real estate development, our founder
              has been at the forefront of identifying high-growth investment opportunities
              across Gujarat. A firm believer in transparent, customer-first business
              practices, he established Anandam Homes with a singular vision — to make
              premium land ownership accessible, trustworthy, and rewarding.
            </p>

            <p className="founder__desc">
              His deep understanding of the Dholera Smart City project and its long-term
              potential has positioned Anandam Homes as one of the most trusted names
              in the region. Every plot sold carries his personal commitment to quality,
              legal clarity, and customer satisfaction.
            </p>

            {/* Quote */}
            <blockquote className="founder__quote">
              <span className="founder__quote-mark">"</span>
              Investing in Dholera today is not just buying land — it's securing a
              legacy for your family's future.
              <span className="founder__quote-mark">"</span>
            </blockquote>

            {/* Achievements */}
            <div className="founder__achievements">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.label} className="founder__achievement">
                  <strong>{a.num}</strong>
                  <span>{a.label}</span>
                </div>
              ))}
            </div>

            <button
              className="gold-btn"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Connect With Us
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
