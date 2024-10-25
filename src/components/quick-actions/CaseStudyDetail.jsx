import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CaseStudyDetail({ study, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'strategy', label: 'Strategy', icon: '🎯' },
    { id: 'implementation', label: 'Implementation', icon: '⚙️' },
    { id: 'results', label: 'Results', icon: '📈' },
    { id: 'learnings', label: 'Key Learnings', icon: '💡' }
  ];

  const strategies = [
    { title: 'Research & Analysis', description: 'Comprehensive market research and competitor analysis' },
    { title: 'Target Audience', description: 'Detailed buyer persona development and audience segmentation' },
    { title: 'Channel Strategy', description: 'Multi-channel approach with focus on highest ROI channels' },
    { title: 'Content Planning', description: 'Strategic content calendar aligned with business goals' }
  ];

  const implementation = [
    { phase: 'Phase 1: Foundation', duration: '2 weeks', tasks: ['Market Research', 'Competitor Analysis', 'Strategy Development'] },
    { phase: 'Phase 2: Setup', duration: '3 weeks', tasks: ['Channel Setup', 'Content Creation', 'Team Training'] },
    { phase: 'Phase 3: Launch', duration: '1 week', tasks: ['Campaign Launch', 'Initial Testing', 'Performance Monitoring'] },
    { phase: 'Phase 4: Optimization', duration: '6 weeks', tasks: ['Data Analysis', 'Strategy Refinement', 'Performance Optimization'] }
  ];

  const keyLearnings = [
    { title: 'Data-Driven Decision Making', description: 'Using analytics to guide strategy adjustments and optimizations' },
    { title: 'Customer-Centric Approach', description: 'Focusing on customer needs and pain points for better engagement' },
    { title: 'Agile Implementation', description: 'Rapid testing and iteration for optimal results' },
    { title: 'Cross-Channel Integration', description: 'Synergizing multiple channels for maximum impact' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Challenge</h3>
              <p className="text-gray-600">{study.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Solution Approach</h3>
              <p className="text-gray-600">
                Implemented a comprehensive {study.category.toLowerCase()} strategy focusing on:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-500 mr-2">•</span>
                  Customer engagement and retention
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-500 mr-2">•</span>
                  Data-driven optimization
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-blue-500 mr-2">•</span>
                  Scalable growth strategies
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Key Results</h3>
              <div className="grid grid-cols-3 gap-4">
                {study.results.map((result, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                    <span className="text-blue-600 font-bold">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'strategy':
        return (
          <div className="space-y-6">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm"
              >
                <h4 className="font-semibold mb-2">{strategy.title}</h4>
                <p className="text-gray-600">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        );

      case 'implementation':
        return (
          <div className="space-y-6">
            {implementation.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{phase.phase}</h4>
                  <span className="text-sm text-gray-500">{phase.duration}</span>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center text-gray-600">
                      <span className="text-blue-500 mr-2">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        );

      case 'results':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Before Implementation</h4>
                {Object.entries(study.metrics.before).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center mb-3">
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">After Implementation</h4>
                {Object.entries(study.metrics.after).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center mb-3">
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="font-medium text-blue-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">ROI Analysis</h4>
              <div className="grid grid-cols-3 gap-4">
                {study.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">{result}</div>
                    <div className="text-sm text-gray-600">
                      {index === 0 ? 'Growth' : index === 1 ? 'Cost Reduction' : 'Efficiency'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'learnings':
        return (
          <div className="space-y-6">
            {keyLearnings.map((learning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm"
              >
                <h4 className="font-semibold mb-2">{learning.title}</h4>
                <p className="text-gray-600">{learning.description}</p>
              </motion.div>
            ))}

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Recommendations</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span className="text-gray-600">Start with thorough market research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span className="text-gray-600">Focus on data-driven decision making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span className="text-gray-600">Maintain consistent monitoring and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{study.image}</span>
              <div>
                <h2 className="text-2xl font-bold">{study.title}</h2>
                <p className="text-gray-600">{study.company}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>

          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {renderTabContent()}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Implementation Timeline: {study.timeline}</span>
            <span>Category: {study.category}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}