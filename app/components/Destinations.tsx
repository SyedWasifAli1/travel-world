"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Paris, France",
    description: "City of lights and love. Eiffel Tower, cafes, romance!",
    image: "/image/paris.png",
  },
  {
    name: "Bali, Indonesia",
    description: "Beaches, temples & tropical vibes.",
    image: "/image/bali.png",
  },
  {
    name: "Dubai, UAE",
    description: "Luxury, skyscrapers & desert adventures.",
    image: "/image/dubai.png",
  },
  {
    name: "Istanbul, Turkey",
    description: "Where East meets West – culture & history.",
    image: "/image/istanbul.png",
  },
];

export default function Destinations() {
  return (
    <section className="py-16 bg-gray-50" id="destinations">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Popular Destinations
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore the world’s most stunning travel spots picked just for you.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                <h3 className="text-xl font-semibold">{dest.name}</h3>
                <p className="text-sm text-gray-200 mt-2 line-clamp-2">
                  {dest.description}
                </p>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-medium shadow hover:bg-gray-200 transition">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
