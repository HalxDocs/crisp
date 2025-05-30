import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LocationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const locations = [
    {
      id: 1,
      name: "Victoria Island Flagship",
      address: "123 Adeola Odeku Street",
      city: "Victoria Island, Lagos",
      phone: "(+234) 812 345 6789",
      type: "flagship",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      hours: {
        "Mon-Thu": "10:00 AM - 10:00 PM",
        "Fri-Sat": "10:00 AM - 11:00 PM",
        "Sunday": "12:00 PM - 9:00 PM"
      },
      features: ["Dine-In", "Delivery", "Catering", "VIP Lounge"],
      specialties: ["Full Menu", "Live Kitchen", "Happy Hour"],
      coordinates: { lat: 6.4281, lng: 3.4219 },
      manager: "Adebayo Johnson",
      opening: "Est. 2015",
      size: "180 seats",
      badge: "🏆 FLAGSHIP"
    },
    {
      id: 2,
      name: "Lekki Express",
      address: "456 Admiralty Way",
      city: "Lekki Phase 1, Lagos",
      phone: "(+234) 813 456 7890",
      type: "express",
      image: "https://images.unsplash.com/photo-1552566916-a4b9ef79b6a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      hours: {
        "Mon-Fri": "7:00 AM - 9:00 PM",
        "Sat-Sun": "8:00 AM - 8:00 PM"
      },
      features: ["Quick Service", "Takeout", "Delivery", "Mobile Orders"],
      specialties: ["Express Menu", "Grab & Go", "Breakfast"],
      coordinates: { lat: 6.4433, lng: 3.4720 },
      manager: "Chioma Eze",
      opening: "Est. 2018",
      size: "50 seats",
      badge: "⚡ EXPRESS"
    },
    {
      id: 3,
      name: "Ikeja Family Center",
      address: "789 Allen Avenue",
      city: "Ikeja, Lagos",
      phone: "(+234) 814 567 8901",
      type: "family",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      hours: {
        "Daily": "10:00 AM - 10:00 PM"
      },
      features: ["Family Dining", "Kids Menu", "Play Area", "Birthday Parties"],
      specialties: ["Family Packs", "Kids Activities", "Weekend Brunch"],
      coordinates: { lat: 6.5965, lng: 3.3421 },
      manager: "Ngozi Okonkwo",
      opening: "Est. 2020",
      size: "150 seats",
      badge: "👨‍👩‍👧‍👦 FAMILY"
    },
    {
      id: 4,
      name: "Abuja Central",
      address: "321 Aminu Kano Crescent",
      city: "Wuse 2, Abuja",
      phone: "(+234) 815 678 9012",
      type: "tourist",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      hours: {
        "Daily": "10:00 AM - 11:00 PM"
      },
      features: ["Tourist Menu", "Cultural Dishes", "Photo Booth", "Souvenirs"],
      specialties: ["Nigerian Specials", "Local Combos", "Late Night"],
      coordinates: { lat: 9.0765, lng: 7.3986 },
      manager: "Emeka Okafor",
      opening: "Est. 2019",
      size: "120 seats",
      badge: "🗽 TOURIST"
    },
    {
      id: 5,
      name: "Food Truck Lagos",
      address: "Rotating Locations",
      city: "Follow us on social!",
      phone: "(+234) 816 789 0123",
      type: "truck",
      image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      hours: {
        "Mon-Fri": "11:30 AM - 8:00 PM",
        "Events": "Check Schedule"
      },
      features: ["Mobile Service", "Event Catering", "Corporate Lunch"],
      specialties: ["Street Food", "Festival Specials", "Quick Bites"],
      coordinates: { lat: 6.5244, lng: 3.3792 },
      manager: "Tunde Lawal",
      opening: "Est. 2021",
      size: "Mobile",
      badge: "🚚 MOBILE"
    },
    {
      id: 6,
      name: "MM2 Airport",
      address: "Murtala Muhammed Airport Terminal 2",
      city: "Ikeja, Lagos",
      phone: "(+234) 817 890 1234",
      type: "airport",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      hours: {
        "Daily": "6:00 AM - 10:00 PM"
      },
      features: ["Airport Dining", "Quick Service", "Grab & Go"],
      specialties: ["Travel Menu", "Breakfast All Day", "To-Go Packaging"],
      coordinates: { lat: 6.5774, lng: 3.3211 },
      manager: "Funke Adeleke",
      opening: "Est. 2022",
      size: "80 seats",
      badge: "✈️ AIRPORT"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Locations', icon: '📍' },
    { id: 'flagship', label: 'Flagship', icon: '🏆' },
    { id: 'family', label: 'Family-Friendly', icon: '👨‍👩‍👧‍👦' },
    { id: 'express', label: 'Quick Service', icon: '⚡' },
    { id: 'tourist', label: 'Tourist Areas', icon: '🗽' },
    { id: 'truck', label: 'Food Trucks', icon: '🚚' },
    { id: 'airport', label: 'Airport', icon: '✈️' }
  ];

  const filteredLocations = activeFilter === 'all' 
    ? locations 
    : locations.filter(location => location.type === activeFilter);

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

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const isOpenNow = (hours) => {
    const now = new Date().getHours();
    return now >= 10 && now <= 22;
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30 overflow-hidden relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 rounded-full text-sm font-semibold mb-4"
          >
            <span className="animate-pulse">📍</span>
            Find Us In Nigeria
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From Lagos to Abuja, find the perfect Crispy Crown experience near you
          </p>
        </motion.div>

        {/* Location Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg'
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Locations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredLocations.map((location, index) => (
            <motion.div
              key={location.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedLocation(index)}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {location.badge}
                </div>

                {/* Status */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  isOpenNow(location.hours) 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {isOpenNow(location.hours) ? '🟢 OPEN' : '🔴 CLOSED'}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: selectedLocation === index ? 1 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500">{location.opening} • {location.size}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-orange-500">📍</span>
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-orange-500">📱</span>
                    <span className="text-sm">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-orange-500">👤</span>
                    <span className="text-sm">Manager: {location.manager}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {location.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                  {location.features.length > 3 && (
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                      +{location.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Hours */}
                <div className="border-t pt-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Today's Hours:</div>
                  <div className="text-sm text-gray-600">
                    {Object.entries(location.hours)[0][1]}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-xl text-sm font-bold"
                  >
                    📍 Directions
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-xl text-sm font-bold"
                  >
                    📞 Call
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center relative overflow-hidden mb-12"
        >
          <div className="relative z-10">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold mb-4">Coming Soon</h3>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              We're expanding across Nigeria! New locations opening soon in these cities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="font-bold">Port Harcourt</div>
                <div className="text-purple-200 text-sm">Opening Q2 2024</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="font-bold">Kano</div>
                <div className="text-purple-200 text-sm">Opening Q3 2024</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div className="font-bold">Enugu</div>
                <div className="text-purple-200 text-sm">Opening Q4 2024</div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-2xl font-bold text-lg shadow-lg"
            >
              Get Notified First
            </motion.button>
          </div>
          
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Need Help Finding Us?</h3>
          <p className="text-gray-600 mb-6">Our Nigerian team is here to help you find the perfect location</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-lg flex items-center gap-2"
            >
              <span>📞</span>
              Call Customer Service
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-2xl shadow-lg flex items-center gap-2"
            >
              <span>💬</span>
              Live Chat Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-2xl shadow-lg flex items-center gap-2"
            >
              <span>📱</span>
              Download Our App
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl"></div>
    </section>
  );
};
 
export default LocationsSection;