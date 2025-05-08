
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Clock, BookOpen, Users, Award, PlayCircle, Star, Shield } from 'lucide-react';

// Mock course data
const courses = [
  {
    id: '1',
    title: 'Forex Trading Fundamentals',
    description: 'Learn the basics of forex trading with practical examples and strategies for beginners.',
    fullDescription: `
      This comprehensive course is designed for beginners who want to understand the foreign exchange market and start trading with confidence. You'll learn everything from basic terminology to practical trading strategies that real traders use daily.

      The forex market is the largest financial market in the world, with over $6 trillion traded daily. This course will give you the knowledge you need to participate in this exciting market, understand currency pairs, leverage, and risk management.

      By the end of this course, you'll have a solid foundation in forex trading and be ready to start practicing with demo accounts before moving to live trading.
    `,
    instructor: {
      name: 'Alex Thompson',
      bio: 'Professional forex trader with over 10 years of experience. Former analyst at Goldman Sachs and certified financial educator.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    level: 'Beginner',
    price: 89.99,
    duration: '12 hours',
    lectures: 24,
    students: 1250,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    previewUrl: '/courses/1/preview',
    features: [
      'Comprehensive introduction to forex markets',
      'Learn to analyze currency pairs',
      'Risk management strategies',
      'Technical and fundamental analysis',
      'Practice with real-world examples',
      'Lifetime access to course updates',
      'Course completion certificate',
      'Community forum access'
    ],
    curriculum: [
      {
        title: 'Introduction to Forex Trading',
        lectures: [
          { title: 'What is Forex Trading?', duration: '15:30' },
          { title: 'The History of Forex Markets', duration: '12:45' },
          { title: 'Why Trade Forex?', duration: '10:20' }
        ]
      },
      {
        title: 'Understanding Currency Pairs',
        lectures: [
          { title: 'Major, Minor and Exotic Pairs', duration: '18:15' },
          { title: 'Reading Currency Quotes', duration: '14:30' },
          { title: 'Pips, Lots and Leverage Explained', duration: '22:10' }
        ]
      },
      {
        title: 'Fundamental Analysis',
        lectures: [
          { title: 'Economic Indicators', duration: '25:40' },
          { title: 'Central Banks and Interest Rates', duration: '20:15' },
          { title: 'Market Sentiment Analysis', duration: '16:50' }
        ]
      },
      {
        title: 'Technical Analysis',
        lectures: [
          { title: 'Chart Types and Timeframes', duration: '19:20' },
          { title: 'Support and Resistance Levels', duration: '24:15' },
          { title: 'Trend Lines and Channels', duration: '21:10' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Advanced Stock Market Strategies',
    description: 'Take your stock trading to the next level with advanced technical analysis and risk management.',
    fullDescription: `
      This advanced course is designed for intermediate traders who want to enhance their stock market trading skills. You'll learn sophisticated technical analysis methods, advanced order types, and professional risk management techniques.

      The stock market offers incredible opportunities for those who understand how to analyze securities properly. In this course, you'll learn to spot high-probability setups, understand market psychology, and develop your own trading system.

      By the end of this course, you'll have advanced knowledge of stock market operations and be able to implement professional-level trading strategies with proper risk controls.
    `,
    instructor: {
      name: 'Sarah Williams',
      bio: 'Portfolio manager with 15 years of Wall Street experience. Previously managed a $500M equity fund and authored two books on technical analysis.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    level: 'Advanced',
    price: 129.99,
    duration: '16 hours',
    lectures: 32,
    students: 850,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1590283603385-17d1b6d19a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    previewUrl: '/courses/2/preview',
    features: [
      'Advanced technical analysis patterns',
      'Options strategies for income and protection',
      'Portfolio construction techniques',
      'Volatility-based trading methods',
      'Market psychology deep dive',
      'Lifetime access to course updates',
      'Personal strategy development guidance',
      'Private community membership'
    ],
    curriculum: [
      {
        title: 'Advanced Chart Patterns',
        lectures: [
          { title: 'Harmonic Patterns', duration: '28:15' },
          { title: 'Elliot Wave Theory', duration: '35:20' },
          { title: 'Advanced Candlestick Combinations', duration: '26:45' }
        ]
      },
      {
        title: 'Risk Management',
        lectures: [
          { title: 'Position Sizing Techniques', duration: '22:30' },
          { title: 'Kelly Criterion and Optimal f', duration: '24:15' },
          { title: 'Managing Drawdowns', duration: '18:40' }
        ]
      },
      {
        title: 'Options Strategies',
        lectures: [
          { title: 'Protective Puts and Covered Calls', duration: '29:20' },
          { title: 'Iron Condors and Credit Spreads', duration: '32:15' },
          { title: 'Options for Volatility Trading', duration: '27:30' }
        ]
      },
      {
        title: 'System Development',
        lectures: [
          { title: 'Building Your Trading Plan', duration: '31:10' },
          { title: 'Backtesting Methodologies', duration: '38:25' },
          { title: 'System Optimization and Robustness', duration: '34:20' }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Cryptocurrency Trading Essentials',
    description: 'Master the fundamentals of cryptocurrency trading in this comprehensive course for beginners.',
    fullDescription: `
      This essential course provides a solid foundation for anyone looking to enter the exciting world of cryptocurrency trading. From understanding blockchain technology to implementing effective trading strategies, this course covers it all.

      Cryptocurrencies represent a revolutionary new asset class that operates outside traditional financial systems. Understanding how to navigate this market safely and profitably requires specialized knowledge that this course delivers.

      By the end of this course, you'll understand how cryptocurrency markets function, how to analyze crypto assets, and how to build a diversified digital asset portfolio with proper risk management.
    `,
    instructor: {
      name: 'Michael Chen',
      bio: 'Cryptocurrency expert and blockchain consultant with 8 years of experience. Early Bitcoin adopter and founder of a successful crypto advisory firm.',
      image: 'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    level: 'Beginner to Intermediate',
    price: 99.99,
    duration: '14 hours',
    lectures: 28,
    students: 1780,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    previewUrl: '/courses/3/preview',
    features: [
      'Blockchain technology fundamentals',
      'Cryptocurrency exchange navigation',
      'Wallet security best practices',
      'Technical analysis for crypto markets',
      'DeFi protocols and opportunities',
      'Market cycles and sentiment analysis',
      'Tax implications of crypto trading',
      'Long-term investment strategies'
    ],
    curriculum: [
      {
        title: 'Blockchain Fundamentals',
        lectures: [
          { title: 'What is Blockchain Technology?', duration: '16:40' },
          { title: 'Understanding Distributed Ledgers', duration: '18:15' },
          { title: 'Consensus Mechanisms Explained', duration: '21:30' }
        ]
      },
      {
        title: 'Cryptocurrency Basics',
        lectures: [
          { title: 'Bitcoin: The First Cryptocurrency', duration: '22:10' },
          { title: 'Altcoins and Token Economics', duration: '24:45' },
          { title: 'Storing and Securing Your Assets', duration: '19:30' }
        ]
      },
      {
        title: 'Trading Fundamentals',
        lectures: [
          { title: 'Cryptocurrency Exchanges Overview', duration: '17:50' },
          { title: 'Order Types and Execution', duration: '20:15' },
          { title: 'Reading Crypto Market Charts', duration: '23:20' }
        ]
      },
      {
        title: 'Advanced Strategies',
        lectures: [
          { title: 'Swing Trading for Cryptocurrencies', duration: '26:30' },
          { title: 'DeFi Yield Strategies', duration: '29:15' },
          { title: 'NFT Market Analysis', duration: '22:40' }
        ]
      }
    ]
  }
];

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find the course by id
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="min-h-screen bg-primary flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">Course Not Found</h2>
            <p className="text-gray-400 mb-6">The course you're looking for doesn't exist.</p>
            <Link to="/courses">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 md:py-12 flex-grow">
        <div className="mb-6">
          <Link to="/courses" className="text-secondary hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to courses
          </Link>
        </div>
        
        {/* Course Header - Responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-300 text-lg mb-6">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="text-white font-semibold mr-1">{course.rating}</span>
                <span className="text-gray-400">({course.students} students)</span>
              </div>
              
              <div className="hidden sm:block bg-gray-800 h-4 w-0.5 mx-1"></div>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-1" />
                <span className="text-gray-300">{course.duration}</span>
              </div>
              
              <div className="hidden sm:block bg-gray-800 h-4 w-0.5 mx-1"></div>
              
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-gray-400 mr-1" />
                <span className="text-gray-300">{course.lectures} lectures</span>
              </div>
              
              <div className="hidden sm:block bg-gray-800 h-4 w-0.5 mx-1"></div>
              
              <div className="flex items-center">
                <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded">
                  {course.level}
                </span>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <img 
                src={course.instructor.image} 
                alt={course.instructor.name} 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4" 
              />
              <div>
                <p className="text-white font-medium">Instructor: {course.instructor.name}</p>
                <p className="text-sm text-gray-400 line-clamp-1">{course.instructor.bio}</p>
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex space-x-3 lg:hidden mb-8">
              <Link to={course.previewUrl} className="flex-1">
                <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:border-secondary hover:text-white">
                  Preview Course
                </Button>
              </Link>
              <Link to={`/courses/${course.id}/purchase`} className="flex-1">
                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-1 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="bg-gray-900/70 rounded-xl border border-gray-800 overflow-hidden sticky top-6">
              <div className="aspect-video w-full">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="relative -mt-12 flex justify-center">
                  <Link to={course.previewUrl}>
                    <button className="bg-secondary/90 text-primary rounded-full p-3 hover:bg-secondary transition-colors">
                      <PlayCircle className="h-8 w-8" />
                    </button>
                  </Link>
                </div>
              </div>
              
              <div className="p-5 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl sm:text-3xl font-bold text-white">${course.price.toFixed(2)}</div>
                </div>
                
                {/* Desktop Action Buttons */}
                <div className="hidden lg:block">
                  <Link to={`/courses/${course.id}/purchase`}>
                    <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 h-12 mb-3">
                      Buy Now
                    </Button>
                  </Link>
                  
                  <Link to={course.previewUrl}>
                    <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:border-secondary hover:text-white h-12 mb-6">
                      Preview Course
                    </Button>
                  </Link>
                </div>

                <div className="text-center text-sm text-gray-400 mb-5 sm:mb-6">
                  <div className="flex items-center justify-center">
                    <Shield className="h-4 w-4 mr-1 text-secondary" />
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-white font-medium">This course includes:</p>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-gray-300">{course.duration} of on-demand video</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <BookOpen className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-gray-300">{course.lectures} lectures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-gray-300">Certificate of completion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-gray-300">Access to community forum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <Tabs 
              defaultValue="overview" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="bg-gray-900 p-1 mb-6 w-full overflow-x-auto flex whitespace-nowrap">
                <TabsTrigger 
                  value="overview"
                  className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="curriculum"
                  className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger 
                  value="instructor"
                  className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
                >
                  Instructor
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 sm:p-6 mb-6 sm:mb-8">
                  <h2 className="text-xl font-bold text-white mb-4">Course Description</h2>
                  <div className="text-gray-300 space-y-4">
                    {course.fullDescription.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 sm:p-6">
                  <h2 className="text-xl font-bold text-white mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum" className="mt-0">
                <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 sm:p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Course Content</h2>
                  <div className="text-gray-400 mb-4">
                    {course.lectures} lectures • {course.duration} total
                  </div>
                  
                  <div className="space-y-4">
                    {course.curriculum.map((section, i) => (
                      <div key={i} className="border border-gray-800 rounded-lg overflow-hidden">
                        <div className="bg-gray-900 px-3 sm:px-4 py-3 flex flex-wrap justify-between items-center gap-2">
                          <h3 className="text-white font-medium">{section.title}</h3>
                          <span className="text-sm text-gray-400">{section.lectures.length} lectures</span>
                        </div>
                        <div className="divide-y divide-gray-800">
                          {section.lectures.map((lecture, j) => (
                            <div key={j} className="px-3 sm:px-4 py-3 flex justify-between items-center">
                              <div className="flex items-center">
                                <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm sm:text-base">{lecture.title}</span>
                              </div>
                              <span className="text-xs sm:text-sm text-gray-400 ml-2">{lecture.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="instructor" className="mt-0">
                <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <img 
                      src={course.instructor.image} 
                      alt={course.instructor.name} 
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full" 
                    />
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">{course.instructor.name}</h2>
                      <p className="text-gray-300 mb-4">{course.instructor.bio}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400 mr-1" />
                          <span className="text-white">4.8 Instructor Rating</span>
                        </div>
                        <div className="hidden sm:block bg-gray-800 h-4 w-0.5 mx-1"></div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-gray-400 mr-1" />
                          <span className="text-gray-300">2,500+ Students</span>
                        </div>
                        <div className="hidden sm:block bg-gray-800 h-4 w-0.5 mx-1"></div>
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-gray-400 mr-1" />
                          <span className="text-gray-300">5 Courses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 sm:p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Student Feedback</h2>
              <div className="flex items-center mb-4">
                <div className="text-2xl sm:text-3xl font-bold text-white mr-4">{course.rating}</div>
                <div className="flex-grow">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-600'}`} 
                        fill={star <= Math.floor(course.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Course Rating</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <div className="w-9 sm:w-12 text-right text-xs sm:text-sm text-gray-400 mr-2">{rating} stars</div>
                    <div className="flex-grow h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400" 
                        style={{ 
                          width: `${rating === 5 ? 75 : rating === 4 ? 20 : rating === 3 ? 5 : 0}%` 
                        }}
                      ></div>
                    </div>
                    <div className="w-9 sm:w-12 text-left text-xs sm:text-sm text-gray-400 ml-2">
                      {rating === 5 ? '75%' : rating === 4 ? '20%' : rating === 3 ? '5%' : '0%'}
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                {course.students} students have taken this course.
              </p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4 sm:p-6">
              <h2 className="text-xl font-bold text-white mb-4">Share This Course</h2>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="flex-1 border-gray-700 text-white hover:bg-gray-800">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                  Share
                </Button>
                <Button variant="outline" className="flex-1 border-gray-700 text-white hover:bg-gray-800">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Tweet
                </Button>
                <Button variant="outline" className="flex-1 border-gray-700 text-white hover:bg-gray-800">
                  <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
