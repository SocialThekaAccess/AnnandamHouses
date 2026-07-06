import "./PageShell.css";
import aboutBg from "../assets/AnnandamHomes1.png";
import logoImg from "../assets/anandamhomeslogo.png";
import { useCallModal } from "../context/CallModalContext";

const LAST_UPDATED = "May 27, 2026";

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

export default function LegalPage({ eyebrow, title, intro, summaryTitle, summaryCopy, sections = [], onNavigate }) {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage: `url(${aboutBg})`,
            backgroundPosition: "center center",
            "--img-ratio": "67%",
          }}
        >
          <img src={aboutBg} alt="" className="page-hero__mobile-img" draggable="false" />
        </div>
        <div className="page-hero__logo">
          <img src={logoImg} alt="Anandam Properties" />
        </div>
        <CallNowBtn />
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <div className="page-hero__eyebrow">{eyebrow}</div>
            <h1 className="page-hero__title">{title}</h1>
            <p className="page-hero__description">{intro}</p>
          </div>

          <div className="page-hero__panel">
            <div className="page-hero__panel-label">Last Updated</div>
            <div className="page-hero__panel-value">{LAST_UPDATED}</div>
            <div className="page-hero__panel-copy">
              This page is part of the same editorial system used across the website, so legal information stays clear, consistent, and easy to review.
            </div>
          </div>
        </div>
      </section>

      <main className="page-main">
        <section className="page-section">
          <div className="page-card">
            <div className="page-intro-grid">
              <div>
                <div className="section-label">Overview</div>
                <h2 className="page-heading">{summaryTitle}</h2>
                <p className="page-copy">{summaryCopy}</p>
              </div>

              <div>
                <div className="legal-page__summary-card">
                  <div className="legal-page__summary-label">Need Assistance</div>
                  <p className="legal-page__summary-copy">
                    For questions about your enquiry, data handling, documentation, or website content, our team can guide you directly.
                  </p>
                  <button className="gold-btn" type="button" onClick={() => onNavigate?.("/contact-us")}>
                    Contact Our Team
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section page-section--spaced">
          <div className="legal-page__grid">
            {sections.map((section, index) => (
              <article key={section.title} className="legal-page__card page-card">
                <div className="legal-page__card-top">
                  <div className="legal-page__card-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="legal-page__card-label">{eyebrow}</div>
                </div>
                <h3 className="legal-page__card-title">{section.title}</h3>
                <p className="legal-page__card-copy">{section.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
