
import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Retail Trader',
      content: "Dollar Keeper's courses completely changed my approach to trading. The concepts are explained in such simple terms that even a beginner like me could understand complex strategies.",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      content: 'I tried many trading courses before, but they were too complicated. Dollar Keeper breaks everything down into simple steps that anyone can follow.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'Emma Roberts',
      role: 'Financial Analyst',
      content: 'Even as someone working in finance, I found these courses incredibly valuable. The practical approach and clear examples make complex trading concepts accessible.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    {
      name: 'David Wilson',
      role: 'Day Trader',
      content: 'The strategies I learned through Dollar Keeper have consistently helped me identify profitable trades. Worth every penny!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    }
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Students Say</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Hear from traders who have transformed their trading journey with our courses.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800 hover:text-secondary z-10"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800 hover:text-secondary z-10"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-secondary w-6' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
