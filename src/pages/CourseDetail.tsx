
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Clock, Award, BookOpen, Users, 
  ChevronDown, Play, Check, Star, 
  ShoppingCart
} from 'lucide-react';

// Mock course data (in a real app, this would come from an API)
const courseData = {
  '1': {
    id: '1',
    title: 'Forex Trading Fundamentals',
    description: 'Learn the basics of forex trading with practical examples and strategies for beginners.',
    longDescription: `This comprehensive course will take you from complete beginner to a confident forex trader. You'll learn how currency markets work, how to read charts, identify trends, and execute trades with proper risk management.

    We've designed this course to be practical and easy to understand. No complex jargon or confusing concepts - just simple, effective trading knowledge that you can apply immediately.`,
    instructor: {
      name: 'Alex Thompson',
      bio: 'Former Wall Street forex trader with 12+ years of experience. Alex has helped over 5,000 students become successful traders.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    level: 'Beginner',
    price: 89.99,
    regularPrice: 129.99,
    duration: '12 hours',
    lectures: 45,
    students: 3240,
    rating: 4.8,
    ratingCount: 487,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    lastUpdated: 'November 2023',
    features: [
      'Lifetime access to 45 lectures',
      'Practical examples and case studies',
      'Trading templates and checklists',
      'Mobile and TV access',
      'Certificate of completion'
    ],
    curriculum: [
      {
        title: 'Introduction to Forex Trading',
        lectures: [
          { title: 'What is Forex Trading?', duration: '12:45', preview: true },
          { title: 'Major Currency Pairs Explained', duration: '18:22', preview: false },
          { title: 'How Forex Markets Work', duration: '15:33', preview: false }
        ]
      },
      {
        title: 'Technical Analysis Basics',
        lectures: [
          { title: 'Understanding Price Charts', duration: '22:15', preview: true },
          { title: 'Support and Resistance Levels', duration: '19:47', preview: false },
          { title: 'Trend Lines and Channels', duration: '24:18', preview: false },
          { title: 'Key Chart Patterns', duration: '28:56', preview: false }
        ]
      },
      {
        title: 'Risk Management Strategies',
        lectures: [
          { title: 'Position Sizing', duration: '14:35', preview: false },
          { title: 'Setting Stop Losses', duration: '16:42', preview: false },
          { title: 'Risk-to-Reward Ratios', duration: '20:11', preview: false }
        ]
      }
    ]
  }
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedCurriculumSection, setSelectedCurriculumSection] = useState<number | null>(0);
  
  // In a real app, you would fetch course data based on the ID
  // For this demo, we'll use the mock data or show a not found message
  const course = courseData[id || '1'];
  
  if (!course) {
    return (
      <div className="min-h-screen bg-primary flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="text-gray-400 mb-8">The course you're looking for doesn't exist or has been removed.</p>
            <Link to="/courses">
              <Button>Browse All Courses</Button>
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
      
      <main className="flex-grow pb-16">
        {/* Hero Section */}
        <section className="pt-12 pb-16 bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Course Info */}
              <div>
                <Badge variant="secondary" className="mb-4">{course.level}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-gray-300 text-lg mb-6">{course.description}</p>
                
                <div className="flex items-center mb-6">
                  <div className="flex mr-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${star <= Math.round(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-medium">{course.rating}</span>
                  <span className="text-gray-400 ml-1">({course.ratingCount} ratings)</span>
                </div>
                
                <div className="flex items-center text-gray-300 mb-4">
                  <p>Created by <span className="text-secondary">{course.instructor.name}</span></p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-5 w-5 text-secondary mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <BookOpen className="h-5 w-5 text-secondary mr-2" />
                    <span>{course.lectures} lectures</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Award className="h-5 w-5 text-secondary mr-2" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="h-5 w-5 text-secondary mr-2" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-white">${course.price.toFixed(2)}</span>
                    {course.regularPrice && (
                      <span className="text-gray-400 line-through ml-2">${course.regularPrice.toFixed(2)}</span>
                    )}
                    {course.regularPrice && (
                      <Badge className="bg-green-600 ml-2">
                        {Math.round((1 - course.price / course.regularPrice) * 100)}% off
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full h-12 text-lg bg-secondary text-primary hover:bg-secondary/90">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full h-12 text-lg border-secondary text-white hover:bg-secondary hover:text-primary">
                    Buy Now
                  </Button>
                </div>
              </div>
              
              {/* Course Preview */}
              <div className="relative">
                <div className="rounded-lg overflow-hidden border-2 border-gray-800 shadow-xl shadow-black/20">
                  <div className="relative aspect-video bg-gray-950">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="outline"
                        className="rounded-full w-16 h-16 text-white border-white hover:bg-white/20 hover:border-white"
                      >
                        <Play className="h-8 w-8 fill-white" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-2 rounded">
                      <p className="text-white font-medium">Preview the first lecture for free</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="border-b border-gray-800 w-full justify-start rounded-none bg-transparent p-0 space-x-6">
                <TabsTrigger 
                  value="overview" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-secondary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-gray-400 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="curriculum" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-secondary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-gray-400 data-[state=active]:text-white"
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger 
                  value="instructor" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-secondary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-gray-400 data-[state=active]:text-white"
                >
                  Instructor
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-secondary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-gray-400 data-[state=active]:text-white"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                      <div className={`text-gray-300 space-y-4 ${!showFullDescription && 'line-clamp-4'}`}>
                        <p>{course.longDescription}</p>
                      </div>
                      {!showFullDescription && (
                        <button
                          onClick={() => setShowFullDescription(true)}
                          className="text-secondary hover:text-secondary/80 mt-2 flex items-center"
                        >
                          Show more <ChevronDown className="h-4 w-4 ml-1" />
                        </button>
                      )}
                    </div>
                    
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mr-2 mt-1">
                              <Check className="h-5 w-5 text-secondary" />
                            </div>
                            <p className="text-gray-300">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 h-fit">
                    <h3 className="text-xl font-bold mb-4">This course includes:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-300">
                        <BookOpen className="h-5 w-5 text-secondary mr-3" />
                        <span>{course.lectures} lectures</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <Clock className="h-5 w-5 text-secondary mr-3" />
                        <span>{course.duration} of video content</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <Award className="h-5 w-5 text-secondary mr-3" />
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-center text-gray-300">
                        <Users className="h-5 w-5 text-secondary mr-3" />
                        <span>Access on all devices</span>
                      </li>
                    </ul>
                    <div className="mt-6 space-y-4">
                      <Button className="w-full">
                        Add to Cart
                      </Button>
                      <p className="text-center text-gray-400 text-sm">
                        30-Day Money-Back Guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum" className="mt-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-300">
                      {course.curriculum.reduce((total, section) => total + section.lectures.length, 0)} lectures • {course.duration} total length
                    </p>
                    <Button variant="outline" size="sm" className="text-secondary border-secondary hover:bg-secondary/10">
                      Expand All Sections
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {course.curriculum.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border border-gray-800 rounded-lg overflow-hidden">
                        <div 
                          className="bg-gray-900 p-4 flex items-center justify-between cursor-pointer"
                          onClick={() => setSelectedCurriculumSection(
                            selectedCurriculumSection === sectionIndex ? null : sectionIndex
                          )}
                        >
                          <div>
                            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                            <p className="text-gray-400 text-sm">{section.lectures.length} lectures</p>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${
                            selectedCurriculumSection === sectionIndex ? 'transform rotate-180' : ''
                          }`} />
                        </div>
                        
                        {selectedCurriculumSection === sectionIndex && (
                          <div className="divide-y divide-gray-800">
                            {section.lectures.map((lecture, lectureIndex) => (
                              <div key={lectureIndex} className="p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                  <Play className="h-5 w-5 text-gray-400 mr-3" />
                                  <div>
                                    <p className="text-white">{lecture.title}</p>
                                    {lecture.preview && (
                                      <span className="text-xs text-secondary">Preview available</span>
                                    )}
                                  </div>
                                </div>
                                <div className="text-gray-400">{lecture.duration}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="instructor" className="mt-6">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-bold mb-6">About the Instructor</h2>
                  
                  <div className="flex items-start mb-6">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src={course.instructor.image} alt={course.instructor.name} />
                      <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{course.instructor.name}</h3>
                      <p className="text-secondary">Trading Instructor & Mentor</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center text-gray-300">
                      <Star className="h-5 w-5 text-yellow-400 mr-2" />
                      <span>4.8 Instructor Rating</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="h-5 w-5 text-secondary mr-2" />
                      <span>5,240+ Students</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <BookOpen className="h-5 w-5 text-secondary mr-2" />
                      <span>8 Courses</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Award className="h-5 w-5 text-secondary mr-2" />
                      <span>12+ Years Trading Experience</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-300">
                    <p>{course.instructor.bio}</p>
                    <p>Through his courses, Alex focuses on practical strategies that work in real market conditions, not just theory. His teaching style breaks down complex concepts into easy-to-understand steps that students can immediately apply.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="max-w-4xl">
                  <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="col-span-1">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-white mb-2">{course.rating}</div>
                        <div className="flex justify-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${star <= Math.round(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-400">Course Rating</p>
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => {
                          // Mock percentages for demonstration
                          const percent = rating === 5 ? 78 : 
                                         rating === 4 ? 15 : 
                                         rating === 3 ? 5 : 
                                         rating === 2 ? 1 : 1;
                          
                          return (
                            <div key={rating} className="flex items-center">
                              <div className="flex items-center w-20">
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                <span className="ml-1 text-gray-300">{rating}</span>
                              </div>
                              <div className="w-full bg-gray-800 rounded-full h-2.5 mx-2">
                                <div 
                                  className="bg-secondary h-2.5 rounded-full" 
                                  style={{ width: `${percent}%` }}
                                ></div>
                              </div>
                              <div className="text-gray-400 w-16 text-right">{percent}%</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Mock reviews for demonstration */}
                    <div className="border-b border-gray-800 pb-6">
                      <div className="flex items-start mb-4">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h4 className="text-white font-medium">John Doe</h4>
                            <span className="text-gray-500 text-sm ml-2">3 weeks ago</span>
                          </div>
                          <div className="flex my-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300">This course has been incredibly valuable for my trading journey. The concepts are explained in such clear terms that I was able to start applying them right away. I've already seen improvements in my trade success rate.</p>
                    </div>
                    
                    <div className="border-b border-gray-800 pb-6">
                      <div className="flex items-start mb-4">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h4 className="text-white font-medium">Sarah Miller</h4>
                            <span className="text-gray-500 text-sm ml-2">1 month ago</span>
                          </div>
                          <div className="flex my-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300">Great course for beginners. Alex explains everything step by step without rushing through important concepts. The practice exercises really helped solidify my understanding.</p>
                    </div>
                    
                    <Button variant="outline" className="mx-auto block">Load More Reviews</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
