import React from "react";
import "./Footer.css";

/* ---- Icons ---- */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

/* Social icons */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

/* Logo mark (same as Navbar) */
const LogoMark = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="8,28 30,10 52,28" stroke="#c9a84c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="14" y="28" width="32" height="22" rx="1" stroke="#c9a84c" strokeWidth="2" fill="none"/>
    <rect x="24" y="36" width="12" height="14" rx="1" stroke="#c9a84c" strokeWidth="1.6" fill="none"/>
    <ellipse cx="44" cy="20" rx="4" ry="7" stroke="#c9a84c" strokeWidth="1.4" fill="none" transform="rotate(-20 44 20)"/>
    <ellipse cx="50" cy="18" rx="3.5" ry="6.5" stroke="#c9a84c" strokeWidth="1.4" fill="none" transform="rotate(10 50 18)"/>
    <ellipse cx="47" cy="14" rx="3" ry="6" stroke="#c9a84c" strokeWidth="1.4" fill="none" transform="rotate(-5 47 14)"/>
    <path d="M44 27 Q44 32 40 36" stroke="#c9a84c" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    <path d="M14 50 Q10 46 12 42" stroke="#c9a84c" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <path d="M46 50 Q50 46 48 42" stroke="#c9a84c" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer" id="contact">

      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="footer-cta-text">
          <p>Don't Miss The Opportunity</p>
          <h3>Book Your Site Visit Today!</h3>
          <p style={{ marginTop: "8px", fontSize: "13px", letterSpacing: "0.04em", textTransform: "none", color: "rgba(154,163,184,0.8)" }}>
            Take the first step towards your dream investment.
          </p>
        </div>
        <div className="footer-cta-right">
          <div className="footer-cta-contact">
            <a href="tel:+919876543210">
              <PhoneIcon /> +91 98765 43210
            </a>
            <a href="mailto:info@anandamhomes.com">
              <MailIcon /> info@anandamhomes.com
            </a>
            <a href="https://www.anandamhomes.com">
              <GlobeIcon /> www.anandamhomes.com
            </a>
          </div>
          <button className="footer-cta-btn">
            Book Site Visit <ArrowIcon />
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <LogoMark />
            </div>
            <div className="footer-logo-text">
              <span className="brand-name">Anandam</span>
              <span className="brand-sub">Exotica</span>
            </div>
          </div>
          <p className="footer-tagline">
            Premium residential plots in Dholera Smart City — India's first and biggest greenfield smart city.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#founder">Meet the Founder</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <PhoneIcon />
            <span>+91 98765 43210</span>
          </div>
          <div className="footer-contact-item">
            <MailIcon />
            <span>info@anandamhomes.com</span>
          </div>
          <div className="footer-contact-item">
            <GlobeIcon />
            <span>www.anandamhomes.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2024 Anandam Homes. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">RERA</a>
        </div>
      </div>

    </footer>
  );
}
