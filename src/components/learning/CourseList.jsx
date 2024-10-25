import { motion } from 'framer-motion';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { courses } from './courseData';

export default function CourseList() {
  const navigate = useNavigate();
  const { searchQuery, selectedCategory } = useOutletContext();

  // Filter courses based on search and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Course */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Course
        </h2>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl cursor-pointer"
          onClick={() => navigate(`/learn/course/${courses[0].id}`)}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{courses[0].icon}</span>
              <div>
                <h3 className="text-2xl font-bold mb-2">{courses[0].title}</h3>
                <p className="opacity-90">{courses[0].description}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {courses[0].duration}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {courses[0].level}
                </span>
              </div>
              <motion.span
                className="text-2xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {filteredCourses.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </motion.div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group"
              onClick={() => navigate(`/learn/course/${course.id}`)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.span 
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {course.icon}
                  </motion.span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{course.duration}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{course.totalLessons} Lessons</span>
                    <motion.span 
                      className="text-blue-600 font-medium"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Start Learning →
                    </motion.span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 mb-1">Course Preview:</div>
                    {course.lessons.slice(0, 3).map((lesson, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        <motion.span 
                          className="text-blue-500 mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, delay: idx * 0.2, repeat: Infinity }}
                        >
                          •
                        </motion.span>
                        <span className="truncate">{lesson.title}</span>
                      </div>
                    ))}
                    {course.lessons.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{course.lessons.length - 3} more lessons
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-4">
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: '30%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Progress</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}