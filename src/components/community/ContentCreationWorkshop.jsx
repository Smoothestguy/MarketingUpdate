import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ContentCreationWorkshop() {
  const navigate = useNavigate();

  const workshop = {
    title: "Content Creation Workshop",
    host: "Emma L.",
    date: "1 day ago",
    content: `
      Welcome to our content creation workshop! Here's what we'll cover:

      1. Content Planning
      - Understanding your audience
      - Creating content pillars
      - Building a content calendar

      2. Creation Process
      - Writing effective headlines
      - Crafting engaging copy
      - Visual content best practices

      3. Distribution Strategy
      - Choosing the right platforms
      - Timing your posts
      - Cross-platform promotion

      Let's share our experiences and learn from each other!
    `,
    participants: [
      { name: "Emma L.", role: "Content Strategist", avatar: "👩‍🎨" },
      { name: "Alex M.", role: "Copywriter", avatar: "👨‍💻" },
      { name: "Lisa P.", role: "Social Media Manager", avatar: "👩‍💼" }
    ],
    discussions: [
      {
        author: "Alex M.",
        avatar: "👨‍💻",
        content: "What tools do you recommend for content planning?",
        time: "5 hours ago",
        replies: [
          {
            author: "Emma L.",
            avatar: "👩‍🎨",
            content: "I use a combination of Trello for planning and Canva for visuals.",
            time: "3 hours ago"
          }
        ]
      },
      {
        author: "Lisa P.",
        avatar: "👩‍💼",
        content: "How do you maintain consistency across different platforms?",
        time: "2 hours ago"
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
              <h1 className="text-xl font-bold">Workshop</h1>
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
              <span className="text-3xl mr-4">👩‍🎨</span>
              <div>
                <h2 className="text-xl font-bold">{workshop.title}</h2>
                <p className="text-gray-600">Hosted by {workshop.host} • {workshop.date}</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="whitespace-pre-line">{workshop.content}</p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-bold mb-3">Participants</h3>
            <div className="flex space-x-4">
              {workshop.participants.map((participant, index) => (
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
          <h3 className="font-bold text-lg">Discussion</h3>
          {workshop.discussions.map((discussion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{discussion.avatar}</span>
                  <div>
                    <p className="font-medium">{discussion.author}</p>
                    <p className="text-sm text-gray-600">{discussion.time}</p>
                  </div>
                </div>
                <p className="text-gray-700">{discussion.content}</p>
              </div>

              {discussion.replies?.map((reply, replyIndex) => (
                <motion.div
                  key={replyIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + replyIndex) * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4 shadow-sm ml-8"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{reply.avatar}</span>
                    <div>
                      <p className="font-medium">{reply.author}</p>
                      <p className="text-sm text-gray-600">{reply.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{reply.content}</p>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}