import { useEffect } from "react";
import "./PageShell.css";
import heroBg from "../assets/ourProjects.png";
import logoImg from "../assets/anandamhomeslogo.png";
import mapPreview from "../assets/AnandamMaps.jpeg";
import { useCallModal } from "../context/CallModalContext";

const PROJECT_MAP_URL = "https://www.google.com/maps?q=22.48065913178268,72.33683683815303";

const PROJECT_STATS = [
  {
    value: "60-106.26",
    label: "SQMT Options",
    copy: "Diverse residential plot sizes, from compact 60 SQMT options to expansive 106.26 SQMT premium sites.",
  },
  {
    value: "40 FT",
    label: "Main Road",
    copy: "Grand planning with a 40-feet main road and wide internal avenues for smooth, comfortable movement across the community.",
  },
  {
    value: "2,800+",
    label: "SQMT Open Space",
    copy: "Large common plot and landscaped green zones designed for recreation, breathing space, and community use.",
  },
];

const PROJECT_SIZES = [
  "The Ultimate & The Destined: Prime plots located at the northern edge.",
  "The Six Senses & The Ritz Plaza: Centrally located for easy access to all amenities.",
  "Castle Rock & Empire Enclave: Premium blocks flanking the main boulevard.",
  "The Courtyard & Elite Grove: Located near the grand entrance and major open green zones.",
];

const PLOT_OPTIONS = [
  {
    type: "The Elite",
    dimensions: "6.9 x 15.4",
    area: "106.26 SQMT",
    idealFor: "Luxury villas and more spacious garden-facing homes.",
  },
  {
    type: "The Standard",
    dimensions: "7.5 x 12",
    area: "90.00 SQMT",
    idealFor: "Family homes with comfortable planning and ample parking potential.",
  },
  {
    type: "The Classic",
    dimensions: "7.0 x 12",
    area: "84.00 SQMT",
    idealFor: "Optimized modern residences with balanced living spaces.",
  },
  {
    type: "The Smart",
    dimensions: "6.0 x 10",
    area: "60.00 SQMT",
    idealFor: "Weekend retreats, compact homes, and investor-led builds.",
  },
  {
    type: "Corner Plots",
    dimensions: "Non-Standard",
    area: "Varies",
    idealFor: "Premium visibility, open edges, and stronger frontage value.",
  },
];

const PROJECT_BADGES = [
  "Gated Community",
  "Ready-to-Build",
  "Clear Title Plots",
  "Heritage-Led Location",
];

const PROJECT_HIGHLIGHTS = [
  {
    title: "The Ultimate & The Destined",
    copy: "Prime plots positioned along the northern edge for buyers who value quieter placement and a more exclusive address feel.",
  },
  {
    title: "The Six Senses & The Ritz Plaza",
    copy: "Centrally placed residential clusters with practical access to the broader layout, making everyday movement more convenient.",
  },
  {
    title: "Castle Rock, Empire Enclave, The Courtyard & Elite Grove",
    copy: "Premium blocks arranged around the main boulevard, entrance edge, and green zones to create privacy, prestige, and visual balance.",
  },
];

const QUICK_POINTS = [
  "Strategic location near the UNESCO World Heritage site of Lothal",
  "Secure gated community planned for serene modern living",
  "Ready-to-build infrastructure with clear title plots",
  "Ideal for weekend homes and long-term investment positioning",
];

