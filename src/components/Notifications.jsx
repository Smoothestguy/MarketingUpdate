import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'achievement',
      icon: '🏆',
      title: 'Achievement Unlocked!',
      message: 'Completed your first marketing campaign',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'reminder',
      icon: '⏰',
      title: 'Course Reminder',
      message: 'Continue your "Social Media Marketing" course',
      time: '5 hours ago'
    },
    {
      id: 3,
      type: 'social',
      icon: '👋',
      title: 'New Connection',
      message: 'Sarah K. started following you',
      time: '1 day ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button onClick={() => navigate(-1)} className="mr-4">
                ←
              </button>
              <h1 className="text-xl font-bold">Notifications</h1>
            </div>
            <button className="text-blue-600 text-sm font-medium">
              Mark all as read
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{notification.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                  <p className="text-gray-600">{notification.message}</p>
                  <span className="text-sm text-gray-500">{notification.time}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-500">⋯</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}