
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Award, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  BarChart
} from 'lucide-react';

const ProgressPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data
  const overallProgress = 42; // percentage
  const courseProgress = [
    {
      id: '1',
      title: 'Forex Trading Fundamentals',
      completed: 80,
      totalModules: 10,
      completedModules: 8,
      lastAccessed: '2 hours ago',
      certificateAvailable: false
    },
    {
      id: '2',
      title: 'Advanced Stock Market Strategies',
      completed: 35,
      totalModules: 12,
      completedModules: 4,
      lastAccessed: 'Yesterday',
      certificateAvailable: false
    },
    {
      id: '3',
      title: 'Cryptocurrency Trading Essentials',
      completed: 10,
      totalModules: 8,
      completedModules: 1,
      lastAccessed: '5 days ago',
      certificateAvailable: false
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'First Course Completed',
      description: 'Finish your first course',
      achieved: true,
      date: '3 days ago',
      icon: <Award className="h-10 w-10 text-secondary" />
    },
    {
      id: 2,
      title: 'Course Streak',
      description: 'Study for 7 consecutive days',
      achieved: true,
      date: '1 week ago',
      icon: <TrendingUp className="h-10 w-10 text-secondary" />
    },
    {
      id: 3,
      title: 'Module Master',
      description: 'Complete 10 modules',
      achieved: true,
      date: '2 weeks ago',
      icon: <CheckCircle className="h-10 w-10 text-secondary" />
    },
    {
      id: 4,
      title: 'Fast Learner',
      description: 'Complete a course in less than a week',
      achieved: false,
      progress: 60,
      icon: <Clock className="h-10 w-10 text-gray-500" />
    },
    {
      id: 5,
      title: 'Trading Expert',
      description: 'Complete all trading courses',
      achieved: false,
      progress: 25,
      icon: <BarChart className="h-10 w-10 text-gray-500" />
    }
  ];
  
  const statsData = {
    totalTimeSpent: '28 hours',
    coursesStarted: 3,
    coursesCompleted: 1,
    modulesCompleted: 13,
    averageCompletion: '42%'
  };
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">My Progress</h1>
        <p className="text-gray-400">Track your learning journey and achievements</p>
      </div>
      
      {/* Overall Progress Card */}
      <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Overall Progress</h2>
            <p className="text-gray-400">Your learning progress across all courses</p>
          </div>
          <div className="text-4xl font-bold text-secondary mt-2 md:mt-0">{overallProgress}%</div>
        </div>
        
        <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-secondary"
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          <div className="bg-gray-800/50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400">Time Spent</p>
            <p className="text-lg font-bold text-white">{statsData.totalTimeSpent}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400">Courses Started</p>
            <p className="text-lg font-bold text-white">{statsData.coursesStarted}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400">Completed</p>
            <p className="text-lg font-bold text-white">{statsData.coursesCompleted}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400">Modules Done</p>
            <p className="text-lg font-bold text-white">{statsData.modulesCompleted}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400">Avg. Completion</p>
            <p className="text-lg font-bold text-white">{statsData.averageCompletion}</p>
          </div>
        </div>
      </div>
      
      {/* Tabs for different progress views */}
      <Tabs 
        defaultValue="courses" 
        className="space-y-6"
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="bg-gray-900 p-1">
          <TabsTrigger 
            value="courses"
            className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Course Progress
          </TabsTrigger>
          <TabsTrigger 
            value="achievements"
            className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary"
          >
            <Award className="h-4 w-4 mr-2" />
            Achievements
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses" className="space-y-6">
          {courseProgress.map(course => (
            <div 
              key={course.id} 
              className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
                  <p className="text-sm text-gray-400">
                    {course.completedModules} of {course.totalModules} modules completed
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-secondary">{course.completed}%</span>
                  <p className="text-xs text-gray-500">Last accessed: {course.lastAccessed}</p>
                </div>
              </div>
              
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
                <div 
                  className="h-full bg-secondary"
                  style={{ width: `${course.completed}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-gray-400">
                  <Clock size={14} className="mr-1" />
                  <span>
                    {course.completed === 100 
                      ? 'Completed on 03/15/2024' 
                      : `${course.totalModules - course.completedModules} modules remaining`
                    }
                  </span>
                </div>
                
                {course.completed === 100 && !course.certificateAvailable && (
                  <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">
                    Certificate Processing
                  </span>
                )}
                
                {course.certificateAvailable && (
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                    Certificate Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="achievements" className="space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map(achievement => (
              <div 
                key={achievement.id} 
                className={`bg-gray-900/70 backdrop-blur-sm rounded-xl border ${
                  achievement.achieved ? 'border-secondary/30' : 'border-gray-800'
                } p-6`}
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-full p-3 ${
                    achievement.achieved ? 'bg-secondary/10' : 'bg-gray-800'
                  }`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className={`text-lg font-bold ${
                        achievement.achieved ? 'text-white' : 'text-gray-400'
                      }`}>
                        {achievement.title}
                      </h3>
                      
                      {achievement.achieved && (
                        <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-2">
                      {achievement.description}
                    </p>
                    
                    {achievement.achieved ? (
                      <p className="text-xs text-gray-500">Achieved {achievement.date}</p>
                    ) : (
                      <div>
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-secondary/50"
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default ProgressPage;
