import "./PageShell.css";
import "./BlogDetailSTTGDC.css";
import blogHeroImg from "../assets/stt-gdc-dholera-data-centre.png";

const FAQ_ITEMS = [
  {
    q: "What is STT GDC planning in Dholera?",
    a: "STT GDC India is evaluating the development of sustainable, high-capacity digital infrastructure in Dholera. A feasibility study is currently underway.",
  },
  {
    q: "How much is STT GDC planning to invest in Dholera?",
    a: "The potential investment currently being evaluated is approximately ₹8,000–₹10,000 crore.",
  },
  {
    q: "Is the ₹10,000 crore STT GDC Dholera project confirmed?",
    a: "No. The project is currently under evaluation. A final investment commitment, project location, capacity and construction timeline have not yet been officially confirmed.",
  },
  {
    q: "Why are data centre companies interested in Dholera?",
    a: "Large land availability, renewable-energy potential, planned infrastructure, Gujarat's data centre policies and Dholera's growing semiconductor and technology ecosystem are among the factors attracting interest.",
  },
  {
    q: "Could data centres increase property demand in Dholera?",
    a: "If major technology and industrial projects become operational and generate employment and supporting business activity, they could contribute to long-term residential and commercial demand. However, property appreciation is not guaranteed and depends on multiple factors.",
  },
  {
    q: "Where can buyers explore residential plots near Dholera?",
    a: "Buyers researching residential plotted opportunities around Dholera and Lothal can explore Anandam Properties, which provides project information, documentation assistance, site visits and guidance through the property-buying process.",
  },
];

