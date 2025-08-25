import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Pic1 from '../../src/assets/Pic1.gif';
import Pic2 from '../../src/assets/Pic22.gif';

const slides = [
  { image: Pic1, titleKey: 'hero.slide1', link: 'https://www.happylandkw.com/' },
  { image: Pic2, titleKey: 'hero.slide2', link:'https://mynurserykw.com/' },
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

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="w-full relative overflow-hidden mt-17">
      {/* Responsive Image */}
      <a href={slides[current].link} target='_blank' rel="noopener noreferrer">
        <img
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          className="cursor-pointer w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] object-cover
         transition-opacity duration-700"
        />

      </a>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 transition-all duration-300 border border-yellow-400 cursor-pointer rounded-full ${current === index ? 'bg-white' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
