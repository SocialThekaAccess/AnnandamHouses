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

                  {/* Call / WhatsApp */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                      <a href="tel:+916384800001" aria-label="Call +91 63848 00001" title="Call: +91 63848 00001"
                        style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", borderRadius:"50%", background:"#f0f7f4", border:"1px solid #c8e0d5", color:"#1b4332", textDecoration:"none", transition:"background 0.2s, color 0.2s" }}
                        onMouseEnter={e=>{e.currentTarget.style.background="#1b4332";e.currentTarget.style.color="#fff";}} onMouseLeave={e=>{e.currentTarget.style.background="#f0f7f4";e.currentTarget.style.color="#1b4332";}}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.8 19.79 19.79 0 012.06 4.16 2 2 0 014.05 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                      </a>
                      <a href="https://wa.me/916384800001" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +91 63848 00001" title="WhatsApp: +91 63848 00001"
                        style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", borderRadius:"50%", background:"#f0f7f4", border:"1px solid #c8e0d5", color:"#1b4332", textDecoration:"none", transition:"background 0.2s, color 0.2s" }}
                        onMouseEnter={e=>{e.currentTarget.style.background="#25D366";e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="#25D366";}} onMouseLeave={e=>{e.currentTarget.style.background="#f0f7f4";e.currentTarget.style.color="#1b4332";e.currentTarget.style.borderColor="#c8e0d5";}}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </a>
                    </div>
                    <a href="tel:+916384800001" style={{ fontFamily:"'Poppins',sans-serif", fontSize:"14px", fontWeight:600, color:"#1b4332", textDecoration:"none" }}>+91 63848 00001</a>
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <a href="mailto:anandamhomesofficial@gmail.com" aria-label="Email us" title="anandamhomesofficial@gmail.com"
                      style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", borderRadius:"50%", background:"#f0f7f4", border:"1px solid #c8e0d5", color:"#1b4332", textDecoration:"none", flexShrink:0, transition:"background 0.2s, color 0.2s" }}
                      onMouseEnter={e=>{e.currentTarget.style.background="#B8975A";e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="#B8975A";}} onMouseLeave={e=>{e.currentTarget.style.background="#f0f7f4";e.currentTarget.style.color="#1b4332";e.currentTarget.style.borderColor="#c8e0d5";}}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </a>
                    <a href="mailto:anandamhomesofficial@gmail.com" style={{ fontFamily:"'Poppins',sans-serif", fontSize:"13px", fontWeight:500, color:"#1b4332", textDecoration:"none" }}>anandamhomesofficial@gmail.com</a>
                  </div>

                  {/* Corporate */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <a href="https://maps.google.com/?q=Sco+67+Ground+Floor+Sector+82+JLPL+Mohali" target="_blank" rel="noopener noreferrer" aria-label="Corporate Office location" title="Corporate Office"
                      style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", borderRadius:"50%", background:"#f0f7f4", border:"1px solid #c8e0d5", color:"#1b4332", textDecoration:"none", flexShrink:0, marginTop:"1px", transition:"background 0.2s, color 0.2s" }}
                      onMouseEnter={e=>{e.currentTarget.style.background="#1b4332";e.currentTarget.style.color="#fff";}} onMouseLeave={e=>{e.currentTarget.style.background="#f0f7f4";e.currentTarget.style.color="#1b4332";}}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                    </a>
                    <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:"13px", color:"#3C3D3D", lineHeight:1.6 }}>Sco 67, Ground Floor, Sector 82, JLPL, Mohali</span>
                  </div>

                  {/* Registered */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <a href="https://maps.google.com/?q=K.P.+Epitome+A+Block+Off+No+514+Near+Lake+Makarba+Ahmedabad+Gujarat+380051" target="_blank" rel="noopener noreferrer" aria-label="Registered Office location" title="Registered Office"
                      style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", borderRadius:"50%", background:"#f0f7f4", border:"1px solid #c8e0d5", color:"#1b4332", textDecoration:"none", flexShrink:0, marginTop:"1px", transition:"background 0.2s, color 0.2s" }}
                      onMouseEnter={e=>{e.currentTarget.style.background="#1b4332";e.currentTarget.style.color="#fff";}} onMouseLeave={e=>{e.currentTarget.style.background="#f0f7f4";e.currentTarget.style.color="#1b4332";}}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </a>
                    <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:"13px", color:"#3C3D3D", lineHeight:1.6 }}>K.P. Epitome, A Block, Off. No 514, Near Lake, Makarba, Ahmedabad, Gujarat 380051</span>
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
