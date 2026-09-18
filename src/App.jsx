import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailSTTGDC from "./pages/BlogDetailSTTGDC";
import BlogDetailRailway from "./pages/BlogDetailRailway";
import BlogPostPage from "./pages/BlogPostPage";
import BlogPostWeekendHome from "./pages/BlogPostWeekendHome";
import BlogPostLothalCorridor from "./pages/BlogPostLothalCorridor";
import BlogPostMicroLocation from "./pages/BlogPostMicroLocation";
import BlogPostDholeraExpressway from "./pages/BlogPostDholeraExpressway";
import BlogPostDholeraSIRSmartCity from "./pages/BlogPostDholeraSIRSmartCity";
import BlogPostDMICRealEstate from "./pages/BlogPostDMICRealEstate";
import BlogPostClearTitlePlots from "./pages/BlogPostClearTitlePlots";
import BlogPostPremiumUNESCOPlots from "./pages/BlogPostPremiumUNESCOPlots";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import ProjectsPage from "./pages/ProjectsPage";
import ValuesPage from "./pages/ValuesPage";

const LEGAL_PAGES = {
  "/privacy-policy": {
    eyebrow: "Privacy Policy",
    title: "Privacy designed with the same clarity as the rest of the brand experience.",
    intro: "This policy explains how Anandam Properties may collect, use, store, and protect information shared through this website, enquiries, calls, and site-visit coordination.",
    summaryTitle: "Your information is used to support property enquiries, buyer communication, and service improvement.",
    summaryCopy: "We keep the language practical and transparent so visitors understand what data may be requested, why it matters, and how it is handled in the normal course of business.",
    sections: [
      { title: "Information We Collect", copy: "We may collect details you submit directly, including your name, phone number, email address, preferred area of interest, and any message you provide through forms, calls, WhatsApp, or email conversations." },
      { title: "How We Use Information", copy: "Submitted information may be used to respond to enquiries, arrange callbacks, schedule site visits, share project updates, provide documentation guidance, and improve how our team supports prospective buyers and investors." },
      { title: "Sharing and Disclosure", copy: "Personal information is not sold. It may be shared only with internal team members, relationship managers, service partners, or legal and compliance advisors when reasonably necessary to support your request or meet applicable obligations." },
      { title: "Cookies and Website Data", copy: "The website may use basic analytics, browser storage, or technical cookies to understand page usage, maintain essential functionality, and improve the browsing experience. These tools do not change your property rights or transaction terms." },
      { title: "Data Security and Retention", copy: "Reasonable administrative and technical measures may be used to protect enquiry data from unauthorized access, misuse, or disclosure. Information may be retained for as long as needed to manage enquiries, customer relationships, legal review, or record-keeping requirements." },
      { title: "Your Choices", copy: "You may request correction, update, or deletion of personal details previously shared with us, subject to any legal, operational, or documentation requirements that require retention. Requests can be made through our listed phone number or email address." },
    ],
  },
  "/terms-and-conditions": {
    eyebrow: "Terms and Conditions",
    title: "Terms that support a more professional and transparent buyer journey.",
    intro: "These terms govern use of the Anandam Properties website and any information, communication, and brand materials presented across its pages.",
    summaryTitle: "Use of this website means you agree to engage with its content responsibly and verify important project details directly with our team.",
    summaryCopy: "The website is intended as an introductory information resource. It supports early-stage understanding, but it does not replace formal legal, financial, technical, or contractual review.",
    sections: [
      { title: "Informational Purpose", copy: "All content, visuals, descriptions, and references on this website are provided for general information and brand communication only. They do not by themselves constitute a legal offer, commitment, allotment, or binding representation." },
      { title: "Project Availability and Updates", copy: "Project details, pricing, approvals, inventory status, development timelines, and location-related references may change over time. Visitors should confirm the latest information directly with Anandam Properties before making decisions or relying on any published statement." },
      { title: "Intellectual Property", copy: "Website design, branding, logos, graphics, copy, and related materials remain the property of Anandam Properties or their respective owners unless otherwise stated. Unauthorized copying, redistribution, or commercial use is not permitted." },
      { title: "Third-Party Links and Platforms", copy: "This website may include links to third-party services or platforms such as maps, social media, or messaging channels. Anandam Properties is not responsible for the availability, security, or content policies of those external platforms." },
      { title: "Limitation of Reliance", copy: "Visitors are responsible for conducting independent due diligence, including legal verification, title review, pricing confirmation, and suitability assessment before proceeding with any transaction, booking, or investment decision." },
      { title: "Contact and Revisions", copy: "These terms may be revised from time to time to reflect changes in website content, operations, or compliance needs. Continued use of the website after updates indicates acceptance of the revised terms." },
    ],
  },
};

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Floating scroll-up button
function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Back to top"
      className={`scroll-top-btn${visible ? " is-visible" : ""}`}
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}

