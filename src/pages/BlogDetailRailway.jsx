import "./PageShell.css";
import "./BlogDetailRailway.css";
import blogHeroImg from "../assets/sarkhej-dholera-railway-epc-tender.png";

const FAQ_ITEMS = [
  {
    q: "What is the value of the Sarkhej-Dholera railway EPC tender?",
    a: "Western Railway has issued an EPC tender estimated at approximately ₹18,901.68 crore for major construction and railway system works associated with the Sarkhej-Dholera Semi High-Speed Double Railway Line.",
  },
  {
    q: "What is the overall cost of the Ahmedabad-Dholera railway project?",
    a: "The Cabinet-approved Ahmedabad (Sarkhej)-Dholera Semi High-Speed Double Line project has an estimated overall cost of approximately ₹20,667 crore.",
  },
  {
    q: "What is the length of the Sarkhej-Dholera railway corridor?",
    a: "The main Sarkhej-Dholera line is approximately 109.16 km. Including the planned spur lines towards Dholera International Airport and Lothal, the total railway network is approximately 134.06 km.",
  },
  {
    q: "Has construction started on the Sarkhej-Dholera railway?",
    a: "Construction under the current ₹18,901.68 crore EPC package has not yet started. The project is presently in the bidding and contractor-selection stage.",
  },
  {
    q: "How long will construction take?",
    a: "The current EPC tender specifies a work period of approximately 42 months after contract award.",
  },
  {
    q: "When is the Sarkhej-Dholera railway expected to become operational?",
    a: "The broader project is targeting completion around 2030-31, subject to successful tendering, contract award, construction progress and statutory requirements.",
  },
  {
    q: "Will the railway connect Dholera International Airport?",
    a: "Yes. The project includes a proposed spur railway connection towards Dholera International Airport.",
  },
  {
    q: "Will the railway connect Lothal?",
    a: "Yes. A spur connection towards the National Maritime Heritage Complex at Lothal forms part of the planned network.",
  },
  {
    q: "Could the railway improve Dholera property prospects?",
    a: "Better rail connectivity may support the region's long-term accessibility and economic development. However, infrastructure development does not guarantee property-price appreciation. Location, title, approvals, surrounding development and market conditions should also be evaluated.",
  },
  {
    q: "Where can I explore residential plots near Dholera and Lothal?",
    a: "Buyers can explore residential plotted opportunities through Anandam Properties, which focuses on premium plotted developments near Dholera and Lothal and provides project guidance, documentation assistance and site-visit support.",
  },
];

const TENDER_DETAILS = [
  { label: "Authority", value: "Western Railway" },
  { label: "Project", value: "Sarkhej-Dholera Semi High-Speed Double Railway Line" },
  { label: "Estimated EPC Value", value: "₹18,901.68 crore" },
  { label: "Contract Model", value: "EPC" },
  { label: "Work Period", value: "42 months" },
  { label: "EMD", value: "~₹378.03 crore" },
  { label: "Project Region", value: "Ahmedabad-Dholera, Gujarat" },
  { label: "Main Corridor Length", value: "~109.16 km" },
  { label: "Total Network (incl. spurs)", value: "~134.06 km" },
];

