import { useState } from "react";
import "./Footer.css";
import logo from "../assets/anandamhomeslogo.png";
import googleEarthVideo from "../assets/GoogleEarth.mp4";

const MAP_URL = "https://www.google.com/maps?q=22.48065913178268,72.33683683815303";

const HOME_PATH = "/";
const CONTACT_PATH = "/contact-us";
const PROJECTS_PATH = "/our-projects";
const PRIVACY_PATH = "/privacy-policy";
const TERMS_PATH = "/terms-and-conditions";

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-12h4v2a4 4 0 014-4zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

const FOOTER_NAV = [
    { label: "Home", href: HOME_PATH },
  { label: "About Us", href: "/about-us" },
  { label: "Our Projects", href: PROJECTS_PATH },
  { label: "Our Values", href: "/our-values" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: CONTACT_PATH },
  // { label: "Request Callback", href: CONTACT_PATH },
];

const SOCIALS = [
  { label: "LinkedIn", icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/anandam-exotica-082002410/" },
  { label: "Facebook", icon: <FacebookIcon />, href: "#" },
  { label: "Instagram", icon: <InstagramIcon />, href: "#" },
  { label: "YouTube", icon: <YoutubeIcon />, href: "#" },
];

function CtaBand({ onNavigate }) {
  return (
    <div className="cta-band">
      <div>
        <div className="cta-band__label">Thoughtful guidance starts here</div>
        <div className="cta-band__title">Speak with our team and explore a plotted opportunity with more clarity.</div>
      </div>
      <div className="cta-band__actions">
        <a href="tel:+916384800001" className="cta-band__phone">
          <PhoneIcon /> +91 63848 00001
        </a>
        <button className="cta-band__btn" onClick={() => onNavigate?.(CONTACT_PATH)}>
          Plan Your Visit
        </button>
      </div>
    </div>
  );
}

export default function Footer({ onNavigate }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleNavigate = (href) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path === HOME_PATH || path === "") {
        onNavigate?.(HOME_PATH);
        requestAnimationFrame(() => {
          document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
        });
        return;
      }
    }
    onNavigate?.(href);
  };

  return (
    <>
      <CtaBand onNavigate={handleNavigate} />

      <footer className="footer-shell">
        <div className="footer-disclaimer">
          <div className="footer-disclaimer__inner">
            <p className="footer-disclaimer__text">
              <strong>Disclaimer</strong> - Anandam Homes, its logo, and all related project names are proprietary.
              Information on this website is for general guidance only and does not constitute an offer or legal advice.
              Plot availability, pricing, and approvals are subject to change. Please verify all details during your site visit.
            </p>
            <div className="footer-disclaimer__badge">Buyer Guidance Focused</div>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-nav__inner">
            {FOOTER_NAV.map(({ label, href }) => (
              <button
                key={label}
                type="button"
                className="footer-nav__link"
                onClick={() => handleNavigate(href)}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        <div className="footer-main">
          <div className="footer-main__inner">
            <div className="footer-main__grid">
              <div className="footer-main__brand">
                <button
                  onClick={() => handleNavigate("/")}
                  className="footer-main__logo-btn"
                  aria-label="Go to Home"
                >
                  <img src={logo} alt="Anandam Homes" className="footer-main__logo" />
                </button>
                {/* <div className="footer-main__brand-name">Anandam Homes</div> */}
                <div className="footer-main__brand-tag">Thoughtfully planned spaces for the next chapter of living</div>
              </div>

              <div className="footer-main__col">
                <div className="footer-main__label">Contact us:</div>
                  <a href="mailto:anandamhomesofficial@gmail.com" className="footer-main__value">
                    anandamhomesofficial@gmail.com
                </a>
                <a href="tel:+916384800001" className="footer-main__value">
                  +91 63848 00001
                </a>
              </div>

              <div className="footer-main__col">
                <div className="footer-main__label">Anandam Homes</div>
                <div className="footer-main__sub">Corporate Office : Sco 67, Ground Floor, Sector 82, JLPL,Mohali</div>
                {/* <p className="footer-main__address">
                    Lothal Smart City,<br />
                  Ahmedabad District,<br />
                  Gujarat - 382120, India
                </p> */}
                <button
                  onClick={() => setVideoOpen(true)}
                  className="footer-main__map-link"
                >
                  📍 View Location
                </button>
              </div>

              <div className="footer-main__col footer-main__col--social">
                <div className="footer-main__label">Follow us on:</div>
                <div className="footer-main__socials">
                  {SOCIALS.map(({ label, icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="footer-main__social"
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-main__meta">
              <p className="footer-main__crafted">
                &copy; {new Date().getFullYear()} Anandam Homes. All rights reserved.
              </p>
              <div className="footer-main__legal">
                <button type="button" className="footer-main__privacy" onClick={() => handleNavigate(PRIVACY_PATH)}>
                  Privacy Policy
                </button>
                <button type="button" className="footer-main__privacy" onClick={() => handleNavigate(TERMS_PATH)}>
                  Terms and Conditions
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/916384800001"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__float-wa"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {/* ── Location Video Modal ── */}
      {videoOpen && (
        <div className="loc-modal__backdrop" onClick={() => setVideoOpen(false)}>
          <div className="loc-modal__box" onClick={(e) => e.stopPropagation()}>
            <div className="loc-modal__header">
              <span className="loc-modal__title">📍 Anandam Homes — Location View</span>
              <button className="loc-modal__close" onClick={() => setVideoOpen(false)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <video
              className="loc-modal__video"
              src={googleEarthVideo}
              autoPlay
              controls
              playsInline
            />
            <div className="loc-modal__footer">
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="loc-modal__maps-link">
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
