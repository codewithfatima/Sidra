import React from 'react';
import Our1 from '../../src/assets/mission.png';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const OurMission = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen bg-yellow-50 py-20 px-4 sm:px-6 lg:px-8 mt-18'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10'>

        {/* Text content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-right"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t('ourMission.title')}
          </h2>
          <p className="text-lg text-gray-700 leading-loose">
            {t('ourMission.paragraph1')}<br /><br />
            {t('ourMission.paragraph2')}<br /><br />
            {t('ourMission.paragraph3')}<br /><br />
            {t('ourMission.paragraph4')}
          </p>
        </motion.div>

        {/* Image with beautiful zoom & fade-in effect */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='md:w-1/2'
        >
          <img
            src={Our1}
            alt="رسالة الشركة"
            className="w-full h-[600px] rounded-tr-3xl rounded-br-3xl border-4 
              border-yellow-400 object-cover shadow-lg"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default OurMission;
