import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [showAchievementDetails, setShowAchievementDetails] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const stats = [
    { 
      label: 'Courses Completed', 
      value: 3,
      icon: '📚',
      color: 'from-blue-500 to-purple-500',
      details: ['Social Media Marketing', 'Content Strategy', 'Analytics Basics']
    },
    { 
      label: 'Achievements', 
      value: 12,
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500',
      details: ['Early Bird', 'Quick Learner', 'Community Star']
    },
    { 
      label: 'Community Posts', 
      value: 8,
      icon: '✍️',
      color: 'from-green-500 to-teal-500',
      details: ['8 Posts', '45 Likes', '12 Comments']
    }
  ];

  const sections = {
    settings: {
      icon: '⚙️',
      title: 'Settings',
      gradient: 'from-blue-600 to-indigo-600',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:border-blue-300"
                  defaultValue={userData?.fullName}
                  placeholder="Enter your display name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:border-blue-300"
                  defaultValue={userData?.email}
                  placeholder="Enter your email"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200"
              >
                Save Changes
              </motion.button>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" />
                <span>Email Notifications</span>
              </label>
              <label className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" />
                <span>Push Notifications</span>
              </label>
            </div>
          </div>
        </div>
      )
    },
    // ... [Previous sections code remains the same]
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/auth');
  };

  if (!userData) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button onClick={() => navigate(-1)} className="mr-4 text-gray-600 hover:text-gray-900 transition-colors">
                ←
              </button>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Profile
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
            >
              Edit
            </motion.button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl mb-6"
        >
          <div className="flex items-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg"
            >
              👤
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{userData.fullName}</h2>
              <p className="opacity-90">{userData.email}</p>
              {userData.provider && (
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mt-2">
                  {userData.provider} Account
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
              onClick={() => setShowAchievementDetails(stat)}
            >
              <div className={`text-3xl mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {activeSection ? (
            <div className="p-6">
              <div className="flex items-center mb-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveSection(null)}
                  className="mr-4 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ←
                </motion.button>
                <span className="text-2xl mr-3">{sections[activeSection].icon}</span>
                <h2 className="text-xl font-bold">{sections[activeSection].title}</h2>
              </div>
              {sections[activeSection].content}
            </div>
          ) : (
            <>
              {Object.entries(sections).map(([key, section], index) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSection(key)}
                  className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 transition-all duration-200 border-b border-gray-100 last:border-0"
                >
                  <span className="text-2xl">{section.icon}</span>
                  <span className="flex-1 text-left font-medium">{section.title}</span>
                  <motion.span
                    className="text-gray-400"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              ))}
            </>
          )}
        </motion.div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full mt-6 p-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-200"
        >
          Logout
        </motion.button>
      </div>

      {/* Achievement Details Modal */}
      <AnimatePresence>
        {showAchievementDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAchievementDetails(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{showAchievementDetails.icon}</span>
                  <h3 className="text-xl font-bold">{showAchievementDetails.label}</h3>
                </div>
                <button
                  onClick={() => setShowAchievementDetails(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3">
                {showAchievementDetails.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-blue-600">•</span>
                    <span>{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}