const PROJECT_LIST = [
  {
    label: "First Project",
    title: "Anandam Exotica",
    copy: "Discover a lifestyle of serenity and sophistication in Lothal, where heritage meets modern living through meticulously planned residential plots inside a secure gated community.",
    href: PROJECT_MAP_URL,
    action: "Open Project Location",
  },
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
  useEffect(() => {
    document.title = "Our Projects | Anandam Exotica Lothal - Premium Plots Near UNESCO Heritage Site";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover Anandam Exotica Lothal - RERA-approved premium plots from 60-106 SQMT near UNESCO World Heritage Site. Gated community with 40ft main road, 2800+ SQMT open space, and clear titles.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Anandam Exotica Lothal - Premium Plotted Development");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "RERA-approved gated community near Lothal UNESCO site and Dholera SIR. Plot sizes 60-106 SQMT with clear infrastructure and premium amenities.");
    }
  }, []);

  return (
    <div className="page-shell">
      <section className="page-hero page-hero--no-overlay">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center 40%",
            "--img-ratio": "56%",
          }}
        >
          <img src={heroBg} alt="" className="page-hero__mobile-img" draggable="false" />
        </div>
        <div className="page-hero__logo">
          <img src={logoImg} alt="Anandam Properties" />
        </div>
        <CallNowBtn />
        <div className="page-hero__inner page-hero__inner--hidden" />
      </section>

      <main className="page-main">
        <section className="page-section">
          <div className="page-card">
            <div className="page-intro-grid">
              <div>
                <div className="section-label">Project Overview</div>
                <h1 className="page-heading">
                 Welcome to Anandam Exotica – Lothal
                </h1>
                <h2 className="page-subheading" style={{ fontSize: '1.25rem', fontWeight: '400', marginTop: '0.75rem', marginBottom: '1rem', color: '#666' }}>
                  Where heritage meets modern living
                </h2>
                <p className="page-copy">
                  Anandam Exotica is a premium plotted development created for those
                  who seek the right blend of tranquility, connectivity, and long-term value in the historic heart of Lothal. Designed for modern families and forward-thinking investors, the project offers thoughtfully planned plots in a rapidly developing location. With excellent infrastructure growth, seamless accessibility, and strong future appreciation potential.
                </p>
              </div>

              <div>
                <p className="page-copy">
                  Whether you are planning a dream weekend home or making a high-yield investment in Gujarat's
                  fastest-growing corridor, Anandam Exotica is designed as the place where your future begins.
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
          <div className="project-page__project-grid">
            {PROJECT_LIST.map((project) => (
              <article key={project.title} className="project-page__project-card page-card">
                <div className="project-page__project-main">
                  <div>
                    <div className="project-page__project-label">{project.label}</div>
                    <h2 className="project-page__project-title">{project.title}</h2>
                    <p className="project-page__project-copy">{project.copy}</p>
                  </div>

                  <div className="project-page__project-side">
                    <div className="project-page__project-badges">
                      {PROJECT_BADGES.map((badge) => (
                        <span key={badge} className="project-page__project-badge">{badge}</span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      className="project-page__project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.action}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section page-section--spaced">
          <div className="project-page__showcase page-card">
            <div className="project-page__visual">
              <img
                src={mapPreview}
                alt="Anandam Exotica full master plan"
                className="project-page__visual-img"
              />

              <div className="project-page__size-block">
                <div className="project-page__size-label">The Master Plan</div>
                <div className="project-page__size-list">
                  {PROJECT_SIZES.map((size) => (
                    <div key={size} className="project-page__size-item">{size}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-page__content">
              <div className="section-label">Plot Options</div>
              <h2 className="page-heading">
                Choose Your Perfect Space
              </h2>
              <p className="page-copy">
                We offer a variety of plot sizes tailored to different budgets, lifestyles, and architectural goals,
                from compact weekend-home options to larger premium plots with a more expansive feel.
              </p>

              <div className="project-page__table-box">
                <div className="project-page__table-head">
                  <div>Plot Type</div>
                  <div>Dimensions (Meters)</div>
                  <div>Area (Carpet)</div>
                  <div>Ideal For</div>
                </div>
                <div className="project-page__plot-list">
                  {PLOT_OPTIONS.map((option) => (
                    <article key={option.type} className="project-page__plot-row">
                      <div className="project-page__plot-cell">
                        <span className="project-page__plot-label">Plot Type</span>
                        <span className="project-page__plot-value project-page__plot-value--strong">{option.type}</span>
                      </div>
                      <div className="project-page__plot-cell">
                        <span className="project-page__plot-label">Dimensions (Meters)</span>
                        <span className="project-page__plot-value">{option.dimensions}</span>
                      </div>
                      <div className="project-page__plot-cell">
                        <span className="project-page__plot-label">Area (Carpet)</span>
                        <span className="project-page__plot-value project-page__plot-value--strong">{option.area}</span>
                      </div>
                      <div className="project-page__plot-cell">
                        <span className="project-page__plot-label">Ideal For</span>
                        <span className="project-page__plot-value">{option.idealFor}</span>
                      </div>
                    </article>
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
              <h2 className="page-heading">Why Invest in Lothal?</h2>
              <p className="page-copy">
                As a key node in the Delhi-Mumbai Industrial Corridor and close to the upcoming National Maritime
                Heritage Complex, Lothal is seeing powerful infrastructure growth. Investing here is not just buying
                land, it is securing a stake in one of India's most promising heritage-tourism hubs.
              </p>
            </div>

            <div className="page-highlight-list">
              {[
                "Heritage value meets modern infrastructure in a high-potential corridor.",
                "Strong tourism and industrial momentum supports long-term appreciation.",
                "Experience a life of peace, pride, and prosperity at Anandam Exotica.",
              ].map((item) => (
                <div key={item} className="page-highlight-item">{item}</div>
              ))}
              <button 
  className="gold-btn" 
  type="button" 
  onClick={() => window.open('https://wa.me/916384800001', '_blank')}
>
  Talk To The Team
</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
