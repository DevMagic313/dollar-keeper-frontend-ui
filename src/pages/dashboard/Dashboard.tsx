import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ShoppingCart, 
  BookCheck, 
  TrendingUp, 
  Clock, 
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  // Mock data
  const stats = [
    { 
      title: 'Courses Enrolled', 
      value: '3', 
      icon: <BookOpen className="text-secondary" size={24} />,
      change: '+1 this month'
    },
    { 
      title: 'Completed Courses', 
      value: '1', 
      icon: <BookCheck className="text-secondary" size={24} />,
      change: '33% completion rate'
    },
    { 
      title: 'Total Spent', 
      value: '$299.97', 
      icon: <ShoppingCart className="text-secondary" size={24} />,
      change: 'Last purchase: 3 days ago'
    },
  ];
  
  const activeCourses = [
    {
      id: '1',
      title: 'Forex Trading Fundamentals',
      progress: 80,
      lastAccessed: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '2',
      title: 'Advanced Stock Market Strategies',
      progress: 35,
      lastAccessed: 'Yesterday',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '3',
      title: 'Cryptocurrency Trading Essentials',
      progress: 10,
      lastAccessed: '5 days ago',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];
  
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back, {localStorage.getItem('userEmail')?.split('@')[0] || 'User'}</p>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="dashboard-card">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                <h3 className="text-xl md:text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className="bg-gray-800 rounded-full p-2 md:p-3">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Active courses section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-bold text-white">Continue Learning</h2>
          <Link to="/dashboard/my-courses">
            <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary/10">
              <span className="hidden md:inline">View All Courses</span>
              <span className="inline md:hidden">View All</span>
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {activeCourses.map((course) => (
            <div key={course.id} className="dashboard-card group">
              <div className="relative h-28 sm:h-36 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs sm:text-sm font-medium">Progress: {course.progress}%</span>
                    <span className="bg-secondary/90 text-primary text-xs px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
                    <div 
                      className="h-1 bg-secondary rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-base md:text-lg font-bold text-white mb-2 line-clamp-1">{course.title}</h3>
              <div className="flex items-center text-xs text-gray-400 mb-4">
                <Clock size={14} className="mr-1" />
                <span>Last accessed: {course.lastAccessed}</span>
              </div>
              
              <Link to={`/dashboard/course/${course.id}`}>
                <Button 
                  className="w-full bg-secondary text-primary hover:bg-secondary/90"
                >
                  Continue Learning
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Achievements section */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Recent Achievements</h2>
        <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 md:p-6">
          <div className="flex items-center">
            <Award size={32} className="text-secondary mr-3 md:mr-4" />
            <div>
              <h3 className="text-base md:text-lg font-semibold text-white">Course Completion</h3>
              <p className="text-xs md:text-sm text-gray-400">You completed "Forex Trading Fundamentals"</p>
            </div>
            <div className="ml-auto text-right">
              <span className="text-xs text-gray-500">3 days ago</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs md:text-sm text-gray-400 mb-2">Keep going! Complete more courses to earn achievements.</p>
            <Link to="/dashboard/my-courses">
              <Button variant="link" className="text-secondary p-0 h-auto">
                Browse more courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
