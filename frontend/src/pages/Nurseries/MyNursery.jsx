import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MyNusery from '../../../src/assets/MyNusery.webp';

// Animation variants
const cardVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  hover: {
    scale: 1.03,
    rotateY: 8,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    transition: { type: 'spring', stiffness: 250, damping: 20 },
  },
};

const MyNursery = () => {
  const { t } = useTranslation();

  const school = {
    image: MyNusery,
    title: t('my_nursery'),
    desc: t('my_nursery_desc'),
    link: 'https://mynurserykw.com/',
  };

  return (
    <div className="bg-yellow-50 min-h-screen flex items-center justify-center py-16 px-4">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="mt-15 w-full max-w-6xl bg-white border-2 border-yellow-400 rounded-xl shadow-lg text-center p-8 sm:p-12"
      >
        <img
          src={school.image}
          alt={`${school.title} - nursery in Kuwait`}
          className="w-32 sm:w-40 md:w-48 lg:w-56 mx-auto mb-6 rounded-lg object-cover"
        />

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-700 mb-4">
          {school.title}
        </h3>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-7xl mx-auto mb-8">
          {school.desc}
        </p>

        <a
          href={school.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 transition-colors duration-300 text-black font-semibold px-6
           py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600"
        >
          {t('visit_site')}
        </a>
      </motion.div>
    </div>
  );
};

export default MyNursery;
