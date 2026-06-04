import "./PageShell.css";
import "./BlogPage.css";
import blogHeroImg from "../assets/BlogSlider.png";
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
    tag: "Market Insight",
    date: "June 1, 2026",
    title: "Dholera Appreciation Reality: What Happened to Buyers Who Entered Early?",
    excerpt: "Early investors in Dholera SIR are already seeing significant appreciation. This piece explores real outcomes, location advantages, and why the window for entry is still open for long-term buyers.",
    read: "5 min read",
    img: "https://www.bookmyassets.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fc3e1h345%2Fprojects%2F7a59233952c7cf1c02d7231339b52c30605e2c52-1200x800.webp%3Frect%3D1%2C0%2C1199%2C800%26w%3D700%26h%3D467%26q%3D75%26auto%3Dformat&w=384&q=75",
  },
  {
    tag: "Infrastructure",
    date: "May 28, 2026",
    title: "Dholera International Airport: Location, Connectivity and Future Growth",
    excerpt: "The Dholera International Airport is one of the most critical infrastructure projects shaping the region's future. Here is what its location and connectivity mean for real estate buyers.",
    read: "4 min read",
    img: "https://www.bookmyassets.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fc3e1h345%2Fprojects%2F372f0a4a7a030ad8e7018b910cc94b809ffcf13f-1200x800.webp%3Frect%3D1%2C0%2C1199%2C800%26w%3D700%26h%3D467%26q%3D75%26auto%3Dformat&w=384&q=75",
  },
  {
    tag: "Connectivity",
    date: "May 25, 2026",
    title: "Dedicated Freight Corridor: How India's Biggest Rail Network Connects Dholera to Delhi and Mumbai",
    excerpt: "The Dedicated Freight Corridor directly links Dholera to India's largest commercial hubs. For investors, this means industrial growth, employment, and long-term residential demand.",
    read: "6 min read",
    img: "https://www.bookmyassets.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fc3e1h345%2Fprojects%2F149eb9c0d043d8cb7ea378291717ff7402805751-1200x800.webp%3Frect%3D1%2C0%2C1199%2C800%26w%3D700%26h%3D467%26q%3D75%26auto%3Dformat&w=384&q=75",
  },
  {
    tag: "Investment Guide",
    date: "April 25, 2026",
    title: "Which is the Best Location to Buy Plots in Dholera Under 10 Lakh?",
    excerpt: "Not every buyer needs a large budget to enter Dholera. This guide breaks down the most promising affordable plot zones, what to verify, and how to make a confident decision.",
    read: "5 min read",
    img: "https://www.bookmyassets.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fc3e1h345%2Fprojects%2F9f816a4a3ea0a1c2d7061b72ee50d82612dd47a5-1200x800.webp%3Frect%3D1%2C0%2C1199%2C800%26w%3D700%26h%3D467%26q%3D75%26auto%3Dformat&w=384&q=75",
  },
  {
    tag: "Smart City",
    date: "February 14, 2026",
    title: "Why 2026 Is the Best Time to Buy Plots in Dholera Smart City",
    excerpt: "With the expressway inaugurated, airport construction underway, and industrial activation in progress — 2026 represents a defining entry point for buyers who want growth without peak pricing.",
    read: "4 min read",
    img: "https://www.bookmyassets.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fc3e1h345%2Fprojects%2F9eaadf9be767d4169b1b86a790e952b26a192287-1200x800.jpg%3Frect%3D1%2C0%2C1199%2C800%26w%3D700%26h%3D467%26q%3D75%26auto%3Dformat&w=384&q=75",
  },
  {
    tag: "Location",
    date: "January 10, 2026",
    title: "Lothal to Dholera: Understanding the Growth Corridor That Is Shaping Gujarat's Future",
    excerpt: "The stretch between Lothal and Dholera is quickly emerging as one of Gujarat's most strategically important real estate corridors with infrastructure, heritage, and industry converging.",
    read: "5 min read",
    img: "https://www.bookmyassets.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fc3e1h345%2Fprojects%2Fd1237b91addac62baa38e9f7424fd4cf3c109605-1200x800.webp%3Frect%3D1%2C0%2C1199%2C800%26w%3D700%26h%3D467%26q%3D75%26auto%3Dformat&w=384&q=75",
  },
];

export default function BlogPage({ onNavigate }) {
  return (
    <div className="page-shell">

      <section className="page-hero blog-hero--full">
        <div
          className="page-hero__backdrop"
          style={{ backgroundImage: `url(${blogHeroImg})`, backgroundPosition: "center center" }}
        >
          <img src={blogHeroImg} alt="" className="page-hero__mobile-img" draggable="false" />
        </div>
        <div className="blog-hero__overlay" />
        <CallNowBtn />
      </section>

      <main className="page-main">

        {/* Header */}
        <section className="page-section blog-section-header">
          <span className="section-label">Latest Articles</span>
          <p className="blog-section__sub">In-depth coverage of Dholera's infrastructure, investment climate, and real estate opportunities.</p>
        </section>

        {/* 3-col card grid */}
        <section className="page-section blog-grid-section">
          <div className="blog-grid">
            {BLOGS.map((blog, i) => (
              <article key={i} className="blog-card" onClick={() => onNavigate?.("/contact-us")}>
                <div className="blog-card__img-wrap">
                  <img src={blog.img} alt={blog.title} className="blog-card__img" />
                </div>
                <div className="blog-card__body">
                  <h3 className="blog-card__title">{blog.title}</h3>
                  <div className="blog-card__footer">
                    <span className="blog-card__date">{blog.date}</span>
                    <button className="blog-card__cta" onClick={(e) => { e.stopPropagation(); onNavigate?.("/contact-us"); }}>
                      Explore More
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
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
              <button className="gold-btn" onClick={() => onNavigate?.("/contact-us")}>
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