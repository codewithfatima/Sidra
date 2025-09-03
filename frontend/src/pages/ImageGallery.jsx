import React from 'react';
import { slideUpVariants, zoomInVariants } from '../Component/variants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import Ch1 from '../../src/assets/Ch1.png';
import Ch22 from '../../src/assets/Ch22.png';
import Ch23 from '../../src/assets/Ch23.png';
import Ch24 from '../../src/assets/Ch24.png';

const imageData = [
  {
    category: 'galleryy.categories.children',
    src: Ch1,
    alt: 'galleryy.images.childClassroom',
  },
  {
    category: 'galleryy.categories.children',
    src: Ch23,
    alt: 'galleryy.images.childOutside',
  },
  {
    category: 'galleryy.categories.children',
    src: Ch24,
    alt: 'galleryy.images.childPlaying',
  },
  {
    category: 'galleryy.categories.events',
    subcategory: 'galleryy.events.palestineDay',
  },
  {
    category: 'galleryy.categories.events',
    subcategory: 'galleryy.events.pajamaDay',
  },
  {
    category: 'galleryy.categories.events',
    subcategory: 'galleryy.events.greeningDay',
  },
  {
    category: 'galleryy.categories.events',
    subcategory: 'galleryy.events.graduationDay',
  },
  {
    category: 'galleryy.categories.events',
    subcategory: 'galleryy.events.careerWeek',
  },
  {
    category: 'galleryy.categories.courses',
    src: '/images/course1.jpg',
    alt: 'galleryy.images.course1',
  },
];

const ImageGallery = () => {
  const { t } = useTranslation();

  const sections = [
    'galleryy.categories.children',
    'galleryy.categories.events',
    'galleryy.categories.courses'
  ];

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      {/* Section Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-3xl font-bold mb-6 font-almarai text-center mt-10"
      >
        {t('galleryy.title')}
        <span className='bg-yellow-500 w-25 h-1 block rounded-lg mx-auto mt-2'></span>
      </motion.h2>

      {/* Loop through each section */}
      {sections.map((sectionKey) => {
        const sectionName = sectionKey.split('.').pop(); // e.g., 'children', 'events', 'courses'

        return (
          <motion.div
            key={sectionKey}
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="mb-10"
          >
            <h3 className="text-2xl font-semibold mb-5 mt-10">
              {t(sectionKey)}
            </h3>

            {sectionName === 'events' ? (
              <div className="mb-6">
                <p className="text-gray-600 text-lg font-bold mb-4">{t('photos')}</p>
                <div className="flex flex-wrap gap-3">
                  {[...new Set(
                    imageData
                      .filter(img => img.category === sectionKey && img.subcategory)
                      .map(img => img.subcategory)
                  )].map((subcatKey, index) => (
                    <Link
                      key={index}
                      to={`/events/${subcatKey.split('.').pop().toLowerCase().replace(/\s+/g, '')}`}
                      className="bg-yellow-500 text-md px-3 py-2 rounded-lg hover:underline"
                    >
                      {t(subcatKey)}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {imageData
                  .filter(img => img.category === sectionKey && img.src)
                  .map((img, index) => (
                    <img
                      key={index}
                      src={img.src}
                      alt={t(img.alt)}
                      className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  ))}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
