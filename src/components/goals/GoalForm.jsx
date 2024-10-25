import { motion } from 'framer-motion';
import { useState } from 'react';

export default function GoalForm({ category, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    target: '',
    dueDate: '',
    description: '',
    metrics: {},
    milestones: []
  });

  const [milestoneInput, setMilestoneInput] = useState('');

  const handleAddMilestone = () => {
    if (milestoneInput.trim()) {
      setFormData(prev => ({
        ...prev,
        milestones: [...prev.milestones, {
          description: milestoneInput,
          completed: false
        }]
      }));
      setMilestoneInput('');
    }
  };

  const handleMetricChange = (metricName, value) => {
    setFormData(prev => ({
      ...prev,
      metrics: {
        ...prev.metrics,
        [metricName]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      category: category.id,
      progress: 0,
      createdAt: new Date().toISOString()
    });
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
        className="bg-white rounded-xl max-w-2xl w-full p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold">Create {category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Goal Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder={`e.g., ${category.examples[0].title}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target
            </label>
            <input
              type="text"
              required
              value={formData.target}
              onChange={e => setFormData(prev => ({ ...prev, target: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder={`e.g., ${category.examples[0].target}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              type="date"
              required
              value={formData.dueDate}
              onChange={e => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Key Metrics
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.metrics.map((metric, index) => (
                <div key={index}>
                  <label className="block text-sm text-gray-600 mb-1">
                    {metric.name}
                  </label>
                  <input
                    type="text"
                    value={formData.metrics[metric.name] || ''}
                    onChange={e => handleMetricChange(metric.name, e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder={metric.description}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Milestones
            </label>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                value={milestoneInput}
                onChange={e => setMilestoneInput(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Add a milestone"
              />
              <button
                type="button"
                onClick={handleAddMilestone}
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
              >
                Add
              </button>
            </div>
            <ul className="space-y-2">
              {formData.milestones.map((milestone, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-gray-600">•</span>
                  <span>{milestone.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Describe your goal and strategy..."
            />
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
              Create Goal
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}