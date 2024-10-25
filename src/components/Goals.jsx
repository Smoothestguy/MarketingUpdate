import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { marked } from 'marked';

const learningCategories = [
  {
    id: 'marketing-basics',
    title: 'Marketing Fundamentals',
    icon: '📚',
    description: 'Learn core marketing concepts and strategies',
    content: `
# Marketing Fundamentals

Marketing is essential for business growth and success. Let's explore the key concepts and strategies.

## Core Concepts

1. Understanding Your Market
   - Target audience analysis
   - Market research
   - Competitor analysis

2. Marketing Strategy
   - Goal setting
   - Channel selection
   - Budget planning

3. Brand Development
   - Brand identity
   - Value proposition
   - Brand messaging

4. Marketing Mix
   - Product
   - Price
   - Place
   - Promotion`,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is a target audience?",
          options: [
            "Everyone who might buy your product",
            "Specific group most likely to be interested in your product",
            "Your competitors' customers",
            "People who visit your website"
          ],
          correctAnswer: 1,
          explanation: "Your target audience is the specific group of people most likely to be interested in your product or service."
        },
        {
          id: 2,
          question: "What is a value proposition?",
          options: [
            "The price of your product",
            "Your marketing budget",
            "The unique benefit you offer customers",
            "Your company's profit margin"
          ],
          correctAnswer: 2,
          explanation: "A value proposition is the unique benefit or value that your product or service offers to customers."
        }
      ]
    }
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: '💻',
    description: 'Master online marketing channels and strategies',
    content: `
# Digital Marketing

Digital marketing encompasses all marketing efforts that use electronic devices or the internet.

## Key Channels

1. Search Engine Marketing
   - SEO
   - PPC advertising
   - Local search

2. Social Media Marketing
   - Platform selection
   - Content strategy
   - Community management

3. Email Marketing
   - List building
   - Campaign creation
   - Automation

4. Content Marketing
   - Blog posts
   - Videos
   - Infographics`,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is SEO?",
          options: [
            "Social media optimization",
            "Search engine optimization",
            "Sales enhancement operations",
            "System enhancement overview"
          ],
          correctAnswer: 1,
          explanation: "SEO (Search Engine Optimization) is the practice of optimizing your website to increase organic visibility in search results."
        },
        {
          id: 2,
          question: "What is content marketing?",
          options: [
            "Paid advertising",
            "Direct mail campaigns",
            "Creating and sharing valuable content to attract customers",
            "Cold calling potential customers"
          ],
          correctAnswer: 2,
          explanation: "Content marketing involves creating and sharing valuable content to attract and retain customers."
        }
      ]
    }
  }
];

function LearningContent({ category, onClose, onQuizComplete }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizSubmit = () => {
    let correctAnswers = 0;
    category.quiz.questions.forEach((question) => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setQuizSubmitted(true);
    if (correctAnswers === category.quiz.questions.length) {
      onQuizComplete();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-4xl w-full p-6 m-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {!showQuiz ? (
          <div className="prose max-w-none mb-6">
            <div dangerouslySetInnerHTML={{ __html: marked(category.content) }} />
            <button
              onClick={() => setShowQuiz(true)}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Take Quiz
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Knowledge Check</h3>
            {category.quiz.questions.map((question) => (
              <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-3">{question.question}</p>
                <div className="space-y-2">
                  {question.options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        checked={quizAnswers[question.id] === index}
                        onChange={() => setQuizAnswers(prev => ({ ...prev, [question.id]: index }))}
                        disabled={quizSubmitted}
                        className="form-radio"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {quizSubmitted && (
                  <div className="mt-2">
                    {quizAnswers[question.id] === question.correctAnswer ? (
                      <p className="text-green-600">✓ Correct!</p>
                    ) : (
                      <div>
                        <p className="text-red-600">✗ Incorrect</p>
                        <p className="text-gray-600 mt-1">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            {!quizSubmitted ? (
              <button
                onClick={handleQuizSubmit}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                disabled={Object.keys(quizAnswers).length !== category.quiz.questions.length}
              >
                Submit Quiz
              </button>
            ) : (
              <div>
                <p className="text-lg font-medium mb-4">
                  Your score: {score} out of {category.quiz.questions.length}
                </p>
                {score === category.quiz.questions.length ? (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-600">🎉 Congratulations! You've mastered this topic!</p>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                      setScore(0);
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Try Again
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Goals() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [completedTopics, setCompletedTopics] = useState([]);

  const handleTopicComplete = () => {
    if (selectedCategory) {
      setCompletedTopics(prev => [...prev, selectedCategory.id]);
    }
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
              <h1 className="text-xl font-bold">Learning Hub</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {learningCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{category.icon}</span>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-bold text-lg">{category.title}</h3>
                    {completedTopics.includes(category.id) && (
                      <span className="ml-2 text-green-500">✓</span>
                    )}
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
              <button
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCategory(category);
                }}
              >
                Start Learning
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <LearningContent
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
          onQuizComplete={handleTopicComplete}
        />
      )}
    </div>
  );
}