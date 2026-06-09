import Contact from "../Components/Contact";
import "./PageShell.css";
import ContactUs from "../assets/ContactUsA.png";
import logoImg from "../assets/anandamhomeslogo.png";
import { useCallModal } from "../context/CallModalContext";

const CallNowBtn = () => {
  const { setOpen } = useCallModal();
  return (
    <button
      onClick={() => setOpen(true)}
      className="page-hero__call-btn"
      aria-label="Call Now"
      type="button"
    >
      <span className="page-hero__call-btn__icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
      </span>
      <span className="page-hero__call-btn__text">Call Now</span>
    </button>
  );
};

const CHANNELS = [
  { label: "Phone", value: "+91 63848 00001", copy: "Best for immediate callback requests and site-visit confirmations." },
  { label: "Email", value: "anandamhomesofficial@gmail.com", copy: "Ideal for document sharing, investor questions, and detailed follow-ups." },
  { label: "Corporate Office", value: "Sco 67, Ground Floor, Sector 82, JLPL, Mohali", copy: "Our primary office for sales, documentation, and buyer meetings." },
  { label: "Registered Office", value: "K.P. Epitome, A Block, Off. No 514, Near Lake, Makarba, Ahmedabad, Gujarat 380051", copy: "Registered address for all official and legal correspondence." },
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero page-hero--no-overlay">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage:`url(${ContactUs})`,
            "--img-ratio": "57%",
          }}
        >
          <img src={ContactUs} alt="" className="page-hero__mobile-img" draggable="false" />
        </div>
        <div className="page-hero__logo">
          <img src={logoImg} alt="Anandam Homes" />
        </div>
        <CallNowBtn />
        <div className="page-hero__inner page-hero__inner--hidden">
          <div className="page-hero__copy">
            {/* <div className="page-hero__eyebrow">Contact</div> */}
              {/* <h1 className="page-hero__title">
                Start the conversation with a <span>premium first touch</span>.
              </h1> */}
            {/* <p className="page-hero__description">
              This page is designed to feel polished from the very first scroll, then hand off cleanly into the
              existing contact section and enquiry form so visitors can move from interest to action without friction.
            </p> */}
          </div>

          {/* <div className="page-hero__panel"> */}
            {/* <div className="page-hero__panel-label">Response Promise</div>
            <div className="page-hero__panel-value">Luxury presentation, practical support, and a faster route to decision-making.</div> */}
            {/* <div className="page-hero__panel-copy">
              The structure leads with confidence, then brings users directly into the existing callback and site-visit workflow.
            </div> */}
          {/* </div> */}
        </div>
      </section>

      <main className="page-main">
        <section className="page-section">
          <div className="page-card">
            <div className="page-intro-grid">
              <div>
                <div className="section-label">Reach Us</div>
                <h2 className="page-heading">
                  Get in touch with our team today.
                </h2>
                <p className="page-copy">
                  Whether you have questions about Dholera plots, want to schedule a site visit, or need guidance on documentation and investment — our team is available to help you at every step.
                </p>
              </div>

              <div>
                <p className="page-copy">
                  Every enquiry is handled personally by a dedicated relationship manager. Reach us by phone, WhatsApp, or email and we will respond promptly with the right guidance for your investment journey.
                </p>
                <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8975A", minWidth: "120px" }}>Call / WhatsApp</span>
                    <a href="tel:+916384800001" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px", fontWeight: 600, color: "#1b4332", textDecoration: "none" }}>+91 63848 00001</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8975A", minWidth: "120px" }}>Email</span>
                    <a href="mailto:anandamhomesofficial@gmail.com" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "13px", fontWeight: 500, color: "#1b4332", textDecoration: "none" }}>anandamhomesofficial@gmail.com</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8975A", minWidth: "120px", paddingTop: "2px" }}>Corporate</span>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "13px", color: "#3C3D3D", lineHeight: 1.6 }}>Sco 67, Ground Floor, Sector 82, JLPL, Mohali</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8975A", minWidth: "120px", paddingTop: "2px" }}>Registered</span>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "13px", color: "#3C3D3D", lineHeight: 1.6 }}>K.P. Epitome, A Block, Off. No 514, Near Lake, Makarba, Ahmedabad, Gujarat 380051</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-contact-grid">
              {CHANNELS.map((channel) => (
                <article key={channel.label} className="page-contact-card">
                  <div className="page-contact-card__label">{channel.label}</div>
                  <div className="page-contact-card__value">{channel.value}</div>
                  <div className="page-contact-card__copy">{channel.copy}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section page-section--spaced">
          <Contact />
        </section>
      </main>
    </div>
  );
}
