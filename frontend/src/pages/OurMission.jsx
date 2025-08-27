import React from 'react';
import Our1 from '../../src/assets/mission.png';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const OurMission = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.dir() === 'rtl';

  return (
    <div className='min-h-screen bg-yellow-50 py-25 px-4 sm:px-6 lg:px-8 mt-10'>
      <div 
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10
          ${isRTL ? 'md:flex-row-reverse' : ''}`}
      >

        {/* Text content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`md:w-1/2 ${isRTL ? 'text-right' : 'text-left'}`} 
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t('ourMission.title')}
          </h2>
          <p className="text-lg text-gray-700 leading-loose" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
            {t('ourMission.paragraph1')}<br /><br />
            {t('ourMission.paragraph2')}<br /><br />
            {t('ourMission.paragraph3')}<br /><br />
            {t('ourMission.paragraph4')}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='md:w-1/2'
        >
          <img
            src={Our1}
            alt={t('ourMission.imageAlt') || "Company Mission"}
            className={`w-[100] h-[600px] border-4 border-yellow-400 object-cover shadow-lg
              rounded-tr-3xl rounded-br-3xl
              ${isRTL ? 'rounded-tr-none rounded-tl-3xl rounded-bl-3xl rounded-br-none' : ''}`} 
          />
        </motion.div>

      </div>
    </div>
  );
};

export default OurMission;
