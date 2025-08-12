import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) { 
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {visible && (
        <div
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 bg-black shadow-xl rounded-full w-16 h-16 flex justify-center items-center
           cursor-pointer transition-opacity duration-300'
          title="Scroll to top"
        >
          <FaArrowUp className='text-white text-3xl' />
        </div>
      )}


    </>
  );
};

export default ScrollToTop;
