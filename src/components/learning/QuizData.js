export const generateQuizzes = () => ({
  social: {
    1: {
      questions: [
        {
          id: 1,
          question: "What is the primary goal of social media marketing?",
          options: [
            "Building brand awareness and engagement",
            "Selling products directly",
            "Collecting user data",
            "Creating viral content"
          ],
          correctAnswer: 0,
          explanation: "Social media marketing primarily focuses on building brand awareness and engaging with your audience to create meaningful relationships."
        },
        {
          id: 2,
          question: "Which platform is best suited for B2B marketing?",
          options: [
            "Instagram",
            "TikTok",
            "LinkedIn",
            "Snapchat"
          ],
          correctAnswer: 2,
          explanation: "LinkedIn is specifically designed for professional networking and B2B relationships."
        },
        {
          id: 3,
          question: "What type of content typically performs best on Instagram?",
          options: [
            "Long-form articles",
            "Visual content",
            "Audio podcasts",
            "Plain text updates"
          ],
          correctAnswer: 1,
          explanation: "Instagram is a visual-first platform where images, videos, and Stories perform best."
        }
      ],
      passingScore: 2
    },
    2: {
      questions: [
        {
          id: 1,
          question: "What is a key element of effective social media content?",
          options: [
            "Length",
            "Consistency",
            "Timing",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "Effective social media content requires consistent posting, appropriate length, and optimal timing."
        },
        {
          id: 2,
          question: "Which content type typically drives the highest engagement?",
          options: [
            "Text posts",
            "Images",
            "Videos",
            "Links"
          ],
          correctAnswer: 2,
          explanation: "Video content typically drives the highest engagement across social platforms."
        }
      ],
      passingScore: 2
    }
  },
  seo: {
    1: {
      questions: [
        {
          id: 1,
          question: "What is the purpose of a meta description?",
          options: [
            "To improve search rankings directly",
            "To provide search engines with a page summary",
            "To display in search results and improve click-through rates",
            "To store keywords for indexing"
          ],
          correctAnswer: 2,
          explanation: "Meta descriptions appear in search results and help users decide whether to click on your page."
        },
        {
          id: 2,
          question: "What is technical SEO?",
          options: [
            "Writing code for search engines",
            "Optimizing website structure and performance",
            "Creating technical content",
            "Programming search algorithms"
          ],
          correctAnswer: 1,
          explanation: "Technical SEO focuses on optimizing your website's structure and performance for better search engine crawling and indexing."
        }
      ],
      passingScore: 2
    }
  },
  email: {
    1: {
      questions: [
        {
          id: 1,
          question: "What is a good practice for building an email list?",
          options: [
            "Buying email lists",
            "Using opt-in forms with clear value propositions",
            "Adding all business contacts automatically",
            "Scraping emails from websites"
          ],
          correctAnswer: 1,
          explanation: "Building an email list through opt-in forms ensures engaged subscribers and complies with regulations."
        },
        {
          id: 2,
          question: "What is email segmentation?",
          options: [
            "Splitting emails into parts",
            "Organizing emails by date",
            "Grouping subscribers based on specific criteria",
            "Separating promotional and transactional emails"
          ],
          correctAnswer: 2,
          explanation: "Email segmentation involves grouping subscribers based on demographics, behavior, or preferences for targeted messaging."
        }
      ],
      passingScore: 2
    }
  },
  analytics: {
    1: {
      questions: [
        {
          id: 1,
          question: "What is a conversion rate?",
          options: [
            "The number of website visitors",
            "The percentage of visitors who complete a desired action",
            "The rate of returning visitors",
            "The speed of website loading"
          ],
          correctAnswer: 1,
          explanation: "Conversion rate measures the percentage of visitors who complete a desired action, such as making a purchase or signing up."
        },
        {
          id: 2,
          question: "What does bounce rate indicate?",
          options: [
            "How fast your website loads",
            "How many people visit your site",
            "The percentage of visitors who leave after viewing only one page",
            "The number of returning visitors"
          ],
          correctAnswer: 2,
          explanation: "Bounce rate shows the percentage of visitors who leave your site after viewing only one page, without any interaction."
        }
      ],
      passingScore: 2
    }
  }
});