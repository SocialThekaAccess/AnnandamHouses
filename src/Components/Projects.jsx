import { useState, useEffect, useRef } from "react";
import "./Projects.css";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Icons ── */
const AreaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M3 9h18M9 21V9"/>
  </svg>
);
const PriceIcon = () => (                               
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 8h6M9 12h6M9 16h4"/>
    <line x1="12" y1="6" x2="12" y2="18"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

/* Amenity mini icons */
const ClubIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="10" width="18" height="11" rx="1"/><path d="M3 14h18M7 10V7a5 5 0 0 1 10 0v3"/></svg>;
const GameIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01M8 12h.01M16 12h.01M12 8v8"/></svg>;
const PoolIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M8 7V4M16 7V4"/></svg>;
const JogIcon   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="4" r="2"/><path d="M9 20l1-6-2-3 4-4 2 4h4"/><path d="M6 12l2-2"/></svg>;
const ParkIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2L8 10h8L12 2z"/><path d="M10 10v12M14 10v12"/><path d="M6 22h12"/></svg>;
const KidsIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="5" r="3"/><path d="M6 21v-4a6 6 0 0 1 12 0v4"/></svg>;

const TABS = ["All", "Residential", "Commercial", "Amenities"];

const PROJECTS = [
  {
    cat: "Residential",
    title: "Premium Plots",
    sub: "Phase 1 • 100 to 500 Sq. Yards",
    // tag: "RERA Approved",
    hot: true,
    area: "100–500\nSq. Yards",
    price: "₹12.5L*\nOnwards",
    photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
    amenities: null,
  },
  {
    cat: "Residential",
    title: "Corner Plots",
    sub: "Phase 2 • Prime Corner Locations",
    // tag: "High ROI",
    hot: true,
    area: "150–600\nSq. Yards",
    price: "₹15.5L*\nOnwards",
    photo: "https://www.imaginationshaper.com/product_images/villa-design870.jpg",
    amenities: null,
  },
  {
    cat: "Residential",
    title: "Avenue Plots",
    sub: "Phase 3 • Wide Road Facing",
    // tag: "New Launch",
    hot: true,
    area: "120–400\nSq. Yards",
    price: "₹13.5L*\nOnwards",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdbwkcAmmWBwCf0zdthuCIho29bJiIolTiw&s",
    amenities: null,
  },
  {
    cat: "Commercial",
    title: "Commercial Zone",
    sub: "Business District • Dholera SIR",
    // tag: "Limited Units",
    hot: false,
    area: "500+\nSq. Yards",
    price: "₹25L*\nOnwards",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Teheran-ro_Yeongdong-daero_crossing_7.jpg/1280px-Teheran-ro_Yeongdong-daero_crossing_7.jpg",
    amenities: null,
  },
  {
    cat: "Amenities",
    title: "Clubhouse",
    sub: "World Class Facilities",
    // tag: "Coming Soon",
    hot: false,
    area: null,
    price: null,
    photo: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&auto=format&fit=crop",
    amenities: [
      { icon: <ClubIcon />, label: "Club\nHouse" },
      { icon: <GameIcon />, label: "Indoor\nGames" },
      { icon: <PoolIcon />, label: "Swimming\nPool" },
    ],
  },
  {
    cat: "Amenities",
    title: "Green Landscape",
    sub: "Parks, Jogging Track & Open Spaces",
    // tag: "Coming Soon",
    hot: false,
    area: null,
    price: null,
    photo: "https://img.magnific.com/premium-photo/aerial-view-green-field-with-land-plot-location-pin_1119746-11389.jpg",
    amenities: [
      { icon: <JogIcon />,  label: "Jogging\nTrack" },
      { icon: <ParkIcon />, label: "Open\nSpaces" },
      { icon: <KidsIcon />, label: "Kids Play\nArea" },
    ],
  },
];

/* Bottom features strip */
const STRIP = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "GujRERA\nApproved" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>, label: "Clear Title\nProperty" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, label: "24/7\nSecurity" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>, label: "Wide\nRoads" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, label: "Underground\nElectricity" },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>, label: "Water Supply &\nDrainage" },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef,   gridVisible]   = useInView(0.08);
  const [stripRef,  stripVisible]  = useInView(0.2);

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === active);

  return (
    <section className="projects" id="projects">
      <div className="container">

        {/* ── Header ── */}
        <div ref={headerRef} className={`projects__header reveal-up${headerVisible ? " is-visible" : ""}`}>
          <div className="projects__header-left">
            <span className="section-label">Our Projects</span>
            <h2 className="section-title">
              Premium Plots With<br />
              <span>World Class Features</span>
            </h2>
          </div>
          <div className="projects__tabs">
            {TABS.map(t => (
              <button key={t} className={`projects__tab${active === t ? " active" : ""}`} onClick={() => setActive(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div ref={gridRef} className="projects__grid">
          {filtered.map((p, i) => (
            <div
              key={i}
              className={`proj-card reveal-up${gridVisible ? " is-visible" : ""}`}
              style={{ transitionDelay: gridVisible ? `${i * 0.1}s` : "0s" }}
            >
              {/* Photo */}
              <div className="proj-card__photo" style={{ backgroundImage: `url(${p.photo})` }}>
                <div className="proj-card__photo-overlay" />
                <span className="proj-card__tag">{p.tag}</span>
              </div>

              {/* Body */}
              <div className="proj-card__body">
                <span className="proj-card__cat">{p.cat}</span>
                <h3 className="proj-card__title">{p.title}</h3>
                <p className="proj-card__sub">{p.sub}</p>

                {/* Info row */}
                <div className="proj-card__info">
                  {p.area && (
                    <div className="proj-card__info-item">
                      <AreaIcon />
                      <span style={{ whiteSpace: "pre-line" }}>{p.area}</span>
                    </div>
                  )}
                  {p.price && (
                    <div className="proj-card__info-item">
                      <PriceIcon />
                      <span style={{ whiteSpace: "pre-line" }}>{p.price}</span>
                    </div>
                  )}
                  {p.amenities && p.amenities.map((a, j) => (
                    <div className="proj-card__info-item" key={j}>
                      {a.icon}
                      <span style={{ whiteSpace: "pre-line" }}>{a.label}</span>
                    </div>
                  ))}
                  <a href="#contact" className="proj-card__arrow">
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Features Strip ── */}
        <div ref={stripRef} className={`projects__strip reveal-up${stripVisible ? " is-visible" : ""}`}>
          {STRIP.map((s, i) => (
            <div key={i} className="strip-item">
              <div className="strip-item__icon">{s.icon}</div>
              <span className="strip-item__label" style={{ whiteSpace: "pre-line" }}>{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
