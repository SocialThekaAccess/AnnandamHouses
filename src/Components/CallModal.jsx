import { useEffect, useState } from "react";
import { useCallModal } from "../context/CallModalContext";
import "./CallModal.css";

/* ── Phone SVG ── */
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

/* ── WhatsApp SVG ── */
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ── Arrow SVG ── */
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function CallModal() {
  const { open, setOpen } = useCallModal();
  const [form, setForm] = useState({ name: "", phone: "", enquiry: "" });
  const [submitted, setSubmitted] = useState(false);

  /* ESC key to close */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  /* Lock body scroll when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      /* Reset form state when modal closes */
      setTimeout(() => {
        setForm({ name: "", phone: "", enquiry: "" });
        setSubmitted(false);
      }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* In production, wire this to your backend / CRM */
    setSubmitted(true);
    setTimeout(() => setOpen(false), 2200);
  };

  return (
    <div
      className="call-modal__backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Contact Anandam Homes"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="call-modal__box">

        {/* ── Close button ── */}
        <button
          className="call-modal__close"
          onClick={() => setOpen(false)}
          aria-label="Close modal"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* ══════════════════════════════
            LEFT PANEL
        ══════════════════════════════ */}
        <div className="call-modal__left">

          {/* Gold phone icon */}
          <div className="call-modal__phone-icon">
            <PhoneIcon />
          </div>

          {/* Heading */}
          <h2 className="call-modal__left-heading">Ready to Connect?</h2>

          {/* Subtext */}
          <p className="call-modal__left-sub">
            Our team is available to guide you through your investment journey
          </p>

          {/* Big phone number */}
          <a
            href="tel:+916384800001"
            className="call-modal__phone-number"
            aria-label="Call +91 63848 00001"
          >
            +91 63848 00001
          </a>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/916384800001"
            target="_blank"
            rel="noopener noreferrer"
            className="call-modal__whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>

          {/* Divider */}
          <div className="call-modal__divider">Or request a callback</div>

        </div>

        {/* ══════════════════════════════
            RIGHT PANEL
        ══════════════════════════════ */}
        <div className="call-modal__right">
          <div className="call-modal__right-topbar" />
          <div className="call-modal__right-body">

            <h3 className="call-modal__right-heading">Request a Callback</h3>
            <p className="call-modal__right-sub">We'll reach out within a few hours</p>

            {submitted && (
              <div className="call-modal__success" role="status">
                ✓ Thank you! We'll call you back shortly.
              </div>
            )}

            <form className="call-modal__form" onSubmit={handleSubmit} noValidate>

              <div className="call-modal__field">
                <label className="call-modal__label" htmlFor="cm-name">Your Name</label>
                <input
                  id="cm-name"
                  name="name"
                  type="text"
                  className="call-modal__input"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="call-modal__field">
                <label className="call-modal__label" htmlFor="cm-phone">Phone Number</label>
                <input
                  id="cm-phone"
                  name="phone"
                  type="tel"
                  className="call-modal__input"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </div>

              <div className="call-modal__field">
                <label className="call-modal__label" htmlFor="cm-enquiry">I'm Interested In</label>
                <select
                  id="cm-enquiry"
                  name="enquiry"
                  className="call-modal__select"
                  value={form.enquiry}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select an option</option>
                  <option value="residential-plot">Residential Plot Enquiry</option>
                  <option value="investment-query">Investment Counsultation</option>
                  <option value="site-visit">Site Visit Planning</option>
                  <option value="general-enquiry">Documentation Support</option>
                </select>
              </div>

              <button
                type="submit"
                className="call-modal__submit"
                disabled={submitted}
              >
                Request Callback
                <ArrowIcon />
              </button>

            </form>

            <p className="call-modal__privacy">
              Your information is safe with us. We never share your details.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
