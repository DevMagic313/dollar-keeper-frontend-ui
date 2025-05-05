
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, CheckCircle, Filter, GridIcon, List } from 'lucide-react';

const MyCourses = () => {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filter, setFilter] = React.useState('all'); // 'all', 'in-progress', 'completed'
  
  // Mock data for enrolled courses
  const enrolledCourses = [
    {
      id: '1',
      title: 'Forex Trading Fundamentals',
      instructor: 'Alex Thompson',
      progress: 100,
      lastAccessed: '3 days ago',
      completed: true,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '2',
      title: 'Advanced Stock Market Strategies',
      instructor: 'Sarah Williams',
      progress: 35,
      lastAccessed: 'Yesterday',
      completed: false,
      image: 'https://images.unsplash.com/photo-1590283603385-17d1b6d19a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '3',
      title: 'Cryptocurrency Trading Essentials',
      instructor: 'Michael Chen',
      progress: 10,
      lastAccessed: '5 days ago',
      completed: false,
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];
  
  // Filter courses based on search query and filter status
  const filteredCourses = enrolledCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'in-progress') return matchesSearch && !course.completed;
    if (filter === 'completed') return matchesSearch && course.completed;
    
    return matchesSearch;
  });
  
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
          <p className="text-gray-400">Manage and track your enrolled courses</p>
        </div>
        <Link to="/courses">
          <Button className="mt-4 md:mt-0 bg-secondary text-primary hover:bg-secondary/90">
            Browse More Courses
          </Button>
        </Link>
      </div>
      
      {/* Search and Filter Controls */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <Input
            type="text"
            placeholder="Search your courses..."
            className="pl-10 bg-gray-800/50 border-gray-700 text-white w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select 
              className="bg-gray-800/50 border-gray-700 text-white rounded-md px-3 py-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Courses</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className={`border-gray-700 ${view === 'grid' ? 'bg-secondary/20 text-secondary' : 'text-gray-400'}`}
              onClick={() => setView('grid')}
            >
              <GridIcon className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={`border-gray-700 ${view === 'list' ? 'bg-secondary/20 text-secondary' : 'text-gray-400'}`}
              onClick={() => setView('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Course list */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-800">
          <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
          <p className="text-gray-400 mb-6">Try a different search term or browse our course catalog</p>
          <Link to="/courses">
            <Button className="bg-secondary text-primary hover:bg-secondary/90">
              Browse Courses
            </Button>
          </Link>
        </div>
      ) : (
        <div className={view === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
        }>
          {filteredCourses.map((course) => (
            view === 'grid' ? (
              <div key={course.id} className="dashboard-card group">
                <div className="relative h-36 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">Progress: {course.progress}%</span>
                      {course.completed ? (
                        <span className="bg-green-500/90 text-white text-xs px-2 py-1 rounded">Completed</span>
                      ) : (
                        <span className="bg-secondary/90 text-primary text-xs px-2 py-1 rounded">In Progress</span>
                      )}
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
                      <div 
                        className={`h-1 rounded-full ${course.completed ? 'bg-green-500' : 'bg-secondary'}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{course.instructor}</p>
                <div className="flex items-center text-xs text-gray-400 mb-4">
                  <Clock size={14} className="mr-1" />
                  <span>Last accessed: {course.lastAccessed}</span>
                </div>
                
                <Link to={`/dashboard/course/${course.id}`}>
                  <Button 
                    className="w-full bg-secondary text-primary hover:bg-secondary/90"
                  >
                    {course.completed ? 'Review Course' : 'Continue Learning'}
                  </Button>
                </Link>
              </div>
            ) : (
              <div key={course.id} className="flex flex-col md:flex-row bg-gray-900/70 border border-gray-800 rounded-lg overflow-hidden hover:border-secondary/50 transition-all duration-300">
                <div className="w-full md:w-48 h-40 md:h-auto flex-shrink-0">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-5 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{course.title}</h3>
                      <p className="text-sm text-gray-400">{course.instructor}</p>
                    </div>
                    {course.completed ? (
                      <span className="bg-green-500/90 text-white text-xs px-2 py-1 rounded">Completed</span>
                    ) : (
                      <span className="bg-secondary/90 text-primary text-xs px-2 py-1 rounded">In Progress</span>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Progress: {course.progress}%</span>
                      <span>Last accessed: {course.lastAccessed}</span>
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full">
                      <div 
                        className={`h-1 rounded-full ${course.completed ? 'bg-green-500' : 'bg-secondary'}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400 flex items-center">
                      {course.completed ? (
                        <CheckCircle size={16} className="text-green-500 mr-1" />
                      ) : (
                        <BookOpen size={16} className="text-secondary mr-1" />
                      )}
                      <span>{course.completed ? 'Completed on 03/15/2024' : '5 lessons remaining'}</span>
                    </div>
                    <Link to={`/dashboard/course/${course.id}`}>
                      <Button 
                        size="sm"
                        className="bg-secondary text-primary hover:bg-secondary/90"
                      >
                        {course.completed ? 'Review Course' : 'Continue Learning'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default MyCourses;
