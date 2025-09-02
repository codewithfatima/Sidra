// import React from 'react';
// import { motion } from 'framer-motion';
// import Our1 from '../../src/assets/our1.png';
// import Our2 from '../../src/assets/our2.png';
// import Our3 from '../../src/assets/our3.png';
// import Our4 from '../../src/assets/our3.png';
// import { useTranslation } from 'react-i18next';
// import { slideUpVariants, zoomInVariants } from '../Component/variants';

// const OurPartners = () => {
//   const { t, i18n } = useTranslation();
//   const isArabic = i18n.language === 'ar';

//   const partners = [
//     { image: Our1, title: t('partner1Title'), name: t('partner1Name') },
//     { image: Our2, title: t('partner2Title'), name: t('partner2Name') },
//     { image: Our3, title: t('partner3Title'), name: t('partner3Name') },
//     { image: Our4, title: t('partner3Title'), name: t('partner4Name') },
//   ];

//   return (
//     <div className="bg-gray-100 py-12 px-6" dir={isArabic ? 'rtl' : 'ltr'}>
//       <motion.h1
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ amount: 0.5, once: false }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         variants={slideUpVariants}
//         className="text-4xl font-bold text-center mb-5"
//       >
//         {t('ourPartners')}
//         <span className="block w-20 h-1 bg-yellow-500 rounded-sm mx-auto mt-2"></span>
//       </motion.h1>

//       <p className="max-w-2xl mx-auto mb-10 text-gray-600 text-center">
//         {t('ourPartnersDesc')}
//       </p>

//       <motion.div 
//       initial="hidden"
//       whileInView= "visible"
//       variants={zoomInVariants}
//       className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
//         {partners.map((partner, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <img
//               src={partner.image}
//               alt={partner.name}
//               className="w-40 h-40 rounded-full border border-gray-500 object-cover"
//             />
//             <span className="mt-5 font-semibold text-center">{partner.title}</span>
//             <p className="text-center text-sm mt-2">{partner.name}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default OurPartners;
import React from 'react'

const OurPartners = () => {
  return (
    <div>OurPartners</div>
  )
}

export default OurPartners