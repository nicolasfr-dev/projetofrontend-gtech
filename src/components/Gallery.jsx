import { useState, useEffect, useRef } from "react";
import ArrowRight from "../assets/arrow-right.svg";
import ArrowLeft from "../assets/arrow-left.svg";

const Gallery = ({ images = [], interval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(nextImage, interval);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, isHovered, interval]);

  if (!images.length) return null;

  return (
    <div
      className="relative w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover block"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevImage}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/70 hover:bg-white hover:scale-105 rounded-full"

      >
        <img src={ArrowLeft} alt="Anterior" className="w-4 h-4 sm:w-6 sm:h-6"/>
      </button>
      <button
        onClick={nextImage}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/70 hover:bg-white hover:scale-105 rounded-full"
      >
        <img src={ArrowRight} alt="Próximo" className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
            current === index ? "bg-primary scale-110" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;