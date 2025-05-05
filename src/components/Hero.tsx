
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-primary pt-16 pb-24 sm:pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary"></div>
      </div>
      
      {/* Animated elements */}
      <div className="hidden sm:block absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute top-60 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Master Trading</span> with 
            <span className="block mt-2">Simple Strategies</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Learn effective trading techniques explained in simple English. 
            Join thousands of successful traders who started their journey with Dollar Keeper.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses">
              <Button className="w-full sm:w-auto text-lg btn-primary">
                Browse Courses
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="w-full sm:w-auto text-lg btn-outline">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-gray-400">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>10,000+ Students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
