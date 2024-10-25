import { generateQuizzes } from './QuizData';

const quizzes = generateQuizzes();

export const courses = [
  {
    id: 1,
    icon: '🔍',
    title: 'SEO Fundamentals',
    description: 'Master the basics of Search Engine Optimization to improve your website visibility.',
    duration: '5h',
    level: 'Intermediate',
    category: 'seo',
    totalLessons: 5,
    lessons: [
      {
        id: 1,
        title: 'SEO Basics and Website Structure',
        duration: '45m',
        locked: false,
        content: `# SEO Basics and Website Structure

Learn the fundamentals of SEO and how to structure your website for optimal search engine visibility.

## What is SEO?

Search Engine Optimization (SEO) is the practice of optimizing your website to increase organic visibility in search results.

## Key Components

1. **Technical SEO**
   - Site structure
   - XML sitemaps
   - Robots.txt
   - Page speed
   - Mobile optimization

2. **On-Page SEO**
   - Title tags
   - Meta descriptions
   - Header tags
   - Content optimization
   - Internal linking

3. **Off-Page SEO**
   - Backlinks
   - Social signals
   - Brand mentions
   - Local citations`,
        quizzes: [quizzes.seo[1]]
      },
      {
        id: 2,
        title: 'Keyword Research and Analysis',
        duration: '60m',
        locked: true,
        content: `# Keyword Research and Analysis

Learn how to find and analyze the right keywords for your website.

## Understanding Keywords

Keywords are the foundation of SEO - they're the terms and phrases your target audience uses to find content like yours.

## Research Process

1. **Brainstorming**
   - Core topics
   - Customer pain points
   - Industry terminology

2. **Keyword Tools**
   - Google Keyword Planner
   - SEMrush
   - Ahrefs
   - Ubersuggest

3. **Analysis Metrics**
   - Search volume
   - Keyword difficulty
   - Competition level
   - Search intent`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is keyword difficulty?",
                options: [
                  "How hard the keyword is to spell",
                  "How competitive it is to rank for a keyword",
                  "The length of the keyword",
                  "The cost per click of the keyword"
                ],
                correctAnswer: 1,
                explanation: "Keyword difficulty measures how competitive it is to rank for a particular keyword in organic search results."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 3,
        title: 'On-Page Optimization',
        duration: '60m',
        locked: true,
        content: `# On-Page Optimization

Learn how to optimize individual web pages for better search engine rankings.

## Key Elements

1. **Title Tags**
   - Best practices
   - Keyword placement
   - Length guidelines

2. **Meta Descriptions**
   - Writing compelling descriptions
   - Character limits
   - Call-to-action usage

3. **Content Optimization**
   - Header structure
   - Keyword density
   - Internal linking
   - Image optimization`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is the recommended length for a title tag?",
                options: [
                  "50-60 characters",
                  "100-120 characters",
                  "150-160 characters",
                  "200-250 characters"
                ],
                correctAnswer: 0,
                explanation: "Title tags should be between 50-60 characters to ensure they display properly in search results."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 4,
        title: 'Technical SEO',
        duration: '75m',
        locked: true,
        content: `# Technical SEO

Master the technical aspects of SEO to improve your website's crawlability and indexability.

## Core Concepts

1. **Site Architecture**
   - URL structure
   - Navigation hierarchy
   - Internal linking

2. **Technical Elements**
   - XML sitemaps
   - Robots.txt
   - Canonical tags
   - Schema markup

3. **Performance**
   - Page speed
   - Mobile optimization
   - Core Web Vitals`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is a sitemap?",
                options: [
                  "A visual map of your website",
                  "A file that lists important pages on your site",
                  "A navigation menu",
                  "A website backup"
                ],
                correctAnswer: 1,
                explanation: "A sitemap is a file that lists the important pages on your website to help search engines crawl and index your content."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 5,
        title: 'Link Building and Off-Page SEO',
        duration: '60m',
        locked: true,
        content: `# Link Building and Off-Page SEO

Learn effective strategies for building quality backlinks and improving your site's authority.

## Link Building Strategies

1. **Content Marketing**
   - Creating linkable assets
   - Outreach techniques
   - Guest posting

2. **Digital PR**
   - Press releases
   - Media relationships
   - Brand mentions

3. **Local SEO**
   - Local citations
   - Google My Business
   - Local link building`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is a quality backlink?",
                options: [
                  "Any link from another website",
                  "A link from a relevant, authoritative website",
                  "A link from a social media site",
                  "A link from a directory"
                ],
                correctAnswer: 1,
                explanation: "A quality backlink comes from a relevant, authoritative website in your industry or niche."
              }
            ],
            passingScore: 1
          }
        ]
      }
    ]
  },
  {
    id: 2,
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Learn how to create engaging content that converts followers into customers.',
    duration: '4h 30m',
    level: 'Beginner',
    category: 'social',
    totalLessons: 5,
    lessons: [
      {
        id: 1,
        title: 'Introduction to Social Media Marketing',
        duration: '45m',
        locked: false,
        content: `# Introduction to Social Media Marketing

Learn the fundamentals of social media marketing and why it's crucial for modern businesses.

## What is Social Media Marketing?

Social media marketing involves creating and sharing content on social media platforms to achieve your marketing goals.

## Key Platforms

1. **Facebook**
   - Largest social network
   - Diverse demographic reach
   - Excellent for both B2C and B2B

2. **Instagram**
   - Visual-focused platform
   - Strong engagement rates
   - Perfect for lifestyle brands

3. **LinkedIn**
   - Professional networking
   - B2B marketing
   - Thought leadership`,
        quizzes: [quizzes.social[1]]
      },
      {
        id: 2,
        title: 'Content Strategy Development',
        duration: '60m',
        locked: true,
        content: `# Content Strategy Development

Learn how to create a comprehensive content strategy for social media success.

## Strategy Components

1. **Content Pillars**
   - Brand storytelling
   - Educational content
   - Entertainment
   - User-generated content

2. **Content Calendar**
   - Posting frequency
   - Content mix
   - Platform-specific planning

3. **Content Types**
   - Images
   - Videos
   - Stories
   - Live streams`,
        quizzes: [quizzes.social[2]]
      },
      {
        id: 3,
        title: 'Engagement and Community Building',
        duration: '45m',
        locked: true,
        content: `# Engagement and Community Building

Learn how to build and nurture an engaged social media community.

## Key Concepts

1. **Community Management**
   - Response strategies
   - Engagement techniques
   - Crisis management

2. **Content Engagement**
   - Interactive posts
   - User participation
   - Community features

3. **Growth Tactics**
   - Hashtag strategies
   - Collaboration opportunities
   - Influencer partnerships`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is engagement rate?",
                options: [
                  "Number of followers",
                  "Percentage of audience interacting with content",
                  "Number of posts per day",
                  "Amount spent on advertising"
                ],
                correctAnswer: 1,
                explanation: "Engagement rate measures the percentage of your audience that interacts with your content through likes, comments, shares, etc."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 4,
        title: 'Advertising on Social Media',
        duration: '60m',
        locked: true,
        content: `# Advertising on Social Media

Master the art of social media advertising across different platforms.

## Ad Types

1. **Facebook Ads**
   - News Feed ads
   - Story ads
   - Carousel ads
   - Collection ads

2. **Instagram Ads**
   - Photo ads
   - Video ads
   - Shopping ads
   - Explore ads

3. **LinkedIn Ads**
   - Sponsored content
   - Message ads
   - Text ads
   - Dynamic ads`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is a lookalike audience?",
                options: [
                  "People who look like your current customers",
                  "An audience similar to your existing customers",
                  "People who follow your competitors",
                  "Random audience targeting"
                ],
                correctAnswer: 1,
                explanation: "A lookalike audience is a way to reach new people who are likely to be interested in your business because they share similar characteristics with your existing customers."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 5,
        title: 'Analytics and Optimization',
        duration: '60m',
        locked: true,
        content: `# Analytics and Optimization

Learn how to measure and improve your social media performance.

## Key Metrics

1. **Reach and Impressions**
   - Audience growth
   - Content reach
   - Brand awareness

2. **Engagement Metrics**
   - Likes and reactions
   - Comments
   - Shares

3. **Conversion Metrics**
   - Click-through rates
   - Lead generation
   - Sales attribution`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is the difference between reach and impressions?",
                options: [
                  "They are the same thing",
                  "Reach is unique users, impressions are total views",
                  "Reach is total views, impressions are unique users",
                  "Neither measures views"
                ],
                correctAnswer: 1,
                explanation: "Reach measures the number of unique users who see your content, while impressions count the total number of times your content is displayed."
              }
            ],
            passingScore: 1
          }
        ]
      }
    ]
  },
  {
    id: 3,
    icon: '📧',
    title: 'Email Marketing',
    description: 'Create effective email campaigns that drive engagement and conversions.',
    duration: '4h',
    level: 'Beginner',
    category: 'email',
    totalLessons: 5,
    lessons: [
      {
        id: 1,
        title: 'Email Marketing Fundamentals',
        duration: '45m',
        locked: false,
        content: `# Email Marketing Fundamentals

Learn the basics of email marketing and how to build an effective strategy.

## Core Concepts

1. **Email Types**
   - Welcome emails
   - Newsletters
   - Promotional emails
   - Transactional emails

2. **List Building**
   - Opt-in forms
   - Lead magnets
   - Landing pages
   - List segmentation

3. **Best Practices**
   - Permission-based marketing
   - CAN-SPAM compliance
   - Email frequency
   - List hygiene`,
        quizzes: [quizzes.email[1]]
      },
      {
        id: 2,
        title: 'Email List Building and Management',
        duration: '60m',
        locked: true,
        content: `# Email List Building and Management

Learn how to grow and maintain a healthy email list.

## List Growth

1. **Lead Generation**
   - Content upgrades
   - Webinars
   - Free tools
   - Contests

2. **List Segmentation**
   - Demographics
   - Behavior
   - Preferences
   - Purchase history

3. **List Maintenance**
   - List cleaning
   - Re-engagement campaigns
   - Unsubscribe management`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is a double opt-in?",
                options: [
                  "Subscribing twice to the same list",
                  "Confirming email subscription via confirmation email",
                  "Having two email addresses",
                  "Subscribing to two different lists"
                ],
                correctAnswer: 1,
                explanation: "Double opt-in requires subscribers to confirm their subscription by clicking a link in a confirmation email, ensuring higher quality subscribers."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 3,
        title: 'Email Design and Content',
        duration: '45m',
        locked: true,
        content: `# Email Design and Content

Master the art of creating compelling email content.

## Design Elements

1. **Layout**
   - Mobile responsiveness
   - Visual hierarchy
   - White space
   - CTAs

2. **Content Types**
   - Copy writing
   - Images
   - Videos
   - Social proof

3. **Personalization**
   - Dynamic content
   - Merge tags
   - Conditional content`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is the recommended width for email design?",
                options: [
                  "400-500px",
                  "500-600px",
                  "600-700px",
                  "700-800px"
                ],
                correctAnswer: 2,
                explanation: "600-700px is the recommended width for email design to ensure proper display across different email clients and devices."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 4,
        title: 'Email Automation',
        duration: '60m',
        locked: true,
        content: `# Email Automation

Learn how to create automated email sequences.

## Automation Types

1. **Welcome Series**
   - Introduction emails
   - Onboarding sequence
   - Product education

2. **Drip Campaigns**
   - Lead nurturing
   - Customer onboarding
   - Re-engagement

3. **Behavioral Triggers**
   - Abandoned cart
   - Browse abandonment
   - Purchase follow-up`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is a drip campaign?",
                options: [
                  "Random email sending",
                  "Automated sequence of emails",
                  "Single promotional email",
                  "Manual email sending"
                ],
                correctAnswer: 1,
                explanation: "A drip campaign is an automated sequence of emails sent based on specific timelines or user actions."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 5,
        title: 'Email Analytics and Testing',
        duration: '45m',
        locked: true,
        content: `# Email Analytics and Testing

Learn how to measure and optimize email performance.

## Key Metrics

1. **Delivery Metrics**
   - Delivery rate
   - Bounce rate
   - Spam complaints

2. **Engagement Metrics**
   - Open rate
   - Click-through rate
   - Conversion rate

3. **Testing Methods**
   - A/B testing
   - Multivariate testing
   - Split testing`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is a good average email open rate?",
                options: [
                  "5-10%",
                  "15-25%",
                  "35-45%",
                  "50-60%"
                ],
                correctAnswer: 1,
                explanation: "A good average email open rate typically falls between 15-25%, though this can vary by industry and email type."
              }
            ],
            passingScore: 1
          }
        ]
      }
    ]
  },
  {
    id: 4,
    icon: '📊',
    title: 'Marketing Analytics',
    description: 'Learn to measure and analyze marketing performance across channels.',
    duration: '6h',
    level: 'Advanced',
    category: 'analytics',
    totalLessons: 5,
    lessons: [
      {
        id: 1,
        title: 'Analytics Fundamentals',
        duration: '60m',
        locked: false,
        content: `# Analytics Fundamentals

Learn the basics of marketing analytics and why it's crucial for success.

## Core Concepts

1. **Key Metrics**
   - Traffic metrics
   - Engagement metrics
   - Conversion metrics
   - Revenue metrics

2. **Data Collection**
   - Tracking setup
   - Data sources
   - Data quality

3. **Reporting Basics**
   - Report types
   - Data visualization
   - Insights generation`,
        quizzes: [quizzes.analytics[1]]
      },
      {
        id: 2,
        title: 'Web Analytics',
        duration: '75m',
        locked: true,
        content: `# Web Analytics

Master website analytics and performance tracking.

## Key Areas

1. **Traffic Analysis**
   - Source/medium
   - User behavior
   - Content performance

2. **Conversion Tracking**
   - Goal setup
   - Funnel analysis
   - Attribution modeling

3. **Technical Setup**
   - Tag management
   - Event tracking
   - E-commerce tracking`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is a conversion funnel?",
                options: [
                  "A sales technique",
                  "A path users take to complete a goal",
                  "A type of website",
                  "An advertising method"
                ],
                correctAnswer: 1,
                explanation: "A conversion funnel represents the path users take through your website to complete a desired action or goal."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 3,
        title: 'Social Media Analytics',
        duration: '60m',
        locked: true,
        content: `# Social Media Analytics

Learn how to measure social media performance.

## Key Metrics

1. **Reach Metrics**
   - Followers/fans
   - Impressions
   - Reach

2. **Engagement Metrics**
   - Likes/reactions
   - Comments
   - Shares

3. **Conversion Metrics**
   - Click-throughs
   - Lead generation
   - Sales`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is engagement rate?",
                options: [
                  "Number of followers",
                  "Interactions divided by reach",
                  "Number of posts",
                  "Amount spent on ads"
                ],
                correctAnswer: 1,
                explanation: "Engagement rate is calculated by dividing the total number of interactions by the reach or follower count."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 4,
        title: 'Email and Campaign Analytics',
        duration: '60m',
        locked: true,
        content: `# Email and Campaign Analytics

Master email and campaign performance analysis.

## Key Areas

1. **Email Metrics**
   - Open rates
   - Click rates
   - Conversion rates

2. **Campaign Metrics**
   - ROI
   - Cost per acquisition
   - Lifetime value

3. **Performance Analysis**
   - A/B testing
   - Segmentation analysis
   - Campaign attribution`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is ROI in marketing?",
                options: [
                  "Rate of interest",
                  "Return on investment",
                  "Rate of increase",
                  "Return on income"
                ],
                correctAnswer: 1,
                explanation: "ROI (Return on Investment) measures the profitability of your marketing investments by comparing costs to revenue generated."
              }
            ],
            passingScore: 1
          }
        ]
      },
      {
        id: 5,
        title: 'Advanced Analytics and Optimization',
        duration: '75m',
        locked: true,
        content: `# Advanced Analytics and Optimization

Learn advanced analytics techniques and optimization strategies.

## Advanced Topics

1. **Predictive Analytics**
   - Customer behavior
   - Trend analysis
   - Forecasting

2. **Multi-channel Attribution**
   - Attribution models
   - Cross-channel analysis
   - Customer journey mapping

3. **Data-driven Optimization**
   - A/B testing
   - Multivariate testing
   - Personalization`,
        quizzes: [
          {
            questions: [
              {
                id: 1,
                question: "What is multi-channel attribution?",
                options: [
                  "Using multiple marketing channels",
                  "Assigning credit to marketing touchpoints",
                  "Having multiple websites",
                  "Running multiple campaigns"
                ],
                correctAnswer: 1,
                explanation: "Multi-channel attribution is the process of determining how different marketing channels contribute to conversions."
              }
            ],
            passingScore: 1
          }
        ]
      }
    ]
  }
];