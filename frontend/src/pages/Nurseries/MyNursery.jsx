import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { slideUpVariants, zoomInVariants } from '../../Component/variants.js';;
import Mynusery from '../../../src/assets/Mynursery.png';

const MyNursery = () => {
  const { t } = useTranslation();

  const schools = [
    {
      image: Mynusery,
      title: t('my_nursery'),
      desc: t('my_nursery_desc'),
      link: 'https://mynurserykw.com/',
    },
  ];



  return (
    <div className="bg-white min-h-screen">

      {/* 🧩 School Cards */}
      <section className="py-16 px-6 md:px-20  mx-auto bg-yellow-200 ">
        <div className="grid grid-cols-1 gap-10 mt-5 py-20">
          {schools.map((school, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className=" flex flex-col items-center text-center border-3 border-yellow-500 rounded-lg p-6
               shadow-md cursor-pointer bg-white"
            >
              <img
                src={school.image}
                alt={school.title}
                className="w-48 h-48 object-cover rounded-lg mb-4 mt-6"
              />
              <h3 className="text-2xl font-bold text-black mb-5 mt-5">{school.title}</h3>
              <p className="text-gray-600 text-xl mb-7">{school.desc}</p>
              <a
                href={school.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 mb-8 rounded-full font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition"
              >
                {t('visit_site')}
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyNursery;
