import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { slideUpVariants, zoomInVariants } from './variants'

import Happyland from '../../src/assets/Happyland.png';
import Mynusery from '../../src/assets/Mynursery.png';

const QuickInfo = () => {
  const { t } = useTranslation();

  const infoData = [
    {
      image: Mynusery,
      title: t('my_nursery'),
      desc: t('my_nursery_desc'),
      link: 'https://mynurserykw.com/',
    },
    {
      image: Happyland,
      title: t('happy_land'),
      desc: t('happy_land_desc'),
      link: 'https://www.happylandkw.com/',
    },
  ];

  return (
    <section className=" py-16 px-6 md:px-20">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-center text-3xl md:text-4xl font-bold font-almarai text-black mb-12 "
      >
        {t('our_schools')}
        <span className='block w-20 h-1 bg-yellow-500 rounded-lg mx-auto mt-3'></span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {infoData.map((item, index) => (

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            className=" px-4 py-6 rounded-lg shadow-md cursor-pointer border border-yellow-400"
          >


            <div className="flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-48 h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-black mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4 tracking-wider">{item.desc}</p>
              {item.link.startsWith('http') ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold transition bg-yellow-500 px-5 py-2 rounded-full "
                >
                  {t('visit_site')}  
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="text-yellow-400 font-bold transition bg-black rounded-full px-5 py-2 "
                >
                  {t('visit_site')} →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuickInfo;
