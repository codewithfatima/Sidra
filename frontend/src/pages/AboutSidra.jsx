// import React from "react";
// import { motion } from "framer-motion";

// const AboutSidra = () => {
//   return (
//     <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
//       {/* Left: Image */}
//       <motion.div
//         initial={{ opacity: 0, x: -80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, amount: 0.4 }}
//         className="relative flex-1 rounded-[35px] overflow-hidden border-[12px] border-pink-200 h-[500px] mt-10"
//       >
//         <img
//           src="https://dummyimage.com/600x800/ccc/000.png&text=Sidra+Campus"
//           alt="Sidra Campus"
//           className="object-cover w-full h-full rounded-[30px]"
//         />
        
//       </motion.div>

//       {/* Right: Text */}
//       <motion.div
//         initial={{ opacity: 0, x: 80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: true, amount: 0.4 }}
//         className="relative flex-1"
//       >
        

//         <h2 className="text-4xl md:text-5xl font-bold text-[#233a8d] mb-6">
//           About <span className="text-pink-500">Sidra International</span>
//         </h2>

//         <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
//           Sidra International is a forward-thinking educational institution committed to nurturing excellence in every child.
//           Founded with a vision to create a holistic, inclusive, and innovative learning environment, Sidra blends academic
//           rigor with values-based education.
//           <br /><br />
//           Our mission is to inspire confident, curious, and compassionate learners who are ready to shape the future. With
//           dedicated educators, state-of-the-art facilities, and a passion for character-building, Sidra is setting a new
//           standard for learning in Kuwait.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default AboutSidra;

import React from 'react'

const AboutSidra = () => {
  return (
    <div>
  <p className="font-arabic text-lg">
  هذا نص عربي بخط تجوال
</p>
      <h2 className='m-50 mb-30 text-center text-3xl font-bold'>عن سدرة</h2>

    
    </div>
  )
}

export default AboutSidra
