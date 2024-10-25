import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ fullName: 'Marketer' });
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const learningPaths = [
    {
      title: "Marketing Fundamentals",
      description: "Master the core principles of digital marketing",
      progress: 35,
      modules: 12,
      timeEstimate: "4-6 weeks",
      icon: "🎯",
      path: "/learn/fundamentals"
    },
    {
      title: "Content Strategy Mastery",
      description: "Create compelling content that drives engagement",
      progress: 20,
      modules: 8,
      timeEstimate: "3-4 weeks",
      icon: "📝",
      path: "/learn/content-strategy"
    },
    {
      title: "Analytics & Data",
      description: "Make data-driven marketing decisions",
      progress: 15,
      modules: 10,
      timeEstimate: "4-5 weeks",
      icon: "📊",
      path: "/learn/analytics"
    }
  ];

  const quickActions = [
    { icon: '📋', title: 'Marketing Plan', path: '/marketing-plan', color: 'bg-purple-100', description: 'Create your strategic marketing roadmap' },
    { icon: '📊', title: 'Track Campaign', path: '/campaign-tracker', color: 'bg-blue-100', description: 'Monitor your campaign performance' },
    { icon: '📚', title: 'Case Studies', path: '/case-studies', color: 'bg-green-100', description: 'Learn from real success stories' },
    { icon: '📈', title: 'Analytics', path: '/analytics', color: 'bg-yellow-100', description: 'Analyze your marketing metrics' }
  ];

  const communityDiscussions = [
    {
      title: "Social Media Strategy Tips",
      participants: 15,
      path: "/community/social-media-strategy"
    },
    {
      title: "Content Creation Workshop",
      participants: 8,
      path: "/community/content-creation"
    }
  ];

  const dailyTips = [
    "Engage with your audience through storytelling",
    "Use data to inform your content strategy",
    "Focus on value before promotion",
    "Test and optimize continuously"
  ];

  const navigationItems = [
    { icon: '🏠', label: 'Home', path: '/home', active: true },
    { icon: '📚', label: 'Learn', path: '/learn' },
    { icon: '🎯', label: 'Goals', path: '/goals' },
    { icon: '👥', label: 'Community', path: '/community' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-display font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Marketing Academy
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/notifications')}
                className="relative p-2 rounded-full hover:bg-gray-100"
              >
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                <span className="text-xl">🔔</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/profile')}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <span className="text-xl">👤</span>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-lg"
        >
          <h2 className="text-3xl font-display font-bold mb-3">Welcome back, {userData.fullName}!</h2>
          <p className="opacity-90 text-lg mb-4">Ready to continue your marketing journey?</p>
          <div className="flex items-center bg-white bg-opacity-10 rounded-lg p-4">
            <span className="text-2xl mr-3">💡</span>
            <p className="text-sm">
              Daily Tip: {dailyTips[Math.floor(Math.random() * dailyTips.length)]}
            </p>
          </div>
        </motion.div>

        {/* Learning Paths */}
        <section className="mb-12">
          <h3 className="section-title">Your Learning Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="learning-card cursor-pointer"
                onClick={() => navigate(path.path)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{path.icon}</span>
                  <span className="text-sm text-gray-500">{path.timeEstimate}</span>
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">{path.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                <div className="progress-bar mb-2">
                  <div className="progress-value" style={{ width: `${path.progress}%` }} />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-600 font-medium">{path.progress}% Complete</span>
                  <span className="text-gray-500">{path.modules} Modules</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h3 className="section-title">Marketing Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => navigate(action.path)}
                className={`quick-action-card ${action.color} text-left`}
              >
                <div className="text-3xl mb-3">{action.icon}</div>
                <h4 className="font-display font-semibold mb-2">{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Community Highlights */}
        <section>
          <h3 className="section-title">Community Highlights</h3>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display font-semibold">Active Discussions</h4>
              <button 
                onClick={() => navigate('/community')}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All →
              </button>
            </div>
            <div className="space-y-4">
              {communityDiscussions.map((discussion, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => navigate(discussion.path)}
                >
                  <div>
                    <h5 className="font-medium mb-1">{discussion.title}</h5>
                    <p className="text-sm text-gray-600">{discussion.participants} marketers participating</p>
                  </div>
                  <span className="text-blue-600">→</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-around py-2">
            {navigationItems.map((item, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(item.path)}
                className={`nav-item ${item.active ? 'nav-item-active' : 'nav-item-inactive'}`}
              >
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}