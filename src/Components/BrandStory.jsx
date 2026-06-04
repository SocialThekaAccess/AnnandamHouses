import { useEffect, useRef, useState } from "react";
import "./BrandStory.css";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const CHECKLIST = [
  "Registry-ready property options",
  "Clear and transparent process",
  "Expert guidance for Dholera investment",
  "Support for residential and bulk land deals",
  "Proper documentation assistance",
  "Long-term investment-focused approach",
  "Strategic locations with high growth potential",
  "Market insights and future development updates",
  "Market insights and future development updates",
];

const APPROACH = [
  {
    // title: "Premium Yet Practical",
    desc: "Dholera is growing as one of India's most planned smart city destinations. With major infrastructure, industrial growth, and strong connectivity coming to the region, it offers great potential for future property investment.",
  },
  {
    // title: "Investment With Clarity",
    desc: "Dholera offers a unique opportunity for investors looking toward future growth. Supported by smart city planning, expanding industries, and major infrastructure projects, the region is positioned for strong long-term development.",
  },
];

export default function BrandStory() {
  const [introRef, introVisible] = useInView(0.1);
  const [valuesRef, valuesVisible] = useInView(0.1);
  const [approachRef, approachVisible] = useInView(0.1);

  return (
    <section className="brand-story" id="brand-story">

      {/* ── Intro + What We Stand For ── */}
      <div className="bs-intro-wrap">
        <div className="bs-container">
          <h2 className="bs-intro__main-heading">The Right Partner for Your Property Journey</h2>
          <div
            ref={introRef}
            className={`bs-intro reveal-up${introVisible ? " is-visible" : ""}`}
          >
            <div className="bs-intro__text">
              <h3 className="bs-values__heading">Why Choose Anandam?</h3>
              <p className="bs-intro__para">
               Anandam is created for buyers and investors who want secure, transparent, and future-ready property options in Dholera. We focus on helping people make smart real estate decisions with proper guidance, clear documentation, and honest support.
              </p>
              <p className="bs-intro__para">
                Whether you are planning to buy a residential plot, invest for long-term growth, or explore bulk land deals, Anandam gives you the right information and support at every step.
               Our goal is to make property investment simple, safe, and stress-free for every buyer.
              </p>
              
              <a
                href="https://wa.me/916384800001"
                className="bs-intro__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to Our Team
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div
              ref={valuesRef}
              className={`bs-values reveal-up${valuesVisible ? " is-visible" : ""}`}
              style={{ transitionDelay: "0.15s" }}
            >
              {/* <h3 className="bs-values__heading">Why Choose Anandam?</h3> */}
              <ul className="bs-values__list">
                {CHECKLIST.map((item, i) => (
                  <li key={i} className="bs-values__item">
                    <span className="bs-values__check">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Approach + Bottom Label ── */}
      <div className="bs-approach-wrap">
        <div className="bs-container">
          <div
            ref={approachRef}
            className={`bs-approach reveal-up${approachVisible ? " is-visible" : ""}`}
          >
            <div className="bs-approach__label">Build Your Future with Anandam</div>
            <div className="bs-approach__grid">
              {APPROACH.map((a, i) => (
                <div key={i} className="bs-approach__card">
                  <div className="bs-approach__num">0{i + 1}</div>
                  <h4 className="bs-approach__title">{a.title}</h4>
                  <p className="bs-approach__desc">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}