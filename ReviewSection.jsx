import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const ReviewSection = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [liveStats, setLiveStats] = useState({
    orders: 12847,
    customers: 8934,
    rating: 4.8
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        orders: prev.orders + Math.floor(Math.random() * 3),
        customers: prev.customers + Math.floor(Math.random() * 2),
        rating: Math.min(5, Math.max(4.5, prev.rating + (Math.random() * 0.2 - 0.1)))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview(prev => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Absolutely incredible! The Nashville Hot Wings are life-changing. The spice level is perfect and the meat falls right off the bone. I've been coming here for 3 years and it never disappoints!",
      platform: "Google",
      date: "2 days ago",
      verified: true,
      images: ["https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"]
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Best fried chicken in the city, hands down! The Family Feast Bucket fed our whole family with leftovers. Great value and amazing flavor. The staff is super friendly too!",
      platform: "Yelp",
      date: "5 days ago",
      verified: true,
      images: ["https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"]
    },
    {
      id: 3,
      name: "Emma Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "I'm not usually a chicken person, but CrispyBite converted me! The Honey Glazed Thighs are sweet perfection, and their mac & cheese is comfort food heaven. Already planning my next visit!",
      platform: "Facebook",
      date: "1 week ago",
      verified: true,
      images: ["https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"]
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Had my birthday dinner here and WOW! The service was exceptional and the food was restaurant quality. The Signature Crispy Combo is worth every penny. Highly recommend!",
      platform: "TripAdvisor",
      date: "3 days ago",
      verified: true,
      images: []
    }
  ];

  const socialPosts = [
    {
      id: 1,
      user: "@foodie_sarah",
      platform: "instagram",
      text: "Can't stop thinking about this crispy perfection! 🍗✨",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      likes: 247,
      time: "2h"
    },
    {
      id: 2,
      user: "@mike_eats_a_lot",
      platform: "twitter",
      text: "Just demolished this Family Feast Bucket with the squad! Best decision ever 🔥",
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      likes: 89,
      time: "4h"
    },
    {
      id: 3,
      user: "@local_food_critic",
      platform: "tiktok",
      text: "Rating every chicken place in the city - CrispyBite takes the crown! 👑",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      likes: 1.2,
      time: "6h"
    }
  ];

  const StarsDisplay = ({ rating }) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.span
          key={`star-${star}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: star * 0.1 }}
          className={`text-lg ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ⭐
        </motion.span>
      ))}
    </div>
  );

  const PlatformIcon = ({ platform }) => {
    const icons = {
      Google: '🔍',
      Yelp: '📍',
      Facebook: '👥',
      TripAdvisor: '✈️',
      instagram: '📸',
      twitter: '🐦',
      tiktok: '🎵'
    };
    return <span className="text-lg">{icons[platform] || '⭐'}</span>;
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden relative">
      
      {/* Background Pattern - Fixed SVG */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 rounded-full text-sm font-semibold mb-4"
          >
            <span className="animate-bounce">💬</span>
            What Our Customers Say
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Love at First <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Bite</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who can't get enough of our food
          </p>
        </motion.div>

        {/* Live Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mb-12 shadow-xl border border-white/50"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <div className="text-2xl font-black text-gray-900">
                  <motion.span
                    key={`orders-${liveStats.orders}`}
                    initial={{ scale: 1.2, color: '#10b981' }}
                    animate={{ scale: 1, color: '#111827' }}
                    transition={{ duration: 0.3 }}
                  >
                    {liveStats.orders.toLocaleString()}+
                  </motion.span>
                </div>
                <div className="text-sm text-gray-600 font-medium">Orders Delivered</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div>
                <div className="text-2xl font-black text-gray-900">
                  <motion.span
                    key={`customers-${liveStats.customers}`}
                    initial={{ scale: 1.2, color: '#3b82f6' }}
                    animate={{ scale: 1, color: '#111827' }}
                    transition={{ duration: 0.3 }}
                  >
                    {liveStats.customers.toLocaleString()}+
                  </motion.span>
                </div>
                <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <div>
                <div className="text-2xl font-black text-gray-900 flex items-center justify-center">
                  <motion.span
                    key={`rating-${liveStats.rating.toFixed(1)}`}
                    initial={{ scale: 1.2, color: '#eab308' }}
                    animate={{ scale: 1, color: '#111827' }}
                    transition={{ duration: 0.3 }}
                  >
                    {liveStats.rating.toFixed(1)}
                  </motion.span>
                  <span className="text-yellow-400 ml-1">⭐</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Main Review Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`review-${reviews[activeReview].id}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
              >
                {/* Review Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={reviews[activeReview].avatar}
                      alt={`Avatar of ${reviews[activeReview].name}`}
                      className="w-16 h-16 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-lg font-bold text-gray-900">{reviews[activeReview].name}</h4>
                        {reviews[activeReview].verified && (
                          <span className="text-blue-500 text-sm">✓</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <PlatformIcon platform={reviews[activeReview].platform} />
                        <span className="text-sm text-gray-500">{reviews[activeReview].platform}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{reviews[activeReview].date}</span>
                      </div>
                    </div>
                  </div>
                  <StarsDisplay rating={reviews[activeReview].rating} />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {reviews[activeReview].text}
                </p>

                {/* Review Images */}
                {reviews[activeReview].images.length > 0 && (
                  <div className="flex space-x-3 mb-4">
                    {reviews[activeReview].images.map((img, idx) => (
                      <motion.img
                        key={`review-img-${idx}`}
                        whileHover={{ scale: 1.1 }}
                        src={img}
                        alt={`Review by ${reviews[activeReview].name}`}
                        className="w-20 h-20 rounded-xl object-cover shadow-md cursor-pointer"
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Review Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <motion.button
                  key={`nav-dot-${index}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeReview ? 'bg-purple-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Social Media Feed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Social Buzz</h3>
              <p className="text-gray-600">See what people are sharing about us</p>
            </div>

            {socialPosts.map((post, index) => (
              <motion.div
                key={`social-post-${post.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <PlatformIcon platform={post.platform} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-gray-900">{post.user}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{post.text}</p>
                    {post.image && (
                      <img
                        src={post.image}
                        alt={`Post by ${post.user}`}
                        className="w-full h-32 object-cover rounded-xl mb-3"
                      />
                    )}
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <span>❤️</span>
                        <span>{typeof post.likes === 'number' ? post.likes : `${post.likes}k`}</span>
                      </span>
                      <span>💬 {Math.floor(Math.random() * 20) + 5}</span>
                      <span>🔄 {Math.floor(Math.random() * 15) + 2}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Follow CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center"
            >
              <h4 className="text-lg font-bold mb-2">Follow Us for More!</h4>
              <p className="text-purple-100 mb-4">Get the latest updates and behind-the-scenes content</p>
              <div className="flex justify-center space-x-4">
                {['📸', '🐦', '👥', '🎵'].map((icon, idx) => (
                  <motion.button
                    key={`social-icon-${idx}`}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl hover:bg-white/30 transition-all duration-300"
                  >
                    {icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-32 left-10 w-32 h-32 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-2xl"
      />
    </section>
  );
};

export default ReviewSection;