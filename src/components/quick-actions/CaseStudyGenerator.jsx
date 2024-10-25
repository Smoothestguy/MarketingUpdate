import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CaseStudyGenerator({ onClose, onGenerate }) {
  const [formData, setFormData] = useState({
    industry: 'Healthcare',
    marketingChannel: 'SEO',
    businessSize: 'Enterprise',
    primaryGoal: 'Build Brand Awareness'
  });

  const industries = [
    'Healthcare', 'Technology', 'E-commerce', 'Education', 
    'Finance', 'Real Estate', 'Manufacturing', 'Retail'
  ];

  const marketingChannels = [
    'SEO', 'Social Media', 'Email Marketing', 'Content Marketing',
    'PPC', 'Influencer Marketing', 'Video Marketing', 'Affiliate Marketing'
  ];

  const businessSizes = [
    'Startup', 'Small Business', 'Medium Business', 'Enterprise'
  ];

  const goals = [
    'Increase Revenue', 'Build Brand Awareness', 'Generate Leads',
    'Improve Customer Retention', 'Enter New Market', 'Launch New Product'
  ];

  const industryPrefixes = {
    Healthcare: ['Health', 'Care', 'Med', 'Vital'],
    Technology: ['Tech', 'Digital', 'Smart', 'Cloud'],
    'E-commerce': ['Shop', 'Store', 'Market', 'Buy'],
    Education: ['Edu', 'Learn', 'Study', 'Teach'],
    Finance: ['Fin', 'Money', 'Capital', 'Wealth'],
    'Real Estate': ['Home', 'Property', 'Estate', 'Realty'],
    Manufacturing: ['Manu', 'Build', 'Craft', 'Make'],
    Retail: ['Shop', 'Store', 'Retail', 'Mart']
  };

  const generateTitle = (data) => {
    const titles = {
      SEO: ['Organic Growth Success', 'SEO Transformation', 'Search Rankings Breakthrough'],
      'Social Media': ['Social Media Revolution', 'Social Engagement Success', 'Brand Social Impact'],
      'Email Marketing': ['Email Campaign Victory', 'Newsletter Success Story', 'Email ROI Breakthrough'],
      'Content Marketing': ['Content Strategy Win', 'Content Marketing Success', 'Digital Content Impact'],
      PPC: ['PPC Campaign Success', 'Paid Search Victory', 'Ad Performance Win'],
      'Influencer Marketing': ['Influencer Success Story', 'Brand Ambassador Win', 'Social Proof Victory'],
      'Video Marketing': ['Video Content Success', 'Visual Story Impact', 'Video Marketing Win'],
      'Affiliate Marketing': ['Partnership Success', 'Affiliate Growth Story', 'Network Marketing Win']
    };

    const channelTitles = titles[data.marketingChannel] || titles['Content Marketing'];
    return `${data.industry} ${channelTitles[Math.floor(Math.random() * channelTitles.length)]}`;
  };

  const generateCompanyName = (data) => {
    const prefixes = industryPrefixes[data.industry] || ['Biz', 'Pro', 'Global', 'Prime'];
    const suffixes = ['Pro', 'Plus', 'Solutions', 'Group', 'Hub', 'Network'];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    return `${prefix}${suffix}`;
  };

  const generateResults = (data) => {
    const baseMetrics = {
      'Increase Revenue': ['+120% Revenue Growth', '-30% CAC', '+45% ROI'],
      'Build Brand Awareness': ['+200% Social Reach', '+150% Engagement', '+80% Brand Mentions'],
      'Generate Leads': ['+180% Lead Generation', '-25% Cost per Lead', '+90% Lead Quality'],
      'Improve Customer Retention': ['+60% Customer Retention', '-40% Churn Rate', '+75% Customer Satisfaction'],
      'Enter New Market': ['+150% Market Share', '+200% New Users', '+90% Geographic Reach'],
      'Launch New Product': ['+300% Product Adoption', '+175% Sales Growth', '+95% Market Response']
    };

    return baseMetrics[data.primaryGoal] || baseMetrics['Increase Revenue'];
  };

  const generateMetrics = (data) => {
    const baseMetrics = {
      'Increase Revenue': {
        before: { revenue: '$50K/month', cac: '$45', roi: '150%' },
        after: { revenue: '$110K/month', cac: '$31.5', roi: '217%' }
      },
      'Build Brand Awareness': {
        before: { reach: '10K/month', engagement: '2%', mentions: '50/month' },
        after: { reach: '30K/month', engagement: '5%', mentions: '150/month' }
      },
      'Generate Leads': {
        before: { leads: '100/month', cpl: '$50', quality: '40%' },
        after: { leads: '280/month', cpl: '$37.5', quality: '76%' }
      },
      'Improve Customer Retention': {
        before: { retention: '65%', churn: '35%', satisfaction: '70%' },
        after: { retention: '85%', churn: '15%', satisfaction: '92%' }
      },
      'Enter New Market': {
        before: { marketShare: '0%', users: '0', reach: 'Local' },
        after: { marketShare: '15%', users: '10K+', reach: 'Regional' }
      },
      'Launch New Product': {
        before: { adoption: '0', sales: '$0', awareness: '0%' },
        after: { adoption: '5K users', sales: '$250K', awareness: '45%' }
      }
    };

    return baseMetrics[data.primaryGoal] || baseMetrics['Increase Revenue'];
  };

  const generateDescription = (data) => {
    return `How a ${data.businessSize.toLowerCase()} ${data.industry.toLowerCase()} company achieved remarkable growth through strategic ${data.marketingChannel.toLowerCase()} initiatives, focusing on ${data.primaryGoal.toLowerCase()}.`;
  };

  const generateTimeline = () => {
    const months = [3, 4, 5, 6, 8, 12];
    return `${months[Math.floor(Math.random() * months.length)]} months`;
  };

  const selectImage = (channel) => {
    const images = {
      SEO: '🔍',
      'Social Media': '📱',
      'Email Marketing': '📧',
      'Content Marketing': '📝',
      PPC: '💰',
      'Influencer Marketing': '🎯',
      'Video Marketing': '🎥',
      'Affiliate Marketing': '🤝'
    };
    return images[channel] || '📊';
  };

  const generateCaseStudy = (data) => {
    return {
      id: Date.now(),
      title: generateTitle(data),
      company: generateCompanyName(data),
      category: data.marketingChannel,
      results: generateResults(data),
      description: generateDescription(data),
      metrics: generateMetrics(data),
      timeline: generateTimeline(),
      image: selectImage(data.marketingChannel)
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCaseStudy = generateCaseStudy(formData);
    onGenerate(newCaseStudy);
    onClose();
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
        className="bg-white rounded-xl max-w-md w-full p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Generate Custom Case Study</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Marketing Channel
            </label>
            <select
              value={formData.marketingChannel}
              onChange={(e) => setFormData(prev => ({ ...prev, marketingChannel: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {marketingChannels.map(channel => (
                <option key={channel} value={channel}>{channel}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Size
            </label>
            <select
              value={formData.businessSize}
              onChange={(e) => setFormData(prev => ({ ...prev, businessSize: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {businessSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Goal
            </label>
            <select
              value={formData.primaryGoal}
              onChange={(e) => setFormData(prev => ({ ...prev, primaryGoal: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {goals.map(goal => (
                <option key={goal} value={goal}>{goal}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Generate Case Study
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}