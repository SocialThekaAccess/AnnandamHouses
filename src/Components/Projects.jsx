import { useState } from "react";
import "./Projects.css";

const TABS = ["All", "Residential", "Commercial", "Amenities"];

const PROJECTS = [
  { cat: "Residential", title: "Premium Plots",   sub: "Phase 1 — 100 to 300 Sq. Yards",  tag: "RERA Approved",  hot: true  },
  { cat: "Residential", title: "Corner Plots",    sub: "Phase 2 — Prime Corner Locations", tag: "High ROI",       hot: false },
  { cat: "Residential", title: "Avenue Plots",    sub: "Phase 3 — Wide Road Facing",       tag: "New Launch",     hot: true  },
  { cat: "Commercial",  title: "Commercial Zone", sub: "Business District — Dholera SIR",  tag: "Limited Units",  hot: false },
  { cat: "Amenities",   title: "Clubhouse",       sub: "World Class Facilities",           tag: "Coming Soon",    hot: false },
  { cat: "Amenities",   title: "Green Landscape", sub: "Parks, Jogging Track & Open Spaces", tag: "Coming Soon", hot: false },
];

const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === active);

  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="projects__header">
          <div>
            <span className="section-label">Our Projects</span>
            <h2 className="section-title">
              Premium Plots With<br />
              <span>World Class Features</span>
            </h2>
          </div>
          <div className="projects__tabs">
            {TABS.map(t => (
              <button
                key={t}
                className={`projects__tab${active === t ? " active" : ""}`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filtered.map((p, i) => (
            <div className="proj-card" key={i}>
              <div className="proj-card__img">
                <div className="proj-card__img-bg" />
                <span className="proj-card__tag">{p.tag}</span>
                {p.hot && <span className="proj-card__hot">🔥 Hot</span>}
              </div>
              <div className="proj-card__body">
                <span className="proj-card__cat">{p.cat}</span>
                <h3 className="proj-card__title">{p.title}</h3>
                <p className="proj-card__sub">{p.sub}</p>
                <a href="#contact" className="proj-card__link">
                  View Details <Arrow />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
