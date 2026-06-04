import { useState } from "react";
import logoImg from "../assets/anandamhomeslogo.png";
import blogHeroImg from "../assets/BlogSlider.png";
import "./PageShell.css";

// ── Blog Data ──
const BLOG_POSTS = [
  {
    id: 1,
    category: "Investment Guide",
    date: "May 2025",
    readTime: "5 min read",
    title: "Why Dholera SIR Is India's Most Promising Real Estate Investment in 2025",
    excerpt:
      "Dholera Special Investment Region is no longer just a government project on paper. With airports, expressways, and industrial zones taking shape, here's why investors are paying attention now.",
    featured: true,
  },
  {
    id: 2,
    category: "Smart City",
    date: "April 2025",
    readTime: "4 min read",
    title: "What Makes Dholera a True Smart City — Not Just a Buzzword",
    excerpt:
      "Underground utilities, smart traffic systems, and a master plan built from scratch. We break down what 'smart city' actually means for someone buying a plot in Dholera.",
    featured: false,
  },
  {
    id: 3,
    category: "Buyer's Guide",
    date: "March 2025",
    readTime: "6 min read",
    title: "Plots: What to Check Before You Buy in Gujarat",
    excerpt:
      "Not all RERA approvals are equal. This guide walks you through the documents, checks, and red flags every plot buyer in Gujarat should know before signing anything.",
    featured: false,
  },
  {
    id: 4,
    category: "Lothal Heritage",
    date: "February 2025",
    readTime: "3 min read",
    title: "Lothal: Where 5,000 Years of History Meets India's Future",
    excerpt:
      "The UNESCO World Heritage site of Lothal is at the heart of India's newest investment corridor. Understanding the heritage value helps explain why land here is appreciating fast.",
    featured: false,
  },
  {
    id: 5,
    category: "Investment Guide",
    date: "January 2025",
    readTime: "5 min read",
    title: "Plotted Development vs Apartment: Which Is the Better Long-Term Bet?",
    excerpt:
      "For investors thinking beyond five years, plotted developments in emerging corridors often outperform apartments in saturated urban markets. Here's the data and the logic behind it.",
    featured: false,
  },
  {
    id: 6,
    category: "Infrastructure",
    date: "December 2024",
    readTime: "4 min read",
    title: "The Delhi-Mumbai Industrial Corridor: What It Means for Dholera Landowners",
    excerpt:
      "The DMIC is one of the largest infrastructure projects in Indian history. Dholera sits at a key node. Here's how the corridor translates into real value for plot owners.",
    featured: false,
  },
];

const CATEGORIES = ["All", "Investment Guide", "Smart City", "Buyer's Guide", "Lothal Heritage", "Infrastructure"];

export default function BlogPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <div className="page-shell">
      {/* ── Hero ── */}
      <section className="page-hero page-hero--no-overlay blog-hero">
        <div
          className="page-hero__backdrop blog-hero__backdrop"
          style={{ backgroundImage: `url(${blogHeroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="page-hero__logo">
          <img src={logoImg} alt="Anandam Homes" />
        </div>
        {/* <div className="blog-hero__inner">
          <span className="page-hero__eyebrow">Insights &amp; Perspectives</span>
          <h1 className="page-hero__title">
            The Anandam <span>Journal</span>
          </h1>
          <p className="page-hero__description">
            Expert guides, investment insights, and stories from India's most exciting real estate corridor — written for buyers who want clarity, not hype.
          </p>
        </div> */}
      </section>

      <main className="page-main">

        {/* ── Featured Post ── */}
        {activeCategory === "All" && featured && (
          <section className="page-section">
            <div className="blog-featured">
              <div className="blog-featured__label-row">
                <span className="section-label">Featured Article</span>
              </div>
              <div className="blog-featured__body">
                <div className="blog-featured__meta">
                  <span className="blog-tag">{featured.category}</span>
                  <span className="blog-meta-dot" />
                  <span className="blog-meta-text">{featured.date}</span>
                  <span className="blog-meta-dot" />
                  <span className="blog-meta-text">{featured.readTime}</span>
                </div>
                <h2 className="blog-featured__title">{featured.title}</h2>
                <p className="blog-featured__excerpt">{featured.excerpt}</p>
                <button className="gold-btn" type="button">
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
              <div className="blog-featured__visual">
                <div className="blog-featured__img-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(184,151,90,0.3)" }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span>Featured Image</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Category Filter ── */}
        <section className="page-section page-section--spaced">
          <div className="blog-filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blog-filter__btn${activeCategory === cat ? " blog-filter__btn--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── Post Grid ── */}
        <section className="page-section page-section--spaced">
          <div className="blog-grid">
            {rest.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card__img-wrap">
                  <div className="blog-card__img-placeholder">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(184,151,90,0.25)" }}>
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-tag">{post.category}</span>
                    <span className="blog-meta-dot" />
                    <span className="blog-meta-text">{post.date}</span>
                    <span className="blog-meta-dot" />
                    <span className="blog-meta-text">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <button className="blog-card__link" type="button">
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section className="page-section page-section--spaced">
          <div className="page-highlight-band page-card">
            <div>
              <div className="section-label">Stay Informed</div>
              <h2 className="page-heading">Questions About Investing in Dholera?</h2>
              <p className="page-copy">
                Our team is on the ground in Lothal every day. Whether you want to understand the market, verify documents, or simply plan a site visit — we are here to give you honest answers.
              </p>
            </div>
            <div className="page-highlight-list">
              {[
                "Free consultation with no obligation to buy.",
                "Transparent pricing with zero hidden charges.",
                "RERA-verified plots with clear title documentation.",
              ].map((item) => (
                <div key={item} className="page-highlight-item">{item}</div>
              ))}
              <button
                className="gold-btn"
                type="button"
                onClick={() => window.open("https://wa.me/916384800001", "_blank")}
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}