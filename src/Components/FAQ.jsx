import { useState } from "react";
import "./FAQ.css";

const FAQS = [
  {
    q: "What type of plots does Anandam  offer in Dholera?",
    a: "Anandam  offers premium residential plots in Dholera SIR — India's first greenfield smart city. Our plots are carefully selected for location advantage, legal clarity, and long-term growth potential.",
  },
  {
    q: "Are these government approved plots?",
    a: "Yes. All plots offered through Anandam  are legally verified with clear titles and proper documentation. We ensure full transparency in every transaction with no hidden charges.",
  },
  {
    q: "Who usually considers buying plots in Dholera?",
    a: "Our buyers include end-use families planning future , NRIs looking for high-growth Indian real estate, and investors seeking long-term appreciation in the Dholera–Lothal growth corridor.",
  },
  {
    q: "What should I check before buying a plot in Dholera?",
    a: "Key checks include legal title clearance, government approvals, proximity to infrastructure zones, road connectivity, and documentation support. Our team guides you through every step with complete clarity.",
  },
  {
    q: "Is Dholera suitable for short-term investment?",
    a: "Dholera is primarily a long-term investment destination. With the semiconductor hub, expressway, and international airport coming up, the region is positioned for significant appreciation over the next 5–10 years.",
  },
  {
    q: "Is it safe to invest in Dholera plots right now?",
    a: "Yes. Dholera SIR is a government-backed greenfield smart city under the Delhi-Mumbai Industrial Corridor. With active infrastructure development and strong policy support, it is one of the safest long-term investment zones in India.",
  },
  {
    q: "What is the future potential of Dholera Smart City?",
    a: "Dholera is set to become a world-class industrial and residential hub — home to India's first semiconductor fab, a greenfield international airport, and a fully planned smart infrastructure grid. The growth potential is exceptional.",
  },
  {
    q: "How can I visit the site before buying?",
    a: "We offer guided site visits at your convenience. Our relationship manager will coordinate the visit, explain the layout, and answer all your questions on-site — with no pressure to buy.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">

        {/* Left */}
        <div className="faq__left">
          <span className="faq__eyebrow">Got Questions?</span>
          <h2 className="faq__heading">Frequently Asked Questions</h2>
          <p className="faq__sub">More questions about Dholera Smart City or our plots?</p>
          <a
            href="https://wa.me/916384800001"
            target="_blank"
            rel="noopener noreferrer"
            className="faq__cta"
          >
            Chat With Us
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        {/* Right — accordion */}
        <div className="faq__list">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`faq__item${open === i ? " faq__item--open" : ""}`}
            >
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq__icon">
                  {open === i ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  )}
                </span>
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
