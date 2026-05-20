// ─── Footer.jsx — Anandam Homes ───────────────────────────────────────────────
import "./Footer.css";
import logo from "../assets/anandamhomeslogo.png"; // adjust path as needed

// ── Icons ─────────────────────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

// ── Quick links / Project links data ─────────────────────────────────────────
const QUICK_LINKS = [
  { label: "Home",       href: "#home"      },
  { label: "About Us",   href: "#about"     },
  { label: "Projects",   href: "#projects"  },
  { label: "Amenities",  href: "#amenities" },
  { label: "Gallery",    href: "#gallery"   },
  { label: "Blogs",      href: "#blogs"     },
  { label: "Contact Us", href: "#contact"   },
];

const PROJECT_LINKS = [
  { label: "100 Sq. Yd Plots", href: "#projects" },
  { label: "150 Sq. Yd Plots", href: "#projects" },
  { label: "200 Sq. Yd Plots", href: "#projects" },
  { label: "500 Sq. Yd Plots", href: "#projects" },
  { label: "GujRERA Details", href: "#about" },
  { label: "Master Layout",    href: "#gallery"  },
];

const CONTACT_ITEMS = [
  { icon: <MapPinIcon />, text: "Dholera Smart City, Ahmedabad District, Gujarat — 382120" },
  { icon: <PhoneIcon  />, text: "+91 63848 00001" },
  { icon: <MailIcon   />, text: "Anandamhomesofficial@gmail.com" },
];

// ── CTA Band ──────────────────────────────────────────────────────────────────
function CtaBand() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="cta-band">
      <div>
        <div className="cta-band__label">Limited Plots Available — Act Now!</div>
        <div className="cta-band__title">Take the First Step Towards Your Dream Investment</div>
      </div>
      <div className="cta-band__actions">
        <a href="tel:+916384800001" className="cta-band__phone">
          <PhoneIcon /> +91 63848 00001
        </a>
        <button className="cta-band__btn" onClick={scrollToContact}>
          Book Site Visit →
        </button>
      </div>
    </div>
  );
}

// ── Footer Main ───────────────────────────────────────────────────────────────
export default function Footer() {
  const scrollTo = href =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <CtaBand />

      <footer className="footer">
        <div className="footer__inner">

          {/* ── Top grid ── */}
          <div className="footer__grid">

            {/* Brand column */}
            <div className="footer__brand">
              <div className="footer__logo-wrap">
                <img src={logo} alt="Anandam Homes" className="footer__logo-img" />
                <div>
                  <div className="footer__brand-name">Anandam Homes</div>
                </div>
              </div>
              <div className="footer__brand-tag">Premium Residential Plots</div>
              <p className="footer__brand-desc">
                Your trusted partner for premium residential plot investments in
                Dholera Smart City — the future of India.
              </p>
              <div className="footer__socials">
                <button className="footer__social-btn" aria-label="Facebook"><FacebookIcon /></button>
                <button className="footer__social-btn" aria-label="Instagram"><InstagramIcon /></button>
                <button className="footer__social-btn" aria-label="YouTube"><YoutubeIcon /></button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="footer__col-title">Quick Links</div>
              <div className="footer__links">
                {QUICK_LINKS.map(({ label, href }) => (
                  <button
                    key={label}
                    className="footer__link"
                    onClick={() => scrollTo(href)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <div className="footer__col-title">Our Plots</div>
              <div className="footer__links">
                {PROJECT_LINKS.map(({ label, href }) => (
                  <button
                    key={label}
                    className="footer__link"
                    onClick={() => scrollTo(href)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="footer__col-title">Contact</div>
              {CONTACT_ITEMS.map(({ icon, text }) => (
                <div key={text} className="footer__contact-item">
                  <span className="footer__contact-icon">{icon}</span>
                  <span className="footer__contact-text">{text}</span>
                </div>
              ))}
              <a
                href="https://wa.me/916384800001"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__whatsapp"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Shimmer divider */}
          <div className="footer__divider" />

          {/* Bottom bar */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} Anandam Homes. All rights reserved.&nbsp;
              <span>| Anandamhomesofficial@gmail.com</span>
            </p>
            <div className="footer__rera">
              ✅ GujRERA Registered
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/916384800001"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__float-wa"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}

