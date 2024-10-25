import { motion } from 'framer-motion';

export default function MetricCard({ title, description, icon, metrics, tools, bestPractices, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      <div className="space-y-2">
        {metrics.slice(0, 2).map((metric, idx) => (
          <div key={idx} className="flex items-center text-sm text-gray-600">
            <span className="text-blue-500 mr-2">•</span>
            {metric.name}
          </div>
        ))}
        <div className="text-sm text-blue-600">+ more metrics</div>
      </div>
    </motion.div>
  );
}