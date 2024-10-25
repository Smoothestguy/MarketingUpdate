import { motion } from 'framer-motion';

export default function GoalMetrics({ category }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-3">Key Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-medium text-gray-900">{metric.name}</h4>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Recommended Strategies</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ul className="space-y-2">
            {category.strategies.map((strategy, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Key Performance Indicators</h3>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="space-y-2">
            {category.kpis.map((kpi, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">📊</span>
                <span className="text-gray-700">{kpi}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Example Goals</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {category.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-green-50 p-4 rounded-lg"
            >
              <h4 className="font-medium text-gray-900 mb-1">{example.title}</h4>
              <p className="text-sm text-green-600">{example.target}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}