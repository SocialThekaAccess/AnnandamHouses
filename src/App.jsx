import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import mapImg from "./assets/map.png";
import CallModal from "./Components/CallModal";
import { useCallModal } from "./context/CallModalContext";
import About from "./Components/About";
import Values from "./Components/Values";
import Features from "./Components/Features";
import BrandStory from "./Components/BrandStory";
import FAQ from "./Components/FAQ";
import ImageCarousel from "./Components/ImageCarousel";
import Marquee from "./Components/Marquee";
import CustomerReviews from "./Components/CustomerReviews";
import Contact from "./Components/Contact";
import CategoryShowcase from "./Components/CategoryShowcase";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import LegalPage from "./Pages/LegalPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ValuesPage from "./Pages/ValuesPage";

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

const PAGE_METADATA = {
  [ROUTES.HOME]: {
    title: "Premium Residential Plots Near Dholera & Lothal | Anandam Properties",
    description: "Explore premium residential plots near Dholera Smart City and Lothal. Anandam Properties offers legally verified plots, transparent documentation, and expert guidance for long-term property investment in Gujarat",
  },
  [ROUTES.ABOUT]: {
    title: "About Us | Anandam Homes",
    description: "Learn about Anandam Homes - Your trusted partner for premium plotted development in Gujarat.",
  },
  [ROUTES.PROJECTS]: {
    title: "Anandam Exotica Lothal – Premium Plotted Development near UNESCO Heritage Site, Gujarat",
    description: "Anandam Exotica offers premium plotted development near Lothal UNESCO Heritage Site & Dholera SIR. Plot sizes from 60–106 SQMT with a gated community, clear titles, and ready infrastructure. Book your site visit today.",
  },
  [ROUTES.VALUES]: {
    title: "Our Values | Anandam Homes",
    description: "Discover the values that drive Anandam Homes - transparency, quality, and customer satisfaction.",
  },
  [ROUTES.BLOG]: {
    title: "Blog | Anandam Homes",
    description: "Read the latest insights and updates from Anandam Homes.",
  },
  [ROUTES.CONTACT]: {
    title: "Contact Us | Anandam Homes",
    description: "Get in touch with Anandam Homes for premium plot investments in Gujarat.",
  },
  [ROUTES.PRIVACY]: {
    title: "Privacy Policy | Anandam Homes",
    description: "Privacy Policy - Anandam Homes",
  },
  [ROUTES.TERMS]: {
    title: "Terms and Conditions | Anandam Homes",
    description: "Terms and Conditions - Anandam Homes",
  },
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
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function PageMetadata() {
  const location = useLocation();
  const { setCurrentPath } = useCallModal();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname, setCurrentPath]);

  useEffect(() => {
    const metadata = PAGE_METADATA[location.pathname] || PAGE_METADATA[ROUTES.HOME];
    
    document.title = metadata.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const baseUrl = 'https://anandamproperties.com';
    const canonicalUrl = location.pathname === ROUTES.HOME ? baseUrl + '/' : baseUrl + location.pathname;
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    // Update Twitter URL
    let twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', canonicalUrl);
    }
  }, [location.pathname]);

  return null;
}

function BackToTopButton() {
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
      <div className="home-map">
        <div className="home-map__header">
          <span className="home-map__eyebrow">National Maritime Heritage Complex</span>
          <h2 className="home-map__heading">Master Plan of World's Biggest Maritime Museum</h2>
          <p>NMHC is being developed as a "complete" tourist destination where all needs of tourists will be taken care of within one complex. Tourists from all over the world will be visiting the complex. It is being designed in a way that a few days holiday can be planned by a family/ group at NMHC itself.</p>
        </div>
        <img src={mapImg} alt="Development map" className="home-map__img" />
      </div>
      <BrandStory />
      <Values />
      <Features />
      <CustomerReviews />
      <CategoryShowcase />
      <Marquee />
      <FAQ />
      <Contact />
      <ImageCarousel />
    </div>
  );
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <PageMetadata />
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
        <Route path={ROUTES.VALUES} element={<ValuesPage />} />
        <Route path={ROUTES.BLOG} element={<BlogPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.PRIVACY} element={<LegalPage {...LEGAL_PAGES[ROUTES.PRIVACY]} />} />
        <Route path={ROUTES.TERMS} element={<LegalPage {...LEGAL_PAGES[ROUTES.TERMS]} />} />
      </Routes>
      <Footer />
      <BackToTopButton />
      <CallModal />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
