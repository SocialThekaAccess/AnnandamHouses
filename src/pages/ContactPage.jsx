import Contact from "../Components/Contact";
import "./PageShell.css";
import ContactUs from "../assets/ContactUsA.png";
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
  { label: "Email", value: "Anandamhomesofficial@gmail.com", copy: "Ideal for document sharing, investor questions, and detailed follow-ups." },
  { label: "Location", value: "Dholera Smart City, Ahmedabad District", copy: "Use the form below to schedule a guided discussion before your visit." },
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero page-hero--no-overlay">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage:`url(${ContactUs})`
          }}
        />
        <CallNowBtn />
        <div className="page-hero__inner">
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
                  Multiple ways to connect, one consistent luxury experience.
                </h2>
                <p className="page-copy">
                  The upper section gives the contact page presence and breathing room before the form begins. It
                  makes the route feel deliberate, premium, and fully aligned with the rest of the brand board.
                </p>
              </div>

              <div>
                <p className="page-copy">
                  Below this introduction, the original contact form remains in place so the page keeps the same
                  practical enquiry flow while gaining a much stronger visual opening.
                </p>
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
