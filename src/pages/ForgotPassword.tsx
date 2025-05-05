
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, ArrowLeft, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Reset password for:', email);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Reset link sent",
        description: "Check your email for password reset instructions",
        variant: "default"
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-60 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <h1 className="text-4xl font-bold gradient-text">Dollar Keeper</h1>
            </Link>
            <p className="text-gray-400 mt-2">Reset your password</p>
          </div>
          
          <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-xl">
            {!isSubmitted ? (
              <>
                <p className="text-gray-300 mb-6">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-300 mb-1.5 block">Email</Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-500" />
                        </div>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          className="pl-10 bg-gray-800/50 border-gray-700 text-white"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-secondary text-primary hover:bg-secondary/90 h-12 text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Reset Link...' : 'Send Reset Link'}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Check your email</h3>
                <p className="text-gray-400 mb-6">
                  We've sent a password reset link to <span className="text-white">{email}</span>
                </p>
                <Button 
                  className="w-full bg-secondary text-primary hover:bg-secondary/90"
                  onClick={() => setIsSubmitted(false)}
                >
                  Back to Reset Password
                </Button>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <Button 
                variant="link" 
                asChild 
                className="text-gray-400 hover:text-secondary"
              >
                <Link to="/login">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
