import { useState, useRef, useEffect } from "react";
import "./Contact.css";

const CONTACT_EMAIL = "anandamhomesofficial@gmail.com";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const CONTACT_INFO = [
  { icon: <PhoneIcon />, label: "Call Us", value: "+91 63848 00001", href: "tel:+916384800001" },
{ icon: <MailIcon />, label: "Email Us", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: <MapPinIcon />, label: "Corporate Office", value: "Sco 67, Ground Floor, Sector 82, JLPL, Mohali", href: null },
  { icon: <MapPinIcon />, label: "Registered Office", value: "K.P. Epitome, A Block, Off. No 514, Near Lake, Makarba, Ahmedabad, Gujarat 380051", href: null },
];

export default function Contact() {
  const [leftRef, leftVisible] = useInView(0.15);
  const [rightRef, rightVisible] = useInView(0.15);

  const [form, setForm] = useState({ name: "", phone: "", email: "", plot: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New enquiry from ${form.name}`;
    const body = [
      `Full Name: ${form.name}`,
      `Mobile Number: ${form.phone}`,
      `Email Address: ${form.email || "Not provided"}`,
      `Area of Interest: ${form.plot || "Not selected"}`,
      "",
      "Message:",
      form.message || "No message provided.",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm({ name: "", phone: "", email: "", plot: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__top-line" />

      <div className="container">
        <div className="contact__header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title contact__title">
            Let Us Help You Take The Next Step
          </h2>
          <p className="contact__subtitle">
            Speak with our team for project details, documentation guidance, and a planned site visit experience.
          </p>
        </div>

        <div className="contact__grid">
          <div
            ref={leftRef}
            className={`contact__info reveal-left${leftVisible ? " is-visible" : ""}`}
          >
            <div className="contact__info-bg" />
            <div className="contact__info-overlay" />

            <div className="contact__info-content">
              {/* <div className="contact__info-eyebrow">
                <span className="contact__info-dot" />
                Enquiries Open - Premium Inventory
              </div> */}

              <h3 className="contact__info-title">
                Anandam 
                <em>Future-Ready Development</em>
              </h3>

              <p className="contact__info-desc">
                A more considered plotted offering shaped around trust, planning, and a better
                customer journey from first call to final decision.
              </p>

              <div className="contact__info-items">
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <div className="contact__info-item" key={label}>
                    <div className="contact__info-icon">{icon}</div>
                    <div>
                      <span className="contact__info-label">{label}</span>
                      {href
                        ? <a href={href} className={`contact__info-value contact__info-value--location`}>{value}</a>
                        : <span className={`contact__info-value contact__info-value--location`}>{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact__badges">
                {["Transparent Guidance", "Priority Assistance", "Site Visit Support"].map((b) => (
                  <span key={b} className="contact__badge">✓ {b}</span>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`contact__form-wrap reveal-right${rightVisible ? " is-visible" : ""}`}
          >
            <div className="contact__form-topbar" />

            <div className="contact__form-body">
              <h3 className="contact__form-title">Book a Personalized Consultation</h3>
              <p className="contact__form-sub">No obligation · project insights · guided support</p>

              {sent && (
                <div className="contact__success">
                  Your email app has been opened with a pre-filled enquiry draft.
                </div>
              )}

              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__label">Full Name *</label>
                    <input
                      className="contact__input"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__field">
                    <label className="contact__label">Mobile Number *</label>
                    <input
                      className="contact__input"
                      type="text"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label className="contact__label">Email Address</label>
                  <input
                    className="contact__input"
                    type="email"
                    name="email"
                    placeholder="your@email.com (optional)"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__field">
                  <label className="contact__label">Area of Interest</label>
                  <select
                    className="contact__select"
                    name="plot"
                    value={form.plot}
                    onChange={handleChange}
                  >
                    <option value="">Select your preference</option>
                    <option>Residential Plot Enquiry</option>
                    <option>Investment Consultation</option>
                    <option>Site Visit Planning</option>
                    <option>Documentation Support</option>
                  </select>
                </div>

                <div className="contact__field">
                  <label className="contact__label">Message</label>
                  <textarea
                    className="contact__textarea"
                    name="message"
                    placeholder="Tell us what you would like to know or plan for"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="contact__submit">
                  <SendIcon />
                  Request a Callback
                </button>

                <p className="contact__privacy">Your information stays private and is used only to assist your enquiry.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
