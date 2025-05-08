import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  User, 
  Home, 
  ShoppingCart, 
  Settings, 
  LogOut, 
  Menu,
  CreditCard,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DashboardSidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { icon: <Home size={20} />, label: 'Overview', path: '/dashboard' },
    { icon: <BookOpen size={20} />, label: 'My Courses', path: '/dashboard/my-courses' },
    { icon: <TrendingUp size={20} />, label: 'Progress', path: '/dashboard/progress' },
    { icon: <ShoppingCart size={20} />, label: 'Purchase History', path: '/dashboard/purchases' },
    { icon: <CreditCard size={20} />, label: 'Payment Methods', path: '/dashboard/payment-methods' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/settings' },
  ];
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out from your account",
      variant: "default"
    });
    
    // Redirect to home page instead of login
    navigate('/');
  };
  
  return (
    <div className={`dashboard-sidebar ${isCollapsed ? 'dashboard-sidebar-collapsed' : ''}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!isCollapsed && (
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">Dollar Keeper</span>
          </Link>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Menu size={20} />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <User size={20} className="text-secondary" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {localStorage.getItem('userName') || localStorage.getItem('userEmail')?.split('@')[0] || 'User'}
              </p>
              <p className="text-xs text-gray-400">
                Pro Member
              </p>
            </div>
          )}
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center ${!isCollapsed ? 'justify-start' : 'justify-center'} px-3 py-3 rounded-md transition-colors ${
                isActive(item.path)
                  ? 'bg-secondary/10 text-secondary'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
        <Button
          variant="ghost"
          className={`w-full flex items-center ${!isCollapsed ? 'justify-start' : 'justify-center'} text-gray-400 hover:text-white hover:bg-gray-800`}
          onClick={handleLogout}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
