
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Search, HelpCircle, Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What is Dollar Keeper?',
          answer: 'Dollar Keeper is an online platform offering trading education courses designed to help beginners and intermediate traders improve their skills and understand trading concepts in simple English.'
        },
        {
          question: 'Do I need prior experience to take your courses?',
          answer: 'No, our courses are designed for all levels. We have beginner courses that start with the basics and gradually advance to more complex topics.'
        },
        {
          question: 'How long do I have access to the courses?',
          answer: 'Once you purchase a course, you have lifetime access to all course materials, including future updates.'
        }
      ]
    },
    {
      title: 'Courses & Content',
      faqs: [
        {
          question: 'What trading topics do you cover?',
          answer: 'We cover a wide range of trading topics including forex, stocks, cryptocurrencies, options, technical analysis, fundamental analysis, risk management, and trading psychology.'
        },
        {
          question: 'Are the courses self-paced?',
          answer: 'Yes, all our courses are self-paced. You can learn at your own speed and convenience.'
        },
        {
          question: 'Do you offer practical examples in your courses?',
          answer: 'Absolutely! Our courses include real-market examples, case studies, and practical demonstrations to help you apply what you learn.'
        }
      ]
    },
    {
      title: 'Payments & Pricing',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards, PayPal, and bank transfers. For some regions, we also support local payment options.'
        },
        {
          question: 'Do you offer refunds?',
          answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your purchase."
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, the price you see is the full price. There are no hidden fees or additional charges.'
        }
      ]
    },
    {
      title: 'Technical Support',
      faqs: [
        {
          question: 'What if I have technical issues with a course?',
          answer: 'Our support team is available 24/7 to help with any technical issues you might encounter. You can reach us through the contact page or via live chat.'
        },
        {
          question: 'Can I download the course videos for offline viewing?',
          answer: 'For content protection reasons, our videos are streaming-only. However, you can download supplementary materials like PDFs and worksheets.'
        },
        {
          question: 'What devices can I use to access the courses?',
          answer: 'Our platform is fully responsive. You can access courses on desktops, laptops, tablets, and smartphones.'
        }
      ]
    }
  ];
  
  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(
          faq => 
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;
  
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-60 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Find answers to the most common questions about Dollar Keeper courses and trading education.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for questions..."
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-gray-400 mb-6">Try a different search term or browse our categories below.</p>
                <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {filteredFAQs.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">
                      <span className="text-secondary mr-2">#</span>
                      {category.title}
                    </h2>
                    
                    <Accordion type="single" collapsible className="border-gray-800">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border-gray-800"
                        >
                          <AccordionTrigger className="text-white hover:text-secondary text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Still Have <span className="gradient-text">Questions?</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Can't find the answer you're looking for? Our team is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
                <a href="#" className="inline-flex items-center justify-center text-secondary hover:underline">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Live Chat Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800">
                <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Simple Explanations</h3>
                <p className="text-gray-400">
                  We break down complex trading concepts into simple, easy-to-understand language.
                </p>
              </div>
              
              <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800">
                <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Lifetime Access</h3>
                <p className="text-gray-400">
                  Once you purchase a course, you get unlimited access to all updates and new content.
                </p>
              </div>
              
              <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800">
                <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Money-Back Guarantee</h3>
                <p className="text-gray-400">
                  Try our courses risk-free with our 30-day money-back guarantee if you're not satisfied.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
