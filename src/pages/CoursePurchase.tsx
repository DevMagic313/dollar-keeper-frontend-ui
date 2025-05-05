
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Check, Shield, Calendar, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    features: [
      'Comprehensive introduction to forex markets',
      '24 on-demand video lessons',
      '5 practical exercises',
      'Trading terminology glossary',
      'Certificate of completion',
      'Lifetime access'
    ]
  },
  {
    id: '2',
    title: 'Advanced Stock Market Strategies',
    description: 'Take your stock trading to the next level with advanced technical analysis and risk management.',
    instructor: 'Sarah Williams',
    level: 'Advanced',
    price: 129.99,
    duration: '16 hours',
    image: 'https://images.unsplash.com/photo-1590283603385-17d1b6d19a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    features: [
      'Advanced chart pattern analysis',
      '32 on-demand video lessons',
      '10 real-world case studies',
      'Trading journal template',
      'Certificate of completion',
      'Lifetime access'
    ]
  },
  {
    id: '3',
    title: 'Cryptocurrency Trading Essentials',
    description: 'Master the cryptocurrency markets with proven strategies for Bitcoin, Ethereum, and more.',
    instructor: 'Michael Chen',
    level: 'Intermediate',
    price: 99.99,
    duration: '14 hours',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    features: [
      'Comprehensive crypto market overview',
      '28 on-demand video lessons',
      '7 practical trading exercises',
      'Crypto wallet security guide',
      'Certificate of completion',
      'Lifetime access'
    ]
  }
];

const CoursePurchase = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  
  // Find the course by id
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="min-h-screen bg-primary flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">Course Not Found</h2>
            <p className="text-gray-400 mb-6">The course you're looking for doesn't exist.</p>
            <Link to="/courses">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Mock successful purchase
      toast({
        title: "Purchase successful!",
        description: `You now have access to ${course.title}`,
      });
      
      // Redirect to the dashboard
      navigate("/dashboard/my-courses");
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="mb-8">
          <Link to={`/courses/${course.id}`} className="text-secondary hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to course details
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">Complete Your Purchase</h1>
          <p className="text-gray-400">You're about to gain access to {course.title}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
                
                <div className="flex items-start mb-6">
                  <div className="w-24 h-16 flex-shrink-0 rounded overflow-hidden mr-4">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{course.title}</h3>
                    <p className="text-sm text-gray-400">By {course.instructor}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded">{course.level}</span>
                      <span className="text-xs text-gray-500 ml-2">{course.duration}</span>
                    </div>
                  </div>
                </div>
                
                <Separator className="bg-gray-800 my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Original Price:</span>
                    <span>${course.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-green-500">
                    <span>Discount:</span>
                    <span>-$0.00</span>
                  </div>
                </div>
                
                <Separator className="bg-gray-800 my-4" />
                
                <div className="flex justify-between text-white text-lg font-semibold">
                  <span>Total:</span>
                  <span>${course.price.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="bg-gray-950/50 p-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-secondary mt-0.5 mr-2" />
                  <div className="text-sm text-gray-400">
                    <p className="text-white font-medium">30-Day Money-Back Guarantee</p>
                    <p>Not satisfied? Get a full refund within 30 days of purchase.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What you'll get */}
            <div className="mt-6 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              <h2 className="text-lg font-bold text-white mb-4">What You'll Get</h2>
              <ul className="space-y-3">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-bold text-white mb-6">Payment Method</h2>
              
              <div className="flex mb-6 border border-gray-800 rounded-lg overflow-hidden">
                <button
                  className={`flex-1 py-3 px-4 text-center ${
                    paymentMethod === 'credit-card' 
                      ? 'bg-secondary/20 text-secondary border-b-2 border-secondary' 
                      : 'text-gray-400 hover:bg-gray-800/50'
                  }`}
                  onClick={() => setPaymentMethod('credit-card')}
                >
                  <CreditCard className="h-5 w-5 mx-auto mb-1" />
                  <span className="text-sm">Credit Card</span>
                </button>
                <button
                  className={`flex-1 py-3 px-4 text-center ${
                    paymentMethod === 'paypal' 
                      ? 'bg-secondary/20 text-secondary border-b-2 border-secondary' 
                      : 'text-gray-400 hover:bg-gray-800/50'
                  }`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <svg className="h-5 w-5 mx-auto mb-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.508 2.622-2.194 4.04-4.937 4.12h-2.33c-.172 0-.32.124-.348.294l-.36 2.247-.022.14-.56 3.548c-.026.17.108.32.28.32h1.92c.172 0 .32-.123.348-.294l.329-2.066.021-.14c.025-.17.175-.294.348-.294h.28c1.87 0 3.328-.538 3.769-2.122.192-.692.16-1.27-.102-1.7a2.526 2.526 0 0 0-.615-.766z" />
                  </svg>
                  <span className="text-sm">PayPal</span>
                </button>
              </div>
              
              {paymentMethod === 'credit-card' ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardName" className="text-gray-300 mb-1.5 block">Name on Card</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        className="bg-gray-800/50 border-gray-700 text-white"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="cardNumber" className="text-gray-300 mb-1.5 block">Card Number</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="bg-gray-800/50 border-gray-700 text-white pl-10"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CreditCard className="h-5 w-5 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-gray-300 mb-1.5 block">Expiry Date</Label>
                        <div className="relative">
                          <Input
                            id="expiry"
                            name="expiry"
                            placeholder="MM/YY"
                            className="bg-gray-800/50 border-gray-700 text-white pl-10"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            required
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-500" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-gray-300 mb-1.5 block">CVV</Label>
                        <div className="relative">
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            className="bg-gray-800/50 border-gray-700 text-white pl-10"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-secondary text-primary hover:bg-secondary/90 h-12 text-base"
                        disabled={isProcessing}
                      >
                        {isProcessing ? 'Processing...' : `Pay $${course.price.toFixed(2)}`}
                      </Button>
                      <p className="text-center text-xs text-gray-500 mt-3">
                        By completing your purchase you agree to our{' '}
                        <Link to="/terms" className="text-secondary hover:underline">Terms of Service</Link>
                      </p>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-400 mb-6">You'll be redirected to PayPal to complete your purchase.</p>
                  <Button 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white h-12 text-base"
                    onClick={handleSubmit}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Proceed to PayPal'}
                  </Button>
                </div>
              )}
              
              <div className="mt-6 flex items-center justify-center">
                <Shield className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm text-gray-400">Secure payment by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CoursePurchase;
