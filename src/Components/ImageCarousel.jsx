import "./ImageCarousel.css";
import Slider1 from "../assets/Slider1.png";
import Slider2 from "../assets/Slider2.png";
import Slider3 from "../assets/Slider3.png";
import Slider4 from "../assets/Slider4.png";
import Slider5 from "../assets/Slider5.png";
import Slider6 from "../assets/Slider6.png";
import Slider7 from "../assets/Slider7.png";

const IMAGES = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7];

export default function ImageCarousel() {
  // Duplicate for seamless infinite loop
  const tiles = [...IMAGES, ...IMAGES];

  return (
    <section className="img-ticker">
      <div className="img-ticker__header">
        <span className="img-ticker__eyebrow">National Maritime Heritage Complex</span>
        <h2 className="img-ticker__heading">World's Biggest Maritime Museum</h2>
      </div>
      <div className="img-ticker__track">
        {tiles.map((src, i) => (
          <div className="img-ticker__card" key={i}>
            <img src={src} alt={`Anandam ${(i % IMAGES.length) + 1}`} draggable="false" />
          </div>
        ))}
      </div>
    </section>
  );
}
