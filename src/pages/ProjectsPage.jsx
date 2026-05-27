import "./PageShell.css";
import heroBg from "../assets/AnnandamHomes1.png";
import logoImg from "../assets/anandamhomeslogo.png";
import { useCallModal } from "../context/CallModalContext";

const PROJECT_MAP_PREVIEW = "/projects/anandam-exotica/map-preview.png";
const PROJECT_LAYOUT_PDF = "/projects/anandam-exotica/PlotNo.73516thMay2026.pdf";
const PROJECT_KML = "/projects/anandam-exotica/Untitled-map.kml";
const PROJECT_MAP_URL = "https://www.google.com/maps?q=22.48065913178268,72.33683683815303";

const PROJECT_STATS = [
  {
    value: "200+",
    label: "Premium Plots",
    copy: "A plotted master plan shaped for residential buyers looking for clarity, road structure, and stronger long-term positioning.",
  },
  {
    value: "7.5 M",
    label: "Internal Roads",
    copy: "The provided layout highlights organized internal roads that improve circulation, frontage definition, and everyday movement.",
  },
  {
    value: "12 M",
    label: "Crossover Road",
    copy: "A wider internal crossover spine helps organize the plotted grid while connecting the blocks more efficiently.",
  },
];

const PROJECT_DOCUMENTS = [
  {
    label: "Plot Layout PDF",
    title: "Plot No. 73 reference layout",
    copy: "Includes the plotted scheme, internal road structure, common plot references, and size legend extracted from the provided PDF.",
    href: PROJECT_LAYOUT_PDF,
    action: "View PDF",
  },
  {
    label: "Google Earth KML",
    title: "Project boundary file",
    copy: "Uses the provided KML boundary around 22.480659, 72.336837 so the site can be reviewed in Google Earth or other compatible map tools.",
    href: PROJECT_KML,
    action: "Download KML",
    download: true,
  },
  {
    label: "Google Maps",
    title: "Open live location",
    copy: "A direct map link for quick route planning, on-ground orientation, and site visit coordination with the Anandam Homes team.",
    href: PROJECT_MAP_URL,
    action: "Open Maps",
  },
];

const PROJECT_SIZES = [
  "6.9 x 15.4 m = 106.26 sqmt carpet",
  "7.5 x 12 m = 90 sqmt carpet",
  "7 x 12 m = 84 sqmt carpet",
  "6 x 10 m = 60 sqmt carpet",
  "Corner plots in non-standard sizes",
];

const PROJECT_HIGHLIGHTS = [
  {
    title: "Lothal Smart City Positioning",
    copy: "Anandam Exotica continues the brand's focus on plotted opportunities inside the Lothal growth corridor, where infrastructure and long-range visibility matter most.",
  },
  {
    title: "Documentation With Clarity",
    copy: "The page brings together the saved PDF layout and KML boundary so buyers can review project planning and map context before a call or visit.",
  },
  {
    title: "Buyer-First Guidance",
    copy: "The same values used across the website remain central here: transparent communication, legally clear guidance, and a calmer project review experience.",
  },
];

const QUICK_POINTS = [
  "Common plot area: 2836.65 sqmt",
  "Road area: 9301.71 sqmt",
  "Frontage aligned with the major district road",
  "Guided site visits and documentation support available",
];

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

