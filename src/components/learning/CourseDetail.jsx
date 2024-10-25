import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from './courseData';

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-display font-bold text-gray-900">Course not found</h2>
        <button
          onClick={() => navigate('/learn')}
          className="mt-4 text-blue-600 hover:text-blue-700"
        >
          ← Back to Courses
        </button>
      </div>
    );
  }

  // Load lesson progress from localStorage
  const getLessonProgress = (lessonId) => {
    const progress = localStorage.getItem(`lesson-${lessonId}-progress`);
    return progress ? JSON.parse(progress) : [];
  };

  // Check if a lesson is locked
  const isLessonLocked = (index, lesson) => {
    if (index === 0) return false; // First lesson is always unlocked
    
    // Check if previous lesson is completed
    const prevLesson = course.lessons[index - 1];
    const prevLessonProgress = getLessonProgress(prevLesson.id);
    const prevLessonQuizzes = prevLesson.quizzes || [];
    
    return !prevLessonProgress || prevLessonProgress.length < prevLessonQuizzes.length;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="mb-8">
          <button
            onClick={() => navigate('/learn')}
            className="text-blue-600 hover:text-blue-700 mb-4"
          >
            ← Back to Courses
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-3xl mr-4">{course.icon}</span>
              <div>
                <h2 className="text-2xl font-display font-bold">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {course.duration} • {course.level}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-blue-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${course.progress || 0}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-600 font-medium">
                {course.progress || 0}% Complete
              </span>
              <span className="text-gray-500">
                {course.lessons?.length || 0} Lessons
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-display font-bold mb-4">Course Content</h3>
          {course.lessons?.map((lesson, index) => {
            const isLocked = isLessonLocked(index, lesson);
            const progress = getLessonProgress(lesson.id);
            const quizCount = lesson.quizzes?.length || 0;
            const completedQuizzes = progress?.length || 0;

            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gray-50 p-4 rounded-lg ${
                  isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-100'
                } transition-colors`}
                onClick={() => !isLocked && navigate(`/learn/course/${courseId}/lesson/${lesson.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {isLocked ? (
                      <span className="text-gray-400 mr-3">🔒</span>
                    ) : completedQuizzes === quizCount ? (
                      <span className="text-green-500 mr-3">✓</span>
                    ) : (
                      <span className="text-blue-500 mr-3">📝</span>
                    )}
                    <div>
                      <h4 className="font-medium">{lesson.title}</h4>
                      <p className="text-sm text-gray-600">
                        {isLocked ? 'Complete previous lesson to unlock' : 
                         `${completedQuizzes}/${quizCount} quizzes completed`}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}