import React, { useState } from 'react';
import { slideUpVariants, zoomInVariants } from '../Component/variants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";

import Ch1 from '../../src/assets/Ch1.webp';
import Ch23 from '../../src/assets/Ch23.webp';
import Ch24 from '../../src/assets/Ch24.webp';
import Cour1 from '../../src/assets/Cour1.webp';
import Cour2 from '../../src/assets/Cour2.webp';
import Cour3 from '../../src/assets/Cour3.webp';
import Cour4 from '../../src/assets/Cour4.webp';
import Cour5 from '../../src/assets/Cour5.webp';

const imageData = [
  // Children
  { category: 'galleryy.categories.children', src: Ch1, alt: 'galleryy.images.childClassroom' },
  { category: 'galleryy.categories.children', src: Ch23, alt: 'galleryy.images.childOutside' },
  { category: 'galleryy.categories.children', src: Ch24, alt: 'galleryy.images.childPlaying' },

  // Events (linked as subcategories)
  { category: 'galleryy.categories.events', subcategory: 'galleryy.events.palestineDay' },
  { category: 'galleryy.categories.events', subcategory: 'galleryy.events.pajamaDay' },
  { category: 'galleryy.categories.events', subcategory: 'galleryy.events.greeningDay' },
  { category: 'galleryy.categories.events', subcategory: 'galleryy.events.graduationDay' },
  { category: 'galleryy.categories.events', subcategory: 'galleryy.events.careerWeek' },

  // Courses (Cour)
  { category: 'galleryy.categories.courses', src: Cour1 },
  { category: 'galleryy.categories.courses', src: Cour2 },
  { category: 'galleryy.categories.courses', src: Cour3 },
  { category: 'galleryy.categories.courses', src: Cour4 },
  { category: 'galleryy.categories.courses', src: Cour5 },
];


const ImageGallery = () => {
  const { t } = useTranslation();
  const [selectedImg, setSelectedImg] = useState(null);

  const sections = [
    'galleryy.categories.children',
    'galleryy.categories.events',
    'galleryy.categories.courses'
  ];

  return (
    <div className="relative px-4 py-16 max-w-7xl mx-auto">


      {/* Decorative background */}
      {/* Decorative background */}
      <div className="absolute top-0 left-0  w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-yellow-200 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-yellow-300 rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* Section Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="mt-10 lg:text-4xl text-3xl md:text-3xl font-extrabold mb-12 text-center font-almarai text-gray-900"
      >
        {t('galleryy.title')}
        <span className="bg-yellow-500 w-24 h-1 block rounded-lg mx-auto mt-3"></span>
      </motion.h2>

      {/* Loop through each section */}
      {sections.map((sectionKey) => {
        const sectionName = sectionKey.split('.').pop();

        return (
          <motion.div
            key={sectionKey}
            // initial="hidden"
            // whileInView="visible"
            // variants={zoomInVariants}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-700">
              {t(sectionKey)}
            </h3>

            {sectionName === 'events' ? (
              <div className="mb-8">
                <p className="text-gray-700 text-lg mb-4">{t('photos')}</p>
                <div className="flex flex-wrap gap-3">
                  {[...new Set(
                    imageData.filter(img => img.category === sectionKey && img.subcategory).map(img => img.subcategory)
                  )].map((subcatKey, index) => (
                    <Link
                      key={index}
                      to={`/events/${subcatKey.split('.').pop().toLowerCase().replace(/\s+/g, '')}`}
                      className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium shadow hover:bg-yellow-300 hover:text-black transition"
                    >
                      {t(subcatKey)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {imageData
                  .filter(img => img.category === sectionKey && img.src)
                  .map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                      onClick={() => setSelectedImg(img)}
                    >
                      <img
                        src={img.src}
                        alt={t(img.alt)}
                        className="w-full h-72 object-cover group-hover:opacity-90 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                        <p className="text-white text-lg font-semibold">{t(img.alt)}</p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Modal for selected image */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              key={selectedImg.src}
              src={selectedImg.src}
              alt={t(selectedImg.alt)}
              className="max-w-[90%] max-h-[80%] rounded-xl shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ImageGallery;