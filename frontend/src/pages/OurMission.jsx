import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const OurMission = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.dir() === 'rtl';

  return (

    // <div className='min-h-screen bg-yellow-50 py-25 px-4 sm:px-6 lg:px-8 mt-10'>
<div className='min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-100 to-yellow-300 py-25 px-4 sm:px-6 lg:px-8 mt-10'>

      <div
        className={`max-w-5xl mx-auto flex flex-col items-center
          ${isRTL ? 'text-right' : 'text-left'}`}
      >
        {/* Text content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t('ourMission.title')}
          </h2>
          <p
            className="text-lg text-gray-700 leading-loose"
            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
          >
            {t('ourMission.paragraph1')}<br /><br />
            {t('ourMission.paragraph2')}<br /><br />
            {t('ourMission.paragraph3')}<br /><br />
            {t('ourMission.paragraph4')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;
