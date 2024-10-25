import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';

export default function MetricDetail({ metric, onClose }) {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sample Data',
      data: [65, 72, 68, 78, 82, 85],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.4
    }]
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
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <span className="text-4xl mr-4">{metric.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{metric.title}</h2>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Key Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {metric.metrics.map((m, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-1">{m.name}</h4>
                  <p className="text-sm text-gray-600">{m.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Sample Data</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <Line data={chartData} options={{ responsive: true }} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Recommended Tools</h3>
            <div className="flex flex-wrap gap-2">
              {metric.tools.map((tool, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Best Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {metric.bestPractices.map((practice, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">{practice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Pro Tips</h3>
            <ul className="space-y-3">
              {metric.proTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}