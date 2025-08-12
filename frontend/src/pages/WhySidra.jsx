import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AcademicIcon from '../assets/AcademicIcon.png';
import DevelopmentIcon from '../assets/development.png';

const features = [
  {
    title: 'Academic Excellence',
    description:
      'We offer a challenging and engaging curriculum, led by highly qualified teachers who are passionate about student success.',
    icon: AcademicIcon,
  },
  {
    title: 'Development',
    description:
      'Our focus goes beyond academics. We foster emotional intelligence, creativity, physical well-being, and ethical values.',
    icon: DevelopmentIcon,
  },
  {
    title: 'Modern Facilities',
    description:
      'With state-of-the-art classrooms, science labs, libraries, and sports facilities, we create an ideal learning environment.',
    icon: 'https://img.icons8.com/color/96/physics.png', 
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhySider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="why-sidra"
      className="bg-gradient-to-r from-blue-50 to-white py-20 px-6 md:px-20 lg:px-32"
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Left side image */}
        <motion.img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80"
          alt="School Learning"
          className="rounded-lg shadow-lg w-full max-w-md object-cover"
          variants={itemVariants}
        />

        {/* Right side text */}
        <div className="flex-1 space-y-8">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center md:text-left"
            variants={itemVariants}
          >
            Why Choose Sidra International?
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-700 max-w-xl text-center md:text-left"
            variants={itemVariants}
          >
            At Sidra International School, we believe every child deserves a nurturing
            environment to grow, explore, and succeed. Our mission is to inspire academic
            excellence, develop character, and empower students to become global citizens.
          </motion.p>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            {features.map(({ title, description, icon }, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={icon}
                  alt={`${title} icon`}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h3 className="font-semibold text-blue-800 text-lg md:text-xl mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhySider;


