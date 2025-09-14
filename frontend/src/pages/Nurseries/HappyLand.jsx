import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { zoomInVariants } from '../../Component/variants.js';
import Happyland from '../../../src/assets/Happyland.webp';

const HappyLand = () => {
  const { t } = useTranslation();

  const school = {
    image: Happyland,
    title: t('happy_land'),
    desc: t('happy_land_desc'),
    link: 'https://www.happylandkw.com/',
  };

  return (

    <div className='bg-yellow-50 min-h-screen flex items-center justify-center '>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        className="m-8 w-full max-w-full sm:max-w-xl lg:max-w-6xl px-4 sm:px-8 py-6 sm:py-10  bg-white border-3 border-yellow-400 rounded-lg text-center"

      >
        <img
          src={school.image}
          alt={`${school.title} - nursery in Kuwait`}
          className="w-48 h-48 object-cover rounded-lg mb-4 mx-auto"
        />
        <h3 className="text-2xl font-bold text-black mb-5">{school.title}</h3>
        <p className="text-gray-600 text-xl mb-10">{school.desc}</p>
        <a
          href={school.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3  rounded-full font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition"
        >
          {t('visit_site')}
        </a>
      </motion.div>

    </div>
  );
};

export default HappyLand;
