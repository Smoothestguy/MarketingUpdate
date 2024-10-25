import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MetricCard from './MetricCard';
import MetricDetail from './MetricDetail';
import Tutorial from './Tutorial';

export default function Analytics() {
  const navigate = useNavigate();
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [showTutorial, setShowTutorial] = useState(true);

  const metrics = [
    {
      id: 'website',
      icon: '🌐',
      title: 'Website Analytics',
      description: 'Understanding your website performance',
      metrics: [
        { name: 'Page Views', description: 'Number of pages viewed by visitors' },
        { name: 'Session Duration', description: 'Average time spent on your site' },
        { name: 'Bounce Rate', description: 'Percentage of single-page visits' }
      ],
      tools: ['Google Analytics', 'Hotjar', 'Mixpanel'],
      bestPractices: [
        'Track user behavior flows',
        'Monitor conversion funnels',
        'Analyze traffic sources',
        'Set up goal tracking'
      ],
      proTips: [
        'Use segments to analyze different user groups',
        'Set up custom dashboards for quick insights',
        'Monitor mobile vs desktop performance'
      ]
    },
    {
      id: 'social',
      icon: '📱',
      title: 'Social Media Analytics',
      description: 'Measuring social media impact',
      metrics: [
        { name: 'Engagement Rate', description: 'Interactions with your content' },
        { name: 'Reach', description: 'Number of unique users seeing your content' },
        { name: 'Follower Growth', description: 'Rate of audience growth' }
      ],
      tools: ['Hootsuite', 'Buffer', 'Sprout Social'],
      bestPractices: [
        'Track engagement patterns',
        'Monitor audience growth',
        'Analyze content performance',
        'Measure brand mentions'
      ],
      proTips: [
        'Post at optimal times based on analytics',
        'Use A/B testing for content strategy',
        'Track competitor performance'
      ]
    },
    {
      id: 'email',
      icon: '📧',
      title: 'Email Marketing Analytics',
      description: 'Evaluating email campaign success',
      metrics: [
        { name: 'Open Rate', description: 'Percentage of recipients opening emails' },
        { name: 'Click-through Rate', description: 'Percentage clicking on links' },
        { name: 'Conversion Rate', description: 'Percentage taking desired action' }
      ],
      tools: ['Mailchimp', 'Klaviyo', 'Constant Contact'],
      bestPractices: [
        'Test subject lines',
        'Segment your audience',
        'Track engagement times',
        'Monitor list growth'
      ],
      proTips: [
        'Use automation for targeted campaigns',
        'Clean your email list regularly',
        'Optimize for mobile devices'
      ]
    },
    {
      id: 'conversion',
      icon: '🎯',
      title: 'Conversion Analytics',
      description: 'Tracking customer actions',
      metrics: [
        { name: 'Conversion Rate', description: 'Percentage completing desired actions' },
        { name: 'Cost per Conversion', description: 'Average cost to acquire a conversion' },
        { name: 'Revenue per Conversion', description: 'Average value of each conversion' }
      ],
      tools: ['Google Analytics', 'Mixpanel', 'Amplitude'],
      bestPractices: [
        'Define clear goals',
        'Track full conversion path',
        'Analyze drop-off points',
        'Monitor ROI'
      ],
      proTips: [
        'Use multi-channel attribution',
        'Set up micro-conversions',
        'Implement A/B testing'
      ]
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
              <h1 className="text-xl font-bold">Analytics Guide</h1>
            </div>
            {!showTutorial && (
              <button 
                onClick={() => setShowTutorial(true)}
                className="text-blue-600 hover:text-blue-700"
              >
                Show Guide
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showTutorial && <Tutorial onClose={() => setShowTutorial(false)} />}

        <div className="grid gap-6 md:grid-cols-2">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.id}
              {...metric}
              onClick={() => setSelectedMetric(metric)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedMetric && (
            <MetricDetail
              metric={selectedMetric}
              onClose={() => setSelectedMetric(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}