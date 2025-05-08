
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { 
  PlayCircle, 
  Pause, 
  ChevronRight, 
  Clock, 
  BookOpen, 
  Star, 
  Award, 
  Users, 
  Check,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  SkipForward,
  SkipBack,
  List
} from 'lucide-react';

// Import sample course data - using the same data structure from CourseDetail
// This is a placeholder, in a real app you'd fetch this data from an API
const courses = [
  {
    id: '1',
    title: 'Forex Trading Fundamentals',
    description: 'Learn the basics of forex trading with practical examples and strategies for beginners.',
    instructor: {
      name: 'Alex Thompson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    level: 'Beginner',
    price: 89.99,
    duration: '12 hours',
    lectures: 24,
    students: 1250,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    previewVideo: 'https://player.vimeo.com/video/365349724',
    features: [
      'Comprehensive introduction to forex markets',
      'Learn to analyze currency pairs',
      'Risk management strategies',
      'Technical and fundamental analysis'
    ],
    curriculum: [
      {
        title: 'Introduction to Forex Trading',
        lectures: [
          { title: 'What is Forex Trading?', duration: '15:30', preview: true },
          { title: 'The History of Forex Markets', duration: '12:45', preview: false },
          { title: 'Why Trade Forex?', duration: '10:20', preview: false }
        ]
      },
      {
        title: 'Understanding Currency Pairs',
        lectures: [
          { title: 'Major, Minor and Exotic Pairs', duration: '18:15', preview: true },
          { title: 'Reading Currency Quotes', duration: '14:30', preview: false },
          { title: 'Pips, Lots and Leverage Explained', duration: '22:10', preview: false }
        ]
      }
    ],
    previewLessons: [
      {
        title: 'What is Forex Trading?',
        duration: '15:30',
        description: 'This lesson introduces the foreign exchange market and explains how currencies are traded.'
      },
      {
        title: 'Major, Minor and Exotic Pairs',
        duration: '18:15',
        description: 'Learn about different types of currency pairs and how they're categorized in the forex market.'
      }
    ]
  },
  {
    id: '2',
    title: 'Advanced Stock Market Strategies',
    description: 'Take your stock trading to the next level with advanced technical analysis and risk management.',
    instructor: {
      name: 'Sarah Williams',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    level: 'Advanced',
    price: 129.99,
    duration: '16 hours',
    lectures: 32,
    students: 850,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1590283603385-17d1b6d19a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    previewVideo: 'https://player.vimeo.com/video/76979871',
    features: [
      'Advanced technical analysis patterns',
      'Options strategies for income and protection',
      'Portfolio construction techniques',
      'Volatility-based trading methods'
    ],
    curriculum: [
      {
        title: 'Advanced Chart Patterns',
        lectures: [
          { title: 'Harmonic Patterns', duration: '28:15', preview: true },
          { title: 'Elliot Wave Theory', duration: '35:20', preview: false },
          { title: 'Advanced Candlestick Combinations', duration: '26:45', preview: false }
        ]
      },
      {
        title: 'Risk Management',
        lectures: [
          { title: 'Position Sizing Techniques', duration: '22:30', preview: true },
          { title: 'Kelly Criterion and Optimal f', duration: '24:15', preview: false },
          { title: 'Managing Drawdowns', duration: '18:40', preview: false }
        ]
      }
    ],
    previewLessons: [
      {
        title: 'Harmonic Patterns',
        duration: '28:15',
        description: 'Learn about advanced harmonic price patterns and how to identify them on charts.'
      },
      {
        title: 'Position Sizing Techniques',
        duration: '22:30',
        description: 'Discover professional techniques for determining optimal position sizes based on risk parameters.'
      }
    ]
  },
  {
    id: '3',
    title: 'Cryptocurrency Trading Essentials',
    description: 'Master the fundamentals of cryptocurrency trading in this comprehensive course for beginners.',
    instructor: {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    level: 'Beginner to Intermediate',
    price: 99.99,
    duration: '14 hours',
    lectures: 28,
    students: 1780,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    previewVideo: 'https://player.vimeo.com/video/305484787',
    features: [
      'Blockchain technology fundamentals',
      'Cryptocurrency exchange navigation',
      'Wallet security best practices',
      'Technical analysis for crypto markets'
    ],
    curriculum: [
      {
        title: 'Blockchain Fundamentals',
        lectures: [
          { title: 'What is Blockchain Technology?', duration: '16:40', preview: true },
          { title: 'Understanding Distributed Ledgers', duration: '18:15', preview: false },
          { title: 'Consensus Mechanisms Explained', duration: '21:30', preview: false }
        ]
      },
      {
        title: 'Cryptocurrency Basics',
        lectures: [
          { title: 'Bitcoin: The First Cryptocurrency', duration: '22:10', preview: true },
          { title: 'Altcoins and Token Economics', duration: '24:45', preview: false },
          { title: 'Storing and Securing Your Assets', duration: '19:30', preview: false }
        ]
      }
    ],
    previewLessons: [
      {
        title: 'What is Blockchain Technology?',
        duration: '16:40',
        description: 'An introduction to blockchain technology and how it forms the foundation of cryptocurrencies.'
      },
      {
        title: 'Bitcoin: The First Cryptocurrency',
        duration: '22:10',
        description: 'Learn about Bitcoin's history, features, and why it remains the dominant cryptocurrency.'
      }
    ]
  }
];

const CoursePreview = () => {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState([80]);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPreview, setSelectedPreview] = useState(0);
  
  // Find the course by id
  const course = courses.find(c => c.id === id);
  
  // Handle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Handle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  // Update progress for demo purposes
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          // Reset to beginning when it reaches "end"
          if (prevTime >= 100) {
            return 0;
          }
          return prevTime + 0.5;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying]);
  
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
  
  const currentPreviewLesson = course.previewLessons[selectedPreview];
  
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6">
          <Link to="/courses" className="text-secondary hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to courses
          </Link>
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Course Preview: {course.title}</h1>
          <p className="text-gray-300">Sample lessons from this course</p>
        </div>
        
        {/* Video Player */}
        <div className="bg-gray-950 rounded-xl overflow-hidden mb-8">
          <div className="aspect-video relative">
            {/* Video placeholder - in a real app this would be a video element or iframe */}
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              {!isPlaying ? (
                <div className="text-center">
                  <Button
                    onClick={togglePlay}
                    className="h-16 w-16 rounded-full bg-secondary text-primary hover:bg-secondary/90 mb-4"
                  >
                    <PlayCircle className="h-10 w-10" />
                  </Button>
                  <h3 className="text-white text-xl">Preview: {currentPreviewLesson.title}</h3>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover opacity-50" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-xl">Playing: {currentPreviewLesson.title}</div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 p-4">
              <div className="mb-2">
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-secondary"
                    style={{ width: `${currentTime}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={togglePlay}
                    className="h-8 w-8 text-white hover:bg-gray-800"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <PlayCircle className="h-5 w-5" />
                    )}
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-gray-800"
                  >
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-gray-800"
                  >
                    <SkipForward className="h-5 w-5" />
                  </Button>
                  
                  <div className="text-xs text-white">
                    {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} / {currentPreviewLesson.duration}
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={toggleMute}
                      className="h-8 w-8 text-white hover:bg-gray-800"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </Button>
                    
                    <div className="w-20">
                      <Slider
                        value={volume}
                        max={100}
                        step={1}
                        onValueChange={setVolume}
                        className="h-1"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-gray-800"
                  >
                    <Settings className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-gray-800"
                  >
                    <List className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-gray-800"
                  >
                    <Maximize className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Preview Content */}
            <div className="bg-gray-900/70 rounded-xl border border-gray-800 p-6 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">{currentPreviewLesson.title}</h2>
              <p className="text-gray-300 mb-6">{currentPreviewLesson.description}</p>
              
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Lesson Duration: {currentPreviewLesson.duration}</span>
                </div>
                
                <div className="h-4 w-0.5 bg-gray-700"></div>
                
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>Full Course: {course.duration}, {course.lectures} lectures</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/70 rounded-xl border border-gray-800 overflow-hidden">
              <Tabs 
                defaultValue="overview" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="bg-gray-950 p-1 w-full">
                  <TabsTrigger 
                    value="overview"
                    className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
                  >
                    Course Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="curriculum"
                    className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
                  >
                    Preview Content
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-0 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">About This Course</h3>
                  <p className="text-gray-300 mb-6">{course.description}</p>
                  
                  <h3 className="text-lg font-bold text-white mb-3">What You'll Learn</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    <Link to={`/courses/${course.id}`}>
                      <Button className="bg-secondary text-primary hover:bg-secondary/90">
                        View Full Course Details
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
                
                <TabsContent value="curriculum" className="mt-0 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Available Preview Lessons</h3>
                  
                  <div className="space-y-4">
                    {course.previewLessons.map((lesson, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedPreview(index)}
                        className={`p-4 rounded-lg cursor-pointer border ${
                          selectedPreview === index 
                            ? 'border-secondary bg-secondary/10' 
                            : 'border-gray-800 hover:border-gray-700 hover:bg-gray-800/50'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-start">
                            <div className="mr-3 mt-1">
                              {selectedPreview === index ? (
                                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                                  <PlayCircle className="h-4 w-4 text-primary" />
                                </div>
                              ) : (
                                <div className="h-6 w-6 rounded-full border border-gray-600 flex items-center justify-center">
                                  <PlayCircle className="h-4 w-4 text-gray-400" />
                                </div>
                              )}
                            </div>
                            <div>
                              <h4 className={`font-medium ${
                                selectedPreview === index ? 'text-secondary' : 'text-white'
                              }`}>
                                {lesson.title}
                              </h4>
                              <p className="text-sm text-gray-400 mt-1 line-clamp-2">{lesson.description}</p>
                            </div>
                          </div>
                          <div className="text-xs text-gray-400 ml-2 flex-shrink-0">
                            {lesson.duration}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-900/70 rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Course Information</h2>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={course.instructor.image} 
                    alt={course.instructor.name} 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <p className="text-white font-medium">Instructor: {course.instructor.name}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-white text-sm ml-1">{course.rating}</span>
                      <span className="text-gray-400 text-sm ml-1">({course.students} students)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-white">${course.price}</div>
                  <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded font-medium">
                    {course.level}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-gray-300">{course.duration} of video content</p>
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
                
                <Link to={`/courses/${course.id}/purchase`}>
                  <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 h-12 mb-3">
                    Enroll Now
                  </Button>
                </Link>
                
                <Link to={`/courses/${course.id}`}>
                  <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                    View Course Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CoursePreview;
