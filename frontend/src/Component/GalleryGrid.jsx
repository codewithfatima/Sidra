import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80", 
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80", 
];

const fadeZoomVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const GalleryGrid = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Take a Tour of Our School</h2>
      <Swiper spaceBetween={30} slidesPerView={1} loop>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={img}
              alt={`School image ${index + 1}`}
              className="w-full rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeZoomVariants}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GalleryGrid;

