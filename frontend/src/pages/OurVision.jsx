import React from 'react';
import { motion } from 'framer-motion';
import Vision from '../../src/assets/vision.png';
import Nusery from '../../src/assets/Nusery.png';
import { useTranslation } from 'react-i18next';
import Perp from '../../src/assets/perp.png'
import Nuser from '../../src/assets/Nuser.png'
import { slideUpVariants, zoomInVariants } from '../Component/variants';

const OurVision = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <div
        dir={direction}
        className={`min-h-screen bg-yellow-100 px-8 py-12 text-black leading-relaxed mt-16 sm:px-6 md:px-10 lg:px-16`}
      >

        {/* happy land vision */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-4xl font-bold text-center `}>
            {t('vision_title')}
          </h1>
          <span className='bg-yellow-500 w-20 h-1 rounded-full block mt-4 mb-16 mx-auto'></span>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex justify-center items-center -mt-10 px-4 sm:px-6 md:px-8 lg:px-10">
            <img
              src={Vision}
              alt="Nursery"
              className="h-auto object-cover max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </motion.div>

          <div>
            <ul className="list-disc list-inside space-y-4 text-lg text-black" dir={direction}>
              {t('vision_points', { returnObjects: true }).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.div>


        {/* mynusery */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h1 className='text-4xl font-bold text-center mt-25'>{t('my_nursery_title')}</h1>
          <span className='bg-yellow-500 w-20 h-1 rounded-full block mt-3 mx-auto'></span>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex justify-center items-center -mt-5 my-8">
            <img src={Nusery} alt="Nursery" className="h-auto object-cover max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" />
          </motion.div>

          <section className='-mt-10'>
            <h2 className='text-2xl font-bold mb-5 text-yellow-700 ml-5'>{t('training_section_title')}</h2>
            <ul className='list-disc list-inside space-y-4 text-lg' dir={direction}>
              {t('training_points', { returnObjects: true }).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </section>

          <section className='mt-10'>
            <h2 className='text-2xl font-bold mb-5 text-yellow-700 ml-5'>{t('consulting_section_title')}</h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              className="flex justify-center items-center my-8 -mt-10">
              <img src={Nuser} alt="Consulting" className="h-auto object-cover max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" />
            </motion.div>

            <ul className='list-disc list-inside space-y-4 text-lg' dir={direction}>
              {t('consulting_points', { returnObjects: true }).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </section>

          <section className='mt-10'>
            <h2 className='text-2xl font-bold mb-5 text-yellow-700 ml-5'>{t('education_section_title')}</h2>

            <h3 className='text-xl font-bold text-yellow-700 mb-3'>{t('license_title')}</h3>
            <ul className='list-disc list-inside space-y-4 text-lg' dir={direction}>
              <li>{t('license_point')}</li>
            </ul>

            <h3 className='text-xl font-bold text-yellow-700 mb-3 mt-8'>{t('preparation_title')}</h3>
            <ul className='list-disc list-inside space-y-4 text-lg' dir={direction}>
              <li>{t('preparation_point')}</li>
            </ul>
          </section>

          <section className='mt-10'>
            <h2 className='text-xl font-bold text-yellow-700 mb-3'>{t('external_relations_title')}</h2>
            <ul className='list-disc list-inside text-lg space-y-4' dir={direction}>
              {t('external_points', { returnObjects: true }).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </section>
        </motion.div>


        {/*Perp vision  */}
        <div className='mt-25'>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='text-4xl text-center font-bold mb-3'>{t('perp_title')}</motion.h2>
          <span className='bg-yellow-500 w-20 h-1 rounded-full block mt-4 mb-15 mx-auto'></span>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex justify-center items-center mt-15">
            <img
              src={Perp}
              alt="Perp Vision"
              className="h-auto object-cover max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </motion.div>

          <ul className='list-disc list-inside text-lg space-y-4 mt-10' >
            {t('perp_points', { returnObjects: true }).map((point, idx) => (

              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurVision;
