// import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa6';

// const ScrollToTop = () => {
//   const [visible, setVisible] = useState(false);
//   const [isRTL , setRTL] = useState(false);


//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 100) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };

//     //check if direction is rtl
//     const dir = document.documentElement.getAttribute('dir');
//     setRTL(dir === 'rtl')

//     window.addEventListener('scroll', toggleVisibility);

//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };


//   return (
//     <>
//       {visible && (
//         <div
//           onClick={scrollToTop}
//           className={`fixed bottom-5 ${isRTL ? 'left-5' : 'right-5'}  bg-yellow-500 shadow-xl rounded-full w-16 h-16 flex justify-center items-center
//            cursor-pointer transition-opacity duration-300 hover:scale-110 transition transform duration-300 hover:animate-pulse`}
//           title="Scroll to top"
//         >
//           <FaArrowUp className='text-black text-2xl' /> 
      
//         </div>
//       )}


//     </>
//   );
// };

// export default ScrollToTop;



import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 100);
    };

    const checkDir = () => {
      const dir = document.documentElement.getAttribute('dir');
      setIsRTL(dir === 'rtl');
    };

    // Initial check
    checkDir();
    handleScroll();

    // Event listeners
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {visible && (
        <div
          onClick={scrollToTop}
          title="Scroll to top"
          className={`fixed bottom-5 ${isRTL ? 'left-5' : 'right-5'} 
            bg-yellow-500 shadow-xl rounded-full w-16 h-16 flex justify-center items-center
            cursor-pointer transition-transform duration-300 hover:scale-110 hover:animate-pulse`}
        >
          <FaArrowUp className="text-black text-2xl" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
