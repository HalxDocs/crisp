import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Our Story', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Locations', href: '#locations' },
    { name: 'Careers', href: '#careers' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Catering', href: '#catering' }
  ];

  const customerService = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Order Tracking', href: '#tracking' },
    { name: 'Nutrition Info', href: '#nutrition' },
    { name: 'Allergen Guide', href: '#allergens' },
    { name: 'Feedback', href: '#feedback' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Accessibility', href: '#accessibility' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#instagram', color: 'from-pink-500 to-purple-500' },
    { name: 'Facebook', icon: '📘', href: '#facebook', color: 'from-blue-600 to-blue-800' },
    { name: 'Twitter', icon: '🐦', href: '#twitter', color: 'from-blue-400 to-blue-600' },
    { name: 'TikTok', icon: '🎵', href: '#tiktok', color: 'from-black to-gray-800' },
    { name: 'YouTube', icon: '📺', href: '#youtube', color: 'from-red-500 to-red-700' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-b border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-black mb-4">
                Stay <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Crispy</span> Connected
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Be the first to know about new menu items, exclusive offers, and grand openings across Nigeria
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <motion.button
                  onClick={handleSubscribe}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  {isSubscribed ? '✅' : '📧 Subscribe'}
                </motion.button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2 text-center"
                >
                  🎉 Thanks for subscribing! Check your email for a welcome offer.
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 md:grid-cols-2 gap-8"
          >
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-4xl font-black mb-2">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Crispy Crown
                  </span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nigeria's favorite fried chicken destination. Serving crispy, delicious meals 
                  with Nigerian hospitality since 2015. From Lagos to Abuja and beyond!
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-orange-400">📍</span>
                  <span>Head Office: 123 Adeola Odeku Street, Victoria Island, Lagos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-orange-400">📞</span>
                  <span>Customer Service: (+234) 800 CRISPY (274779)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-orange-400">✉️</span>
                  <span>hello@crispycrown.ng</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-bold mb-4 text-white">Follow Our Journey</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-orange-400">→</span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Customer Service */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-6 text-white">Customer Care</h4>
              <ul className="space-y-3">
                {customerService.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-orange-400">→</span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* App Download & Hours */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-6 text-white">Get Our App</h4>
              
              <div className="space-y-3 mb-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  <div className="bg-gradient-to-r from-black to-gray-800 p-3 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <div className="text-white font-semibold">Download on</div>
                        <div className="text-gray-300 text-sm">App Store & Google Play</div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h5 className="font-semibold mb-3 text-white flex items-center gap-2">
                  <span className="text-orange-400">🕒</span>
                  Operating Hours
                </h5>
                <div className="space-y-1 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Mon - Thu:</span>
                    <span>10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fri - Sat:</span>
                    <span>10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Awards & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-6">
              <h4 className="font-bold text-lg mb-4 text-white">Trusted & Certified</h4>
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">🏆</span>
                  <span className="text-sm">Best Fast Food 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-sm">NAFDAC Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">🛡️</span>
                  <span className="text-sm">ISO 22000 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🌟</span>
                  <span className="text-sm">4.8/5 Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 Crispy Crown Nigeria. All rights reserved. Made with ❤️ in Nigeria.
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                {legalLinks.map((link, index) => (
                  <span key={link.name} className="flex items-center gap-4">
                    <motion.a
                      href={link.href}
                      whileHover={{ color: '#fb923c' }}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                    {index < legalLinks.length - 1 && (
                      <span className="text-gray-600">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Action Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        >
          <span className="text-xl">🔝</span>
        </motion.button>
      </div>
    </footer>
  );
};

export default FooterSection;