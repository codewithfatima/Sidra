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
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <motion.div
        initial="visible"
        whileInView="visible"
        variants={zoomInVariants}
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        className="w-full max-w-full sm:max-w-xl lg:max-w-6xl px-4 sm:px-8 py-6 sm:py-10 bg-white border-3 border-yellow-400 rounded-lg text-center"

      >
        <img
          src={school.image}
          alt={`${school.title} - nursery in Kuwait`}
          className="w-48 h-48 object-cover rounded-lg mb-4 mx-auto"
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

export default MyNursery;
