
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import CourseCategories from '@/components/CourseCategories';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <FeatureSection />
      <FeaturedCourses />
      <CourseCategories />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