// SEO meta updater
function SEOUpdater() {
  const { pathname } = useLocation();

  const titles = {
    "/": "Anandam | Premium Plots in Lothal & Dholera – Invest in Gujarat's Growth Corridor",
    "/about-us": "About Us | Anandam Properties",
    "/our-projects": "Anandam Exotica Lothal – Premium Plotted Development near UNESCO Heritage Site, Gujarat",
    "/our-values": "Our Values | Anandam Properties",
    "/blog": "Blog | Anandam Properties",
    "/blog/stt-gdc-dholera-data-centre": "STT GDC Dholera: ₹8,000–₹10,000 Crore Data Centre Investment Under Evaluation | Anandam Properties",
    "/blog/sarkhej-dholera-railway-epc-tender": "Western Railway ₹18,901.68 Crore EPC Tender: Sarkhej-Dholera Semi High-Speed Rail Line Explained | Anandam Properties",
    "/contact-us": "Contact Us | Anandam Properties",
    "/privacy-policy": "Privacy Policy | Anandam Properties",
    "/terms-and-conditions": "Terms and Conditions | Anandam Properties",
  };

  const descriptions = {
    "/": "Explore premium plots near Lothal UNESCO Heritage Site & Dholera SIR. Anandam Properties offers transparent guidance, clear titles, and high-potential investment in Gujarat's fastest-growing corridor. Book a free site visit today.",
    "/about-us": "Learn about Anandam Properties - Your trusted partner for premium plotted development in Gujarat.",
    "/our-projects": "Anandam Exotica offers plotted development near Lothal UNESCO site & Dholera SIR. Plot sizes from 60–106 SQMT. Gated community, clear titles, ready infrastructure. Book a site visit.",
    "/our-values": "Discover the values that drive Anandam Properties - transparency, quality, and customer satisfaction.",
    "/blog": "Read the latest insights and updates from Anandam Properties.",
    "/blog/stt-gdc-dholera-data-centre": "STT GDC India is evaluating a ₹8,000–₹10,000 crore data centre investment in Dholera. Learn what this means for Dholera's technology ecosystem and real estate outlook.",
    "/blog/sarkhej-dholera-railway-epc-tender": "Western Railway has issued an ₹18,901.68 crore EPC tender for the 109 km Sarkhej-Dholera semi-high-speed double railway line. Understand what this means for Dholera's connectivity and real estate.",
    "/contact-us": "Get in touch with Anandam Properties for premium plot investments in Gujarat.",
    "/privacy-policy": "Privacy Policy - Anandam Properties",
    "/terms-and-conditions": "Terms and Conditions - Anandam Properties",
  };

  useEffect(() => {
    document.title = titles[pathname] || "Anandam Properties";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.setAttribute('name', 'description'); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute('content', descriptions[pathname] || descriptions["/"]);

    const baseUrl = 'https://anandamproperties.com';
    const canonicalUrl = pathname === "/" ? baseUrl + "/" : baseUrl + pathname;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', canonicalUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', canonicalUrl);
  }, [pathname]);

  return null;
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

function AppInner() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setCurrentPath } = useCallModal();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname, setCurrentPath]);

  return (
    <>
      <SEOUpdater />
      <ScrollToTop />
      <Navbar currentPath={pathname} onNavigate={(path) => navigate(path)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage onNavigate={(path) => navigate(path)} />} />
        <Route path="/our-projects" element={<ProjectsPage onNavigate={(path) => navigate(path)} />} />
        <Route path="/our-values" element={<ValuesPage onNavigate={(path) => navigate(path)} />} />
        <Route path="/blog" element={<BlogPage onNavigate={(path) => navigate(path)} />} />
        <Route path="/blog/stt-gdc-dholera-data-centre" element={<BlogDetailSTTGDC onNavigate={(path) => navigate(path)} />} />
        <Route path="/blog/sarkhej-dholera-railway-epc-tender" element={<BlogDetailRailway onNavigate={(path) => navigate(path)} />} />
        <Route path="/blog/plots-in-lothal-near-dholera-sir" element={<BlogPostPage />} />
        <Route path="/blog/weekend-home-plots-near-ahmedabad" element={<BlogPostWeekendHome />} />
        <Route path="/blog/lothal-dholera-corridor-growth-hub" element={<BlogPostLothalCorridor />} />
        <Route path="/blog/micro-location-buying-guide-dholera" element={<BlogPostMicroLocation />} />
        <Route path="/blog/dholera-expressway-property-investment" element={<BlogPostDholeraExpressway />} />
        <Route path="/blog/dholera-sir-smart-city-investment" element={<BlogPostDholeraSIRSmartCity />} />
        <Route path="/blog/delhi-mumbai-industrial-corridor-real-estate-dholera" element={<BlogPostDMICRealEstate />} />
        <Route path="/blog/clear-title-residential-plots-gujarat" element={<BlogPostClearTitlePlots />} />
        <Route path="/blog/premium-plots-near-unesco-heritage-site-lothal-dholera" element={<BlogPostPremiumUNESCOPlots />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<LegalPage {...LEGAL_PAGES["/privacy-policy"]} onNavigate={(path) => navigate(path)} />} />
        <Route path="/terms-and-conditions" element={<LegalPage {...LEGAL_PAGES["/terms-and-conditions"]} onNavigate={(path) => navigate(path)} />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer currentPath={pathname} onNavigate={(path) => navigate(path)} />
      <ScrollTopButton />
      <CallModal />
    </>
  );
}

function App() {
  return <AppInner />;
}

export default App;
