import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PageShell.css";
import "./BlogPostPage.css";
import featuredImg from "../assets/Anandamblog1.png";

export default function BlogPostPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Plots in Lothal Near Dholera SIR | Premium Residential Plots | Anandam Properties";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore premium residential plots in Lothal near Dholera SIR with Anandam Properties. Invest in RERA-ready plotted developments offering excellent connectivity, modern infrastructure, transparent documentation, and strong long-term growth potential near Ahmedabad.");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Plots in Lothal Near Dholera SIR | Premium Residential Plots | Anandam Properties");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Explore premium residential plots in Lothal near Dholera SIR with Anandam Properties. Invest in RERA-ready plotted developments offering excellent connectivity, modern infrastructure, transparent documentation, and strong long-term growth potential near Ahmedabad.");
    }
  }, []);

  return (
    <div className="page-shell">
      <main className="page-main">
        <article className="blog-post">
          <div className="blog-post__container">
            <div className="blog-post__inner">
            
              {/* Breadcrumb */}
              <nav className="blog-post__breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/blog">Blog</Link>
                <span>/</span>
                <span>Plots in Lothal Near Dholera SIR</span>
              </nav>

              {/* Article Header */}
              <header className="blog-post__header">
                <div className="blog-post__meta">
                  <span className="blog-post__category">Investment Guide</span>
                  <span className="blog-post__date">June 2026</span>
                  <span className="blog-post__read-time">8 min read</span>
                </div>
                <h1 className="blog-post__title">
                  Plots in Lothal: Why Investing Near Dholera SIR is a Smart Decision for the Future
                </h1>
                <p className="blog-post__intro">
                  Gujarat has become one of India's most attractive real estate destinations, with the Dholera Special Investment Region (SIR) and the historic town of Lothal driving significant investor interest. As infrastructure projects continue to transform the region, demand for plots in Lothal and surrounding areas is growing rapidly.
                </p>
              </header>

              {/* Featured Image */}
              <div className="blog-post__featured-img">
                <img src={featuredImg} alt="Plots in Lothal Near Dholera SIR" />
              </div>

              {/* Article Content */}
            <div className="blog-post__content">
              
              <p>
                If you are searching for a secure long-term investment or planning to build your dream home, <strong>Anandam Exotica</strong> by Anandam Properties offers thoughtfully planned residential plots in one of Gujarat's fastest-growing corridors. The project is strategically located near Dholera SIR, the National Maritime Heritage Complex (NMHC), and major upcoming infrastructure developments, making it an attractive choice for both investors and end-users.
              </p>

              <h2>Why Are Plots in Lothal Becoming Popular?</h2>
              <p>
                Lothal is globally known as one of the most important archaeological sites of the Indus Valley Civilization. Today, it is witnessing a new phase of growth because of modern infrastructure and tourism developments.
              </p>
              <p>
                The construction of the <strong>National Maritime Heritage Complex (NMHC)</strong> is expected to make Lothal an international tourism destination, while its proximity to Dholera Smart City creates strong long-term real estate potential.
              </p>
              <p>
                This combination of heritage, connectivity, and planned development makes residential plots near Lothal an excellent investment opportunity.
              </p>

              <h2>Residential Plots Near Lothal for Modern Living</h2>
              <p>Unlike crowded urban developments, residential plots near Lothal offer:</p>
              <ul>
                <li>Peaceful surroundings</li>
                <li>Better air quality</li>
                <li>Spacious layouts</li>
                <li>Future-ready infrastructure</li>
                <li>Excellent connectivity to Ahmedabad and Dholera</li>
              </ul>
              <p>
                Anandam Exotica has been designed with wide internal roads, landscaped surroundings, organized planning, and community-focused amenities to provide a comfortable lifestyle while remaining close to major growth zones.
              </p>

              <h2>Why Invest in Plots Near Dholera SIR?</h2>
              <p>
                <strong>Dholera SIR</strong> is India's first Greenfield Smart City and is being developed under the Delhi-Mumbai Industrial Corridor (DMIC). The region is planned to become a major hub for manufacturing, logistics, renewable energy, semiconductor industries, and technology businesses.
              </p>
              <p>Key infrastructure developments include:</p>
              <ul>
                <li>Dholera International Airport</li>
                <li>Ahmedabad–Dholera Expressway</li>
                <li>Semiconductor manufacturing hub</li>
                <li>Industrial zones</li>
                <li>Metro and railway connectivity</li>
                <li>Smart utility infrastructure</li>
              </ul>
              <p>
                These projects are creating increasing demand for <strong>plots near Dholera SIR</strong>, especially among long-term investors.
              </p>

              <div className="blog-post__cta-box">
                <h3>Ready to Explore Premium Plots in Lothal?</h3>
                <p>Speak with our team for location guidance, pricing details, and site visit arrangements.</p>
                <button className="gold-btn" onClick={() => navigate("/contact-us")}>
                  Contact Our Team
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>

              <h2>Lothal Dholera Corridor Plots Offer High Growth Potential</h2>
              <p>
                The stretch connecting Lothal and Dholera is gradually becoming one of Gujarat's most promising investment corridors.
              </p>
              <p>The advantages include:</p>
              <ul>
                <li>Proximity to the upcoming National Maritime Heritage Complex</li>
                <li>Direct access to Dholera Smart City</li>
                <li>Improved highway connectivity</li>
                <li>Government-backed infrastructure projects</li>
                <li>Growing tourism and commercial opportunities</li>
              </ul>
              <p>
                Buying <strong>Lothal Dholera corridor plots</strong> today allows investors to enter the market before the region reaches full maturity.
              </p>

              <h2>Premium Plots Near UNESCO Heritage Site</h2>
              <p>
                Very few residential projects offer the unique advantage of being located close to a UNESCO-recognized heritage destination while also benefiting from smart city infrastructure.
              </p>
              <p>Choosing premium plots near UNESCO heritage site locations like Lothal offers:</p>
              <ul>
                <li>Better lifestyle value</li>
                <li>Tourism-driven appreciation potential</li>
                <li>Peaceful residential environment</li>
                <li>Strong future demand</li>
              </ul>
              <p>Anandam Exotica combines these advantages with professionally planned plotted development.</p>

              <h2>Why Dholera SIR Investment Plots Make Sense</h2>
              <p>
                Real estate investments perform best when supported by infrastructure, government planning, and long-term economic development.
              </p>
              <p>Dholera SIR investment plots are attracting attention because the region offers:</p>
              <ul>
                <li>Government-backed development</li>
                <li>Smart city planning</li>
                <li>Industrial expansion</li>
                <li>Growing employment opportunities</li>
                <li>Increasing residential demand</li>
              </ul>
              <p>
                Rather than speculative growth, Dholera's development is supported by large-scale public infrastructure and policy initiatives.
              </p>

              <h2>Dholera Smart City Plots for Future Buyers</h2>
              <p>
                Whether you're an investor, NRI, or future homeowner, <strong>Dholera Smart City plots</strong> offer flexibility.
              </p>
              <p>You can:</p>
              <ul>
                <li>Build your own home later</li>
                <li>Hold the property for long-term appreciation</li>
                <li>Pass it on as a family asset</li>
                <li>Diversify your investment portfolio</li>
              </ul>
              <p>As connectivity improves, demand for quality plotted developments is expected to continue growing.</p>

              <h2>RERA Approved Plots in Gujarat: Why Verification Matters</h2>
              <p>Before investing in any property, buyers should verify:</p>
              <ul>
                <li>Legal ownership</li>
                <li>Title clarity</li>
                <li>Government approvals</li>
                <li>Development permissions</li>
                <li>Registration process</li>
              </ul>
              <p>
                Projects with transparent documentation provide greater confidence to buyers. Anandam Properties emphasizes clear documentation, registry-ready properties, and transparent buyer guidance throughout the purchasing process.
              </p>

              <h2>Plotted Development Near Ahmedabad</h2>
              <p>Ahmedabad continues to expand towards emerging investment corridors.</p>
              <p>Choosing a <strong>plotted development near Ahmedabad</strong> offers several advantages:</p>
              <ul>
                <li>Weekend accessibility</li>
                <li>Lower entry prices than central urban areas</li>
                <li>Better long-term appreciation opportunities</li>
                <li>Growing infrastructure connectivity</li>
                <li>Peaceful residential environment</li>
              </ul>
              <p>
                The strategic location of Anandam Exotica allows buyers to stay connected to Ahmedabad while benefiting from the future growth of Dholera and Lothal.
              </p>

              <h2>Why Lothal Real Estate Investment Is Worth Considering</h2>
              <p>Several factors are contributing to rising interest in <strong>Lothal real estate investment</strong>:</p>
              <ul>
                <li>National Maritime Heritage Complex</li>
                <li>Growth of Dholera Smart City</li>
                <li>Expanding transportation network</li>
                <li>Government-backed infrastructure</li>
                <li>Increasing tourism potential</li>
                <li>Rising investor confidence</li>
              </ul>
              <p>These developments position Lothal as an emerging destination with strong long-term growth prospects.</p>

              <h2>Why Choose Anandam Exotica?</h2>
              <p>
                Anandam Exotica is designed to provide buyers with more than just a plot—it offers a future-ready community supported by transparent processes and strategic location advantages.
              </p>
              <p>Key highlights include:</p>
              <ul>
                <li>Premium residential plots</li>
                <li>Excellent connectivity to Dholera SIR</li>
                <li>Close to Lothal and the National Maritime Heritage Complex</li>
                <li>Wide internal roads</li>
                <li>Green open surroundings</li>
                <li>Planned community amenities</li>
                <li>Registry-ready property</li>
                <li>Clear documentation</li>
                <li>Immediate possession support</li>
                <li>Professional buyer assistance from enquiry to registration</li>
              </ul>

              <h2>Final Thoughts</h2>
              <p>
                The combination of Dholera Smart City, Lothal's heritage significance, and massive infrastructure development is creating one of Gujarat's most promising real estate corridors.
              </p>
              <p>
                Whether you're searching for <strong>plots in Lothal</strong>, residential plots near Lothal, plots near Dholera SIR, or a plotted development near Ahmedabad, investing in a well-planned project with clear documentation is essential.
              </p>
              <p>
                With its strategic location, thoughtfully designed layout, transparent buying process, and proximity to future growth drivers, <strong>Anandam Exotica</strong> by Anandam Properties offers an excellent opportunity for buyers looking to secure a valuable asset in Gujarat's next major growth destination.
              </p>

            </div>

            {/* Article Footer CTA */}
            <div className="blog-post__footer-cta">
              <div className="blog-post__footer-cta-content">
                <h3>Interested in Anandam Exotica?</h3>
                <p>Schedule a site visit and explore premium plotted opportunities in Lothal.</p>
                <div className="blog-post__footer-cta-actions">
                  <button className="gold-btn" onClick={() => navigate("/contact-us")}>
                    Book a Site Visit
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                  <button className="blog-post__wa-btn" onClick={() => window.open("https://wa.me/916384800001", "_blank")}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.847L.057 23.882l6.197-1.624A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-5.001-1.373l-.359-.213-3.718.975.992-3.618-.234-.372A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                    </svg>
                    WhatsApp Us
                  </button>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="blog-post__related">
              <h3>Related Topics</h3>
              <div className="blog-post__tags">
                <span>Plots in Lothal</span>
                <span>Dholera SIR</span>
                <span>Residential Plots Gujarat</span>
                <span>RERA Approved Plots</span>
                <span>Lothal Real Estate</span>
                <span>Dholera Smart City</span>
                <span>Investment Property</span>
              </div>
            </div>

            </div> {/* blog-post__inner */}
          </div> {/* blog-post__container */}
        </article>
      </main>
    </div>
  );
}
