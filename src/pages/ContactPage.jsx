import Contact from "../Components/Contact";
import "./PageShell.css";

const CHANNELS = [
  { label: "Phone", value: "+91 63848 00001", copy: "Best for immediate callback requests and site-visit confirmations." },
  { label: "Email", value: "Anandamhomesofficial@gmail.com", copy: "Ideal for document sharing, investor questions, and detailed follow-ups." },
  { label: "Location", value: "Dholera Smart City, Ahmedabad District", copy: "Use the form below to schedule a guided discussion before your visit." },
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div
          className="page-hero__backdrop"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80)",
          }}
        />

        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <div className="page-hero__eyebrow">Contact</div>
            <h1 className="page-hero__title">
              Start the conversation with a <span>premium first touch</span>.
            </h1>
            <p className="page-hero__description">
              This page is designed to feel polished from the very first scroll, then hand off cleanly into the
              existing contact section and enquiry form so visitors can move from interest to action without friction.
            </p>
          </div>

          <div className="page-hero__panel">
            <div className="page-hero__panel-label">Response Promise</div>
            <div className="page-hero__panel-value">Luxury presentation, practical support, and a faster route to decision-making.</div>
            <div className="page-hero__panel-copy">
              The structure leads with confidence, then brings users directly into the existing callback and site-visit workflow.
            </div>
          </div>
        </div>
      </section>

      <main className="page-main">
        <section className="page-section">
          <div className="page-card">
            <div className="page-intro-grid">
              <div>
                <div className="section-label">Reach Us</div>
                <h2 className="page-heading">
                  Multiple ways to connect, one <span>consistent luxury experience</span>.
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

            <div className="page-contact-grid" style={{ padding: "0 44px 44px" }}>
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
