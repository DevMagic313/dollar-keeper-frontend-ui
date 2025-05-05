
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="hidden sm:block absolute top-0 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-0 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Trading Journey</span>?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their financial future with our simple, effective trading education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Basic Membership</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$199</span>
                <span className="text-gray-400 ml-1">/ one-time</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access to 10+ beginner courses
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Practice exercises & quizzes
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Trading templates & worksheets
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Forum community access
                </li>
              </ul>
              <Link to="/signup?plan=basic">
                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-secondary relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-secondary text-primary px-3 py-1 text-xs font-semibold rounded">POPULAR</div>
              <h3 className="text-xl font-semibold text-white mb-4">Premium Membership</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$399</span>
                <span className="text-gray-400 ml-1">/ one-time</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access to all 30+ courses
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Live trading sessions (weekly)
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Trading strategy workbooks
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  One-on-one mentoring session
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Private Discord community
                </li>
              </ul>
              <Link to="/signup?plan=premium">
                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                  Get Premium Access
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300">Need a custom solution for your team or company?</p>
            <Link to="/contact" className="text-secondary hover:underline font-medium">Contact us for enterprise pricing</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
