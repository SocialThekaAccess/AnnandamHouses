import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/anandamhomeslogo.png";

const HOME_PATH = "/";
const CONTACT_PATH = "/contact-us";

const NAV_LINKS = [
  { label: "Home", href: HOME_PATH },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: CONTACT_PATH },
];

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar({ currentPath = HOME_PATH, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60 || currentPath !== HOME_PATH);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentPath]);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  const handleNavigate = (href) => {
    setMenuOpen(false);
    if (href === currentPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    onNavigate?.(href);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar__logo" onClick={() => handleNavigate(HOME_PATH)}>
          <img src={logo} alt="Anandam Homes" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Anandam Homes</span>
            <span className="navbar__logo-tagline">Premium Plots</span>
          </div>
        </div>

        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <button
                className={`navbar__link-btn${currentPath === href ? " active" : ""}`}
                onClick={() => handleNavigate(href)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <span className="navbar__live-dot" />
            Now Selling
          </span>

          <button className="navbar__cta" onClick={() => handleNavigate(CONTACT_PATH)}>
            Book Visit
          </button>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile-drawer">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              className={`navbar__mobile-link${currentPath === href ? " active" : ""}`}
              onClick={() => handleNavigate(href)}
            >
              {label}
            </button>
          ))}
          <button
            className="navbar__cta"
            style={{ marginTop: 18, width: "100%", padding: "14px", display: "block" }}
            onClick={() => handleNavigate(CONTACT_PATH)}
          >
            Book Free Site Visit
          </button>
        </div>
      )}
    </>
  );
}
