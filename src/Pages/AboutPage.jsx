import "./PageShell.css";
import aboutBg from "../assets/about.png";
import logoImg from "../assets/anandamhomeslogo.png";
import { useCallModal } from "../context/CallModalContext";
import Anandamhomes1 from "../assets/AnnandamHomes1.png";

const CallNowBtn = () => {
  const { setOpen } = useCallModal();
  return (
    <button
      onClick={() => setOpen(true)}
      className="page-hero__call-btn"
      aria-label="Call Now"
      type="button"
    >
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
  { value: "200", label: "Premium Plots", copy: "A tightly positioned plotted community selected for growth visibility and smoother customer decision-making." },
  { value: "500+", label: "Client Conversations", copy: "Market walkthroughs, location briefings, and guided visits designed to remove uncertainty from the buying journey." },
];

const PILLARS = [
  { title: "Luxury Through Restraint", copy: "Our brand language is quiet, polished, and architectural. We focus on proportion, detail, and credibility instead of noise." },
  { title: "Investment With Clarity", copy: "Every conversation is built around transparency, approvals, location logic, and practical ownership guidance." },
  { title: "A Buyer Experience That Feels Curated", copy: "From the first call to the site visit, the process is designed to feel elevated, composed, and highly personal." },
];

const HIGHLIGHTS = [
  "Strategic positioning around the Lothal smart city growth corridor.",
  "Premium plotted inventory presented with a hospitality-inspired customer journey.",
  "A design-first brand board translated consistently across digital touchpoints.",
];

export default function AboutPage({ onNavigate }) {
  return (
    <div className="page-shell">
      <section className="page-hero page-hero--no-overlay">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage: `url(${aboutBg})`,
            backgroundPosition: "center center",
            "--img-ratio": "56%",
          }}
        >
          <img src={aboutBg} alt="" className="page-hero__mobile-img" draggable="false" />
        </div>
        <div className="page-hero__logo">
          <img src={logoImg} alt="Anandam Homes" />
        </div>
        <CallNowBtn />
        <div className="page-hero__inner page-hero__inner--hidden">
          <div className="page-hero__copy">
            {/* content in image itself */}
          </div>
        </div>
      </section>

      <main className="page-main">
        <section className="page-section">
          <div className="page-card">
            <div className="page-intro-grid">
              <div>
                <div className="section-label">Who We Are</div>
                <h2 className="page-heading">
                  A modern real estate brand with a luxury editorial lens.
                </h2>
                <p className="page-copy">
                  The brand board is not treated as decoration. It shapes the way every page feels: measured,
                  premium, and intentional. That same direction carries into our customer journey, where information
                  is structured clearly and conversations stay focused on long-term confidence.
                </p>
              </div>

              <div>
                <p className="page-copy">
                  We believe premium real estate communication should feel as considered as the asset itself. That
                  means elegant storytelling, disciplined color use, strong hierarchy, and practical details that
                  help buyers act with clarity.
                </p>
                <div className="about-quick-facts">
                  <div className="about-quick-fact">
                    <span className="about-quick-fact__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Legally clear titles and transparent guidance</span>
                  </div>
                  <div className="about-quick-fact">
                    <span className="about-quick-fact__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Zero hidden charges — complete transparency</span>
                  </div>
                  <div className="about-quick-fact">
                    <span className="about-quick-fact__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Lothal Smart City — India's fastest growing corridor</span>
                  </div>
                  <div className="about-quick-fact">
                    <span className="about-quick-fact__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Dedicated relationship manager for every buyer</span>
                  </div>
                  <div className="about-quick-fact">
                    <span className="about-quick-fact__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>Guided site visits at your convenience</span>
                  </div>
                </div>
                <button
                  className="gold-btn"
                  style={{ marginTop: "24px" }}
                  onClick={() => onNavigate?.("/contact-us")}
                >
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

<section className="page-section page-section--spaced">
  <div className="page-highlight-band page-card">
    <div>
      <div className="section-label">Why It Matters</div>
      <h2 className="page-heading">Why Lothal Is Becoming a High-Potential Real Estate Destination</h2>
      <p className="page-copy" style={{ marginBottom: '8px' }}>Lothal enjoys a strong locational advantage because it lies close to:</p>
      <ul style={{ paddingLeft: '18px', margin: '0 0 12px', color: 'inherit' }}>
        <li className="page-copy" style={{ marginBottom: '4px' }}>Dholera SIR Activation Zone</li>
        <li className="page-copy" style={{ marginBottom: '4px' }}>Ahmedabad–Dholera Expressway</li>
        <li className="page-copy" style={{ marginBottom: '4px' }}>Dholera International Airport corridor</li>
        <li className="page-copy" style={{ marginBottom: '4px' }}>Future industrial and semiconductor zones</li>
        <li className="page-copy">Logistics and manufacturing hubs</li>
      </ul>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: '700', color: '#e8d09a', marginBottom: '12px' }}>
  This creates a powerful combination of:
</p>
      <ul style={{ paddingLeft: '18px', margin: '0 0 12px', color: 'rgba(255,255,255,0.78)' }}>
  <li style={{ fontFamily: 'var(--font-body)', fontSize: '16px', marginBottom: '8px' }}>Tourism growth</li>
  <li style={{ fontFamily: 'var(--font-body)', fontSize: '16px', marginBottom: '8px' }}>Industrial development</li>
  <li style={{ fontFamily: 'var(--font-body)', fontSize: '16px', marginBottom: '8px' }}>Future employment generation</li>
  <li style={{ fontFamily: 'var(--font-body)', fontSize: '16px' }}>Real estate appreciation potential</li>
</ul>
    </div>

    <div className="page-highlight-list" style={{ justifyContent: 'flex-start', paddingTop: '70px' }}>
  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '600', color: '#e8d09a', margin: '0 0 8px' }}>
    The Perfect Blend of Heritage + Future Infrastructure
  </h3>
  <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: '600', color: 'rgba(255,255,255,0.55)', marginBottom: '14px' }}>
    Ancient Legacy. Modern Opportunity.
  </p>
  <p className="page-copy" style={{ color: 'rgba(255,255,255,0.78)', fontSize: '16px', marginBottom: '12px' }}>
    More than 4,500 years ago, traders from Mesopotamia connected with Lothal through maritime trade routes. Today, the same land is reconnecting with the future through:
  </p>
  <ul style={{ paddingLeft: '18px', margin: '0 0 12px', color: 'rgba(255,255,255,0.78)' }}>
    <li style={{ fontFamily: 'var(--font-body)', fontSize: '16px', marginBottom: '4px' }}>Smart infrastructure</li>
    <li style={{ fontFamily: 'var(--font-body)', fontSize: '16px', marginBottom: '4px' }}>Industrial expansion</li>
    <li style={{ fontFamily: 'var(--font-body)', fontSize: '16px', marginBottom: '4px' }}>Tourism development</li>
    <li style={{ fontFamily: 'var(--font-body)', fontSize: '16px', marginBottom: '4px' }}>Global investment interest</li>
    <li style={{ fontFamily: 'var(--font-body)', fontSize: '16px' }}>Government-backed mega projects</li>
  </ul>
  <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.78)', marginBottom: '20px' }}>
    Lothal is no longer just an archaeological destination — it is evolving into a future-ready growth ecosystem.
  </p>
  <button className="gold-btn" onClick={() => window.open('https://wa.me/916384800001', '_blank')}>
    Plan A Visit
  </button>
</div>
  </div>
</section>
 </main>
    </div>
  );
}
