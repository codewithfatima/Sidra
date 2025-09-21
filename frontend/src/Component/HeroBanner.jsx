import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Pic2 from '../../src/assets/Pic22.webp';
import Pic1 from '../../src/assets/Pic2.webp';

const slides = [
  { image: Pic2, titleKey: 'hero.slide2', link: 'https://mynurserykw.com/' },
  { image: Pic1, titleKey: 'hero.slide1', link: 'https://www.happylandkw.com/' },
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

      <a href={slides[current].link} target="_blank" rel="noopener noreferrer">
        <div className="w-full flex justify-center ">
          <img
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            className="w-full max-h-[90vh]  transition-opacity duration-700 "
          />

        </div>
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
