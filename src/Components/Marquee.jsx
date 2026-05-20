import "./Marquee.css";

const ITEMS = [
  "200+ Premium Plots",
  "GujRERA Approved",
  "Dholera Smart City",
  "High ROI Investment",
  "Clear Title Property",
  "24/7 Security",
  "Wide Roads",
  "Green Landscape",
  "Smart City Infrastructure",
  "World Class Amenities",
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
