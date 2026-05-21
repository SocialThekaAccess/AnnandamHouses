import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Location from "./Components/Location";
import Values from "./Components/Values";
import Projects from "./Components/Projects";
import Features from "./Components/Features";
import Marquee from "./Components/Marquee";
import Contact from "./Components/Contact";
import CategoryShowcase from "./Components/CategoryShowcase";
import Footer from "./Components/Footer";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

const ROUTES = {
  HOME: "/",
  ABOUT: "/about-us",
  BLOG: "/blog",
  CONTACT: "/contact-us",
};

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
        background: "var(--royal-navy, #1A2456)",
        border: "1.5px solid rgba(184,151,90,0.4)",
        color: "#B8975A",
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
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <About />
      <Location />
      <Values />
      <Projects />
      <Features />
      <Marquee />
      <Contact />
    </>
  );
}

function getPathname() {
  const path = window.location.pathname || ROUTES.HOME;
  if (Object.values(ROUTES).includes(path)) {
    return path;
  }
  return ROUTES.HOME;
}

function App() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handlePopState = () => setPathname(getPathname());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const titles = {
      [ROUTES.HOME]: "Anandam Homes",
      [ROUTES.ABOUT]: "About Us | Anandam Homes",
      [ROUTES.BLOG]: "Blog | Anandam Homes",
      [ROUTES.CONTACT]: "Contact Us | Anandam Homes",
    };

    document.title = titles[pathname] || "Anandam Homes";
  }, [pathname]);

  const navigate = (nextPath) => {
    if (nextPath === pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", nextPath);
    setPathname(nextPath);
  };

  const renderPage = () => {
    switch (pathname) {
      case ROUTES.ABOUT:
        return <AboutPage onNavigate={navigate} />;
      case ROUTES.BLOG:
        return <BlogPage onNavigate={navigate} />;
      case ROUTES.CONTACT:
        return <ContactPage />;
      case ROUTES.HOME:
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar currentPath={pathname} onNavigate={navigate} />
      {renderPage()}
      <Footer currentPath={pathname} onNavigate={navigate} />
      <ScrollToTop />
    </>
  );
}

export default App;
