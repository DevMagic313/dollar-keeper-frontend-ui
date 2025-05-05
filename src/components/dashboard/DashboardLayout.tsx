
import React, { useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import { useToast } from '@/hooks/use-toast';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  return (
    <div className="flex h-screen bg-primary overflow-hidden">
      <DashboardSidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      
      <div className={`flex-1 ${isCollapsed ? 'dashboard-main-collapsed' : 'dashboard-main'} overflow-auto`}>
        <div className="p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
