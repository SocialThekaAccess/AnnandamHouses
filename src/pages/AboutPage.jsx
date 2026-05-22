import "./PageShell.css";

const CallNowBtn = () => (
  <a href="tel:+916384800001" className="page-hero__call-btn" aria-label="Call Now">
    <span className="page-hero__call-btn__icon">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    </span>
    <span className="page-hero__call-btn__text">Call Now</span>
  </a>
);

const STATS = [
  { value: "12+", label: "Years of Trust", copy: "A calmer, consultative approach shaped around families, end-use buyers, and long-hold investors." },
  { value: "200+", label: "Premium Plots", copy: "A tightly positioned plotted community selected for growth visibility and smoother customer decision-making." },
  { value: "500+", label: "Client Conversations", copy: "Market walkthroughs, location briefings, and guided visits designed to remove uncertainty from the buying journey." },
];

const PILLARS = [
  { title: "Luxury Through Restraint", copy: "Our brand language is quiet, polished, and architectural. We focus on proportion, detail, and credibility instead of noise." },
  { title: "Investment With Clarity", copy: "Every conversation is built around transparency, approvals, location logic, and practical ownership guidance." },
  { title: "A Buyer Experience That Feels Curated", copy: "From the first call to the site visit, the process is designed to feel elevated, composed, and highly personal." },
];

const HIGHLIGHTS = [
  "Strategic positioning around the Dholera smart city growth corridor.",
  "Premium plotted inventory presented with a hospitality-inspired customer journey.",
  "A design-first brand board translated consistently across digital touchpoints.",
];

export default function AboutPage({ onNavigate }) {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
        <CallNowBtn />
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <div className="page-hero__eyebrow">Brand Story</div>
            <h1 className="page-hero__title">
              Built for <span>disciplined growth</span> and elevated living.
            </h1>
            <p className="page-hero__description">
              Anandam Homes brings a luxury tone to plotted real estate by pairing refined presentation with
              grounded market guidance. The ambition is simple: make the journey feel premium, informed, and
              deeply trustworthy from the very first interaction.
            </p>
          </div>

          <div className="page-hero__panel">
            <div className="page-hero__panel-label">Positioning</div>
            <div className="page-hero__panel-value">Luxury plotted real estate with investor-grade confidence.</div>
            <div className="page-hero__panel-copy">
              The visual system follows the home page language: rich navy, antique gold, assertive typography,
              spacious composition, and a calm premium rhythm.
            </div>
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
                  A modern real estate brand with a <span>luxury editorial lens</span>.
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
              <h2 className="page-heading">A refined first impression creates stronger trust before the site visit even begins.</h2>
              <p className="page-copy">
                This page is designed as an extension of the home page rather than a disconnected template. The
                result is a more cohesive brand experience, which helps the business feel larger, sharper, and more
                premium across touchpoints.
              </p>
            </div>

            <div className="page-highlight-list">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="page-highlight-item">{item}</div>
              ))}
              <button className="gold-btn" onClick={() => onNavigate?.("/contact-us")}>Plan A Visit</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
