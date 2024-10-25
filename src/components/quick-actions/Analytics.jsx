import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Analytics() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showTutorial, setShowTutorial] = useState(true);

  const topics = [
    {
      id: 'basics',
      icon: '📊',
      title: 'Analytics Basics',
      description: 'Understanding key metrics and their importance',
      content: {
        introduction: 'Analytics helps you measure and understand your marketing performance. By tracking the right metrics, you can make data-driven decisions to improve your strategy.',
        keyMetrics: [
          { name: 'Page Views', description: 'The total number of pages viewed on your website' },
          { name: 'Unique Visitors', description: 'Number of individual users visiting your site' },
          { name: 'Bounce Rate', description: 'Percentage of visitors who leave after viewing only one page' },
          { name: 'Session Duration', description: 'Average time users spend on your site' }
        ],
        importance: 'These metrics help you understand user behavior and identify areas for improvement in your marketing strategy.'
      }
    },
    {
      id: 'tracking',
      icon: '🎯',
      title: 'Setting Up Tracking',
      description: 'Learn how to implement analytics tracking',
      content: {
        introduction: "Proper tracking setup is crucial for collecting accurate data. Here's how to get started:",
        steps: [
          'Install analytics code on your website',
          'Set up goal tracking for important actions',
          'Configure event tracking for user interactions',
          'Implement conversion tracking'
        ],
        tools: [
          { name: 'Google Analytics', use: 'Comprehensive website analytics' },
          { name: 'Facebook Pixel', use: 'Social media advertising tracking' },
          { name: 'Hotjar', use: 'User behavior and heatmap tracking' }
        ]
      }
    },
    {
      id: 'reporting',
      icon: '📈',
      title: 'Reading Reports',
      description: 'Understanding analytics reports and insights',
      content: {
        introduction: 'Analytics reports provide valuable insights into your marketing performance. Learn how to interpret different types of reports:',
        reportTypes: [
          { name: 'Audience Reports', description: 'Who is visiting your site' },
          { name: 'Acquisition Reports', description: 'How users find your site' },
          { name: 'Behavior Reports', description: 'What users do on your site' },
          { name: 'Conversion Reports', description: 'How well you achieve your goals' }
        ],
        tips: [
          'Focus on trends rather than absolute numbers',
          'Compare data across different time periods',
          'Look for correlations between metrics',
          'Use segments to analyze specific user groups'
        ]
      }
    },
    {
      id: 'optimization',
      icon: '⚡',
      title: 'Data-Driven Optimization',
      description: 'Using analytics to improve performance',
      content: {
        introduction: 'Learn how to use analytics data to optimize your marketing efforts:',
        strategies: [
          { name: 'A/B Testing', description: 'Test different versions to find what works best' },
          { name: 'Content Optimization', description: 'Improve content based on user engagement' },
          { name: 'Conversion Rate Optimization', description: 'Enhance user experience to increase conversions' },
          { name: 'Channel Optimization', description: 'Focus on your most effective marketing channels' }
        ],
        bestPractices: [
          'Set clear goals before making changes',
          'Test one variable at a time',
          'Allow sufficient time for data collection',
          'Document your optimization efforts'
        ]
      }
    }
  ];

  const TopicDetail = ({ topic }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm mt-6"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
        <p className="text-gray-600">{topic.content.introduction}</p>
      </div>

      {topic.content.keyMetrics && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Key Metrics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.content.keyMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-1">{metric.name}</h5>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.content.steps && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Implementation Steps</h4>
          <div className="space-y-2">
            {topic.content.steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <span className="text-blue-500 mr-2">{index + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.content.tools && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Recommended Tools</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topic.content.tools.map((tool, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-1">{tool.name}</h5>
                <p className="text-sm text-gray-600">{tool.use}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.content.reportTypes && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Types of Reports</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.content.reportTypes.map((report, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-1">{report.name}</h5>
                <p className="text-sm text-gray-600">{report.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.content.strategies && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Optimization Strategies</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.content.strategies.map((strategy, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-1">{strategy.name}</h5>
                <p className="text-sm text-gray-600">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.content.tips && (
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h4 className="font-bold mb-3">Pro Tips</h4>
          <ul className="space-y-2">
            {topic.content.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-gray-600">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {topic.content.bestPractices && (
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-bold mb-3">Best Practices</h4>
          <ul className="space-y-2">
            {topic.content.bestPractices.map((practice, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">{practice}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button onClick={() => navigate(-1)} className="mr-4">
                ←
              </button>
              <h1 className="text-xl font-bold">Analytics Guide</h1>
            </div>
            {!showTutorial && (
              <button 
                onClick={() => setShowTutorial(true)}
                className="text-blue-600 hover:text-blue-700"
              >
                Show Introduction
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showTutorial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-blue-50 p-6 rounded-xl mb-8"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold">Welcome to Analytics Guide</h3>
              <button 
                onClick={() => setShowTutorial(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Learn how to use analytics to measure and improve your marketing performance.
              This guide covers everything from basic concepts to advanced optimization techniques.
              Click on any topic below to learn more.
            </p>
            <div className="flex items-center text-sm text-blue-600">
              <span className="mr-2">💡</span>
              Start with Analytics Basics if you're new to marketing analytics
            </div>
          </motion.div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedTopic(topic)}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{topic.icon}</span>
                <div>
                  <h3 className="font-bold text-lg">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedTopic && <TopicDetail topic={selectedTopic} />}
      </div>
    </div>
  );
}