import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { IoBook } from "react-icons/io5";
import { GiBrainstorm } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import OurMissions from '../../src/assets/OurMission.png';
import { zoomInVariants } from '../Component/variants';

const textVariants = (delay = 0, direction = 'left') => ({
  hidden: {
    x: direction === 'left' ? -50 : 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const imageVariants = {
  hidden: {
    x: 100,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const OurMission = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const direction = isRTL ? 'right' : 'left';

  return (
    <section className="min-h-screen px-6 py-24 bg-yellow-50 overflow-hidden">
       <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3 mt-5"
            >
              {t("our_mission")}
            </motion.h1>
                    <span className="bg-yellow-500 w-16 h-1 rounded-full mx-auto block mb-12"></span>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">

        {/* Left: Text */}
        <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'} space-y-8`}>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
          >
            {t('ourMission.title')}
          </motion.h2>

          {[t('ourMission.paragraph1'), t('ourMission.paragraph2'), t('ourMission.paragraph3'), t('ourMission.paragraph4')].map((text, index) => {
            const icons = [
              <IoBook key="icon1" className="text-yellow-500 mt-1 w-10 h-10" size={40} />,
              <GiBrainstorm key="icon2" className="text-yellow-500 mt-1 w-30 h-10" size={40} />,
              <AiOutlineGlobal key="icon3" className="text-yellow-500 mt-1 w-20 h-10" size={40} />,
              <BsFillRocketTakeoffFill key="icon4" className="text-yellow-500 mt-1 w-10 h-10"  size={30} />
            ];

            return (
              <motion.div
                key={index}
                variants={textVariants(index * 0.2, direction)}
                initial="hidden"
                animate="visible"
                className="flex items-start gap-4"
              >
                {icons[index]}
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex-1"
        >
          <img
            src={OurMissions}
            alt="Our Mission"
            className=" max-w-md mx-auto lg:max-w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        
      </div>
    </section>
  );
};

export default OurMission;
