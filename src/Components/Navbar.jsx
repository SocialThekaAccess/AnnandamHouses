import { useEffect, useState } from "react";
import "./Navbar.css";

const HOME_PATH = "/";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Our Values", path: "/our-values" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact-us" },
];

export default function Navbar({ currentPath = HOME_PATH, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60 || currentPath !== HOME_PATH);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentPath]);

  const handleNavigate = (path) => {
    if (currentPath === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    onNavigate?.(path);
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} aria-label="Primary">
      <div className="navbar__spacer" aria-hidden="true" />

      <div className="navbar__links">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.path}
            type="button"
            className={`navbar__link${currentPath === item.path ? " is-active" : ""}`}
            onClick={() => handleNavigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="navbar__spacer" aria-hidden="true" />
    </nav>
  );
}
