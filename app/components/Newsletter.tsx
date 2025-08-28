"use client";

export default function Newsletter() {
  return (
    <section className="bg-teal-700 text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-neutral-800 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-100 mb-8 text-lg">
          Subscribe to get exclusive travel deals, top destinations, and inspiring travel stories right in your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full text-gray-800 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gray-500 text-white rounded-full font-semibold shadow-md hover:bg-gray-600 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Social Proof */}
        <p className="mt-6 text-sm text-gray-100">
          💌 Join <span className="font-semibold">10,000+ travelers</span> already exploring with us.
        </p>
      </div>
    </section>
  );
}
