import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getUser } from '../../utils/auth';
import { useState, useEffect } from 'react';

export default function Post() {
  const { postId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = getUser();
  const [currentPost, setCurrentPost] = useState(location.state?.post);
  const [isLoading, setIsLoading] = useState(!location.state?.post);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentPost) {
      loadPost();
    }
  }, [postId]);

  const loadPost = () => {
    try {
      const savedPosts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
      const post = savedPosts.find(p => p.id === parseInt(postId));
      if (post) {
        setCurrentPost(post);
      } else {
        setError('Post not found');
      }
    } catch (err) {
      setError('Error loading post');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      return;
    }

    setIsDeleting(true);
    try {
      const savedPosts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
      const updatedPosts = savedPosts.filter(p => p.id !== currentPost.id);
      localStorage.setItem('communityPosts', JSON.stringify(updatedPosts));
      
      // Show deletion animation before navigating
      await new Promise(resolve => setTimeout(resolve, 300));
      navigate('/community', { 
        state: { message: 'Post deleted successfully' }
      });
    } catch (err) {
      setError('Error deleting post');
      setIsDeleting(false);
    }
  };

  const handleLike = () => {
    try {
      const savedPosts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
      const updatedPosts = savedPosts.map(p => {
        if (p.id === currentPost.id) {
          return { ...p, likes: p.likes + 1 };
        }
        return p;
      });
      localStorage.setItem('communityPosts', JSON.stringify(updatedPosts));
      setCurrentPost(prev => ({ ...prev, likes: prev.likes + 1 }));
    } catch (err) {
      setError('Error updating likes');
    }
  };

  const isAuthor = currentUser && currentPost && currentUser.fullName === currentPost.author;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !currentPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">{error || 'Post not found'}</h2>
          <button
            onClick={() => navigate('/community')}
            className="text-blue-600 hover:text-blue-700"
          >
            ← Back to Community
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/community')} 
                className="mr-4 hover:text-blue-600 transition-colors"
              >
                ←
              </button>
              <h1 className="text-xl font-bold">Discussion</h1>
            </div>
            {isAuthor && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDelete}
                disabled={isDeleting}
                className={`text-red-600 hover:text-red-700 font-medium ${
                  isDeleting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isDeleting ? 'Deleting...' : 'Delete Post'}
              </motion.button>
            )}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl mr-4"
                >
                  {currentPost.avatar}
                </motion.span>
                <div>
                  <h2 className="text-xl font-bold">{currentPost.title}</h2>
                  <p className="text-gray-600">Posted by {currentPost.author}</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-6">
              <p className="whitespace-pre-line">{currentPost.content}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {currentPost.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-4">💬 {currentPost.replies} replies</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLike}
                className="flex items-center hover:text-blue-600 transition-colors"
              >
                ❤️ <span className="ml-1">{currentPost.likes}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Add comment section here in the future */}
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-blue-600">Comments feature coming soon!</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}