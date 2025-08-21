import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { zoomInVariants } from '../../Component/variants.js';
import Happyland from '../../../src/assets/Happyland.png';

const HappyLand = () => {
  const { t } = useTranslation();

  const school = {
    image: Happyland,
    title: t('happy_land'),
    desc: t('happy_land_desc'),
    link: 'https://www.happylandkw.com/',
  };

  return (
    <div className="bg-yellow-200  min-h-screen flex items-center justify-center ">
  

      <motion.div
      initial = "visible"
        // initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
      className=" flex flex-col items-center text-center border-3 border-yellow-500 rounded-lg p-6 
      shadow-md cursor-pointer bg-white m-5"

      >
        <img
          src={school.image}
          alt={`${school.title} - nursery in Kuwait`}
          className="w-48 h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-bold text-black mb-5">{school.title}</h3>
        <p className="text-gray-600 text-xl mb-6">{school.desc}</p>
        <a
          href={school.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition"
        >
          {t('visit_site')}
        </a>
      </motion.div>
    </div>
  );
};

export default HappyLand;
