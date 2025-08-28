"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Traveler from USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "TravelWorld ने मेरी life की best यात्रा organize की। Professional टीम, seamless booking और शानदार अनुभव!",
  },
  {
    name: "Ali Khan",
    role: "Traveler from Pakistan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "बहुत ही amazing service! Destination, packages और support सब कुछ world-class था। Highly recommended!",
  },
  {
    name: "Sophia Lee",
    role: "Traveler from UK",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "I was blown away by how smooth and luxurious everything was. This is the future of travel booking!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          What Our Travelers Say
        </motion.h2>
        <p className="text-gray-600 mb-12 text-lg">
          Our clients love their experiences with TravelWorld. Here’s why:
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-xl rounded-2xl p-6 text-left relative hover:shadow-2xl transition-all"
            >
              {/* User Image */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-teal-600"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed italic">“{t.review}”</p>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-teal-600 text-4xl opacity-20">
                ❝
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