export default function BlogDetailRailway({ onNavigate }) {
  return (
    <div className="page-shell">

      <main className="page-main">

        {/* Featured Image */}
        <div className="bd-featured-img-wrap">
          <img src={blogHeroImg} alt="Sarkhej Dholera Railway EPC Tender" className="bd-featured-img" />
        </div>

        {/* Breadcrumb + Tags */}
        <section className="page-section bd-meta-bar">
          <div className="bd-meta-bar__inner">
            <nav className="bd-breadcrumb" aria-label="breadcrumb">
              <button className="bd-breadcrumb__link" onClick={() => onNavigate?.("/blog")}>Blog</button>
              <span className="bd-breadcrumb__sep">›</span>
              <span className="bd-breadcrumb__current">Sarkhej-Dholera Railway</span>
            </nav>
            <div className="bd-meta-bar__tags">
              <span className="bd-tag">Connectivity</span>
              <span className="bd-tag">Railway</span>
              <span className="bd-tag">Infrastructure</span>
            </div>
          </div>
        </section>

        {/* Article + Sidebar */}
        <section className="page-section bd-article-wrap">
          <div className="bd-layout">

            {/* Main Article */}
            <article className="bd-content">

              <header className="bd-header">
                <p className="bd-date">September 18, 2026 &nbsp;·&nbsp; 10 min read</p>
                <h1 className="bd-title">Western Railway Issues ₹18,901.68 Crore EPC Tender for Sarkhej-Dholera Semi High-Speed Rail Line</h1>
                <p className="bd-lead">Dholera's infrastructure development has taken another significant step forward with Western Railway issuing an Engineering, Procurement and Construction (EPC) tender worth ₹18,901.68 crore for the Sarkhej-Dholera Semi High-Speed Double Railway Line.</p>
                <p className="bd-lead">The proposed railway corridor will connect Sarkhej in Ahmedabad with Dholera and will also include dedicated spur connectivity towards Dholera International Airport and the National Maritime Heritage Complex (NMHC) at Lothal.</p>
                <p className="bd-lead">This development follows the Union Cabinet's approval of the larger Ahmedabad (Sarkhej)-Dholera semi-high-speed rail project in May 2026.</p>
                <div className="bd-notice">
                  <span className="bd-notice__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </span>
                  <p>The railway line has entered the bidding and contracting stage, but construction under this EPC package has not yet started.</p>
                </div>
              </header>

              <div className="bd-body">

                <h2>What Is the ₹18,901.68 Crore Sarkhej-Dholera Rail Tender?</h2>
                <p>Western Railway has invited bids for a comprehensive EPC package for the proposed semi-high-speed double railway line between Sarkhej and Dholera.</p>
                <p>The approximate details of the tender are:</p>

                {/* Tender Table */}
                <div className="bd-table-wrap">
                  <table className="bd-table">
                    <thead>
                      <tr>
                        <th>Detail</th>
                        <th>Information</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TENDER_DETAILS.map((row, i) => (
                        <tr key={i}>
                          <td>{row.label}</td>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p>The tender represents an important transition from government approval and planning towards the contractor-selection and execution stages.</p>

                <h2>What Will Be Developed Under the EPC Package?</h2>
                <p>The Sarkhej-Dholera tender is much larger in scope than simply laying railway tracks. The EPC contractor will be responsible for delivering multiple components required to make the railway corridor operational.</p>
                <p>The proposed scope includes:</p>
                <ul>
                  <li>Railway formation</li>
                  <li>Viaducts and elevated structures</li>
                  <li>Major and minor bridges</li>
                  <li>Station buildings and related facilities</li>
                  <li>Railway track systems</li>
                  <li>Ballasted and BLT track works</li>
                  <li>Overhead traction infrastructure</li>
                  <li>Electrical systems</li>
                  <li>Signalling systems</li>
                  <li>Telecommunications</li>
                  <li>Operating Control Centre</li>
                  <li>System integration</li>
                  <li>Testing and commissioning</li>
                </ul>
                <p>Under the EPC model, the selected contractor takes responsibility for engineering, procurement and construction of the package according to the specifications and timelines set by the railway authorities. This makes the current tender one of the most significant implementation stages of the Dholera rail connectivity project.</p>

                <h2>How Long Will the Sarkhej-Dholera Railway Line Be?</h2>
                <p>The main broad-gauge double railway corridor connecting Sarkhej and Dholera is planned to extend approximately 109.16 km.</p>
                <p>Additional spur railway lines are proposed to provide connectivity towards important regional destinations, including:</p>
                <ul>
                  <li>Dholera International Airport</li>
                  <li>National Maritime Heritage Complex at Lothal</li>
                </ul>
                <p>With these additional links included, the complete planned railway network is approximately 134.06 km. This wider network is designed to provide more than city-to-city connectivity. It is expected to integrate industrial, aviation and tourism infrastructure across the region.</p>

                <h2>₹18,901.68 Crore Tender vs ₹20,667 Crore Project Cost</h2>
                <p>People following Dholera infrastructure updates may notice two different cost figures associated with the railway project: ₹18,901.68 crore and ₹20,667 crore. They refer to two different aspects of the same broader railway development.</p>

                <div className="bd-two-col">
                  <div className="bd-two-col__box">
                    <h4>₹20,667 Crore</h4>
                    <p>This represents the approximate overall cost of the Ahmedabad (Sarkhej)-Dholera Semi High-Speed Double Line project approved by the Cabinet Committee on Economic Affairs in May 2026.</p>
                  </div>
                  <div className="bd-two-col__box">
                    <h4>₹18,901.68 Crore</h4>
                    <p>This is the estimated value of the current EPC package issued by Western Railway for major construction and railway system works.</p>
                  </div>
                </div>

                <p>Therefore, ₹20,667 crore refers to the broader approved project cost, while ₹18,901.68 crore represents the value of the current EPC tender.</p>

                <h2>Has Construction of the Sarkhej-Dholera Railway Started?</h2>
                <p>Construction under the ₹18,901.68 crore EPC package has not yet started. Western Railway is presently progressing through the bidding process.</p>
                <p>The general sequence from here is expected to be:</p>
                <div className="bd-steps">
                  {["Tender and bid submission","Bid evaluation","Selection of EPC contractor","Contract award","Mobilisation","Physical construction","Testing","Commissioning"].map((step, i) => (
                    <div key={i} className="bd-step">
                      <span className="bd-step__num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="bd-step__label">{step}</span>
                    </div>
                  ))}
                </div>
                <p>Issuing an EPC tender is nevertheless an important milestone because the project is moving beyond administrative approval into the contractor-selection phase. Recent reporting also indicates that Western Railway has begun the bidding process and that the work is planned to be completed within approximately 42 months after the final contract is awarded.</p>

                <h2>When Could the Sarkhej-Dholera Railway Become Operational?</h2>
                <p>The broader railway project is targeting completion around 2030–31, subject to tender finalisation, contract award, construction progress, approvals and other execution requirements. The current EPC tender specifies a work period of around 42 months after the contract is awarded.</p>
                <p>This means the next important milestone will not simply be the tender announcement, but the selection of the successful contractor and commencement of physical construction. Infrastructure timelines can also change during execution, so buyers and investors should monitor official updates rather than treating estimated completion dates as guaranteed dates.</p>

                <h2>Why Is the Sarkhej-Dholera Railway Important?</h2>
                <p>Dholera is developing through several major infrastructure and industrial initiatives. Better rail connectivity with Ahmedabad can support the region in multiple ways.</p>

                <div className="bd-reason-grid">
                  <div className="bd-reason">
                    <span className="bd-reason__num">01</span>
                    <h3>Better Ahmedabad-Dholera Connectivity</h3>
                    <p>Ahmedabad is the largest major urban and commercial centre near Dholera. A dedicated semi-high-speed railway corridor could make movement between Ahmedabad and Dholera easier and more efficient for professionals, visitors, workers and businesses. Improved connectivity is particularly important as economic activity in Dholera increases.</p>
                  </div>
                  <div className="bd-reason">
                    <span className="bd-reason__num">02</span>
                    <h3>Direct Connectivity to Dholera International Airport</h3>
                    <p>One of the most important elements of the project is the planned spur line towards Dholera International Airport. An airport supported by road and rail connections can provide stronger multimodal accessibility than an airport dependent only on road transport. The combination of the Ahmedabad-Dholera Expressway, international airport and railway corridor could eventually provide Dholera with a much more integrated transport ecosystem.</p>
                  </div>
                  <div className="bd-reason">
                    <span className="bd-reason__num">03</span>
                    <h3>Support for Dholera's Industrial Ecosystem</h3>
                    <p>Dholera is emerging as a major industrial and technology destination with developments across semiconductors, advanced manufacturing, electronics, renewable energy, digital infrastructure and logistics. Large industrial ecosystems depend heavily on reliable transportation, and improved rail connectivity can help support employee movement, business travel and regional accessibility.</p>
                  </div>
                  <div className="bd-reason">
                    <span className="bd-reason__num">04</span>
                    <h3>Improved Daily Commuting Potential</h3>
                    <p>As employment opportunities increase in industrial areas, faster transport links can make it practical for employees to travel from surrounding cities and towns. This can expand the accessible labour pool for industries operating in and around Dholera. Over time, improved commuting options may also influence where employees choose to live.</p>
                  </div>
                  <div className="bd-reason">
                    <span className="bd-reason__num">05</span>
                    <h3>Connectivity to Lothal and NMHC</h3>
                    <p>The project also includes railway connectivity towards Lothal and the National Maritime Heritage Complex. NMHC is being developed as a major maritime heritage and tourism destination. Direct rail accessibility could make it easier for visitors travelling through Ahmedabad and other parts of Gujarat to reach the complex.</p>
                  </div>
                </div>

                <h2>A Growing Multimodal Connectivity Network Around Dholera</h2>
                <p>The Sarkhej-Dholera railway should not be viewed as an isolated infrastructure project. Dholera's long-term connectivity is developing through a combination of infrastructure projects involving:</p>
                <div className="bd-checklist">
                  {["Ahmedabad-Dholera Expressway","Dholera International Airport","Semi-high-speed railway","National highways","Industrial roads","Regional logistics infrastructure","Connectivity towards Lothal"].map((item, i) => (
                    <div key={i} className="bd-checklist__item">
                      <span className="bd-checklist__icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h2>How Could the Railway Project Impact Dholera Real Estate?</h2>
                <p>For property buyers, one of the biggest questions is whether better rail connectivity could influence the real-estate market around Dholera. Major transport infrastructure can improve the attractiveness of a location by reducing travel barriers and connecting it more efficiently with employment and commercial centres.</p>
                <p>If the railway line becomes operational alongside the expressway, airport, industrial zones and other planned infrastructure, it could make Dholera and nearby areas more accessible. Over the long term, this may support demand for:</p>
                <ul>
                  <li>Residential plots</li>
                  <li>Housing communities</li>
                  <li>Rental accommodation</li>
                  <li>Commercial spaces</li>
                  <li>Retail businesses</li>
                  <li>Hospitality projects</li>
                  <li>Warehousing and logistics</li>
                  <li>Supporting services</li>
                </ul>
                <p>However, investors should remember that infrastructure announcements do not automatically guarantee property-price appreciation. Real-estate performance is influenced by factors such as actual location, legal status, infrastructure execution, accessibility, neighbourhood development, market demand and the time horizon of the investment.</p>

                <h2>Why Connectivity Matters When Choosing Property Near Dholera</h2>
                <p>Connectivity is one of the most important considerations when evaluating land or residential property in an emerging growth corridor. When assessing property near Dholera, buyers should consider:</p>
                <div className="bd-checklist">
                  {["Distance from Dholera SIR","Access to major roads","Connectivity towards Ahmedabad","Proximity to Dholera International Airport","Access to the proposed railway network","Distance from Lothal and NMHC","Surrounding residential development","Legal title and documentation","Actual approach road to the property","Approved land use"].map((item, i) => (
                    <div key={i} className="bd-checklist__item">
                      <span className="bd-checklist__icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h2>Anandam Properties: Explore Residential Plots Near Dholera and Lothal</h2>
                <p>As infrastructure development accelerates across the Dholera-Lothal corridor, buyers are increasingly looking for residential plotted opportunities positioned close to future growth areas while maintaining clarity around documentation and location.</p>
                <p>Anandam Properties focuses on premium residential plotted opportunities near Dholera and Lothal, with an emphasis on transparent property guidance, proper documentation assistance and guided site visits. Its flagship plotted development, Anandam Exotica, is designed for buyers looking for a planned residential environment close to the emerging infrastructure around Dholera.</p>
                <p>Anandam Properties focuses on creating a more transparent and structured property-buying experience through:</p>
                <ul>
                  <li>Residential plotted opportunities</li>
                  <li>Clear project information</li>
                  <li>Title and documentation guidance</li>
                  <li>Registry-related assistance</li>
                  <li>Guided site visits</li>
                  <li>Support from enquiry to registration</li>
                  <li>Location insights</li>
                  <li>Updates about nearby infrastructure</li>
                  <li>Long-term investment-focused guidance</li>
                </ul>

                <h2>How the Railway Could Strengthen the Dholera-Lothal Growth Corridor</h2>
                <p>The planned railway connectivity is particularly relevant to the broader Dholera-Lothal growth corridor. One section of the rail network connects towards Dholera and its industrial ecosystem, while another provides connectivity towards Lothal and the National Maritime Heritage Complex.</p>
                <div className="bd-two-col">
                  <div className="bd-two-col__box">
                    <h4>Dholera</h4>
                    <p>Industrial, technology, aviation and residential development.</p>
                  </div>
                  <div className="bd-two-col__box">
                    <h4>Lothal</h4>
                    <p>Tourism, heritage infrastructure and surrounding regional development.</p>
                  </div>
                </div>
                <p>Better connections between Ahmedabad, Dholera, the airport and Lothal could make the overall corridor easier to access over the long term. For residential buyers, this makes it worthwhile to study properties based on their actual position relative to both existing and upcoming infrastructure.</p>

                <h2>Infrastructure to Watch Around Dholera</h2>
                <p>The railway is only one element of Dholera's larger development story. Buyers researching the region should monitor progress across multiple projects, including:</p>
                <div className="bd-checklist">
                  {["Sarkhej-Dholera Semi High-Speed Railway","Dholera International Airport","Ahmedabad-Dholera Expressway","Dholera SIR industrial development","Semiconductor manufacturing ecosystem","Renewable-energy development","Data centre investments","Lothal National Maritime Heritage Complex","Residential and commercial infrastructure"].map((item, i) => (
                    <div key={i} className="bd-checklist__item">
                      <span className="bd-checklist__icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h2>What Should Investors Watch Next?</h2>
                <div className="bd-steps">
                  {["Bid Finalisation — Western Railway will evaluate eligible bids submitted for the EPC package.","Contractor Selection — A successful engineering and construction company or consortium will be selected.","Contract Award — The formal award will establish the contractor responsible for executing the project.","Construction Mobilisation — After the required formalities, equipment, workers and project resources can begin mobilising.","Visible Physical Development — Earthworks, bridges, viaducts, track infrastructure and stations will provide visible indications of actual execution.","Testing and Commissioning — Once construction is substantially completed, railway systems will undergo testing before passenger and other operations can begin."].map((step, i) => (
                    <div key={i} className="bd-step">
                      <span className="bd-step__num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="bd-step__label">{step}</span>
                    </div>
                  ))}
                </div>

                <h2>What Should Buyers Check Before Purchasing Property in Dholera?</h2>
                <p>Dholera has a strong infrastructure and industrial development story, but buyers should still follow standard property due diligence. Before purchasing any plot, check:</p>
                <div className="bd-checklist">
                  {["Ownership and title records","Registration eligibility","Relevant approvals","Land use","Survey details","Exact plot location","Access roads","Distance from key infrastructure","Development commitments","Agreement terms","Applicable government records"].map((item, i) => (
                    <div key={i} className="bd-checklist__item">
                      <span className="bd-checklist__icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h2>Conclusion</h2>
                <p>Western Railway's ₹18,901.68 crore EPC tender for the Sarkhej-Dholera Semi High-Speed Double Railway Line represents an important milestone in Dholera's expanding infrastructure network.</p>
                <p>The project is planned to connect Sarkhej in Ahmedabad with Dholera while also providing railway links towards Dholera International Airport and the National Maritime Heritage Complex at Lothal. It follows the Union Cabinet's approval of the larger project at an estimated cost of approximately ₹20,667 crore.</p>
                <p>At present, however, the EPC package remains in the tender and contractor-selection stage. Construction under this package has not yet begun. The key developments to watch now are the finalisation of bids, selection of the EPC contractor, contract award and commencement of physical works.</p>
                <p>For buyers researching Dholera real estate, the railway adds another important component to the region's connectivity story. Combined with the expressway, airport, industrial development, semiconductor ecosystem and Lothal's tourism infrastructure, it further strengthens the long-term importance of the wider Dholera corridor.</p>
                <p>Anandam Properties provides buyers with an opportunity to explore residential plotted developments near Dholera and Lothal while receiving assistance with project understanding, documentation and site visits. The most sensible approach remains to study infrastructure progress alongside the actual location, documentation and long-term suitability of any property before investing.</p>

                <div className="bd-source">
                  <p><strong>Disclaimer:</strong> This article is for general informational purposes only. Railway costs, timelines, tender conditions and infrastructure plans may change as projects progress. Infrastructure developments do not guarantee real-estate appreciation or investment returns. Buyers should independently verify property titles, approvals, documentation and official project information before making a purchase decision.</p>
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
                  <div className="bd-keyval__item"><span className="bd-keyval__label">EPC Tender Value</span><span className="bd-keyval__value">₹18,901.68 Cr</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Overall Project Cost</span><span className="bd-keyval__value">₹20,667 Cr</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Main Corridor</span><span className="bd-keyval__value">~109.16 km</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Total Network</span><span className="bd-keyval__value">~134.06 km</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Work Period</span><span className="bd-keyval__value">42 months</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Target Completion</span><span className="bd-keyval__value">~2030–31</span></div>
                  <div className="bd-keyval__item"><span className="bd-keyval__label">Status</span><span className="bd-keyval__value">Bidding Stage</span></div>
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
              <h3 className="blog-cta-band__title">Explore Residential Plotted Opportunities Near Dholera and Lothal</h3>
              <p className="blog-cta-band__copy">As infrastructure development accelerates, find your place in the Dholera–Lothal growth corridor. Transparent guidance, documentation support and guided site visits.</p>
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
