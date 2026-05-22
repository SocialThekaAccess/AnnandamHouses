import { useEffect, useState } from "react";
import "./Navbar.css";
// import logo from "../assets/anandamhomeslogo.png";

const HOME_PATH = "/";

export default function Navbar({ currentPath = HOME_PATH, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60 || currentPath !== HOME_PATH);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentPath]);

  const goHome = () => {
    if (currentPath === HOME_PATH) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    onNavigate?.(HOME_PATH);
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <button type="button" className="navbar__logo" onClick={goHome} aria-label="Anandam Homes — Home">
        {/* <img src={logo} alt="Anandam Homes" className="navbar__logo-img" /> */}
        <div className="navbar__logo-text">
          {/* <span className="navbar__logo-name">Anandam Homes</span> */}
          {/* <span className="navbar__logo-tagline">Premium Plots</span> */}
        </div>
      </button>
    </nav>
  );
}
