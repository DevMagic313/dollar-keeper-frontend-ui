
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CourseCard from '@/components/CourseCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Filter, SortAsc, Grid, List } from 'lucide-react';

const Courses = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock course data
  const courses = [
    {
      id: '1',
      title: 'Forex Trading Fundamentals',
      description: 'Learn the basics of forex trading with practical examples and strategies for beginners.',
      instructor: 'Alex Thompson',
      level: 'Beginner',
      price: 89.99,
      duration: '12 hours',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '2',
      title: 'Advanced Stock Market Strategies',
      description: 'Take your stock trading to the next level with advanced technical analysis and risk management.',
      instructor: 'Sarah Williams',
      level: 'Advanced',
      price: 129.99,
      duration: '16 hours',
      image: 'https://images.unsplash.com/photo-1590283603385-17d1b6d19a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '3',
      title: 'Cryptocurrency Trading Essentials',
      description: 'Master the cryptocurrency markets with proven strategies for Bitcoin, Ethereum, and more.',
      instructor: 'Michael Chen',
      level: 'Intermediate',
      price: 99.99,
      duration: '14 hours',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '4',
      title: 'Options Trading Masterclass',
      description: 'Understand options contracts and use them to enhance your investment portfolio with lower risk.',
      instructor: 'Emma Roberts',
      level: 'Advanced',
      price: 149.99,
      duration: '20 hours',
      image: 'https://images.unsplash.com/photo-1642543492855-9e1dc49fe05c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '5',
      title: 'Technical Analysis for Beginners',
      description: 'Learn how to read charts, identify patterns, and use technical indicators to make better trading decisions.',
      instructor: 'David Wilson',
      level: 'Beginner',
      price: 79.99,
      duration: '10 hours',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: '6',
      title: 'Day Trading Strategies',
      description: 'Discover profitable day trading strategies with focus on risk management and psychology.',
      instructor: 'Jennifer Lopez',
      level: 'Intermediate',
      price: 109.99,
      duration: '15 hours',
      image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  // Filter courses based on search query
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our <span className="gradient-text">Courses</span></h1>
          <p className="text-gray-400 max-w-2xl">Discover our comprehensive range of trading courses designed to take you from beginner to expert. Learn at your own pace with lifetime access.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          {/* Search and filters */}
          <div className="w-full md:w-64 space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <Input
                type="text"
                placeholder="Search courses..."
                className="pl-10 bg-gray-800/50 border-gray-700 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 text-secondary mr-2" />
                <h3 className="text-lg font-semibold text-white">Filters</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300 mb-1.5 block">Level</Label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="level-beginner" />
                      <Label htmlFor="level-beginner" className="ml-2 text-gray-400">Beginner</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="level-intermediate" />
                      <Label htmlFor="level-intermediate" className="ml-2 text-gray-400">Intermediate</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="level-advanced" />
                      <Label htmlFor="level-advanced" className="ml-2 text-gray-400">Advanced</Label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label className="text-gray-300 mb-1.5 block">Price Range</Label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                  </div>
                </div>
                
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          </div>
          
          {/* Course listings */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-400">
                Showing {filteredCourses.length} courses
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center mr-4">
                  <SortAsc className="h-5 w-5 text-gray-500 mr-1" />
                  <select className="bg-gray-800 border-gray-700 text-white rounded-md text-sm">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  className={`border-gray-700 ${view === 'grid' ? 'bg-secondary/20 text-secondary' : 'text-gray-400'}`}
                  onClick={() => setView('grid')}
                >
                  <Grid className="h-4 w-4" />
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
            
            {filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">No courses found. Try a different search term.</p>
                <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
              </div>
            ) : (
              <div className={view === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Courses;
