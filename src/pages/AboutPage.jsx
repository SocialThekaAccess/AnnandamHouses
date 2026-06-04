import "./PageShell.css";
import "./AboutPage.css";
import aboutBg from "../assets/about.png";
import logoImg from "../assets/anandamhomeslogo.png";
import { useCallModal } from "../context/CallModalContext";

const CallNowBtn = () => {
  const { setOpen } = useCallModal();
  return (
    <button onClick={() => setOpen(true)} className="page-hero__call-btn" aria-label="Call Now" type="button">
      <span className="page-hero__call-btn__icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
      </span>
      <span className="page-hero__call-btn__text">Call Now</span>
    </button>
  );
};

const STATS = [
  { value: "12+", label: "Years of Trust", copy: "A calmer, consultative approach shaped around families, end-use buyers, and long-hold investors." },
  { value: "200+", label: "Premium Plots", copy: "Well-planned plotted options selected for location advantage, growth visibility, and smoother decision-making." },
  { value: "500+", label: "Client Conversations", copy: "Detailed market discussions, location walkthroughs, and guided visits designed to remove confusion from the buying journey." },
];

const PILLARS = [
  { title: "Luxury Through Restraint", copy: "Our brand language is quiet, polished, and architectural. We focus on proportion, detail, and credibility instead of noise." },
  { title: "Investment With Clarity", copy: "Every conversation is built around transparency, approvals, location logic, and practical ownership guidance." },
  { title: "A Buyer Experience That Feels Curated", copy: "From the first call to the site visit, the process is designed to feel elevated, composed, and highly personal." },
];

const CHECKLIST = [
  "Legally clear property options",
  "Transparent guidance with no hidden charges",
  "Investment-focused approach in the Lothal-Dholera growth corridor",
  "Dedicated relationship manager for every buyer",
  "Guided site visits as per your convenience",
];

const ZONES = [
  "Dholera SIR Activation Zone",
  "Ahmedabad–Dholera Expressway",
  "Dholera International Airport corridor",
  "Future industrial and semiconductor zones",
  "Logistics and manufacturing hubs",
];

const COMBO = ["Tourism growth", "Industrial development", "Future employment", "Long-term appreciation", "Better connectivity"];

export default function AboutPage({ onNavigate }) {
  return (
    <div className="page-shell">
      <section className="page-hero page-hero--no-overlay">
        <div
          className="page-hero__backdrop"
          style={{ backgroundImage: `url(${aboutBg})`, backgroundPosition: "center center", "--img-ratio": "56%" }}
        >
          <img src={aboutBg} alt="" className="page-hero__mobile-img" draggable="false" />
        </div>
        <div className="page-hero__logo">
          <img src={logoImg} alt="Anandam Homes" />
        </div>
        <CallNowBtn />
        <div className="page-hero__inner page-hero__inner--hidden" />
      </section>

      <main className="page-main">

        {/* ── Who We Are ── */}
        <section className="page-section">
          <div className="page-card">
            <div className="page-intro-grid">
              <div>
                <div className="section-label">Who We Are</div>
                <h2 className="page-heading">A Trusted Real Estate Brand Built on Clarity, Confidence and Long Term Value</h2>
                <p className="page-copy">
                  Anandam Homes is a modern real estate brand created for buyers and investors who want more than just a property. We focus on clear guidance, premium presentation, transparent dealings, and investment options that support long-term growth.
                </p>
              </div>
              <div>
                <p className="page-copy">
                  For us, real estate is not just about selling land or plots. It is about helping buyers understand the location, future development, legal process, documentation, and overall value before making a decision.
                </p>
                <ul className="about-checklist">
                  {CHECKLIST.map((item) => (
                    <li key={item} className="about-checklist__item">
                      <span className="about-checklist__icon">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="gold-btn" style={{ marginTop: "24px" }} onClick={() => onNavigate?.("/contact-us")}>
                  Talk to Our Team
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="page-stat-grid">
              {STATS.map((item) => (
                <article key={item.label} className="page-stat">
                  <div className="page-stat__value">{item.value}</div>
                  <div className="page-stat__label">{item.label}</div>
                  <div className="page-stat__copy">{item.copy}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pillars ── */}
        <section className="page-section page-section--spaced">
          <div className="page-feature-grid">
            {PILLARS.map((item) => (
              <article key={item.title} className="page-feature page-card">
                <h3 className="page-feature__title">{item.title}</h3>
                <p className="page-feature__copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Why Lothal-Dholera ── */}
        <section className="page-section page-section--spaced">
          <div className="about-location">

            <div className="about-location__intro">
              <span className="section-label">Why It Matters</span>
              <h2 className="page-heading">Why Lothal-Dholera Is Becoming a High-Potential Real Estate Destination</h2>
              <p className="page-copy">The Lothal-Dholera belt is gaining strong attention because of its strategic location and upcoming infrastructure growth.</p>
            </div>

            <div className="about-location__grid">

              {/* Left */}
              <div className="about-location__card">
                <h4 className="about-location__card-title">Key Development Zones</h4>
                <ul className="about-location__list">
                  {ZONES.map((item) => (
                    <li key={item} className="about-location__list-item">
                      <span className="about-location__dot" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="about-location__combo">
                  <p className="about-location__combo-label">This creates a powerful combination of:</p>
                  <div className="about-location__tags">
                    {COMBO.map((tag) => (
                      <span key={tag} className="about-location__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="about-location__card about-location__card--dark">
                <h3 className="about-location__accent-title">The Perfect Blend of Heritage and Future Infrastructure</h3>
                <span className="about-location__accent-sub">Ancient Legacy. Modern Opportunity.</span>
                <p className="about-location__accent-copy">
                  Lothal has a rich historical identity as one of the most important ancient trade and maritime centres. Today, the same region is gaining attention because of modern infrastructure, industrial expansion, tourism development, and government-backed mega projects.
                </p>
                <p className="about-location__accent-copy">
                  With growing connectivity and planned development, Lothal is now becoming part of a larger growth corridor connected with Dholera's future-ready development. At Anandam Homes, we help buyers explore this opportunity with proper guidance, transparency, and confidence.
                </p>
                <p className="about-location__accent-copy">
                  Lothal is no longer just an archaeological destination — it is evolving into a future-ready growth ecosystem.
                </p>
                <button className="gold-btn" onClick={() => window.open('https://wa.me/916384800001', '_blank')}>
                  Plan A Visit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
