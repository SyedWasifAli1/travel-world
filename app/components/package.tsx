"use client";

import { motion } from "framer-motion";

const packages = [
  {
    title: "Basic Package",
    price: "$499",
    duration: "3 Days / 2 Nights",
    features: ["Hotel Stay", "Breakfast", "City Tour"],
    image: "/images/basic.jpg",
  },
  {
    title: "Standard Package",
    price: "$999",
    duration: "5 Days / 4 Nights",
    features: ["Hotel Stay", "All Meals", "Adventure Tours", "Airport Pickup"],
    image: "/images/standard.jpg",
  },
  {
    title: "Premium Package",
    price: "$1499",
    duration: "7 Days / 6 Nights",
    features: ["Luxury Hotel", "All Meals", "Private Guide", "VIP Transfers"],
    image: "/images/premium.jpg",
  },
];

export default function Packages() {
  return (
    <section className="py-20 bg-gray-100" id="packages">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Travel Packages
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the perfect travel package for your next adventure with flexible options and exclusive offers.
        </p>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-full w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{pkg.title}</h3>
                <p className="text-lg text-teal-600 font-bold mt-2">{pkg.price}</p>
                <p className="text-sm text-gray-500 mb-4">{pkg.duration}</p>

                {/* Features List */}
                <ul className="text-gray-600 text-sm space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
