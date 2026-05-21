import "./Marquee.css";

const ITEMS = [
  "Thoughtful Development",
  "Customer-First Approach",
  "Clear Communication",
  "Future-Focused Planning",
  "Premium Plot Opportunities",
  "Modern Infrastructure Vision",
  "Trust and Transparency",
  "Guided Site Visits",
  "Refined Buyer Experience",
  "Quality-Led Growth",
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
