import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { slideUpVariants, zoomInVariants } from '../../Component/variants.js';;
import MyNurserys from '../../../src/assets/Mynursery.png';

const MyNursery = () => {
  const { t } = useTranslation();


  const school = {
    image: MyNurserys,
    title: t('my_nursery'),
    desc: t('my_nursery_desc'),
    link: 'https://mynurserykw.com/',
  };



  return (
    <div className='bg-yellow-50 min-h-screen flex items-center justify-center mt-15'>
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
        className="m-5 w-full sm:max-w-xl md:max-w-2xl lg:max-w-7xl px-4 sm:px-8 py-6 sm:py-10 bg-gray-50 border-3 border-yellow-400 rounded-lg text-center"

      >
        <img
          src={school.image}
          alt={`${school.title} - nursery in Kuwait`}
          className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-cover rounded-lg mb-6 mx-auto"
        />
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-700 mb-4">{school.title}</h3>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8">{school.desc}</p>
        <a
          href={school.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition"
        >
          {t('visit_site')}
        </a>
      </motion.div>

    </div>
  );
};

export default MyNursery;
