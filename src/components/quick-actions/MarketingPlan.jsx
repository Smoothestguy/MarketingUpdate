import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function MarketingPlan() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'goals',
      icon: '📝',
      title: 'Define Goals',
      description: 'Set clear, measurable marketing objectives',
      fields: [
        { label: 'Primary Goal', type: 'text', placeholder: 'e.g., Increase website traffic' },
        { label: 'Target Metric', type: 'text', placeholder: 'e.g., 50,000 monthly visitors' },
        { label: 'Timeline', type: 'date' }
      ]
    },
    {
      id: 'audience',
      icon: '🎯',
      title: 'Target Audience',
      description: 'Identify and analyze your ideal customers',
      fields: [
        { label: 'Demographics', type: 'text', placeholder: 'Age, location, interests' },
        { label: 'Pain Points', type: 'textarea', placeholder: 'What problems do they face?' },
        { label: 'Buying Behavior', type: 'text', placeholder: 'How do they make purchase decisions?' }
      ]
    },
    {
      id: 'budget',
      icon: '💰',
      title: 'Budget Planning',
      description: 'Allocate resources effectively',
      fields: [
        { label: 'Total Budget', type: 'number', placeholder: 'Enter amount' },
        { label: 'Time Period', type: 'select', options: ['Monthly', 'Quarterly', 'Annually'] },
        { label: 'Channel Distribution', type: 'text', placeholder: 'How will you split the budget?' }
      ]
    },
    {
      id: 'strategy',
      icon: '📊',
      title: 'Strategy Development',
      description: 'Choose channels and tactics',
      fields: [
        { label: 'Marketing Channels', type: 'multiselect', options: ['Social Media', 'Email', 'Content Marketing', 'SEO', 'Paid Ads'] },
        { label: 'Key Messages', type: 'textarea', placeholder: 'What are your main selling points?' },
        { label: 'Success Metrics', type: 'text', placeholder: 'How will you measure success?' }
      ]
    }
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const handleSubmit = (e, section) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log(`Submitting ${section.title} form`);
    setActiveSection(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigate(-1)} 
                className="mr-4 text-gray-600 hover:text-gray-900"
              >
                ←
              </button>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Marketing Plan
              </h1>
            </div>
            <button className="text-blue-600 text-sm font-medium">
              Save Plan
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-4">Create Your Marketing Plan</h2>
          <p className="text-gray-600 mb-6">
            Build a comprehensive marketing strategy tailored to your business goals.
          </p>
          
          <div className="space-y-4">
            {sections.map((section) => (
              <motion.div key={section.id} layout>
                <motion.button
                  onClick={() => handleSectionClick(section.id)}
                  className="w-full text-left"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className={`p-4 rounded-xl transition-colors ${
                    activeSection === section.id ? 'bg-blue-50 ring-2 ring-blue-500' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{section.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                        <p className="text-sm text-gray-600">{section.description}</p>
                      </div>
                      <span className={`transform transition-transform ${
                        activeSection === section.id ? 'rotate-180' : ''
                      }`}>
                        ▼
                      </span>
                    </div>
                  </div>
                </motion.button>

                {activeSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 bg-white rounded-xl border border-gray-200"
                  >
                    <form onSubmit={(e) => handleSubmit(e, section)} className="space-y-4">
                      {section.fields.map((field, index) => (
                        <div key={index} className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            {field.label}
                          </label>
                          {field.type === 'textarea' ? (
                            <textarea
                              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder={field.placeholder}
                              rows={3}
                            />
                          ) : field.type === 'select' ? (
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                              {field.options.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : field.type === 'multiselect' ? (
                            <div className="space-y-2">
                              {field.options.map((option) => (
                                <label key={option} className="flex items-center space-x-2">
                                  <input type="checkbox" className="rounded text-blue-600" />
                                  <span>{option}</span>
                                </label>
                              ))}
                            </div>
                          ) : (
                            <input
                              type={field.type}
                              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder={field.placeholder}
                            />
                          )}
                        </div>
                      ))}
                      <div className="flex justify-end space-x-2 pt-4">
                        <button
                          type="button"
                          onClick={() => setActiveSection(null)}
                          className="px-4 py-2 text-gray-600 hover:text-gray-900"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          Save {section.title}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}