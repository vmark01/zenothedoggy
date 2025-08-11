import { useState, useCallback } from "react";
import "./GalleryCarousel.css";

const images: string[] = [
  "/photos/bw1.png",
  "/photos/bw2.png",
  "/photos/bw3.png",
  "/photos/bw4.png",
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = useCallback((): void => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  const next = useCallback((): void => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToSlide = useCallback((index: number): void => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        <button
          onClick={prev}
          className="nav-button left"
          aria-label="Előző kép"
        >
          ❮
        </button>

        <img
          src={images[currentIndex]}
          alt={`Galéria kép ${currentIndex + 1} / ${images.length}`}
          className="carousel-image"
        />

        <button
          onClick={next}
          className="nav-button right"
          aria-label="Következő kép"
        >
          ❯
        </button>
      </div>

      {/* Indikátor pontok */}
      <div className="indicators">
        {images.map((_, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Ugrás a ${index + 1}. képre`}
          />
        ))}
      </div>

      {/* Képszámláló */}
      <div className="counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}