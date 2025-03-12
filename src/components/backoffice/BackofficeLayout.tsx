
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Building, Users, Calendar, Settings, LogOut, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BackofficeLayoutProps {
  children: React.ReactNode;
  showAuth?: boolean;
  isAuthenticated?: boolean;
  onSignIn?: () => void;
  onSignOut?: () => void;
}

const BackofficeLayout = ({ 
  children, 
  showAuth = false,
  isAuthenticated = false,
  onSignIn,
  onSignOut
}: BackofficeLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="px-4 py-6 border-b">
            <div className="flex items-center justify-between">
              <Link to="/backoffice" className="text-xl font-bold text-brand-teal">
                Dubai Properties
              </Link>
              <button 
                onClick={toggleSidebar}
                className="md:hidden text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Sidebar Navigation */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <div className="space-y-1">
              <SidebarLink icon={Home} href="/backoffice" label="Dashboard" />
              <SidebarLink icon={Building} href="/backoffice" label="Properties" active />
              <SidebarLink icon={Users} href="/backoffice" label="Clients" />
              <SidebarLink icon={Calendar} href="/backoffice" label="Bookings" />
              <SidebarLink icon={Settings} href="/backoffice" label="Settings" />
            </div>
          </nav>
          
          {/* Sidebar Footer */}
          <div className="border-t px-4 py-4">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-brand-teal transition-colors w-full"
            >
              <LogOut size={18} className="mr-3" />
              <span>Back to Website</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={toggleSidebar}
                className="md:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-xl font-semibold text-gray-800">Backoffice</h2>
            </div>
            
            {isAuthenticated && (
              <Button 
                onClick={onSignOut}
                variant="outline"
                className="flex items-center"
              >
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            )}
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

const SidebarLink = ({ 
  icon: Icon, 
  href, 
  label, 
  active = false 
}: { 
  icon: React.ElementType; 
  href: string; 
  label: string; 
  active?: boolean;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center px-2 py-3 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors",
        active ? "text-brand-teal bg-gray-100" : "text-gray-600"
      )}
    >
      <Icon className="mr-3 h-5 w-5" />
      {label}
    </Link>
  );
};

export default BackofficeLayout;
