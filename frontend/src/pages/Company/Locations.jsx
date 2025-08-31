import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { slideUpVariants, zoomInVariants } from '../../Component/variants';

const Locations = () => {

   const { t, i18n } = useTranslation();
  
    const isRTL = i18n.dir() === 'rtl';
  

  return (
    <div className="bg-gray-100">
      <motion.h1
      initial = 'hidden'
      whileInView = 'visible'
      variants = {slideUpVariants}
      className="font-almarai font-bold text-3xl text-center pt-10">{t('location')}
      <span className="bg-yellow-500 h-1 w-15 mt-4 rounded-full mb-8 mx-auto block"></span>
      </motion.h1>

      <div className="flex justify-center px-4 pb-10 pt-5">
        <motion.div 
        initial='hidden'
        whileInView= 'visible'
        variants={zoomInVariants}
        className="w-full max-w-7xl aspect-[21/9] rounded-md overflow-hidden">

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3477.02801282945!2d47.97283468490048!3d29.369468982132922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIyJzEwLjEiTiA0N8KwNTgnMTQuMyJF!5e0!3m2!1sar!2skw!4v1756645101422!5m2!1sar!2skw"
   className="w-full h-full border-0"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.0161597035453!2d47.96840487498442!3d29.36981605021983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf858e1fe13947%3A0x6c1b720c229e4612!2sSanam%201%20Tower!5e0!3m2!1sen!2skw!4v1756633364206!5m2!1sen!2skw"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Locations;
