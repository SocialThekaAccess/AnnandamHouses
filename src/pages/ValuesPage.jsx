import "./PageShell.css";
import Value1 from "../assets/Value1.png";
import Value2 from "../assets/Value2.png";
import Value3 from "../assets/Value3.png";
import Value4 from "../assets/Value4.png";
import Valuesimg from "../assets/Valuesimg.png";
import { useCallModal } from "../context/CallModalContext";

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

const VALUES = [
  {
    num: "01",
    title: "Customer First",
    desc: "Focused on the needs of our customers, we create spaces that nurture and inspire. Building trust through transparent processes and unparalleled quality, we place our customers at the heart of every endeavor.",
    image: Value1,
    tag: "Our Priority",
  },
  {
    num: "02",
    title: "Commitment",
    desc: "We stand by every promise made to our customers. From plot delivery timelines to infrastructure quality — our commitment is absolute and non-negotiable at every step of the journey.",
    image: Value2,
    tag: "Our Promise",
  },
  {
    num: "03",
    title: "Integrity",
    desc: "Every transaction, every document, every interaction is rooted in complete honesty. RERA approved, legally clear titles, zero hidden charges — always.",
    image: Value3,
    tag: "Our Standard",
  },
  {
    num: "04",
    title: "Excellence",
    desc: "We don't settle for ordinary. From plot planning to amenities, every detail is crafted to deliver a world-class living experience in Dholera Smart City.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    tag: "Our Craft",
  },
  {
    num: "05",
    title: "Transparency",
    desc: "Open books, clear communication. We believe our customers deserve to know exactly what they are investing in — no surprises, no hidden charges, ever.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&auto=format&fit=crop",
    tag: "Our Approach",
  },
  {
    num: "06",
    title: "One Team One Goal",
    desc: "Our entire team works with a single mission — to help you secure the best investment of your life in India's fastest growing smart city, Dholera.",
    image: Value4,
    tag: "Our Mission",
  },
];

const PILLARS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "People-Centric",
    copy: "Every decision we make starts and ends with the people we serve — our customers, partners, and community.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Growth Focused",
    copy: "We invest in locations, processes, and relationships that create lasting value — not just short-term gains.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Trust Built Daily",
    copy: "Trust isn't claimed — it's earned through consistent action, honest communication, and reliable delivery.",
  },
];

export default function ValuesPage({ onNavigate }) {
  return (
    <div className="page-shell">

      {/* ── Hero ── */}
      <section className="page-hero page-hero--no-overlay">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage: `url(${Valuesimg})`,
          }}
        />
        <CallNowBtn />
        <div className="page-hero__inner page-hero__inner--hidden">
        </div>
      </section>

      <main className="page-main">

        {/* ── Values Grid ── */}
        <section className="page-section">
          <div className="page-card">
            <div className="page-intro-grid">
              <div>
                <div className="section-label">Our Core Values</div>
                <h2 className="page-heading">
                  The principles behind <span>every plot we sell</span>.
                </h2>
                <p className="page-copy">
                  These six values are the cornerstone of everything we do at Anandam Homes.
                  They guide our team, shape our processes, and define the experience we deliver
                  to every customer who trusts us with their investment.
                </p>
              </div>
              <div>
                <p className="page-copy">
                  In a market where trust is everything, our values are our differentiator.
                  We don't just talk about integrity and transparency — we build them into
                  every document, every site visit, and every conversation.
                </p>
              </div>
            </div>

            {/* Values list */}
            <div className="values-page__grid">
              {VALUES.map((v) => (
                <article key={v.num} className="values-page__card">
                  <div className="values-page__card-img">
                    <img src={v.image} alt={v.title} />
                  </div>
                  <div className="values-page__card-body">
                    <div className="values-page__card-top">
                      <span className="values-page__card-num">{v.num}</span>
                      <span className="values-page__card-tag">{v.tag}</span>
                    </div>
                    <h3 className="values-page__card-title">{v.title}</h3>
                    <p className="values-page__card-desc">{v.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pillars ── */}
        <section className="page-section page-section--spaced">
          <div className="page-feature-grid">
            {PILLARS.map((p) => (
              <article key={p.title} className="page-feature page-card values-page__pillar">
                <div className="values-page__pillar-icon">{p.icon}</div>
                <h3 className="page-feature__title">{p.title}</h3>
                <p className="page-feature__copy">{p.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section className="page-section page-section--spaced">
          <div className="page-highlight-band page-card">
            <div>
              <div className="section-label">Live Our Values</div>
              <h2 className="page-heading">
                Experience the difference that <span>values-driven</span> real estate makes.
              </h2>
              <p className="page-copy">
                When you invest with Anandam Homes, you're not just buying a plot — you're
                partnering with a team that holds itself to the highest standards of integrity,
                transparency, and customer care.
              </p>
            </div>
            <div className="page-highlight-list">
              {["RERA approved & legally clear titles", "Zero hidden charges — ever", "Dedicated relationship manager", "Guided site visits at your convenience"].map((item) => (
                <div key={item} className="page-highlight-item">✓ {item}</div>
              ))}
              <button className="gold-btn" onClick={() => onNavigate?.("/contact-us")}>
                Book a Site Visit
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
