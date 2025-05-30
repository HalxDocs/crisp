import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      year: "1985",
      title: "The Beginning",
      description: "Started as a small family kitchen with grandmother's secret recipe",
      icon: "🏠"
    },
    {
      year: "1995",
      title: "First Restaurant",
      description: "Opened our first location with just 4 tables and big dreams",
      icon: "🍽️"
    },
    {
      year: "2010",
      title: "Going Viral",
      description: "Our Nashville Hot Wings became an internet sensation",
      icon: "🔥"
    },
    {
      year: "2025",
      title: "Today",
      description: "15 locations serving over 10,000 happy customers daily",
      icon: "⭐"
    }
  ];

  const stats = [
    { number: "40+", label: "Years of Flavor", icon: "📅" },
    { number: "15", label: "Locations", icon: "📍" },
    { number: "10K+", label: "Daily Customers", icon: "👥" },
    { number: "98%", label: "Happy Customers", icon: "😊" }
  ];

  const values = [
    {
      title: "Family Recipe",
      description: "Every dish starts with recipes passed down through three generations",
      icon: "👨‍👩‍👧‍👦",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Fresh Daily",
      description: "We source ingredients locally and prepare everything fresh each morning",
      icon: "🌱",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Community First",
      description: "Supporting local farmers, charities, and bringing people together",
      icon: "❤️",
      color: "from-pink-500 to-rose-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-red-50/20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-700 rounded-full text-sm font-semibold mb-4"
          >
            <span className="animate-pulse">🍗</span>
            Our Story
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Crispy Crown</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four decades of perfecting the art of crispy, juicy, soul-satisfying chicken. 
            From our family kitchen to your table, every bite tells a story of passion, 
            tradition, and the relentless pursuit of flavor perfection.
          </p>
        </motion.div>

        {/* Story Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setActiveStory(index)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-500 ${
                  activeStory === index
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="text-3xl mb-3">{story.icon}</div>
                <div className={`text-2xl font-black mb-2 ${
                  activeStory === index ? 'text-white' : 'text-orange-600'
                }`}>
                  {story.year}
                </div>
                <h3 className="font-bold text-lg mb-2">{story.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  activeStory === index ? 'text-orange-100' : 'text-gray-600'
                }`}>
                  {story.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-2xl text-white`}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Chef's Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-6xl mb-6">👨‍🍳</div>
            <h3 className="text-3xl font-bold mb-4">Chef's Message</h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6 text-orange-100">
              "Every piece of chicken that leaves our kitchen carries with it the love, 
              tradition, and perfectionism that my grandmother taught me. We don't just serve food - 
              we serve memories, comfort, and the kind of flavors that bring families together."
            </p>
            <div className="text-lg font-semibold">— Chef Marcus Johnson, Head Chef & Co-Owner</div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg flex items-center gap-3 mx-auto"
          >
            <span className="text-xl">📍</span>
            Visit Our Locations
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-32 -left-20 w-40 h-40 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 -right-20 w-60 h-60 bg-gradient-to-r from-red-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-200/10 to-red-200/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutSection;