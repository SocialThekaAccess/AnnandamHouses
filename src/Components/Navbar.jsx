import { useEffect, useState } from "react";
import "./Navbar.css";
import logoImg from "../assets/anandamhomeslogo.png";
import { useCallModal } from "../context/CallModalContext";

const HOME_PATH = "/";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
   { label: "Our Projects", path: "/our-projects" },
  { label: "About Us", path: "/about-us" },
  // { label: "Our Projects", path: "/our-projects" },
  // { label: "Our Values", path: "/our-values" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact-us" },
];

export default function Navbar({ currentPath = HOME_PATH, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuState, setMenuState] = useState({ open: false, path: HOME_PATH });
  const { setOpen } = useCallModal();
  const menuOpen = menuState.open && menuState.path === currentPath;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60 || currentPath !== HOME_PATH);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentPath]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuState((prev) => (prev.open ? { open: false, path: currentPath } : prev));
  };

  const toggleMenu = () => {
    setMenuState((prev) => {
      const isOpenForCurrentPath = prev.open && prev.path === currentPath;
      return { open: !isOpenForCurrentPath, path: currentPath };
    });
  };

  const handleNavigate = (path) => {
    closeMenu();
    if (currentPath === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    onNavigate?.(path);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}${currentPath !== HOME_PATH ? " navbar--show-logo" : ""}`} aria-label="Primary">
        {/* Logo — visible on mobile */}
        <a
          className="navbar__logo"
          href="/"
          onClick={(e) => { e.preventDefault(); handleNavigate("/"); }}
          aria-label="Anandam Homes — Home"
        >
          <img src={logoImg} alt="Anandam Homes" />
        </a>

        {/* Desktop links */}
        <div className="navbar__links" role="list">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              type="button"
              role="listitem"
              className={`navbar__link${currentPath === item.path ? " is-active" : ""}`}
              onClick={() => handleNavigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile right-side controls: Call btn + Hamburger */}
        <div className="navbar__mobile-actions">
          <button
            className="navbar__call-btn"
            onClick={() => setOpen(true)}
            aria-label="Call Now"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>Call</span>
          </button>

          <button
            className={`navbar__hamburger${menuOpen ? " is-open" : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`navbar__drawer${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="navbar__drawer-inner">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              type="button"
              className={`navbar__drawer-link${currentPath === item.path ? " is-active" : ""}`}
              onClick={() => handleNavigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
