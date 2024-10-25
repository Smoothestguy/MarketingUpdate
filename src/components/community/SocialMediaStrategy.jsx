import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SocialMediaStrategy() {
  const navigate = useNavigate();

  const discussion = {
    title: "Social Media Strategy Tips",
    author: "Sarah K.",
    date: "2 days ago",
    content: `
      Here are some effective social media strategies I've found success with:

      1. Content Calendar Planning
      - Plan content 2-3 weeks in advance
      - Mix promotional and value-adding content
      - Maintain consistent posting schedule

      2. Engagement Tactics
      - Respond to comments within 2 hours
      - Ask questions in posts
      - Use polls and interactive features

      3. Analytics Review
      - Track engagement rates
      - Monitor best performing content
      - Adjust strategy based on data
    `,
    participants: [
      { name: "Sarah K.", role: "Marketing Manager", avatar: "👩‍💼" },
      { name: "Mike R.", role: "Social Media Specialist", avatar: "👨‍💻" },
      { name: "Emma L.", role: "Content Creator", avatar: "👩‍🎨" }
    ],
    comments: [
      {
        author: "Mike R.",
        avatar: "👨‍💻",
        content: "Great tips! I'd add that using trending hashtags strategically can significantly boost reach.",
        time: "1 day ago"
      },
      {
        author: "Emma L.",
        avatar: "👩‍🎨",
        content: "The content calendar approach has been a game-changer for my workflow.",
        time: "12 hours ago"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button onClick={() => navigate('/community')} className="mr-4">
                ←
              </button>
              <h1 className="text-xl font-bold">Discussion</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-4">👩‍💼</span>
              <div>
                <h2 className="text-xl font-bold">{discussion.title}</h2>
                <p className="text-gray-600">Posted by {discussion.author} • {discussion.date}</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="whitespace-pre-line">{discussion.content}</p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-bold mb-3">Participants</h3>
            <div className="flex space-x-4">
              {discussion.participants.map((participant, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl mr-2">{participant.avatar}</span>
                  <div>
                    <p className="font-medium">{participant.name}</p>
                    <p className="text-sm text-gray-600">{participant.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Comments</h3>
          {discussion.comments.map((comment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{comment.avatar}</span>
                <div>
                  <p className="font-medium">{comment.author}</p>
                  <p className="text-sm text-gray-600">{comment.time}</p>
                </div>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}