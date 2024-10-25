import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from './courseData';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

export default function LessonView() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizPassed, setQuizPassed] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  
  const course = courses.find(c => c.id === parseInt(courseId));
  const currentLessonIndex = course?.lessons.findIndex(l => l.id === parseInt(lessonId)) ?? 0;
  const lesson = course?.lessons[currentLessonIndex];
  const currentQuiz = lesson?.quizzes?.[currentQuizIndex];

  useEffect(() => {
    // Reset states when lesson changes
    setShowQuiz(false);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScore(0);
    setQuizPassed(false);
    setCurrentQuizIndex(0);
    
    // Load completed quizzes from localStorage
    const savedProgress = localStorage.getItem(`lesson-${lessonId}-progress`);
    if (savedProgress) {
      setCompletedQuizzes(JSON.parse(savedProgress));
    } else {
      setCompletedQuizzes([]);
    }
  }, [lessonId]);

  if (!course || !lesson) {
    return <div>Lesson not found</div>;
  }

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const navigateToNextLesson = () => {
    const nextLessonIndex = currentLessonIndex + 1;
    if (nextLessonIndex < course.lessons.length) {
      const nextLesson = course.lessons[nextLessonIndex];
      navigate(`/learn/course/${courseId}/lesson/${nextLesson.id}`);
    }
  };

  const handleQuizSubmit = () => {
    const questions = currentQuiz.questions;
    let correctAnswers = 0;

    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);
    setQuizSubmitted(true);
    
    const passed = correctAnswers >= currentQuiz.passingScore;
    setQuizPassed(passed);

    if (passed) {
      // Save progress
      const newCompletedQuizzes = [...completedQuizzes, currentQuizIndex];
      setCompletedQuizzes(newCompletedQuizzes);
      localStorage.setItem(`lesson-${lessonId}-progress`, JSON.stringify(newCompletedQuizzes));
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < lesson.quizzes.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedAnswers({});
      setQuizSubmitted(false);
      setScore(0);
      setQuizPassed(false);
    }
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setScore(0);
    setQuizPassed(false);
  };

  const allQuizzesCompleted = completedQuizzes.length === lesson.quizzes.length;

  const renderQuiz = () => {
    if (!currentQuiz) return null;

    return (
      <div className="mt-8 bg-gray-50 p-6 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Quiz {currentQuizIndex + 1} of {lesson.quizzes.length}</h3>
          <div className="flex space-x-2">
            {lesson.quizzes.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  completedQuizzes.includes(index)
                    ? 'bg-green-500'
                    : index === currentQuizIndex
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {currentQuiz.questions.map((question) => (
          <div key={question.id} className="mb-6">
            <p className="font-medium mb-3">{question.question}</p>
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    checked={selectedAnswers[question.id] === index}
                    onChange={() => handleAnswerSelect(question.id, index)}
                    disabled={quizSubmitted}
                    className="form-radio"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {quizSubmitted && selectedAnswers[question.id] === question.correctAnswer && (
              <p className="text-green-600 mt-2">✓ Correct!</p>
            )}
            {quizSubmitted && selectedAnswers[question.id] !== question.correctAnswer && (
              <div className="mt-2">
                <p className="text-red-600">✗ Incorrect</p>
                <p className="text-gray-600 mt-1">{question.explanation}</p>
              </div>
            )}
          </div>
        ))}

        {!quizSubmitted ? (
          <button
            onClick={handleQuizSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            disabled={Object.keys(selectedAnswers).length !== currentQuiz.questions.length}
          >
            Submit Quiz
          </button>
        ) : (
          <div className="mt-4">
            <p className="text-lg font-medium">
              Your score: {score} out of {currentQuiz.questions.length}
            </p>
            {quizPassed ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-50 p-4 rounded-lg mt-4"
              >
                <p className="text-green-600 font-medium">
                  🎉 Congratulations! You've passed Quiz {currentQuizIndex + 1}!
                </p>
                {currentQuizIndex < lesson.quizzes.length - 1 ? (
                  <button
                    onClick={handleNextQuiz}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Next Quiz →
                  </button>
                ) : allQuizzesCompleted && currentLessonIndex < course.lessons.length - 1 && (
                  <div className="mt-4">
                    <p className="text-gray-600 mb-4">You've completed all quizzes! Ready to continue your learning journey?</p>
                    <button
                      onClick={navigateToNextLesson}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Next Lesson →
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              <div>
                <p className="text-red-600 mb-4">Please review the material and try again.</p>
                <button
                  onClick={handleRetakeQuiz}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Retake Quiz
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(`/learn/course/${courseId}`)}
          className="text-blue-600 hover:text-blue-700"
        >
          ← Back to Course
        </button>
        <div className="text-sm text-gray-500">
          Lesson {currentLessonIndex + 1} of {course.lessons.length}
        </div>
      </div>

      {/* Lesson Content */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold mb-2">{lesson.title}</h2>
        <div className="text-sm text-gray-500 mb-4">
          Duration: {lesson.duration}
        </div>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{lesson.content}</ReactMarkdown>
        </div>
      </div>

      {/* Quiz Section */}
      {!showQuiz ? (
        <button
          onClick={() => setShowQuiz(true)}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Start Quiz {currentQuizIndex + 1}
        </button>
      ) : (
        renderQuiz()
      )}

      {/* Lesson Navigation */}
      <div className="mt-8 flex justify-between items-center pt-4 border-t">
        <button
          onClick={() => {
            const prevLesson = course.lessons[currentLessonIndex - 1];
            if (prevLesson) {
              navigate(`/learn/course/${courseId}/lesson/${prevLesson.id}`);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            currentLessonIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
          disabled={currentLessonIndex === 0}
        >
          ← Previous Lesson
        </button>
      </div>
    </div>
  );
}