export default function BlogDetailSTTGDC({ onNavigate }) {
  return (
    <div className="page-shell">

      <main className="page-main">

        {/* Breadcrumb + Meta */}
        <section className="page-section bd-meta-bar">
          <div className="bd-meta-bar__inner">
            <nav className="bd-breadcrumb" aria-label="breadcrumb">
              <button className="bd-breadcrumb__link" onClick={() => onNavigate?.("/blog")}>Blog</button>
              <span className="bd-breadcrumb__sep">›</span>
              <span className="bd-breadcrumb__current">STT GDC Dholera</span>
            </nav>
            <div className="bd-meta-bar__tags">
              <span className="bd-tag">Digital Infrastructure</span>
              <span className="bd-tag">Dholera</span>
              <span className="bd-tag">Data Centre</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="page-section bd-article-wrap">
          <div className="bd-layout">

            {/* Main content */}
            <article className="bd-content">

              <header className="bd-header">
                <p className="bd-date">September 18, 2026 &nbsp;·&nbsp; 8 min read</p>
                <h1 className="bd-title">STT GDC Dholera: ₹8,000–₹10,000 Crore Data Centre Investment Under Evaluation</h1>
                <p className="bd-lead">
                  Dholera is steadily gaining attention as one of Gujarat's emerging technology and infrastructure destinations. From semiconductor manufacturing and renewable energy to smart infrastructure and improved connectivity, multiple developments are contributing to the region's long-term growth story.
                </p>
                <p className="bd-lead">
                  The latest development attracting interest is STT GDC India's evaluation of a potential ₹8,000–₹10,000 crore investment in Dholera for sustainable, high-capacity digital infrastructure.
                </p>
                <p className="bd-lead">
                  The proposal came into focus following a meeting between Gujarat Chief Minister Bhupendra Patel and Bimal Khandelwal, CEO of STT GDC India, during the Mumbai Roadshow for the Vibrant Gujarat Global Summit 2027.
                </p>
              </header>

              {/* Featured Image — after title, like other blog posts */}
              <div className="bd-featured-img-wrap">
                <img src={blogHeroImg} alt="STT GDC Dholera Data Centre Investment" className="bd-featured-img" />
              </div>

              <div className="bd-body">

                <div className="bd-notice">
                  <span className="bd-notice__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </span>
                  <p>The proposed investment has not yet been confirmed as a final project. STT GDC India is currently evaluating the opportunity, and a feasibility study is underway.</p>
                </div>

                <h2>What Is STT GDC India Considering in Dholera?</h2>
                <p>STT GDC India is exploring the possibility of developing large-scale, sustainable digital infrastructure in Dholera.</p>
                <p>Modern data centres are critical infrastructure facilities that house servers, computing systems, networking equipment and data-storage technology. They support everything from cloud applications and artificial intelligence to financial services, e-commerce platforms, enterprise software and digital communications.</p>
                <p>As India's digital economy continues to expand, demand for large and energy-efficient data centres is also increasing.</p>
                <p>The discussions surrounding the potential STT GDC Dholera project have reportedly included factors such as:</p>
                <ul>
                  <li>Availability of green and renewable power</li>
                  <li>Gujarat's data centre and digital infrastructure policies</li>
                  <li>Availability of land for large facilities</li>
                  <li>Long-term scalability</li>
                  <li>Industrial infrastructure</li>
                  <li>Sustainable data centre development</li>
                  <li>Dholera's growing technology ecosystem</li>
                </ul>

                <h2>Is STT GDC's ₹10,000 Crore Dholera Investment Confirmed?</h2>
                <p>No.</p>
                <p>As of September 2026, STT GDC India is evaluating a possible investment estimated at approximately ₹8,000–₹10,000 crore in Dholera. A feasibility study is currently being carried out.</p>
                <p>There has been no final announcement confirming key project details such as:</p>
                <ul>
                  <li>Final investment value</li>
                  <li>Exact land or project location</li>
                  <li>Data centre capacity</li>
                  <li>Construction commencement</li>
                  <li>Development phases</li>
                  <li>Completion timeline</li>
                  <li>Operational date</li>
                </ul>
                <p>Therefore, the development should currently be described as a potential investment under evaluation, rather than a confirmed ₹10,000 crore project.</p>
                <p>This distinction is especially important for property buyers and investors following developments in Dholera. Major corporate interest can be an important indicator of a region's direction, but investment decisions should not be based solely on proposals that have not yet reached final approval.</p>

                <h2>Who Is STT GDC India?</h2>
                <p>STT GDC India is a major participant in India's data centre industry and provides digital infrastructure for enterprise, cloud and high-performance computing requirements.</p>
                <p>The company has developed a substantial presence across several major Indian cities and continues to expand its infrastructure as demand for cloud computing, AI workloads and digital services grows. STT GDC India has also been increasing its focus on AI-ready and high-capacity data centre infrastructure.</p>
                <p>Its broader expansion activity demonstrates the increasing importance of India as a global digital infrastructure market. Dholera being evaluated as a potential location is therefore another indication of the growing technology interest surrounding the region.</p>

                <h2>Why Is Dholera Emerging as a Data Centre Destination?</h2>
                <p>Dholera's potential is no longer limited to traditional industrial development. The region is being shaped around a broader ecosystem covering manufacturing, semiconductors, renewable energy, logistics, connectivity and technology infrastructure.</p>

                <div className="bd-reason-grid">
                  <div className="bd-reason">
                    <span className="bd-reason__num">01</span>
                    <h3>Large-Scale Land Availability</h3>
                    <p>Hyperscale and high-capacity data centres can require significant areas of land for buildings, power infrastructure, cooling systems, security facilities and future expansion. A planned industrial destination such as Dholera provides opportunities to develop infrastructure on a much larger scale than densely developed metropolitan locations.</p>
                  </div>
                  <div className="bd-reason">
                    <span className="bd-reason__num">02</span>
                    <h3>Renewable and Green Energy Potential</h3>
                    <p>Electricity is one of the biggest operational requirements for data centres. With sustainability becoming increasingly important for technology companies, reliable access to renewable and green power can influence where future data centre campuses are established. Dholera's connection with Gujarat's renewable-energy ecosystem could therefore become an important advantage.</p>
                  </div>
                  <div className="bd-reason">
                    <span className="bd-reason__num">03</span>
                    <h3>Planned Infrastructure</h3>
                    <p>Unlike cities that have expanded organically over decades, Dholera is being developed through long-term infrastructure planning. Planned roads, utility networks, industrial infrastructure and regional connectivity can make it easier to support large technology and industrial facilities.</p>
                  </div>
                  <div className="bd-reason">
                    <span className="bd-reason__num">04</span>
                    <h3>Gujarat's Data Centre Policy</h3>
                    <p>The Viksit Gujarat Data Centre Policy 2026–29 reflects the state government's intention to attract significant data centre capacity. Gujarat had initially targeted around 7.5 GW of data centre capacity. By September 2026, applications representing approximately 14 GW had already been received.</p>
                  </div>
                  <div className="bd-reason">
                    <span className="bd-reason__num">05</span>
                    <h3>Semiconductor and Technology Ecosystem</h3>
                    <p>Dholera is also emerging as an important part of India's semiconductor manufacturing ecosystem. Semiconductors, artificial intelligence, advanced manufacturing and data centres all contribute to the development of a larger technology ecosystem. As more industrial and technology companies enter the region, supporting infrastructure and services may expand alongside them.</p>
                  </div>
                </div>

                <h2>What Could the STT GDC Proposal Mean for Dholera?</h2>
                <p>If the STT GDC proposal progresses from feasibility assessment to actual development, its impact could extend beyond the data centre itself. Large digital infrastructure projects require a broad supporting ecosystem.</p>

                <div className="bd-two-col">
                  <div className="bd-two-col__box">
                    <h4>During Construction</h4>
                    <ul>
                      <li>Civil construction</li>
                      <li>Electrical infrastructure</li>
                      <li>Engineering</li>
                      <li>Equipment supply</li>
                      <li>Transportation</li>
                      <li>Security</li>
                      <li>Project management</li>
                      <li>Utility development</li>
                    </ul>
                  </div>
                  <div className="bd-two-col__box">
                    <h4>Once Operational</h4>
                    <ul>
                      <li>Information technology</li>
                      <li>Network management</li>
                      <li>Electrical engineering</li>
                      <li>Facility management</li>
                      <li>Cybersecurity</li>
                      <li>Physical security</li>
                      <li>Cooling and energy systems</li>
                      <li>Operations and maintenance</li>
                    </ul>
                  </div>
                </div>

                <h2>AI, Cloud Computing and Dholera's Digital Future</h2>
                <p>The rapid expansion of artificial intelligence is changing the global data centre industry. AI applications require enormous computing power. Cloud platforms, digital services, streaming, online payments and enterprise applications are also generating increasing amounts of data.</p>
                <p>This means future technology infrastructure requires not only more data centres but also facilities capable of supporting high-density computing environments.</p>
                <p>If companies such as STT GDC eventually establish major facilities in Dholera, the region could become part of a broader AI, cloud and digital infrastructure ecosystem. It is still too early, however, to label Dholera as an established AI or data centre hub purely on the basis of proposed investments.</p>

                <h2>Could Data Centre Growth Influence Dholera Real Estate?</h2>
                <p>Industrial and technology development can potentially influence nearby real estate over the long term because growing business ecosystems may create requirements for housing, commercial facilities, transportation, hospitality and everyday services.</p>
                <p>If significant data centre, semiconductor and industrial projects become operational, the region could attract engineers and technical professionals, industrial employees, management teams, contractors and suppliers, service businesses, logistics providers and supporting commercial activities.</p>
                <p>Over time, this can contribute to demand for residential and commercial development. However, a proposed corporate investment does not automatically guarantee an increase in property values.</p>

                <h2>Why Infrastructure Developments Matter for Long-Term Property Buyers</h2>
                <p>A region's long-term real estate potential is generally connected to more than a single announcement. Property buyers evaluating Dholera should look at the larger ecosystem being developed around the region.</p>
                <div className="bd-checklist">
                  {["Industrial development","Employment generation","Semiconductor ecosystem","Data centre development","Renewable-energy infrastructure","Roads and regional connectivity","Airport connectivity","Logistics infrastructure","Residential development","Commercial and social infrastructure"].map((item, i) => (
                    <div key={i} className="bd-checklist__item">
                      <span className="bd-checklist__icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h2>What Should Investors Watch Next?</h2>
                <p>The next stage of the STT GDC development will depend on the outcome of the feasibility study and any subsequent official announcements. Important developments to watch include:</p>
                <ul>
                  <li>Formal confirmation from STT GDC India</li>
                  <li>Final investment value</li>
                  <li>Project location and land allocation</li>
                  <li>Proposed data centre capacity</li>
                  <li>Construction schedule</li>
                  <li>Power and renewable-energy arrangements</li>
                  <li>Environmental and regulatory approvals</li>
                  <li>Expected operational timeline</li>
                </ul>
                <p>Until these details are formally announced, the investment should continue to be treated as a proposal under evaluation.</p>

                <h2>Conclusion</h2>
                <p>STT GDC India's evaluation of a potential ₹8,000–₹10,000 crore investment in Dholera is another noteworthy development for the region's growing technology and digital infrastructure ecosystem.</p>
                <p>Dholera is already attracting attention for semiconductors, renewable energy, planned infrastructure and industrial development. The possibility of large-scale data centre infrastructure could further diversify its economic base and strengthen its relevance to cloud computing, AI and digital services.</p>
                <p>At the same time, it is essential to separate potential developments from confirmed investments. As of September 2026, STT GDC India is conducting a feasibility study, and the ₹8,000–₹10,000 crore investment has not been announced as a final committed project.</p>
                <p>For people researching Dholera property, the development is worth following as part of the region's broader growth story. Property decisions, however, should continue to be based on location, legal verification, documentation, infrastructure access and individual investment objectives.</p>

                <div className="bd-source">
                  <p><strong>Source:</strong> Official information shared following Gujarat Chief Minister Bhupendra Patel's interaction with STT GDC India during the Vibrant Gujarat Global Summit 2027 Mumbai Roadshow.</p>
                </div>

                <div className="bd-disclaimer">
                  <p><strong>Disclaimer:</strong> This article is intended for general informational purposes only. The proposed STT GDC investment is currently under evaluation and should not be treated as a confirmed project. References to infrastructure or proposed developments do not guarantee future property appreciation or investment returns. Buyers should independently verify property titles, approvals, documentation, location details and applicable government records before making any real-estate decision.</p>
                </div>

              </div>
            </article>

            {/* Sidebar */}
            <aside className="bd-sidebar">
              <div className="bd-sidebar__card">
                <h3 className="bd-sidebar__title">Explore Dholera Plots</h3>
                <p className="bd-sidebar__copy">Interested in residential plotted opportunities near the Dholera–Lothal growth corridor? Our team can help.</p>
                <button className="gold-btn" style={{ width: "100%" }} onClick={() => onNavigate?.("/contact-us")}>
                  Talk to Our Team
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
                <button className="bd-sidebar__wa" onClick={() => window.open("https://wa.me/916384800001", "_blank")}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.847L.057 23.882l6.197-1.624A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-5.001-1.373l-.359-.213-3.718.975.992-3.618-.234-.372A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                  WhatsApp Us
                </button>
              </div>

              <div className="bd-sidebar__card bd-sidebar__card--dark">
                <h3 className="bd-sidebar__title" style={{ color: "#e8d09a" }}>Key Facts</h3>
                <div className="bd-keyval">
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Investment Under Evaluation</span><span className="bd-keyval__value">₹8,000–10,000 Cr</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Company</span><span className="bd-keyval__value">STT GDC India</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Location</span><span className="bd-keyval__value">Dholera, Gujarat</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Status</span><span className="bd-keyval__value">Feasibility Study</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Type</span><span className="bd-keyval__value">Data Centre</span></div>
                </div>
              </div>
            </aside>

          </div>
        </section>

        {/* FAQ */}
        <section className="page-section bd-faq-section">
          <h2 className="bd-faq-title">Frequently Asked Questions</h2>
          <div className="bd-faq-grid">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bd-faq-item">
                <h3 className="bd-faq-item__q">{item.q}</h3>
                <p className="bd-faq-item__a">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Band */}
        <section className="page-section page-section--fullwidth">
          <div className="blog-cta-band">
            <div className="blog-cta-band__left">
              <span className="section-label" style={{ color: "#e8d09a" }}>Anandam Properties</span>
              <h3 className="blog-cta-band__title">Explore Dholera Residential Plotted Opportunities</h3>
              <p className="blog-cta-band__copy">To learn more about residential plotted opportunities around the Dholera–Lothal growth corridor or to arrange a site visit, explore Anandam Properties and speak with the team for project-specific information.</p>
            </div>
            <div className="blog-cta-band__right">
              <button className="gold-btn" onClick={() => onNavigate?.("/our-projects")}>
                View Our Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <button className="blog-cta-band__wa" onClick={() => onNavigate?.("/contact-us")}>
                Book a Site Visit
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
