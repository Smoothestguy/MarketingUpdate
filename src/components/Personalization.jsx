import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Personalization() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessType: '',
    industry: '',
    businessSize: '',
    goals: []
  });

  const businessTypes = ['Small Business', 'Startup', 'Enterprise', 'Freelancer'];
  const industries = ['Technology', 'Retail', 'Healthcare', 'Education', 'Finance', 'Other'];
  const businessSizes = ['1-10', '11-50', '51-200', '201+'];
  const marketingGoals = [
    'Generate Leads',
    'Build Brand Awareness',
    'Increase Sales',
    'Improve Online Presence',
    'Engage Current Customers'
  ];

  const handleGoalToggle = (goal) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userPreferences', JSON.stringify(formData));
    navigate('/home');
  };

  const handleSkip = () => {
    localStorage.setItem('userPreferences', JSON.stringify({
      skipped: true,
      businessType: 'Not Specified',
      industry: 'Not Specified',
      businessSize: 'Not Specified',
      goals: ['Not Specified']
    }));
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Customize Your Experience
          </h2>
          <p className="text-gray-600">
            Help us personalize your marketing journey
          </p>
          <p className="text-sm text-gray-500 mt-2">
            All fields are optional
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Type
            </label>
            <select
              value={formData.businessType}
              onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select Business Type (Optional)</option>
              {businessTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select Industry (Optional)</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Size
            </label>
            <select
              value={formData.businessSize}
              onChange={(e) => setFormData(prev => ({ ...prev, businessSize: e.target.value }))}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select Business Size (Optional)</option>
              {businessSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marketing Goals (Optional)
            </label>
            <div className="space-y-2">
              {marketingGoals.map(goal => (
                <label key={goal} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.goals.includes(goal)}
                    onChange={() => handleGoalToggle(goal)}
                    className="rounded border-gray-300 text-blue-600 mr-2"
                  />
                  <span className="text-gray-700">{goal}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Save & Continue
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="button"
              onClick={handleSkip}
              className="w-full bg-gray-100 text-gray-600 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Skip Personalization
            </motion.button>

            <p className="text-xs text-center text-gray-500">
              You can always update these preferences later in your profile settings
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}