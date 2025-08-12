import React from "react";
import { motion } from "framer-motion";

const owner = {
  name: "Ahmed Al-Sabah",
  role: "Founder & CEO",
  // Example Kuwaiti/Middle Eastern-looking man from Unsplash
  photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
  message: `Ahmed is the visionary behind Sidra International. He believes in fostering a nurturing environment where students 
  can thrive academically and personally. Under his leadership, Sidra has grown to be a leading institution in Kuwait.Ahmed is
   the visionary behind Sidra International. He believes in fostering a nurturing environment where students can thrive 
  can thrive academically and personally. Under his leadership, Sidra has grown to be a leading institution in Kuwait.`,
};

const Owners = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
      {/* Animated Owner Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative rounded-[35px] overflow-hidden border-[12px] border-pink-200 w-full md:w-1/2 max-w-[500px] aspect-[4/5] mt-10"
      >
        <img
          src={owner.photo}
          alt={owner.name}
          className="object-cover w-full h-full rounded-[30px]"
        />
      </motion.div>

      {/* Animated Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative max-w-2xl w-full md:w-1/2"
      >
       

        <h2 className="text-4xl md:text-5xl font-bold text-[#233a8d] mb-6">
          {owner.name} - <span className="text-pink-500">{owner.role}</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          {owner.message}
        </p>
      </motion.div>
    </section>
  );
};

export default Owners;
