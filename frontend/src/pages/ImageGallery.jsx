import React from 'react';
import { slideUpVariants, zoomInVariants } from '../Component/variants';
// import 'react-image-lightbox/style.css';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Ch1 from '../assets/Ch1.jpg';
import Ch2 from '../assets/Ch2.jpg';
import Ch3 from '../assets/Ch3.jpg';
import Ch4 from '../assets/Ch4.jpg';
import Ch5 from '../assets/Ch5.jpg';
import Ch6 from '../assets/Ch6.jpg';
import Ch7 from '../assets/Ch7.jpg';
import Ch8 from '../assets/Ch8.jpg';
import Ch9 from '../assets/Ch9.jpg';
import Ch10 from '../assets/Ch10.jpg';
import Ch11 from '../assets/Ch11.jpg';
import Ch12 from '../assets/Ch12.jpg';
import Ch13 from '../assets/Ch13.jpg';
import Ch14 from '../assets/Ch14.jpg';
import Ch15 from '../assets/Ch15.jpg';
import Ch16 from '../assets/Ch16.jpg';
import Ch17 from '../assets/Ch17.jpg';
import Ch18 from '../assets/Ch18.jpg';
import Ch19 from '../assets/Ch19.jpg';
import Ch20 from '../assets/Ch20.jpg';
import Ch21 from '../assets/Ch21.jpg';
import Ch22 from '../assets/Ch22.jpg';
import Ch23 from '../assets/Ch23.jpg';
import Ch24 from '../assets/Ch24.jpg';
import Ch27 from '../assets/Ch27.jpg';
import Ch28 from '../assets/Ch28.jpg';
import Ch29 from '../assets/Ch29.jpg';
import Ch30 from '../assets/Ch30.jpg';
import Ch31 from '../assets/Ch31.jpg';


const imageData = [
    {
        category: 'children',
        src: Ch1,
        alt: 'Child in classroom',
    },

    {
        category: 'children',
        src: Ch22,
        alt: 'Child playing outside',
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
        subcategory: 'Graduation Day',
        src: Ch4,
        alt: 'Graduation ceremony',
    }, {
        category: 'events',
        subcategory: 'Graduation Day',
        src: Ch5,
        alt: 'Graduation ceremony',
    }, {
        category: 'events',
        subcategory: 'Graduation Day',
        src: Ch6,
        alt: 'Graduation ceremony',
    }, {
        category: 'events',
        subcategory: 'Graduation Day',
        src: Ch27,
        alt: 'Graduation ceremony',
    }, {
        category: 'events',
        subcategory: 'Graduation Day',
        src: Ch29,
        alt: 'Graduation ceremony',
    },
  
    {
        category: 'events',
        subcategory: 'Graduation Day',
        src: Ch31,
        alt: 'Graduation ceremony',
    },
    {
        category: 'events',
        subcategory: 'Graduation Day',
        src: Ch28,
        alt: 'Graduation ceremony',
    },


    //pajamadaay
   
      {
        category: 'events',
        subcategory: 'Pajama Day',
        src: Ch7,
        alt: 'Kids in pajamas',
    },
      {
        category: 'events',
        subcategory: 'Pajama Day',
        src: Ch8,
        alt: 'Kids in pajamas',
    },
    // greening day
    {
        category: 'events',
        subcategory: 'Greening Day',
        src: Ch16,
        alt: 'Kids in pajamas',
    },
    {
        category: 'events',
        subcategory: 'Greening Day',
        src: Ch17,
        alt: 'Kids in pajamas',
    },
    {
        category: 'events',
        subcategory: 'Greening Day',
        src: Ch18,
        alt: 'Kids in pajamas',
    },

    //plastine day
    {
        category: 'events',
        subcategory: 'Palastine Day',
        src: Ch9,
        alt: 'Kids playing with plasticine',
    },
    {
        category: 'events',
        subcategory: 'Palastine Day',
        src: Ch10,
        alt: 'Kids playing with plasticine',
    },
    {
        category: 'events',
        subcategory: 'Palastine Day',
        src: Ch11,
        alt: 'Kids playing with plasticine',
    },
    {
        category: 'events',
        subcategory: 'Palastine Day',
        src: Ch15,
        alt: 'Kids playing with plasticine',
    },
    {
        category: 'events',
        subcategory: 'Palastine Day',
        src: Ch12,
        alt: 'Kids playing with plasticine',
    },
    {
        category: 'events',
        subcategory: 'Palastine Day',
        src: Ch13,
        alt: 'Kids playing with plasticine',
    },
    // {
    //     category: 'events',
    //     subcategory: 'Palastine Day',
    //     src: Ch14,
    //     alt: 'Kids playing with plasticine',
    // },

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

            {['children', 'events', 'courses'].map((section) => (
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={zoomInVariants}
                    key={section} className="mb-10">
                    <h3 className="text-2xl font-semibold capitalize mb-5 mt-10">
                          {t(`gallery.categories.${section}`)}
                    </h3>

                    {section === 'events' ? (
                        // Group by subcategory
                        [...new Set(imageData
                            .filter((img) => img.category === section && img.subcategory)
                            .map((img) => img.subcategory))].map((subcat) => (
                                <motion.div 
                                initial='hidden'
                                whileInView= 'visible'
                                variants={zoomInVariants}
                                key={subcat} className="mb-6">
                                    <h4 className="text-xl  mb-3 font-bold bg-yellow-500 w-50 text-center rounded-lg py-2">
                                           {t(`gallery.subcategories.${subcat}`)}
                                        {/* <span className='bg-yellow-500 block w-15 rounded-lg text-center ml-5 mt-1 h-1 '></span> */}
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {imageData
                                            .filter((img) => img.category === section && img.subcategory === subcat)
                                            .map((img, index) => (
                                                <img
                                                    key={index}
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                                                />
                                            ))}
                                    </div>
                                </motion.div>
                            ))
                    ) : (
                        // Regular category without subcategories
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {imageData
                                .filter((img) => img.category === section)
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
