import { useRef, useEffect, useState } from "react";
import "./CategoryShowcase.css";

function useInView(threshold = 0.1) {
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

const PANELS = [
  {
    eyebrow: "Anandam Exotica — Where Luxury Breathes Nature",
    num: "01",
    title: "Residential Plots",
    subtitle: "Thoughtfully Planned",
    desc: "Anandam Exotica is a residential plotting destination in Dholera offering connectivity, comfort, and future-ready value. Wide internal roads, green surroundings, and a planned layout create a clean and organized living environment close to upcoming infrastructure.",
    btn: "Book a Site Visit",
    href: "#contact",
  },
  {
    eyebrow: "Location Advantage",
    num: "02",
    title: "Dholera SIR",
    subtitle: "India's First Smart City",
    desc: "Strategically located near the Delhi-Mumbai Industrial Corridor, Dholera SIR is India's largest greenfield smart city. Proximity to the international airport, expressway, and semiconductor zones makes it one of the highest-potential investment zones in the country.",
    btn: "Learn More",
    href: "#about",
  },
  {
    eyebrow: "Our Promise",
    num: "03",
    title: "Clear Guidance",
    subtitle: "Every Step of the Way",
    desc: "From your first enquiry to the final documentation, we provide transparent support with no hidden charges. A dedicated relationship manager accompanies every buyer through the process with clarity, honesty, and patience.",
    btn: "Talk to Our Team",
    href: "#contact",
    wa: true,
  },
];

export default function CategoryShowcase() {
  const [ref, visible] = useInView(0.1);

  const handleClick = (panel) => {
    if (panel.wa) {
      window.open("https://wa.me/916384800001", "_blank");
    } else {
      document.querySelector(panel.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Extract video ID from YouTube URL
  const videoId = "4vm0QR8v9zY";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <section className="cat-showcase" ref={ref}>
      {/* YouTube Video Background */}
      <div className="cat-showcase__video">
        <iframe
          src={embedUrl}
          title="Dholera Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.02)',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100%',
            minWidth: '177.78vh', // 16:9 aspect ratio
            border: 'none',
            pointerEvents: 'none',
          }}
        />
        {/* Cover for YouTube controls */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'transparent',
          zIndex: 5,
          pointerEvents: 'none',
        }} />
      </div>
      <div className="cat-showcase__video-overlay" />

      {PANELS.map((panel, i) => (
        <div
          key={i}
          className={`cat-panel${visible ? " is-visible" : ""}`}
          style={{ transitionDelay: `${i * 0.15}s` }}
        >
          <div className="cat-panel__overlay" />
          <div className="cat-panel__content">
            <span className="cat-panel__eyebrow">{panel.eyebrow}</span>
            <div className="cat-panel__divider" />
            <span className="cat-panel__num">{panel.num}</span>
            <h2 className="cat-panel__title">{panel.title}</h2>
            <span className="cat-panel__sub">{panel.subtitle}</span>
            <p className="cat-panel__desc">{panel.desc}</p>
            <button className="cat-panel__btn" onClick={() => handleClick(panel)}>
              {panel.btn}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
