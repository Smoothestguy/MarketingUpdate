import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const slides = [
  {
    icon: '📚',
    title: 'Learn Marketing',
    description: 'Learn marketing from scratch with easy tutorials and practical examples.'
  },
  {
    icon: '📊',
    title: 'Create Your Plan',
    description: 'Build a personalized marketing plan tailored to your business needs.'
  },
  {
    icon: '📈',
    title: 'Track Success',
    description: 'Monitor your campaign performance and optimize for better results.'
  },
  {
    icon: '🎯',
    title: 'Daily Tips',
    description: 'Get daily marketing tips and join community challenges.'
  }
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      navigate('/personalization');
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const skip = () => {
    navigate('/personalization');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <motion.div 
        key={currentSlide}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="flex-1 flex flex-col items-center justify-center p-8"
      >
        <div className="text-6xl mb-8">{slides[currentSlide].icon}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          {slides[currentSlide].title}
        </h2>
        <p className="text-gray-600 text-center mb-8">
          {slides[currentSlide].description}
        </p>
      </motion.div>

      <div className="p-8">
        <div className="flex justify-center mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          {currentSlide < slides.length - 1 ? (
            <>
              <button
                onClick={skip}
                className="text-gray-500 font-medium"
              >
                Skip
              </button>
              <button
                onClick={nextSlide}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium"
              >
                Next
              </button>
            </>
          ) : (
            <button
              onClick={nextSlide}
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-medium"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
}