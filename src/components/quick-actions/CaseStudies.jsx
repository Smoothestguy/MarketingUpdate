import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CaseStudyGenerator from './CaseStudyGenerator';
import CaseStudyDetail from './CaseStudyDetail';

export default function CaseStudies() {
  const navigate = useNavigate();
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [showGenerator, setShowGenerator] = useState(false);
  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1,
      title: 'E-commerce Success Story',
      company: 'Fashion Retailer',
      category: 'Social Media',
      results: ['+150% Revenue Growth', '-25% CAC', '+45% CLV'],
      description: 'How a small fashion retailer achieved exponential growth through social media marketing.',
      metrics: {
        before: { revenue: '$50K/month', cac: '$45', clv: '$120' },
        after: { revenue: '$125K/month', cac: '$34', clv: '$174' }
      },
      timeline: '6 months',
      image: '🛍️'
    },
    {
      id: 2,
      title: 'B2B Lead Generation',
      company: 'Tech Startup',
      category: 'Content Marketing',
      results: ['3x Lead Generation', '+85% Lead Quality', '-30% Cost per Lead'],
      description: 'Strategic content marketing campaign that tripled qualified leads.',
      metrics: {
        before: { leads: '50/month', quality: '35%', cpl: '$75' },
        after: { leads: '150/month', quality: '65%', cpl: '$52' }
      },
      timeline: '4 months',
      image: '💡'
    },
    {
      id: 3,
      title: 'SaaS Growth Strategy',
      company: 'CloudTech Solutions',
      category: 'Email Marketing',
      results: ['+200% Trial Signups', '-40% CAC', '+75% Conversion Rate'],
      description: 'Email marketing automation that transformed trial conversion rates.',
      metrics: {
        before: { signups: '100/month', cac: '$85', conversion: '15%' },
        after: { signups: '300/month', cac: '$51', conversion: '26%' }
      },
      timeline: '5 months',
      image: '📈'
    }
  ]);

  const handleGenerateStudy = (generatedStudy) => {
    setCaseStudies(prev => [generatedStudy, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button onClick={() => navigate(-1)} className="mr-4">
                ←
              </button>
              <h1 className="text-xl font-bold">Case Studies</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowGenerator(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Generate Study +
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedStudy(study)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{study.image}</span>
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {study.category}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{study.title}</h3>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">{study.company}</span>
                <span className="font-medium text-green-600">{study.results[0]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyDetail
            study={selectedStudy}
            onClose={() => setSelectedStudy(null)}
          />
        )}
        {showGenerator && (
          <CaseStudyGenerator
            onClose={() => setShowGenerator(false)}
            onGenerate={handleGenerateStudy}
          />
        )}
      </AnimatePresence>
    </div>
  );
}