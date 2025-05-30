import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-orange-300/30 to-red-300/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-amber-300/30 to-orange-300/30 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold shadow-lg"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Est. 1985 • Family Recipe
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight">
                <span className="block">Crispy</span>
                <span className="block bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Perfection
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-lg mx-auto lg:mx-0 font-medium">
                Handcrafted with love, seasoned to perfection. Every bite tells our story of flavor and tradition.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 text-lg"
              >
                Order Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 text-lg"
              >
                View Menu
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-8 justify-center lg:justify-start pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-black text-orange-600">40+</div>
                <div className="text-sm text-gray-600 font-medium">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-red-600">10k+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-amber-600">5★</div>
                <div className="text-sm text-gray-600 font-medium">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main food image */}
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Delicious crispy fried chicken"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={floatingAnimation}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl"
              >
                <span className="text-2xl">🔥</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl"
              >
                <span className="text-xl">✨</span>
              </motion.div>

              {/* Price tag */}
              <motion.div
                initial={{ opacity: 0, rotate: -12 }}
                animate={{ opacity: 1, rotate: -12 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-8 -left-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow-xl font-bold transform -rotate-12"
              >
                From $9.99
              </motion.div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="grid grid-cols-8 gap-4 opacity-20">
                {Array.from({ length: 64 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                    className="w-2 h-2 bg-orange-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 text-white fill-current">
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;