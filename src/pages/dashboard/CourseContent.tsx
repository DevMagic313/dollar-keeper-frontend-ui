
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  PlayCircle, 
  BookOpen, 
  Download, 
  MessageSquare, 
  CheckCircle, 
  ChevronRight, 
  ArrowLeft,
  FileText
} from 'lucide-react';

const CourseContent = () => {
  const { id } = useParams<{ id: string }>();
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  
  // Mock course data
  const course = {
    id: id,
    title: id === '1' ? 'Forex Trading Fundamentals' 
           : id === '2' ? 'Advanced Stock Market Strategies' 
           : 'Cryptocurrency Trading Essentials',
    instructor: id === '1' ? 'Alex Thompson' 
                : id === '2' ? 'Sarah Williams' 
                : 'Michael Chen',
    progress: id === '1' ? 80 
              : id === '2' ? 35 
              : 10,
    duration: '12 hours',
    rating: 4.8,
    studentsCount: 1245,
    lastUpdated: 'March 2024',
    description: 'Learn the essential concepts and strategies for successful trading in the financial markets.',
    image: id === '1' 
      ? 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      : id === '2' 
      ? 'https://images.unsplash.com/photo-1590283603385-17d1b6d19a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      : 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    modules: [
      {
        id: 'm1',
        title: 'Getting Started',
        duration: '1h 20m',
        completed: true,
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to the Course',
            duration: '10:00',
            completed: true,
            type: 'video'
          },
          {
            id: 'l2',
            title: 'Understanding the Trading Landscape',
            duration: '15:30',
            completed: true,
            type: 'video'
          },
          {
            id: 'l3',
            title: 'Setting Up Your Trading Environment',
            duration: '20:45',
            completed: true,
            type: 'video'
          },
          {
            id: 'l4',
            title: 'Module 1 Quiz',
            duration: '10:00',
            completed: true,
            type: 'quiz'
          }
        ]
      },
      {
        id: 'm2',
        title: 'Basic Trading Concepts',
        duration: '2h 15m',
        completed: true,
        lessons: [
          {
            id: 'l5',
            title: 'Understanding Market Terminology',
            duration: '18:30',
            completed: true,
            type: 'video'
          },
          {
            id: 'l6',
            title: 'Reading Market Charts',
            duration: '22:15',
            completed: true,
            type: 'video'
          },
          {
            id: 'l7',
            title: 'Types of Market Analysis',
            duration: '25:00',
            completed: true,
            type: 'video'
          },
          {
            id: 'l8',
            title: 'Market Analysis Exercise',
            duration: '15:00',
            completed: true,
            type: 'exercise'
          },
          {
            id: 'l9',
            title: 'Module 2 Quiz',
            duration: '15:00',
            completed: true,
            type: 'quiz'
          }
        ]
      },
      {
        id: 'm3',
        title: 'Trading Strategies',
        duration: '3h 30m',
        completed: id === '1',
        lessons: [
          {
            id: 'l10',
            title: 'Introduction to Trading Strategies',
            duration: '20:00',
            completed: id === '1',
            type: 'video'
          },
          {
            id: 'l11',
            title: 'Day Trading Fundamentals',
            duration: '30:00',
            completed: id === '1',
            type: 'video'
          },
          {
            id: 'l12',
            title: 'Swing Trading Techniques',
            duration: '28:45',
            completed: id === '1',
            type: 'video'
          },
          {
            id: 'l13',
            title: 'Position Trading Approach',
            duration: '25:30',
            completed: id === '1',
            type: 'video'
          },
          {
            id: 'l14',
            title: 'Strategy Comparison Exercise',
            duration: '20:00',
            completed: id === '1',
            type: 'exercise'
          },
          {
            id: 'l15',
            title: 'Module 3 Quiz',
            duration: '15:00',
            completed: id === '1',
            type: 'quiz'
          }
        ]
      },
      {
        id: 'm4',
        title: 'Risk Management',
        duration: '2h 45m',
        completed: false,
        lessons: [
          {
            id: 'l16',
            title: 'Understanding Risk in Trading',
            duration: '18:30',
            completed: false,
            type: 'video'
          },
          {
            id: 'l17',
            title: 'Setting Stop Loss Orders',
            duration: '22:15',
            completed: false,
            type: 'video'
          },
          {
            id: 'l18',
            title: 'Position Sizing Techniques',
            duration: '25:00',
            completed: false,
            type: 'video'
          },
          {
            id: 'l19',
            title: 'Risk-Reward Ratio',
            duration: '20:00',
            completed: false,
            type: 'video'
          },
          {
            id: 'l20',
            title: 'Risk Management Exercise',
            duration: '15:00',
            completed: false,
            type: 'exercise'
          },
          {
            id: 'l21',
            title: 'Module 4 Quiz',
            duration: '15:00',
            completed: false,
            type: 'quiz'
          }
        ]
      }
    ],
    resources: [
      { id: 'r1', title: 'Trading Terminology Glossary', type: 'PDF', size: '2.4 MB' },
      { id: 'r2', title: 'Market Analysis Cheat Sheet', type: 'PDF', size: '1.8 MB' },
      { id: 'r3', title: 'Risk Management Calculator', type: 'Excel', size: '3.2 MB' },
      { id: 'r4', title: 'Trading Journal Template', type: 'PDF', size: '1.5 MB' }
    ]
  };
  
  // Calculate completed lessons
  const totalLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.length, 0
  );
  
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter(lesson => lesson.completed).length, 0
  );
  
  // Get current lesson content
  const currentModule = course.modules[activeModule];
  const currentLesson = currentModule.lessons[activeLesson];
  
  // Handle lesson change
  const goToLesson = (moduleIndex: number, lessonIndex: number) => {
    setActiveModule(moduleIndex);
    setActiveLesson(lessonIndex);
    
    // Scroll to top
    window.scrollTo(0, 0);
  };
  
  // Handle next lesson
  const goToNextLesson = () => {
    if (activeLesson < currentModule.lessons.length - 1) {
      // Go to next lesson in current module
      goToLesson(activeModule, activeLesson + 1);
    } else if (activeModule < course.modules.length - 1) {
      // Go to first lesson of next module
      goToLesson(activeModule + 1, 0);
    }
  };
  
  // Handle previous lesson
  const goToPrevLesson = () => {
    if (activeLesson > 0) {
      // Go to previous lesson in current module
      goToLesson(activeModule, activeLesson - 1);
    } else if (activeModule > 0) {
      // Go to last lesson of previous module
      const prevModule = course.modules[activeModule - 1];
      goToLesson(activeModule - 1, prevModule.lessons.length - 1);
    }
  };
  
  // Check if there's a next lesson
  const hasNextLesson = 
    activeLesson < currentModule.lessons.length - 1 || 
    activeModule < course.modules.length - 1;
  
  // Check if there's a previous lesson
  const hasPrevLesson = 
    activeLesson > 0 || 
    activeModule > 0;
  
  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center">
        <Button
          variant="ghost" 
          className="mr-2 p-0 h-auto text-gray-400 hover:text-white"
          asChild
        >
          <Link to="/dashboard/my-courses">
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span>Back to My Courses</span>
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Course header */}
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-6 mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">{course.title}</h1>
            <div className="flex items-center text-gray-400 mb-4">
              <span>Instructor: {course.instructor}</span>
              <span className="mx-2">•</span>
              <span>{course.duration}</span>
              <span className="mx-2">•</span>
              <span>{totalLessons} lessons</span>
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400">Your progress</p>
              <span className="text-secondary font-medium">{course.progress}% complete</span>
            </div>
            <Progress value={course.progress} className="h-2 mb-4" />
            
            <div className="flex items-center text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-secondary" />
                {completedLessons}/{totalLessons} lessons completed
              </span>
            </div>
          </div>
          
          {/* Lesson content */}
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 mb-6">
            <div className="p-6 pb-4 border-b border-gray-800">
              <h2 className="text-xl font-bold text-white mb-1">
                {currentLesson.title}
              </h2>
              <div className="flex items-center text-sm text-gray-400">
                <span className="flex items-center mr-4">
                  {currentLesson.type === 'video' ? (
                    <PlayCircle className="h-4 w-4 mr-1 text-secondary" />
                  ) : currentLesson.type === 'quiz' ? (
                    <FileText className="h-4 w-4 mr-1 text-secondary" />
                  ) : (
                    <BookOpen className="h-4 w-4 mr-1 text-secondary" />
                  )}
                  {currentLesson.type === 'video' ? 'Video Lesson' : 
                   currentLesson.type === 'quiz' ? 'Quiz' : 'Practice Exercise'}
                </span>
                <span>Duration: {currentLesson.duration}</span>
              </div>
            </div>
            
            <div className="aspect-video bg-gray-950 flex items-center justify-center">
              {currentLesson.type === 'video' ? (
                <div className="text-center">
                  <PlayCircle className="h-16 w-16 text-secondary mx-auto mb-4 animate-pulse" />
                  <p className="text-white">Video player would be displayed here</p>
                  <p className="text-gray-400 text-sm">This is a placeholder for demonstration</p>
                </div>
              ) : currentLesson.type === 'quiz' ? (
                <div className="text-center">
                  <FileText className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <p className="text-white">Quiz content would be displayed here</p>
                  <p className="text-gray-400 text-sm">This is a placeholder for demonstration</p>
                </div>
              ) : (
                <div className="text-center">
                  <BookOpen className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <p className="text-white">Exercise content would be displayed here</p>
                  <p className="text-gray-400 text-sm">This is a placeholder for demonstration</p>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <Tabs defaultValue="content" className="space-y-4">
                <TabsList className="bg-gray-950 p-1">
                  <TabsTrigger 
                    value="content"
                    className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
                  >
                    Lesson Content
                  </TabsTrigger>
                  <TabsTrigger 
                    value="notes"
                    className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
                  >
                    Notes
                  </TabsTrigger>
                  <TabsTrigger 
                    value="discussion"
                    className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
                  >
                    Discussion
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="content">
                  <div className="text-gray-300">
                    <p className="mb-4">
                      In this {currentLesson.type}, you will learn about the key concepts related to {currentLesson.title.toLowerCase()}.
                      This information is essential for understanding how to effectively analyze and navigate financial markets.
                    </p>
                    <p className="mb-4">
                      The content covers both theoretical concepts and practical applications, giving you a comprehensive understanding
                      of how to apply these principles in real trading scenarios.
                    </p>
                    <p>
                      After completing this {currentLesson.type}, you'll be able to confidently apply these techniques
                      to your own trading strategy and improve your overall trading performance.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="notes">
                  <div className="border border-dashed border-gray-700 rounded-lg p-6 text-center">
                    <p className="text-gray-400">You haven't taken any notes for this lesson yet.</p>
                    <Button 
                      variant="outline" 
                      className="mt-3 border-gray-700 text-secondary hover:bg-secondary/10"
                    >
                      Add Note
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="discussion">
                  <div className="border border-dashed border-gray-700 rounded-lg p-6 text-center">
                    <MessageSquare className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-400">Join the discussion about this lesson.</p>
                    <Button 
                      variant="outline" 
                      className="mt-3 border-gray-700 text-secondary hover:bg-secondary/10"
                    >
                      View Discussion
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="p-6 border-t border-gray-800 flex justify-between">
              <Button
                onClick={goToPrevLesson}
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
                disabled={!hasPrevLesson}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Lesson
              </Button>
              
              <Button
                onClick={goToNextLesson}
                className="bg-secondary text-primary hover:bg-secondary/90"
                disabled={!hasNextLesson}
              >
                Next Lesson
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Course sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-6 mb-6 sticky top-6">
            <h2 className="text-lg font-bold text-white mb-4">Course Content</h2>
            
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-none">
              {course.modules.map((module, moduleIndex) => (
                <div key={module.id} className="border border-gray-800 rounded-lg overflow-hidden">
                  <div className={`p-3 ${
                    moduleIndex === activeModule ? 'bg-gray-800' : 'bg-gray-900'
                  }`}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-white">{module.title}</h3>
                      <div className="flex items-center text-xs text-gray-400">
                        <span>{module.duration}</span>
                        {module.completed && (
                          <CheckCircle className="h-4 w-4 ml-2 text-secondary" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${moduleIndex === activeModule ? 'block' : 'hidden'}`}>
                    <ul className="divide-y divide-gray-800">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li 
                          key={lesson.id}
                          onClick={() => goToLesson(moduleIndex, lessonIndex)} 
                          className={`p-3 pl-4 cursor-pointer ${
                            moduleIndex === activeModule && lessonIndex === activeLesson
                              ? 'bg-secondary/10'
                              : 'hover:bg-gray-800/50'
                          }`}
                        >
                          <div className="flex items-start">
                            <div className="mr-3 mt-0.5">
                              {lesson.completed ? (
                                <CheckCircle className="h-4 w-4 text-secondary" />
                              ) : (
                                <div className="h-4 w-4 rounded-full border border-gray-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className={`text-sm ${
                                moduleIndex === activeModule && lessonIndex === activeLesson
                                  ? 'text-secondary font-medium'
                                  : 'text-gray-300'
                              }`}>
                                {lesson.title}
                              </p>
                              <div className="flex items-center text-xs text-gray-500 mt-1">
                                <span className="flex items-center">
                                  {lesson.type === 'video' ? (
                                    <PlayCircle className="h-3 w-3 mr-1" />
                                  ) : lesson.type === 'quiz' ? (
                                    <FileText className="h-3 w-3 mr-1" />
                                  ) : (
                                    <BookOpen className="h-3 w-3 mr-1" />
                                  )}
                                  {lesson.type}
                                </span>
                                <span className="ml-2">{lesson.duration}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h3 className="font-medium text-white mb-3">Resources</h3>
              <ul className="space-y-2">
                {course.resources.map(resource => (
                  <li key={resource.id}>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-secondary" />
                        <span>{resource.title}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{resource.type}</span>
                        <Download className="h-3 w-3 ml-1" />
                      </div>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CourseContent;
