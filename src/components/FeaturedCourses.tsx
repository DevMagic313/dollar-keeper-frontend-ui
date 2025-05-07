
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CourseCard from './CourseCard';

const FeaturedCourses = () => {
  // Sample course data with verified working image URLs
  const courses = [
    {
      id: '1',
      title: 'Forex Trading for Beginners',
      description: 'Master the basics of currency trading in this comprehensive course for beginners.',
      instructor: 'David Williams',
      level: 'Beginner',
      price: 79.99,
      duration: '6 Hours',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Stock Market Fundamentals',
      description: 'Learn how to analyze stocks and make informed investment decisions in the stock market.',
      instructor: 'Sarah Johnson',
      level: 'Beginner',
      price: 89.99,
      duration: '8 Hours',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'Technical Analysis Masterclass',
      description: 'Deep dive into chart patterns, indicators, and technical trading strategies.',
      instructor: 'Michael Chen',
      level: 'Intermediate',
      price: 119.99,
      duration: '10 Hours',
      image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured <span className="gradient-text">Courses</span></h2>
            <p className="text-gray-400">Learn from our most popular trading courses</p>
          </div>
          <Link to="/courses" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-secondary text-white hover:bg-secondary hover:text-primary">
              View All Courses
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
