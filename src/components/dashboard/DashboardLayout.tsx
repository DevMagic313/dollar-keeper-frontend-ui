
import React, { useState, ReactNode, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import { useToast } from '@/hooks/use-toast';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      toast({
        title: "Access denied",
        description: "Please login to access the dashboard",
        variant: "destructive"
      });
      navigate('/login');
    }
  }, [navigate, toast]);
  
  // Check if device is mobile on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };
  
  return (
    <div className="flex h-screen bg-primary overflow-hidden">
      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      
      {/* Mobile menu toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="bg-gray-900 border border-gray-800 text-secondary hover:bg-gray-800"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      {/* Sidebar - visible on mobile only when menu is open */}
      <div className={`md:block ${isMobileMenuOpen ? 'block' : 'hidden'} z-40`}>
        <DashboardSidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </div>
      
      <div className={`flex-1 ${isCollapsed ? 'md:ml-20' : 'md:ml-64'} overflow-auto transition-all duration-300 ease-in-out`}>
        {/* Mobile header */}
        <div className="md:hidden bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">Dollar Keeper</span>
          </Link>
        </div>
        
        <div className="p-4 md:p-6 lg:p-8 pt-20 md:pt-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
