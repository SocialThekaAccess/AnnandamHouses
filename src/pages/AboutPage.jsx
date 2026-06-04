import "./PageShell.css";
import "./AboutPage.css";
import aboutBg from "../assets/about.png";
import logoImg from "../assets/anandamhomeslogo.png";
import heroImg from "../assets/AnnandamHomes1.png";
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
  {
    value: "12+",
    label: "Years of Trust",
    copy: "A calmer, consultative approach shaped around families, end-use buyers, and long-hold investors.",
  },
  {
    value: "200",
    label: "Premium Plots",
    copy: "Well-planned plotted options selected for location advantage, growth visibility, and smoother decision-making.",
  },
  {
    value: "500+",
    label: "Client Conversations",
    copy: "Detailed market discussions, location walkthroughs, and guided visits designed to remove confusion from the buying journey.",
  },
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
        <section className="page-section page-section--fullwidth">
          <div className="aw-who">

            {/* LEFT — heading + para + trust badge */}
            <div className="aw-who__left">
              <div className="section-label">Who We Are</div>
              <h2 className="aw-who__heading">A Trusted Real Estate Brand Built on Clarity, Confidence and Long Term Value</h2>
              <div className="aw-who__rule" />
              <p className="aw-who__para">
                Anandam is a modern real estate brand created for buyers and investors who want more than just a property. We focus on clear guidance, premium presentation, transparent dealings, and investment options that support long-term growth.
              </p>
              <div className="aw-who__trust">
                <div className="aw-who__trust-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
                    <path d="m9 12 2 2 4-5"/>
                  </svg>
                </div>
                <div>
                  <p className="aw-who__trust-title">Your Trust.</p>
                  <p className="aw-who__trust-sub">Our Responsibility.</p>
                </div>
              </div>
            </div>

            {/* CENTER — image */}
            <div className="aw-who__center">
              <img src={heroImg} alt="Anandam Homes" className="aw-who__img" />
            </div>

            {/* RIGHT — checklist + CTA */}
            <div className="aw-who__right">
              {[
                { icon: "doc",   title: "Legally clear property options",       desc: "All properties verified and legally compliant for your peace of mind." },
                { icon: "hand",  title: "Transparent guidance with no hidden charges", desc: "Honest information and clear processes at every step." },
                { icon: "chart", title: "Investment-focused approach in the Lothal–Dholera growth corridor", desc: "Helping you choose locations with strong future potential." },
                { icon: "user",  title: "Dedicated relationship manager for every buyer", desc: "Personal support and expert guidance whenever you need it." },
                { icon: "pin",   title: "Guided site visits as per your convenience", desc: "Flexible visits and complete support to help you decide better." },
              ].map((item, i) => (
                <div key={i} className="aw-who__item">
                  <div className="aw-who__item-icon">
                    {item.icon === "doc"   && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>}
                    {item.icon === "hand"  && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8l2 2 1.5 2.5h6.5a2 2 0 002-2v-3a2 2 0 00-2-2h-4"/></svg>}
                    {item.icon === "chart" && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>}
                    {item.icon === "user"  && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-8 0v2"/><circle cx="12" cy="7" r="4"/></svg>}
                    {item.icon === "pin"   && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>}
                  </div>
                  <div>
                    <p className="aw-who__item-title">{item.title}</p>
                    <p className="aw-who__item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
              <button className="gold-btn aw-who__cta" onClick={() => onNavigate?.("/contact-us")}>
                Talk to Our Team
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>

          </div>
        </section>

        {/* ── Stats Row ── */}
        <section className="page-section page-section--fullwidth page-section--spaced">
          <div className="aw-stats">
            {STATS.map((item) => (
              <div key={item.label} className="aw-stats__item">
                <div className="aw-stats__icon">{item.icon}</div>
                <div className="aw-stats__value">{item.value}</div>
                <div className="aw-stats__label">{item.label}</div>
                <p className="aw-stats__copy">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>
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
              <h2 className="page-heading">Why Dholera Is Becoming a High-Potential Real Estate Destination</h2>
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
                  has a rich historical identity as one of the most important ancient trade and maritime centres. Today, the same region is gaining attention because of modern infrastructure, industrial expansion, tourism development, and government-backed mega projects.
                </p>
                <p className="about-location__accent-copy">
                  With growing connectivity and planned development, is now becoming part of a larger growth corridor connected with Dholera's future-ready development. At Anandam , we help buyers explore this opportunity with proper guidance, transparency, and confidence.
                </p>
                <p className="about-location__accent-copy">
                  is no longer just an archaeological destination — it is evolving into a future-ready growth ecosystem.
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
