
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
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
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Students Say</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Hear from traders who have transformed their trading journey with our courses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
