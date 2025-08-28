"use client";
import { motion } from "framer-motion";
import { Globe, MapPin, Camera, Plane } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Worldwide Coverage",
    desc: "Explore destinations across the globe with our wide travel network.",
  },
  {
    icon: MapPin,
    title: "Personalized Trips",
    desc: "Get tailored travel experiences designed just for you.",
  },
  {
    icon: Camera,
    title: "Memorable Moments",
    desc: "Capture and cherish every special moment of your journey.",
  },
  {
    icon: Plane,
    title: "Seamless Booking",
    desc: "Quick and hassle-free booking with instant confirmations.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Why Choose <span className="text-teal-400">TravelWorld?</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          We provide unmatched services to make your travel experiences unforgettable.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-8 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:border-teal-400 hover:shadow-teal-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-500/20 mb-6">
              <feature.icon className="w-7 h-7 text-teal-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
