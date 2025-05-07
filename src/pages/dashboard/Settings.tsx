
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { User, Mail, Settings as SettingsIcon, Bell, Lock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Settings = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const [profileForm, setProfileForm] = useState({
    name: localStorage.getItem('userName') || 'John Doe',
    email: localStorage.getItem('userEmail') || 'john@example.com',
    bio: '',
    website: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm({
      ...profileForm,
      [name]: value
    });
  };
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Save to localStorage for demo
      localStorage.setItem('userName', profileForm.name);
      localStorage.setItem('userEmail', profileForm.email);
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully",
      });
    }, 1000);
  };
  
  return (
    <DashboardLayout>
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Account Settings</h1>
        <p className="text-sm md:text-base text-gray-400">Manage your account preferences and information</p>
      </div>
      
      <Tabs defaultValue="profile" className="space-y-4 md:space-y-6">
        <TabsList className="bg-gray-900 p-1 w-full overflow-x-auto flex no-scrollbar">
          <TabsTrigger 
            value="profile"
            className="flex-1 md:flex-none data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary text-xs md:text-sm"
          >
            <User className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            <span className="md:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger 
            value="notifications"
            className="flex-1 md:flex-none data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary text-xs md:text-sm"
          >
            <Bell className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            <span className="md:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger 
            value="security"
            className="flex-1 md:flex-none data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary text-xs md:text-sm"
          >
            <Lock className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            <span className="md:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger 
            value="preferences"
            className="flex-1 md:flex-none data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary text-xs md:text-sm"
          >
            <SettingsIcon className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            <span className="md:inline">Preferences</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4 md:space-y-6">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Personal Information</h2>
            
            <form onSubmit={handleProfileSubmit}>
              <div className="grid grid-cols-1 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-1.5 block">Full Name</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="pl-10 bg-gray-800/50 border-gray-700 text-white"
                      value={profileForm.name}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-1.5 block">Email Address</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="pl-10 bg-gray-800/50 border-gray-700 text-white"
                      value={profileForm.email}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="bio" className="text-gray-300 mb-1.5 block">Bio</Label>
                  <Input
                    id="bio"
                    name="bio"
                    placeholder="Tell us about yourself"
                    className="bg-gray-800/50 border-gray-700 text-white"
                    value={profileForm.bio}
                    onChange={handleProfileChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">Brief description for your profile.</p>
                </div>
                
                <div>
                  <Label htmlFor="website" className="text-gray-300 mb-1.5 block">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    placeholder="https://example.com"
                    className="bg-gray-800/50 border-gray-700 text-white"
                    value={profileForm.website}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-secondary text-primary hover:bg-secondary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4 md:space-y-6">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Notification Preferences</h2>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-800">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-white font-medium">Course Updates</h3>
                  <p className="text-xs md:text-sm text-gray-400">Get notified when courses you're enrolled in are updated</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-800">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-white font-medium">New Courses</h3>
                  <p className="text-xs md:text-sm text-gray-400">Get notified when new courses are added in your areas of interest</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-800">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-white font-medium">Special Offers</h3>
                  <p className="text-xs md:text-sm text-gray-400">Receive notifications about discounts and special offers</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-white font-medium">Email Newsletter</h3>
                  <p className="text-xs md:text-sm text-gray-400">Weekly newsletter with trading tips and market insights</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button className="w-full md:w-auto bg-secondary text-primary hover:bg-secondary/90">
                Save Preferences
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4 md:space-y-6">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Password & Security</h2>
            
            <form className="space-y-4 mb-6 md:mb-8">
              <div>
                <Label htmlFor="current-password" className="text-gray-300 mb-1.5 block">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="new-password" className="text-gray-300 mb-1.5 block">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="confirm-password" className="text-gray-300 mb-1.5 block">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>
              
              <div className="flex justify-end">
                <Button className="w-full md:w-auto bg-secondary text-primary hover:bg-secondary/90">
                  Update Password
                </Button>
              </div>
            </form>
            
            <div className="pt-4 md:pt-6 border-t border-gray-800">
              <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Two-Factor Authentication</h3>
              <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-secondary flex-shrink-0 mb-2 md:mt-1 md:mb-0" />
                <div>
                  <p className="text-sm md:text-base text-gray-300 mb-2">
                    Two-factor authentication adds an extra layer of security to your account by requiring more than just a password to sign in.
                  </p>
                  <Button variant="outline" className="w-full md:w-auto border-secondary text-white hover:bg-secondary/20">
                    Enable 2FA
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preferences" className="space-y-4 md:space-y-6">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Account Preferences</h2>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-800">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-white font-medium">Dark Mode</h3>
                  <p className="text-xs md:text-sm text-gray-400">Toggle between light and dark mode</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-800">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-white font-medium">Autoplay Videos</h3>
                  <p className="text-xs md:text-sm text-gray-400">Videos will automatically play when you open a lesson</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-white font-medium">Language</h3>
                  <p className="text-xs md:text-sm text-gray-400">Select your preferred language</p>
                </div>
                <select className="bg-gray-800 border-gray-700 text-white rounded-md px-3 py-2 w-full md:w-auto">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button className="w-full md:w-auto bg-secondary text-primary hover:bg-secondary/90">
                Save Preferences
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;
