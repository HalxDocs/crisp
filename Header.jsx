import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navLinks = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'menu', label: 'Menu', icon: '📋' },
    { id: 'deals', label: 'Deals', icon: '🔥' },
    { id: 'locations', label: 'Locations', icon: '📍' },
    { id: 'about', label: 'About', icon: '❤️' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-2xl">🍗</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">⭐</span>
                </div>
              </div>
              <div>
                <h1 className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Crispy<span className="text-orange-500">Bite</span>
                </h1>
                <p className={`text-xs font-medium transition-colors duration-300 ${
                  scrolled ? 'text-gray-500' : 'text-orange-200'
                }`}>
                  Since 1985
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                      scrolled
                        ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm flex items-center space-x-2"
              >
                <span>🛒</span>
                <span>Order Now</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                  className="w-6 h-0.5 bg-current absolute transition-all duration-300"
                />
                <motion.span 
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-current absolute transition-all duration-300"
                />
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                  className="w-6 h-0.5 bg-current absolute transition-all duration-300"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="p-6 h-full flex flex-col">
                
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🍗</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-gray-900">CrispyBite</h2>
                      <p className="text-xs text-gray-500">Menu</p>
                    </div>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    ✕
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => {
                        // Handle navigation here
                        closeMobileMenu();
                      }}
                      className="w-full flex items-center space-x-4 p-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 text-left group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {link.icon}
                      </span>
                      <span className="font-semibold text-lg">{link.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeMobileMenu}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 rounded-2xl shadow-lg flex items-center justify-center space-x-3"
                  >
                    <span className="text-xl">🛒</span>
                    <span>Order Now</span>
                  </motion.button>
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                    <span>📞 Call Us</span>
                    <span>•</span>
                    <span>📍 Find Store</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;