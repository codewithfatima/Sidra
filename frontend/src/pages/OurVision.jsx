import React from 'react';
import { motion } from 'framer-motion';
import MissionImage from '../../src/assets/mission.png'; 

const OurVision = () => {
  return (
    <section className="bg-[#151f4b] text-white py-16 px-6 md:px-20 ">
      
      {/* Animated Heading */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className='font-bold text-pink-500 text-center text-3xl md:text-4xl mb-8 -mt-7 bg-gray-300 p-2 mt-10'
      >
        EXPLORE OUR SCHOOL
      </motion.h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-pink-400 text-3xl md:text-4xl font-bold mb-6">
            Mission & Vision
          </h2>
          <p className="text-lg leading-relaxed text-gray-100">
          At we will provide support in a caring, organized and disciplined manner,
            encouraging each student to reach their full potential. Every child will have an equal
            opportunity to learn. We aim to promote amongst our students, the understanding and
            tolerance of any differences in ability, race or culture...
            <br /><br />
            Our curriculum and school philosophy aim to encourage full participation by all
            students. We believe that the promotion of a partnership between students, teachers,
            administration and parents will enable each individual to become a valued member of the
            school and the wider community.
          </p>
        </div>

        {/* Right Image with Zoom Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <img
            src={MissionImage}
            alt="Student"
            className="w-full h-auto rounded-tr-3xl rounded-br-3xl border-4 
            border-pink-300 object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
