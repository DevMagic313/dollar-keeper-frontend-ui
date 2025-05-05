
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Check, User, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary"></div>
          </div>
          
          {/* Animated elements */}
          <div className="hidden sm:block absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="hidden sm:block absolute top-60 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="gradient-text">Dollar Keeper</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                We're on a mission to make trading education accessible to everyone. Learn complex strategies explained in simple English.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="gradient-text">Mission</span></h2>
                <p className="text-gray-300 mb-6">
                  Dollar Keeper was founded with a simple goal in mind: to make trading education accessible to everyone. We believe that financial knowledge shouldn't be locked behind complicated jargon and expensive courses.
                </p>
                <p className="text-gray-300 mb-6">
                  Our team of experienced traders and educators work tirelessly to break down complex trading concepts into easy-to-understand lessons. We focus on practical examples and real-world applications, not just theory.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="text-gray-300">Simplify complex trading strategies for beginners</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="text-gray-300">Provide practical, actionable trading knowledge</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="text-gray-300">Create a supportive community of traders</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Trading education"
                  className="rounded-lg shadow-2xl shadow-secondary/10"
                />
                <div className="absolute -bottom-6 -left-6 bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center">
                    <Award className="h-12 w-12 text-secondary mr-4" />
                    <div>
                      <p className="text-white font-bold text-xl">10+ Years</p>
                      <p className="text-gray-400">Trading Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">10,000+</h3>
                <p className="text-gray-400">Students Worldwide</p>
              </div>
              <div className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 text-center">
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">25+</h3>
                <p className="text-gray-400">Trading Courses</p>
              </div>
              <div className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 text-center">
                <User className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
                <p className="text-gray-400">Expert Instructors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our <span className="gradient-text">Team</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Our team of experienced traders and educators are dedicated to helping you succeed in your trading journey.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 card-hover">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="John Harrison"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">John Harrison</h3>
                  <p className="text-secondary mb-4">Founder & Head Trader</p>
                  <p className="text-gray-400">Former Wall Street trader with 15+ years of experience in forex and stock markets.</p>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 card-hover">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Sarah Miller"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Sarah Miller</h3>
                  <p className="text-secondary mb-4">Head of Education</p>
                  <p className="text-gray-400">Certified financial educator with a passion for making complex topics simple.</p>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 card-hover">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Michael Chen"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Michael Chen</h3>
                  <p className="text-secondary mb-4">Technical Analysis Expert</p>
                  <p className="text-gray-400">Specializes in chart patterns and technical indicators with 10+ years of experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your <span className="gradient-text">Trading Journey</span>?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of successful traders who have transformed their trading with our courses.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/courses">
                  <Button className="w-full sm:w-auto text-lg btn-primary">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full sm:w-auto text-lg btn-outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
