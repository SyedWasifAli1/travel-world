"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/image/hero.jpg')", // apni image path daalna (public/images/)
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 leading-tight">
          Explore The World With <span className="text-teal-400">TravelWorld</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Discover breathtaking destinations and plan your next adventure today.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/destinations"
            className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-500 hover:scale-105 transition transform"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-neutral-800 text-gray-100 rounded-lg shadow-lg hover:bg-neutral-700 hover:scale-105 transition transform"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
