import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Pic1 from '../../src/assets/pic1.png';
import Pic2 from '../../src/assets/pic2.png';
import Pic3 from '../../src/assets/pic3.png';
import Pic4 from '../../src/assets/pic4.png';

const slides = [
  { image: Pic1, titleKey: 'hero.slide1' },
  { image: Pic2, titleKey: 'hero.slide2' },
  { image: Pic3, titleKey: 'hero.slide3' },
  { image: Pic4, titleKey: 'hero.slide4' },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">

      {/* Image */}
      <img
        src={slides[current].image}
        alt={`Slide ${current + 1}`}
        className="w-full h-full mt-20 object-cover transition-opacity duration-700"
      />

      {/* Overlay title */}
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center ">
        <h2 className="text-yellow-500 text-2xl md:text-4xl font-almarai font-bold text-center px-4 max-w-2xl">
          {t(slides[current].titleKey)}
        </h2>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 transition-all duration-300 border-1 border-yellow-400 cursor-pointer rounded-full  ${current === index ? 'bg-white' : 'bg-gray-400'
              }`}

          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