export default function ProjectsPage({ onNavigate }) {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center 40%",
          }}
        />
        <div className="page-hero__logo">
          <img src={logoImg} alt="Anandam Homes" />
        </div>
        <CallNowBtn />
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <div className="page-hero__eyebrow">Our Projects</div>
            <h1 className="page-hero__title">
              <span>Anandam Exotica</span> with plotted clarity, mapped access, and a more professional project view.
            </h1>
            <p className="page-hero__description">
              This page brings together the project's saved layout PDF, Google Earth boundary file, and the site's
              existing brand narrative so buyers can understand the offering with more confidence before a conversation or site visit.
            </p>
          </div>

          <div className="page-hero__panel">
            <div className="page-hero__panel-label">Project Access</div>
            <div className="page-hero__panel-value">Layout PDF, KML map, and location preview in one place.</div>
            <div className="page-hero__panel-copy">
              Built in the same editorial style as the rest of the website so the project presentation feels premium, consistent, and easy to review.
            </div>
          </div>
        </div>
      </section>

      <main className="page-main">
        <section className="page-section">
          <div className="page-card">
            <div className="page-intro-grid">
              <div>
                <div className="section-label">Project Overview</div>
                <h2 className="page-heading">
                  A plotted opportunity shaped around Lothal connectivity, layout structure, and buyer-focused guidance.
                </h2>
                <p className="page-copy">
                  Anandam Exotica extends the same approach already visible across the website: premium plotted positioning,
                  transparent communication, and a calmer buyer journey built around real review material instead of vague promises.
                </p>
              </div>

              <div>
                <p className="page-copy">
                  Using the provided project documents, this page now gives visitors a clearer way to examine planning logic,
                  internal roads, common plot allocation, and map context before they speak with the team or schedule a visit.
                </p>
                <div className="project-page__quick-list">
                  {QUICK_POINTS.map((item) => (
                    <div key={item} className="project-page__quick-item">
                      <span className="project-page__quick-dot" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button className="gold-btn" type="button" onClick={() => onNavigate?.("/contact-us")}>
                  Plan A Site Visit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="page-stat-grid">
              {PROJECT_STATS.map((item) => (
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
          <div className="project-page__showcase page-card">
            <div className="project-page__visual">
              <img
                src={PROJECT_MAP_PREVIEW}
                alt="Anandam Exotica plotted layout preview"
                className="project-page__visual-img"
              />
            </div>

            <div className="project-page__content">
              <div className="section-label">Project Documents</div>
              <h2 className="page-heading">
                Saved layout files, now presented as part of the live project page.
              </h2>
              <p className="page-copy">
                The layout preview comes from the provided project files and is paired here with direct access to the
                PDF plan, the KML boundary, and the live map point for faster review and smoother buyer conversations.
              </p>

              <div className="project-page__doc-grid">
                {PROJECT_DOCUMENTS.map((doc) => (
                  <article key={doc.title} className="project-page__doc-card">
                    <div className="project-page__doc-label">{doc.label}</div>
                    <h3 className="project-page__doc-title">{doc.title}</h3>
                    <p className="project-page__doc-copy">{doc.copy}</p>
                    <a
                      href={doc.href}
                      className="project-page__doc-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      download={doc.download ? true : undefined}
                    >
                      {doc.action}
                    </a>
                  </article>
                ))}
              </div>

              <div className="project-page__size-block">
                <div className="project-page__size-label">Plot Size References</div>
                <div className="project-page__size-list">
                  {PROJECT_SIZES.map((size) => (
                    <div key={size} className="project-page__size-item">{size}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section page-section--spaced">
          <div className="page-feature-grid">
            {PROJECT_HIGHLIGHTS.map((item, index) => (
              <article key={item.title} className="page-feature page-card" data-num={`0${index + 1}`}>
                <h3 className="page-feature__title">{item.title}</h3>
                <p className="page-feature__copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section--spaced">
          <div className="page-highlight-band page-card">
            <div>
              <div className="section-label">Why This Page Helps</div>
              <h2 className="page-heading">A stronger project page makes decisions feel more informed before the first call.</h2>
              <p className="page-copy">
                Instead of leaving project information scattered across files and messages, Anandam Exotica now has a
                single destination that reflects the brand's premium tone while staying practical, document-backed, and visitor-friendly.
              </p>
            </div>

            <div className="page-highlight-list">
              {[
                "Legally clear titles and transparent guidance remain central to the project story.",
                "Zero hidden charges and practical documentation support continue the values already established on the site.",
                "Live location access and Google Earth files make review easier for remote buyers and planned site visits.",
              ].map((item) => (
                <div key={item} className="page-highlight-item">{item}</div>
              ))}
              <button className="gold-btn" type="button" onClick={() => onNavigate?.("/contact-us")}>
                Talk To The Team
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
