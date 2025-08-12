// src/components/Facilities.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaBook, FaAppleAlt, FaFlask, FaBasketballBall } from 'react-icons/fa';

const facilities = [
  { title: 'Bus', icon: <FaBus />, color: 'bg-pink-400' },
  { title: 'Science Labs', icon: <FaFlask />, color: 'bg-orange-400' },
  { title: 'Libraries, Books & Resources', icon: <FaBook />, color: 'bg-blue-900' },
  { title: 'Canteen', icon: <FaAppleAlt />, color: 'bg-orange-600' },
  { title: 'Sport', icon: <FaBasketballBall />, color: 'bg-green-500' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Facilities = () => {
  return (
    <section className="px-6 py-12 bg-white text-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-900 mb-4"
        >
          FACILITIES AT Sidra
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-6 max-w-2xl"
        >
          Foundation Stage, Primary and Secondary each have their own area and classrooms within the school building, and there are two...
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-pink-400 hover:bg-pink-500 transition text-white font-semibold py-2 px-6 rounded-full mb-10"
        >
          Read More ...
        </motion.button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {facilities.map((facility, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className={`relative overflow-hidden text-white p-6 rounded-[30%_0%_30%_0%] transition transform hover:scale-105 shadow-lg ${facility.color}`}
            >
              <div className="text-3xl mb-3">{facility.icon}</div>
              <h3 className="text-lg font-bold mb-4">{facility.title}</h3>
              <button className="bg-white text-blue-800 hover:bg-blue-100 transition py-1 px-4 rounded-full text-sm font-medium">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
