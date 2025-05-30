import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [hoveredItem, setHoveredItem] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    { id: 'popular', label: 'Most Popular', icon: '🔥' },
    { id: 'chicken', label: 'Chicken Specials', icon: '🍗' },
    { id: 'sides', label: 'Sides & More', icon: '🍟' },
    { id: 'desserts', label: 'Sweet Treats', icon: '🍰' }
  ];

  const menuItems = {
    popular: [
      {
        id: 1,
        name: "Signature Crispy Combo",
        description: "Our famous crispy chicken with secret spices, served with fries and coleslaw",
        price: "$12.99",
        originalPrice: "$15.99",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Bestseller",
        spiceLevel: 2,
        rating: 4.9,
        reviews: 2847
      },
      {
        id: 2,
        name: "Nashville Hot Wings",
        description: "Fiery hot wings with our Nashville-style sauce that'll make you sweat",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Spicy",
        spiceLevel: 4,
        rating: 4.7,
        reviews: 1923
      },
      {
        id: 3,
        name: "Family Feast Bucket",
        description: "Perfect for sharing! 12 pieces of mixed chicken with 4 sides of your choice",
        price: "$29.99",
        originalPrice: "$34.99",
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Family Size",
        rating: 4.8,
        reviews: 1456
      }
    ],
    chicken: [
      {
        id: 4,
        name: "Honey Glazed Thighs",
        description: "Juicy chicken thighs with our signature honey glaze and herbs",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Sweet",
        spiceLevel: 1,
        rating: 4.6,
        reviews: 892
      },
      {
        id: 5,
        name: "BBQ Chicken Sandwich",
        description: "Grilled chicken breast with smoky BBQ sauce on a brioche bun",
        price: "$7.99",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Grilled",
        spiceLevel: 1,
        rating: 4.5,
        reviews: 1234
      }
    ],
    sides: [
      {
        id: 6,
        name: "Loaded Mac & Cheese",
        description: "Creamy mac and cheese topped with bacon bits and crispy onions",
        price: "$4.99",
        image: "https://images.unsplash.com/photo-1543826173-c5bf8395fc11?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Comfort Food",
        rating: 4.4,
        reviews: 756
      }
    ],
    desserts: [
      {
        id: 7,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Indulgent",
        rating: 4.8,
        reviews: 445
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const SpiceIndicator = ({ level }) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full ${
            dot <= level ? 'bg-red-500' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 overflow-hidden">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-700 rounded-full text-sm font-semibold mb-4"
          >
            <span className="animate-pulse">⭐</span>
            Our Signature Dishes
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that keep our customers coming back for more
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems[activeCategory]?.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {item.badge}
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="text-center">
                    <div className="text-lg font-black text-gray-900">{item.price}</div>
                    {item.originalPrice && (
                      <div className="text-xs text-gray-500 line-through">{item.originalPrice}</div>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredItem === item.id ? 1 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
                  >
                    <span>🛒</span>
                    Add to Order
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Rating & Spice Level */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                      <span className="text-xs text-gray-500">({item.reviews})</span>
                    </div>
                  </div>
                  
                  {item.spiceLevel && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 font-medium">Heat:</span>
                      <SpiceIndicator level={item.spiceLevel} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg flex items-center gap-3 mx-auto"
          >
            <span className="text-xl">📋</span>
            View Full Menu
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 -left-20 w-40 h-40 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-red-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturedMenu;