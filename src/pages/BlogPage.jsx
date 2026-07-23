import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PageShell.css";
import "./BlogPage.css";
import blogHeroImg from "../assets/BlogSlider.png";
import logoImg from "../assets/anandamhomeslogo.png";
import blogCardImg from "../assets/Anandamblog1.png";
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

const BLOGS = [
  {
    tag: "Investment Guide",
    date: "June 2026",
    title: "Plots in Lothal: Why Investing Near Dholera SIR is a Smart Decision for the Future",
    excerpt: "Gujarat has become one of India's most attractive real estate destinations, with Dholera SIR and historic Lothal driving investor interest.",
    read: "8 min read",
    img: blogCardImg,
    link: "/blog/plots-in-lothal-near-dholera-sir",
  },
];

export default function BlogPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Blog | Anandam Properties";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read the latest insights and updates from Anandam Properties.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Blog | Anandam Properties");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Read the latest insights and updates from Anandam Properties.");
    }
  }, []);

  return (
    <div className="page-shell">

      <section className="page-hero blog-hero--full page-hero--no-overlay">
        <div
          className="page-hero__backdrop"
          style={{ backgroundImage: `url(${blogHeroImg})`, backgroundPosition: "center center" }}
        >
          <img src={blogHeroImg} alt="" className="page-hero__mobile-img" draggable="false" />
        </div>
        <Link to="/" className="page-hero__logo" aria-label="Anandam Properties — Home">
          <img src={logoImg} alt="Anandam Properties" />
        </Link>
        <CallNowBtn />
      </section>

      <main className="page-main">

        {/* Header */}
        <section className="page-section blog-section-header">
          <div className="blog-section-header__left">
            <span className="section-label">Latest Articles</span>
            <h2 className="blog-section-header__title">Insights on Dholera</h2>
            <p className="blog-section__sub">In-depth coverage of Dholera's infrastructure, investment climate, and real estate opportunities.</p>
          </div>
          <div className="blog-section-header__right">
            <div className="blog-section-header__stat">
              <span className="blog-section-header__stat-num">1</span>
              <span className="blog-section-header__stat-label">Article</span>
            </div>
            <div className="blog-section-header__stat">
              <span className="blog-section-header__stat-num">2026</span>
              <span className="blog-section-header__stat-label">Latest Year</span>
            </div>
            <div className="blog-section-header__stat">
              <span className="blog-section-header__stat-num">8</span>
              <span className="blog-section-header__stat-label">Min Read</span>
            </div>
          </div>
        </section>

        {/* 3-col card grid */}
        <section className="page-section blog-grid-section">
          <div className="blog-grid">
            {BLOGS.map((blog, i) => (
              blog.link ? (
                <Link 
                  key={i} 
                  to={blog.link}
                  className="blog-card"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="blog-card__img-wrap">
                    <img src={blog.img} alt={blog.title} className="blog-card__img" />
                  </div>
                  <div className="blog-card__body">
                    <h3 className="blog-card__title">{blog.title}</h3>
                  </div>
                </Link>
              ) : (
                <article 
                  key={i} 
                  className="blog-card" 
                  onClick={() => navigate("/contact-us")}
                >
                  <div className="blog-card__img-wrap">
                    <img src={blog.img} alt={blog.title} className="blog-card__img" />
                  </div>
                  <div className="blog-card__body">
                    <h3 className="blog-card__title">{blog.title}</h3>
                  </div>
                </article>
              )
            ))}
          </div>
        </section>

        {/* CTA Band */}
        <section className="page-section page-section--fullwidth">
          <div className="blog-cta-band">
            <div className="blog-cta-band__left">
              <span className="section-label" style={{ color: "#e8d09a" }}>Get In Touch</span>
              <h3 className="blog-cta-band__title">Ready to explore a plot in Dholera?</h3>
              <p className="blog-cta-band__copy">Speak with our team for location walkthroughs, pricing guidance, and a clear picture of what the Dholera opportunity looks like for you.</p>
            </div>
            <div className="blog-cta-band__right">
              <button className="gold-btn" onClick={() => navigate("/contact-us")}>
                Talk to Our Team
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <button className="blog-cta-band__wa" onClick={() => window.open("https://wa.me/916384800001", "_blank")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.847L.057 23.882l6.197-1.624A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-5.001-1.373l-.359-.213-3.718.975.992-3.618-.234-.372A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                WhatsApp Us
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}