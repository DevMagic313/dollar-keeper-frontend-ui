
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to reset password
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Reset email sent",
        description: "Check your inbox for password reset instructions",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary/5 rounded-full blur-2xl"></div>
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
            {isSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Check your email</h2>
                <p className="text-gray-400 mb-6">
                  We've sent a password reset link to <span className="text-secondary">{email}</span>
                </p>
                <Link to="/login">
                  <Button variant="outline" className="border-secondary text-white hover:bg-secondary/20">
                    Back to Login
                  </Button>
                </Link>
              </div>
            ) : (
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
                    <p className="mt-2 text-sm text-gray-400">
                      Enter the email associated with your account
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary text-primary hover:bg-secondary/90 h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Reset Password'}
                  </Button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-400">
                    Remember your password?{' '}
                    <Link to="/login" className="text-secondary hover:text-secondary/80">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
