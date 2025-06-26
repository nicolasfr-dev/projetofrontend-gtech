import { useState, useRef, useEffect } from "react";
import ArrowRight from "../assets/arrow-right.svg";
import ArrowLeft from "../assets/arrow-left.svg";

const ProductGallery = ({ images = [], radius = "rounded-md", showThumbs = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);
  const interval = 5000;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(nextImage, interval);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isHovered]);

  if (!images.length) return null;

  return (
    <div className="w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`relative aspect-square bg-secondary overflow-hidden ${radius}`}>
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
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
                alt={`Imagem ${index + 1}`}
                className={`w-full h-full object-cover ${radius}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 pr-2 bg-white/70 hover:bg-white hover:scale-105 rounded-full"
        >
          <img src={ArrowLeft} alt="Anterior" className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 pr-2 bg-white/70 hover:bg-white hover:scale-105 rounded-full"
        >
          <img src={ArrowRight} alt="Próximo" className="w-6 h-6" />
        </button>
      </div>


      {showThumbs && (
        <div className="flex justify-between mt-4 overflow-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Miniatura ${index + 1}`}
              onClick={() => goToImage(index)}
              className={`w-30 h-20 object-cover cursor-pointer border-2 bg-white ${
                index === currentIndex ? "border-primary" : "border-transparent"
              } ${radius}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;