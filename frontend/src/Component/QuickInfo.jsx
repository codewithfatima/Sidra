import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Happyland from '../../src/assets/Happyland.png';
import Mynusery from '../../src/assets/Mynursery.png';

const QuickInfo = () => {
  const { t } = useTranslation();

  const infoData = [
    {
      image: Mynusery,
      title: t('my_nursery'),
      desc: t('my_nursery_desc'),
      link: '/nursery',
    },
    {
      image: Happyland,
      title: t('happy_land'),
      desc: t('happy_land_desc'),
      link: 'https://www.happylandkw.com/',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold text-black mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('our_schools')}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {infoData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#f9f9f9] shadow-lg p-6 rounded-2xl hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-48 h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#151f4b] mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              {item.link.startsWith('http') ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 font-semibold transition"
                >
                  {t('visit_site')} →
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="text-pink-500 font-semibold transition"
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
