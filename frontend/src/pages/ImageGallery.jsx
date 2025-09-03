import React from 'react';
import { slideUpVariants, zoomInVariants } from '../Component/variants';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Ch1 from '../../src/assets/Ch1.png'
import Ch22 from '../../src/assets/Ch22.png';
import Ch23 from '../../src/assets/Ch23.png';
import Ch24 from '../../src/assets/Ch24.png';



const imageData = [
    {
        category: 'children',
        src: Ch1,
        alt: 'Child in classroom',
    },
    {
        category: 'children',
        src: Ch23,
        alt: 'Child playing outside',
    },
    {
        category: 'children',
        src: Ch24,
        alt: 'Child playing outside',
    },
    {
        category: 'events',
        subcategory: 'Palestine Day',

    },
    {
        category: 'events',
        subcategory: 'Pajama Day',
    },
    {
        category: 'events',
        subcategory: 'Greening Day',
    },
    {
        category: 'events',
        subcategory: 'Graduation Day',
    },
    {
        category: 'events',
        subcategory: 'Career weak',
    },

    {
        category: 'courses',
        src: '/images/course1.jpg',
        alt: 'courses',
    },
];

const ImageGallery = () => {
    const { t } = useTranslation();

    return (
        <div className="px-4 py-10 max-w-7xl mx-auto">
            {/* Section Headings */}
            <motion.h2
                initial='hidden'
                whileInView='visible'
                variants={slideUpVariants}
                className="text-3xl font-bold mb-6 font-almarai text-center mt-10">
                {t('gallery.title')}
                <span className='bg-yellow-500 w-25 h-1 block rounded-lg mx-auto mt-2'></span>
            </motion.h2>


            {/* Loop through each category */}
            {['children', 'events', 'courses'].map((section) => (
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={zoomInVariants}
                    key={section}
                    className="mb-10"
                >
                    <h3 className="text-2xl font-semibold capitalize mb-5 mt-10">
                        {t(`gallery.categories.${section}`)}
                    </h3>

                    {section === 'events' ? (
                        <div className="mb-6">
                            <p className="text-gray-600 text-lg font-bold mb-4">
                              {t('photos')}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[...new Set(imageData
                                    .filter((img) => img.category === section && img.subcategory)
                                    .map((img) => img.subcategory))].map((subcat, index) => (
                                        <Link
                                            key={index}
                                            to={`/events/${subcat.toLowerCase().replace(/\s+/g, '')}`}
                                            className="bg-yellow-500 text-md  px-3 py-2 rounded-lg
                                             hover:underline"
                                        >
                                            {subcat}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    ) : (
                        // Show images courses
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {imageData
                                .filter((img) => img.category === section && img.src)
                                .map((img, index) => (
                                    <img
                                        key={index}
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                                    />
                                ))}
                        </motion.div>
                    )}
                </motion.div>
            ))}



        </div>


    );
};

export default ImageGallery;



