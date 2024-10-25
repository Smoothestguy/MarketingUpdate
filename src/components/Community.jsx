import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Community() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [discussions, setDiscussions] = useState([]);

  const categories = [
    { id: 'all', name: 'All Topics', icon: '🌟' },
    { id: 'social', name: 'Social Media', icon: '📱' },
    { id: 'content', name: 'Content Creation', icon: '✍️' },
    { id: 'email', name: 'Email Marketing', icon: '📧' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
  ];

  const defaultDiscussions = [
    {
      id: 1,
      title: "Best practices for Instagram Reels in 2024",
      author: "Sarah K.",
      avatar: "👩‍💼",
      content: `Here are my top tips for creating engaging Instagram Reels:

1. Focus on First 3 Seconds
- Hook viewers immediately
- Use attention-grabbing visuals
- Start with a strong question/statement

2. Optimal Content Length
- Keep videos 15-30 seconds
- Front-load key information
- End with clear CTA

3. Trending Audio Usage
- Use trending sounds/music
- Create original audio when relevant
- Mix voice-over with trending tracks

Would love to hear your experiences! What's working for your Reels?`,
      replies: 23,
      likes: 45,
      tags: ["Social Media", "Content Creation", "Instagram"],
      path: "/community/social-media-strategy",
      timestamp: "2 hours ago",
      engagement: {
        views: 1200,
        saves: 89,
        shares: 34
      },
      isDefault: true
    },
    {
      id: 2,
      title: "Email Marketing Automation Tools 2024 Comparison",
      author: "Mike R.",
      avatar: "👨‍💻",
      content: `Comprehensive comparison of top email marketing tools:

📧 Mailchimp
✓ Best for: Small businesses
✓ Pricing: From $11/month
✓ Key Features: AI content creator, advanced segmentation
✓ Integration: 300+ apps

📧 Klaviyo
✓ Best for: E-commerce
✓ Pricing: From $20/month
✓ Key Features: Advanced analytics, predictive sending
✓ Integration: Shopify-focused

📧 ConvertKit
✓ Best for: Creators
✓ Pricing: From $9/month
✓ Key Features: Visual automation builder, landing pages
✓ Integration: Creator-focused tools

Which tools are you using? Share your experiences!`,
      replies: 18,
      likes: 32,
      tags: ["Email Marketing", "Tools", "Automation"],
      path: "/community/email-tools",
      timestamp: "5 hours ago",
      engagement: {
        views: 850,
        saves: 156,
        shares: 42
      },
      isDefault: true
    },
    {
      id: 3,
      title: "Social Media Strategy Framework for 2024",
      author: "Sarah K.",
      avatar: "👩‍💼",
      content: `Sharing my proven social media strategy framework:

1. Content Pillars
- Educational content (40%)
- Entertainment (30%)
- Promotional (20%)
- User-generated (10%)

2. Posting Schedule
- Instagram: 4-5x/week
- LinkedIn: 2-3x/week
- TikTok: Daily
- Twitter: 3-5x/day

3. Engagement Strategy
- Respond within 2 hours
- Use polls/questions
- Host weekly lives

4. Analytics Review
- Weekly metrics check
- Monthly strategy adjustment
- Quarterly goal review

What's your content mix looking like?`,
      replies: 15,
      likes: 28,
      tags: ["Social Media", "Strategy", "Planning"],
      path: "/community/social-media-strategy",
      timestamp: "1 day ago",
      engagement: {
        views: 2300,
        saves: 245,
        shares: 78
      },
      isDefault: true
    },
    {
      id: 4,
      title: "Content Creation Workshop: Video Marketing Essentials",
      author: "Emma L.",
      avatar: "👩‍🎨",
      content: `Join our upcoming video marketing workshop!

📅 Date: Next Tuesday
⏰ Time: 2 PM EST
📍 Platform: Zoom

We'll cover:
1. Video Strategy Development
2. Equipment Setup (Budget-friendly)
3. Editing Tips & Tools
4. Distribution Strategy
5. Analytics & Optimization

Bonus: Free video template pack for all attendees!

Limited spots available - drop a comment to reserve yours!`,
      replies: 8,
      likes: 21,
      tags: ["Content Creation", "Workshop", "Video Marketing"],
      path: "/community/content-creation",
      timestamp: "3 days ago",
      engagement: {
        views: 567,
        saves: 89,
        shares: 23
      },
      isDefault: true
    },
    {
      id: 5,
      title: "AI Tools for Marketing: Complete Guide 2024",
      author: "Alex T.",
      avatar: "👨‍💻",
      content: `Essential AI tools for modern marketers:

🤖 Content Creation
- ChatGPT: Copy & ideation
- Midjourney: Image generation
- Synthesia: Video creation

📊 Analytics
- Obviously AI: Predictive analytics
- MonkeyLearn: Sentiment analysis
- Crayon: Competitive intel

🎯 Personalization
- Dynamic Yield: Website personalization
- Persado: Message optimization
- Albert: Ad optimization

Which AI tools are you using in your workflow?`,
      replies: 42,
      likes: 67,
      tags: ["Tools", "AI", "Marketing Tech"],
      path: "/community/tools",
      timestamp: "4 days ago",
      engagement: {
        views: 3400,
        saves: 678,
        shares: 156
      },
      isDefault: true
    }
  ];

  useEffect(() => {
    // Get posts from localStorage or use default discussions
    const savedPosts = JSON.parse(localStorage.getItem('communityPosts') || '[]');
    setDiscussions([...savedPosts, ...defaultDiscussions]);
  }, []);

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                          discussion.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
    return matchesSearch && matchesCategory;
  });

  const handleLike = (discussionId) => {
    setDiscussions(prevDiscussions => {
      const updatedDiscussions = prevDiscussions.map(discussion => {
        if (discussion.id === discussionId) {
          return { ...discussion, likes: discussion.likes + 1 };
        }
        return discussion;
      });
      
      // Update localStorage with new likes
      const savedPosts = updatedDiscussions.filter(d => !d.isDefault);
      localStorage.setItem('communityPosts', JSON.stringify(savedPosts));
      
      return updatedDiscussions;
    });
  };

  const handlePostClick = (discussion) => {
    if (discussion.isDefault) {
      navigate(discussion.path);
    } else {
      navigate(`/community/post/${discussion.id}`, { state: { post: discussion } });
    }
  };

  const handleDeletePost = (postId) => {
    setDiscussions(prevDiscussions => {
      const updatedDiscussions = prevDiscussions.filter(d => d.id !== postId);
      const savedPosts = updatedDiscussions.filter(d => !d.isDefault);
      localStorage.setItem('communityPosts', JSON.stringify(savedPosts));
      return updatedDiscussions;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-display font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Marketing Community
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">
                  🔍
                </span>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/community/new')}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium"
              >
                New Post +
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-2xl font-bold mb-2">1.2K</h3>
            <p className="opacity-90">Active Members</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-2xl font-bold mb-2">45</h3>
            <p className="opacity-90">Daily Posts</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-2xl font-bold mb-2">3.5K</h3>
            <p className="opacity-90">Total Discussions</p>
          </motion.div>
        </div>

        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredDiscussions.map((discussion) => (
            <motion.div
              key={discussion.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="text-3xl"
                  whileHover={{ scale: 1.1 }}
                >
                  {discussion.avatar}
                </motion.div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg mb-1 hover:text-blue-600 cursor-pointer"
                          onClick={() => handlePostClick(discussion)}>
                        {discussion.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Posted by {discussion.author} • {discussion.timestamp}
                      </p>
                    </div>
                    {!discussion.isDefault && (
                      <button
                        onClick={() => handleDeletePost(discussion.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {discussion.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(tag.toLowerCase());
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <motion.span 
                      className="flex items-center space-x-1 cursor-pointer hover:text-blue-600"
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(discussion.id);
                      }}
                    >
                      <span>❤️</span>
                      <span>{discussion.likes}</span>
                    </motion.span>
                    <span className="flex items-center space-x-1">
                      <span>💬</span>
                      <span>{discussion.replies}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>👁️</span>
                      <span>{discussion.engagement.views}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>🔖</span>
                      <span>{discussion.engagement.saves}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span>↗️</span>
                      <span>{discussion.engagement.shares}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}