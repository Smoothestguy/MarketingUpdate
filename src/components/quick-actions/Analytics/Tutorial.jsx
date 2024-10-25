import { motion } from 'framer-motion';

export default function Tutorial({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-blue-50 p-6 rounded-xl mb-8"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold">Getting Started with Analytics</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        Analytics helps you make data-driven decisions by tracking and measuring your marketing efforts.
        Each section below covers key metrics, tools, and best practices for different marketing channels.
      </p>
      <div className="flex items-center text-sm text-blue-600">
        <span className="mr-2">💡</span>
        Click on any metric card to learn more about it
      </div>
    </motion.div>
  );
}