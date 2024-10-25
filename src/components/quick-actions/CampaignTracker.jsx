import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CampaignTracker() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showTutorial, setShowTutorial] = useState(true);

  const topics = [
    {
      id: 'basics',
      icon: '📋',
      title: 'Campaign Fundamentals',
      description: 'Understanding marketing campaign basics',
      content: {
        introduction: 'Marketing campaigns are strategic initiatives designed to promote products, services, or brands through various channels to achieve specific goals.',
        keyElements: [
          { name: 'Goals', description: 'Clear, measurable objectives for your campaign' },
          { name: 'Target Audience', description: 'Specific group of people you want to reach' },
          { name: 'Messaging', description: 'Core message and value proposition' },
          { name: 'Channels', description: 'Platforms used to reach your audience' }
        ],
        bestPractices: [
          'Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)',
          'Research your target audience thoroughly',
          'Create compelling and consistent messaging',
          'Choose appropriate marketing channels'
        ]
      }
    },
    {
      id: 'types',
      icon: '🎯',
      title: 'Campaign Types',
      description: 'Different types of marketing campaigns',
      content: {
        introduction: 'There are various types of marketing campaigns, each serving different purposes and utilizing different channels.',
        campaignTypes: [
          { name: 'Brand Awareness', description: 'Increase visibility and recognition of your brand' },
          { name: 'Lead Generation', description: 'Collect potential customer information' },
          { name: 'Product Launch', description: 'Introduce new products or services' },
          { name: 'Sales Promotion', description: 'Drive immediate sales through special offers' }
        ],
        examples: [
          'Email newsletters for nurturing leads',
          'Social media contests for engagement',
          'PPC advertising for direct response',
          'Content marketing for brand awareness'
        ]
      }
    },
    {
      id: 'planning',
      icon: '📅',
      title: 'Campaign Planning',
      description: 'Steps to plan effective campaigns',
      content: {
        introduction: 'Successful campaigns require careful planning and preparation. Follow these key steps:',
        planningSteps: [
          { name: 'Research', description: 'Market analysis and competitor research' },
          { name: 'Goal Setting', description: 'Define clear campaign objectives' },
          { name: 'Strategy Development', description: 'Create your campaign approach' },
          { name: 'Resource Allocation', description: 'Budget and resource planning' }
        ],
        timeline: [
          'Week 1-2: Research and Planning',
          'Week 3-4: Content Creation',
          'Week 5: Campaign Setup',
          'Week 6+: Launch and Monitor'
        ]
      }
    },
    {
      id: 'measurement',
      icon: '📊',
      title: 'Campaign Measurement',
      description: 'Tracking and measuring campaign success',
      content: {
        introduction: 'Measuring campaign performance is crucial for success and optimization.',
        metrics: [
          { name: 'Reach', description: 'Number of people who see your campaign' },
          { name: 'Engagement', description: 'How people interact with your content' },
          { name: 'Conversions', description: 'Desired actions completed' },
          { name: 'ROI', description: 'Return on investment' }
        ],
        tools: [
          'Google Analytics for web tracking',
          'Social media analytics tools',
          'Email marketing platforms',
          'CRM systems'
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

      {topic.content.keyElements && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Key Elements</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.content.keyElements.map((element, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-1">{element.name}</h5>
                <p className="text-sm text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.content.campaignTypes && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Campaign Types</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.content.campaignTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-1">{type.name}</h5>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.content.planningSteps && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Planning Steps</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.content.planningSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-1">{step.name}</h5>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.content.metrics && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Key Metrics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.content.metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-1">{metric.name}</h5>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {topic.content.bestPractices && (
        <div className="bg-green-50 p-6 rounded-lg mb-6">
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

      {topic.content.examples && (
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="font-bold mb-3">Examples</h4>
          <ul className="space-y-2">
            {topic.content.examples.map((example, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600">{example}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {topic.content.timeline && (
        <div className="bg-purple-50 p-6 rounded-lg">
          <h4 className="font-bold mb-3">Sample Timeline</h4>
          <ul className="space-y-2">
            {topic.content.timeline.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">→</span>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {topic.content.tools && (
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h4 className="font-bold mb-3">Recommended Tools</h4>
          <ul className="space-y-2">
            {topic.content.tools.map((tool, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-gray-600">{tool}</span>
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
              <h1 className="text-xl font-bold">Campaign Guide</h1>
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
              <h3 className="text-lg font-bold">Welcome to Campaign Guide</h3>
              <button 
                onClick={() => setShowTutorial(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Learn how to create and manage successful marketing campaigns.
              This guide covers everything from basic concepts to advanced strategies.
              Click on any topic below to learn more.
            </p>
            <div className="flex items-center text-sm text-blue-600">
              <span className="mr-2">💡</span>
              Start with Campaign Fundamentals if you're new to marketing campaigns
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