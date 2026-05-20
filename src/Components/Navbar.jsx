// ─── Navbar.jsx — Anandam Homes ──────────────────────────────────────────────
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/anandamhomeslogo.png";

const NAV_LINKS = [
  { label: "Home",             href: "#home" },
  { label: "About Us",         href: "#about" },
  { label: "Meet the Founder", href: "#founder" },
  { label: "Projects",         href: "#projects" },
  { label: "Blogs",            href: "#blogs" },
  { label: "Contact Us",       href: "#contact" },
];

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* smooth scroll helper */
  const scrollTo = (href, label) => {
    setActiveLink(label);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Main bar ── */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>

        {/* Logo */}
        <div className="navbar__logo" onClick={() => scrollTo("#home", "Home")}>
          <img src={logo} alt="Anandam Homes" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Anandam Homes</span>
            <span className="navbar__logo-tagline">Premium Plots</span>
          </div>
        </div>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <button
                className={`navbar__link-btn${activeLink === label ? " active" : ""}`}
                onClick={() => scrollTo(href, label)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          {/* Live badge (desktop only, inside CTA area) */}
          <span style={{ display: "flex", alignItems: "center", fontSize: 10,
            fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)" }}>
            <span className="navbar__live-dot" />
            Now Selling
          </span>

          <button
            className="navbar__cta"
            onClick={() => scrollTo("#contact", "Contact Us")}
          >
            Book Visit
          </button>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="navbar__mobile-drawer">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              className={`navbar__mobile-link${activeLink === label ? " active" : ""}`}
              onClick={() => scrollTo(href, label)}
            >
              {label}
            </button>
          ))}
          <button
            className="navbar__cta"
            style={{ marginTop: 18, width: "100%", padding: "14px" }}
            onClick={() => scrollTo("#contact", "Contact Us")}
          >
            Book Free Site Visit
          </button>
        </div>
      )}
    </>
  );
}