import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const DealsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer for flash deals
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDeals = [
    {
      id: 1,
      title: "Flash Friday Special",
      subtitle: "Limited Time Only!",
      description: "Get our famous Signature Crispy Combo + 2 sides for an unbeatable price",
      originalPrice: "$18.99",
      dealPrice: "$12.99",
      savings: "Save $6.00",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "🔥 HOT DEAL",
      urgent: true
    }
  ];

  const weeklyDeals = [
    {
      id: 2,
      title: "Monday Madness",
      description: "Buy 2 Nashville Hot Wings get 1 FREE every Monday",
      dealPrice: "Buy 2 Get 1",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "🌟 WEEKLY",
      day: "MON"
    },
    {
      id: 3,
      title: "Taco Tuesday... Wait, Chicken Tuesday!",
      description: "All chicken sandwiches 25% off every Tuesday",
      dealPrice: "25% OFF",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "🎉 TUESDAY",
      day: "TUE"
    },
    {
      id: 4,
      title: "Wing Wednesday",
      description: "50¢ wings all day long - minimum order 6 wings",
      dealPrice: "50¢ Each",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "🍗 WEDNESDAY",
      day: "WED"
    },
    {
      id: 5,
      title: "Thirsty Thursday",
      description: "Free drink with any combo meal purchase",
      dealPrice: "FREE DRINK",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "🥤 THURSDAY",
      day: "THU"
    }
  ];

  const familyDeals = [
    {
      id: 6,
      title: "Family Feast Supreme",
      description: "Perfect for 4-6 people! 15 pieces mixed chicken, 3 large sides, 6 biscuits",
      originalPrice: "$45.99",
      dealPrice: "$34.99",
      savings: "Save $11.00",
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "👨‍👩‍👧‍👦 FAMILY",
      serves: "4-6 People"
    },
    {
      id: 7,
      title: "Date Night Special",
      description: "2 chicken dinners + 1 dessert to share + 2 drinks",
      originalPrice: "$28.99",
      dealPrice: "$22.99",
      savings: "Save $6.00",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "💕 ROMANCE",
      serves: "2 People"
    }
  ];

  const loyaltyProgram = {
    title: "Crown Club Rewards",
    description: "Join our loyalty program and earn points with every purchase!",
    benefits: [
      { icon: "🎁", text: "Free birthday meal", points: "Automatic" },
      { icon: "⚡", text: "Double points Fridays", points: "2x Points" },
      { icon: "🍗", text: "Free chicken after 10 visits", points: "10 Visits" },
      { icon: "📱", text: "Exclusive app-only deals", points: "Members Only" }
    ]
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 rounded-full text-sm font-semibold mb-4"
          >
            <span className="animate-pulse">💰</span>
            Unbeatable Savings
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Today's <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Hot Deals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crispy savings on your favorite chicken! Limited time offers you don't want to miss
          </p>
        </motion.div>

        {/* Flash Deal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          {flashDeals.map((deal) => (
            <motion.div
              key={deal.id}
              animate={pulseVariants}
              className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm font-bold mb-4">
                    {deal.badge}
                  </div>
                  <h3 className="text-4xl font-black mb-2">{deal.title}</h3>
                  <p className="text-xl font-semibold text-orange-100 mb-4">{deal.subtitle}</p>
                  <p className="text-lg leading-relaxed mb-6 text-orange-50">{deal.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl font-black">{deal.dealPrice}</div>
                    <div>
                      <div className="text-lg line-through text-orange-200">{deal.originalPrice}</div>
                      <div className="text-green-300 font-bold">{deal.savings}</div>
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-orange-100">Ends in:</span>
                    <div className="flex gap-2">
                      {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="bg-white/20 px-3 py-2 rounded-lg text-center min-w-[50px]">
                          <div className="text-xl font-bold">{value.toString().padStart(2, '0')}</div>
                          <div className="text-xs uppercase">{unit}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-red-500 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg flex items-center gap-2"
                  >
                    <span>🛒</span>
                    Claim This Deal
                  </motion.button>
                </div>

                <div className="relative">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Weekly Deals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Weekly Specials</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyDeals.map((deal) => (
              <motion.div
                key={deal.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {deal.badge}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full w-12 h-12 flex items-center justify-center font-bold text-gray-900">
                    {deal.day}
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                    {deal.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
                  <div className="text-2xl font-black text-orange-600">{deal.dealPrice}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Family Deals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Family & Group Deals</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {familyDeals.map((deal) => (
              <motion.div
                key={deal.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {deal.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-gray-900">
                    {deal.serves}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3 text-gray-900">{deal.title}</h4>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-black text-orange-600">{deal.dealPrice}</div>
                      <div>
                        <div className="text-sm line-through text-gray-400">{deal.originalPrice}</div>
                        <div className="text-green-600 font-bold text-sm">{deal.savings}</div>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold"
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Loyalty Program */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-5xl mb-4">👑</div>
            <h3 className="text-3xl font-bold mb-4">{loyaltyProgram.title}</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              {loyaltyProgram.description}
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {loyaltyProgram.benefits.map((benefit, index) => (
                <div key={index} className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <div className="font-bold mb-1">{benefit.text}</div>
                  <div className="text-purple-200 text-sm">{benefit.points}</div>
                </div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg flex items-center gap-2 mx-auto"
            >
              <span>📱</span>
              Join Crown Club Free
            </motion.button>
          </div>
          
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 -left-20 w-40 h-40 bg-gradient-to-r from-green-300/20 to-emerald-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default DealsSection;