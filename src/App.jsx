import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Values from "./Components/Values";
import Projects from "./Components/Projects";
import Marquee from "./Components/Marquee";
import Footer from "./Components/Footer";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      title="Back to top"
      style={{
        position: "fixed",
        bottom: "32px",
        left: "32px",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        background: "var(--navy)",
        border: "1.5px solid rgba(201,168,76,0.4)",
        color: "#c9a84c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 999,
        boxShadow: "0 4px 20px rgba(26,36,86,0.25)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"/>
        <polyline points="5 12 12 5 19 12"/>
      </svg>
    </button>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Projects />
      <Marquee />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
