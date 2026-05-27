import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import mapImg from "./assets/map.png";
import CallModal from "./Components/CallModal";
import About from "./Components/About";
import Location from "./Components/Location";
import Values from "./Components/Values";
// import Projects from "./Components/Projects";
import Features from "./Components/Features";
import Marquee from "./Components/Marquee";
import Contact from "./Components/Contact";
import CategoryShowcase from "./Components/CategoryShowcase";
import Footer from "./Components/Footer";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import ProjectsPage from "./pages/ProjectsPage";
import ValuesPage from "./pages/ValuesPage";

const ROUTES = {
  HOME: "/",
  ABOUT: "/about-us",
  PROJECTS: "/our-projects",
  VALUES: "/our-values",
  BLOG: "/blog",
  CONTACT: "/contact-us",
  PRIVACY: "/privacy-policy",
  TERMS: "/terms-and-conditions",
};

const LEGAL_PAGES = {
  [ROUTES.PRIVACY]: {
    eyebrow: "Privacy Policy",
    title: "Privacy designed with the same clarity as the rest of the brand experience.",
    intro:
      "This policy explains how Anandam Homes may collect, use, store, and protect information shared through this website, enquiries, calls, and site-visit coordination.",
    summaryTitle: "Your information is used to support property enquiries, buyer communication, and service improvement.",
    summaryCopy:
      "We keep the language practical and transparent so visitors understand what data may be requested, why it matters, and how it is handled in the normal course of business.",
    sections: [
      {
        title: "Information We Collect",
        copy:
          "We may collect details you submit directly, including your name, phone number, email address, preferred area of interest, and any message you provide through forms, calls, WhatsApp, or email conversations.",
      },
      {
        title: "How We Use Information",
        copy:
          "Submitted information may be used to respond to enquiries, arrange callbacks, schedule site visits, share project updates, provide documentation guidance, and improve how our team supports prospective buyers and investors.",
      },
      {
        title: "Sharing and Disclosure",
        copy:
          "Personal information is not sold. It may be shared only with internal team members, relationship managers, service partners, or legal and compliance advisors when reasonably necessary to support your request or meet applicable obligations.",
      },
      {
        title: "Cookies and Website Data",
        copy:
          "The website may use basic analytics, browser storage, or technical cookies to understand page usage, maintain essential functionality, and improve the browsing experience. These tools do not change your property rights or transaction terms.",
      },
      {
        title: "Data Security and Retention",
        copy:
          "Reasonable administrative and technical measures may be used to protect enquiry data from unauthorized access, misuse, or disclosure. Information may be retained for as long as needed to manage enquiries, customer relationships, legal review, or record-keeping requirements.",
      },
      {
        title: "Your Choices",
        copy:
          "You may request correction, update, or deletion of personal details previously shared with us, subject to any legal, operational, or documentation requirements that require retention. Requests can be made through our listed phone number or email address.",
      },
    ],
  },
  [ROUTES.TERMS]: {
    eyebrow: "Terms and Conditions",
    title: "Terms that support a more professional and transparent buyer journey.",
    intro:
      "These terms govern use of the Anandam Homes website and any information, communication, and brand materials presented across its pages.",
    summaryTitle: "Use of this website means you agree to engage with its content responsibly and verify important project details directly with our team.",
    summaryCopy:
      "The website is intended as an introductory information resource. It supports early-stage understanding, but it does not replace formal legal, financial, technical, or contractual review.",
    sections: [
      {
        title: "Informational Purpose",
        copy:
          "All content, visuals, descriptions, and references on this website are provided for general information and brand communication only. They do not by themselves constitute a legal offer, commitment, allotment, or binding representation.",
      },
      {
        title: "Project Availability and Updates",
        copy:
          "Project details, pricing, approvals, inventory status, development timelines, and location-related references may change over time. Visitors should confirm the latest information directly with Anandam Homes before making decisions or relying on any published statement.",
      },
      {
        title: "Intellectual Property",
        copy:
          "Website design, branding, logos, graphics, copy, and related materials remain the property of Anandam Homes or their respective owners unless otherwise stated. Unauthorized copying, redistribution, or commercial use is not permitted.",
      },
      {
        title: "Third-Party Links and Platforms",
        copy:
          "This website may include links to third-party services or platforms such as maps, social media, or messaging channels. Anandam Homes is not responsible for the availability, security, or content policies of those external platforms.",
      },
      {
        title: "Limitation of Reliance",
        copy:
          "Visitors are responsible for conducting independent due diligence, including legal verification, title review, pricing confirmation, and suitability assessment before proceeding with any transaction, booking, or investment decision.",
      },
      {
        title: "Contact and Revisions",
        copy:
          "These terms may be revised from time to time to reflect changes in website content, operations, or compliance needs. Continued use of the website after updates indicates acceptance of the revised terms.",
      },
    ],
  },
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
      className={`scroll-top-btn${visible ? " is-visible" : ""}`}
      aria-label="Back to top"
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
    <div className="home-page">
      <Hero />
      <About />
      {/* <Location /> */}
      <Values />
      {/* <Projects /> */}
      <Features />
      <CategoryShowcase />
      <Marquee />
      <Contact />
      <div className="home-map">
        <img src={mapImg} alt="Development map" className="home-map__img" />
      </div>
    </div>
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
      [ROUTES.PROJECTS]: "Our Projects | Anandam Homes",
      [ROUTES.VALUES]: "Our Values | Anandam Homes",
      [ROUTES.BLOG]: "Blog | Anandam Homes",
      [ROUTES.CONTACT]: "Contact Us | Anandam Homes",
      [ROUTES.PRIVACY]: "Privacy Policy | Anandam Homes",
      [ROUTES.TERMS]: "Terms and Conditions | Anandam Homes",
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
      case ROUTES.PROJECTS:
        return <ProjectsPage onNavigate={navigate} />;
      case ROUTES.VALUES:
        return <ValuesPage onNavigate={navigate} />;
      case ROUTES.BLOG:
        return <BlogPage onNavigate={navigate} />;
      case ROUTES.CONTACT:
        return <ContactPage />;
      case ROUTES.PRIVACY:
      case ROUTES.TERMS:
        return <LegalPage {...LEGAL_PAGES[pathname]} onNavigate={navigate} />;
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
      <CallModal />
    </>
  );
}

export default App;
