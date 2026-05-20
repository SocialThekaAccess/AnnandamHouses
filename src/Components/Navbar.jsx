import React, { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Meet the Founder", href: "#founder" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

/* Inline SVG logo matching the gold house + lotus mark from the brand image */
const LogoMark = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* House roof */}
    <polyline points="8,28 30,10 52,28" stroke="#c9a84c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* House body */}
    <rect x="14" y="28" width="32" height="22" rx="1" stroke="#c9a84c" strokeWidth="2" fill="none"/>
    {/* Door */}
    <rect x="24" y="36" width="12" height="14" rx="1" stroke="#c9a84c" strokeWidth="1.6" fill="none"/>
    {/* Lotus petals */}
    <ellipse cx="44" cy="20" rx="4" ry="7" stroke="#c9a84c" strokeWidth="1.4" fill="none" transform="rotate(-20 44 20)"/>
    <ellipse cx="50" cy="18" rx="3.5" ry="6.5" stroke="#c9a84c" strokeWidth="1.4" fill="none" transform="rotate(10 50 18)"/>
    <ellipse cx="47" cy="14" rx="3" ry="6" stroke="#c9a84c" strokeWidth="1.4" fill="none" transform="rotate(-5 47 14)"/>
    {/* Stem */}
    <path d="M44 27 Q44 32 40 36" stroke="#c9a84c" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    {/* Decorative curl */}
    <path d="M14 50 Q10 46 12 42" stroke="#c9a84c" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <path d="M46 50 Q50 46 48 42" stroke="#c9a84c" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={() => handleLinkClick("Home")}>
          <div className="nav-logo-icon">
            <LogoMark />
          </div>
          <div className="nav-logo-text">
            <span className="brand-name">Anandam</span>
            <span className="brand-sub">Exotica</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={active === link.label ? "active" : ""}
                onClick={() => handleLinkClick(link.label)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="nav-btn">
          <CalendarIcon />
          Book Site Visit
        </button>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <ul className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={active === link.label ? "active" : ""}
              onClick={() => handleLinkClick(link.label)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <button className="nav-mobile-btn">
          Book Site Visit
        </button>
      </ul>
    </>
  );
}
