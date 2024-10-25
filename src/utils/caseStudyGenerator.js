const generateCaseStudy = (formData) => {
  const { industry, marketingChannel, businessSize, primaryGoal } = formData;

  // Company name generator based on industry
  const companyNames = {
    ecommerce: ['ShopWave', 'RetailPro', 'EcomGenius', 'MarketMaster'],
    saas: ['CloudFlow', 'SaaSify', 'TechPro', 'AppMaster'],
    retail: ['StoreHub', 'RetailX', 'ShopSmart', 'RetailPro'],
    healthcare: ['HealthTech', 'MedPro', 'CarePlus', 'HealthHub'],
    education: ['EduTech', 'LearnPro', 'EduHub', 'SmartLearn'],
    finance: ['FinTech', 'MoneyPro', 'FinHub', 'WealthWise'],
    technology: ['TechFlow', 'InnovatePro', 'TechHub', 'SmartTech']
  };

  // Results generator based on goal
  const results = {
    revenue: ['+180% Revenue Growth', '-25% Customer Acquisition Cost', '+45% Customer Lifetime Value'],
    leads: ['+250% Lead Generation', '+85% Lead Quality', '-30% Cost per Lead'],
    awareness: ['+320% Brand Mentions', '+175% Social Media Following', '+90% Website Traffic'],
    retention: ['+65% Customer Retention', '-40% Churn Rate', '+85% Customer Satisfaction'],
    engagement: ['+210% Engagement Rate', '+150% Time on Site', '-35% Bounce Rate']
  };

  // Metrics generator based on channel
  const metrics = {
    social: {
      before: { followers: '2.5K', engagement: '1.2%', reach: '10K/month' },
      after: { followers: '25K', engagement: '4.8%', reach: '150K/month' }
    },
    content: {
      before: { traffic: '5K/month', conversion: '1.5%', leads: '50/month' },
      after: { traffic: '45K/month', conversion: '4.2%', leads: '450/month' }
    },
    email: {
      before: { subscribers: '1K', openRate: '15%', clickRate: '2%' },
      after: { subscribers: '10K', openRate: '35%', clickRate: '12%' }
    },
    seo: {
      before: { ranking: 'Page 3+', traffic: '2K/month', keywords: '100' },
      after: { ranking: 'Top 3', traffic: '25K/month', keywords: '1000+' }
    },
    ppc: {
      before: { cpc: '$2.50', conversion: '1.8%', roas: '150%' },
      after: { cpc: '$1.20', conversion: '4.5%', roas: '350%' }
    },
    influencer: {
      before: { reach: '50K', engagement: '2.1%', sales: '100/month' },
      after: { reach: '500K', engagement: '5.8%', sales: '1.2K/month' }
    }
  };

  const companyName = companyNames[industry][Math.floor(Math.random() * companyNames[industry].length)];

  return {
    id: Date.now(),
    title: `${companyName}: ${marketingChannel.charAt(0).toUpperCase() + marketingChannel.slice(1)} Marketing Success`,
    company: companyName,
    category: marketingChannel.charAt(0).toUpperCase() + marketingChannel.slice(1),
    results: results[primaryGoal],
    description: `How ${companyName} achieved remarkable growth through strategic ${marketingChannel} marketing.`,
    challenge: `${companyName} needed to ${primaryGoal.includes('increase') ? primaryGoal : 'increase ' + primaryGoal} while maintaining sustainable growth.`,
    solution: `Implemented comprehensive ${marketingChannel} strategy tailored for ${businessSize} business needs.`,
    metrics: metrics[marketingChannel],
    keyLearnings: [
      `Strategic ${marketingChannel} planning is crucial`,
      'Data-driven decision making drives success',
      'Consistent optimization yields better results'
    ],
    timeline: `${Math.floor(Math.random() * 6) + 3} months`,
    image: getRandomEmoji()
  };
};

const getRandomEmoji = () => {
  const emojis = ['📈', '🚀', '💡', '🎯', '⭐', '📊', '💪', '🏆'];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export default generateCaseStudy;