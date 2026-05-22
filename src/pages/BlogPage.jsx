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

const ARTICLES = [
  {
    meta: "Investment Insight",
    title: "Why plotted developments still command attention in growth corridors",
    copy: "Buyers continue to value clarity of ownership, future flexibility, and the ability to enter emerging locations before vertical density peaks.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    meta: "Location Story",
    title: "Reading infrastructure momentum without getting distracted by hype",
    copy: "The strongest land narratives are built on roads, connectivity, approvals, and actual movement on the ground, not just optimistic promises.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    meta: "Brand Lens",
    title: "How premium presentation changes the way buyers process trust",
    copy: "A luxury visual system does more than look beautiful. It creates order, reinforces seriousness, and signals a higher standard of communication.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
];

const NOTES = [
  { title: "Editorial Tone", copy: "A slower, more luxurious layout lets each story breathe and prevents the page from feeling like a generic news feed." },
  { title: "Buyer Relevance", copy: "The article themes are aligned with the concerns real buyers actually carry: timing, trust, and location quality." },
  { title: "Brand Consistency", copy: "Typography, spacing, color, and card treatment deliberately echo the home page rather than drifting into a new style." },
];

export default function BlogPage({ onNavigate }) {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
        <CallNowBtn />
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <div className="page-hero__eyebrow">Journal</div>
            <h1 className="page-hero__title">
              Market notes with a <span>luxury editorial feel</span>.
            </h1>
            <p className="page-hero__description">
              The blog page is built to feel premium, not busy. It frames updates, investment viewpoints, and brand
              storytelling in a calmer composition that supports credibility and encourages longer reading.
            </p>
          </div>

          <div className="page-hero__panel">
            <div className="page-hero__panel-label">Content Direction</div>
            <div className="page-hero__panel-value">Three premium story blocks ready for brand-led publishing.</div>
            <div className="page-hero__panel-copy">
              This gives the site a dedicated editorial destination instead of forcing blog content into the landing page flow.
            </div>
          </div>
        </div>
      </section>

      <main className="page-main">
        <section className="page-section">
          <div className="page-card">
            <div className="page-intro-grid">
              <div>
                <div className="section-label">Blog Design</div>
                <h2 className="page-heading">
                  Crafted to read like a <span>premium property journal</span>.
                </h2>
                <p className="page-copy">
                  Instead of a default blog archive look, this page leans into stronger imagery, luxury spacing, and
                  deliberate hierarchy. It feels closer to a real estate editorial spread than a standard card grid.
                </p>
              </div>

              <div>
                <p className="page-copy">
                  That matters for brand perception. When visitors browse insights, the visual finish reinforces the
                  same high-value positioning introduced on the home page and carried into the other inner pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section page-section--spaced">
          <div className="page-article-grid">
            {ARTICLES.map((article) => (
              <article key={article.title} className="page-article page-card">
                <div className="page-article__media" style={{ backgroundImage: `url(${article.image})` }} />
                <div className="page-article__body">
                  <div className="page-article__meta">{article.meta}</div>
                  <h3 className="page-article__title">{article.title}</h3>
                  <p className="page-article__copy">{article.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section--spaced">
          <div className="page-highlight-band page-card">
            <div>
              <div className="section-label">Publishing Value</div>
              <h2 className="page-heading">This page gives the brand room to educate, not just promote.</h2>
              <p className="page-copy">
                With a distinct blog route, the site can publish insights that improve SEO depth, strengthen authority,
                and support buyer trust without crowding the home page experience.
              </p>
            </div>

            <div className="page-highlight-list">
              {NOTES.map((note) => (
                <div key={note.title} className="page-highlight-item">
                  <strong>{note.title}:</strong> {note.copy}
                </div>
              ))}
              <button className="gold-btn" onClick={() => onNavigate?.("/contact-us")}>Talk To The Team</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
