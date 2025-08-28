// components/CTA.tsx
"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-r from-teal-700 via-neutral-800 to-gray-900 py-20 px-6 text-center text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Ready for Your Next Adventure?
        </motion.h2>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          Let us make your dream trip a reality with exclusive deals and 
          personalized packages tailored just for you.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#packages"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal-900/40 transition duration-300"
        >
          Book Your Trip Now
        </motion.a>
      </div>
    </section>
  );
}
