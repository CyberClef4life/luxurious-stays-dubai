
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import BackofficeLayout from '@/components/backoffice/BackofficeLayout';
import PropertyForm from '@/components/backoffice/PropertyForm';
import PropertyList from '@/components/backoffice/PropertyList';
import { getProperties } from '@/lib/api';
import { Property } from '@/types/property';
import { supabase } from '@/integrations/supabase/client';

const Backoffice = () => {
  const [isAddingProperty, setIsAddingProperty] = useState(false);
  const [isEditingProperty, setIsEditingProperty] = useState<string | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        // If no session, redirect to login or show login prompt
        setIsAuthenticated(false);
        toast.error("You must be logged in to access the backoffice");
        // For now just show login UI in the same page
      } else {
        setIsAuthenticated(true);
        fetchProperties();
      }
      
      setLoading(false);
    };
    
    checkAuth();
    
    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setIsAuthenticated(true);
        fetchProperties();
      } else if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false);
        setProperties([]);
      }
    });
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  
  const fetchProperties = async () => {
    try {
      const data = await getProperties();
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
      toast.error("Failed to load properties");
    } finally {
      setLoading(false);
    }
  };

  const handleEditProperty = (id: string) => {
    setIsEditingProperty(id);
    setIsAddingProperty(true);
  };

  const refreshProperties = async () => {
    setLoading(true);
    try {
      const data = await getProperties();
      setProperties(data);
    } catch (error) {
      console.error("Error refreshing properties:", error);
      toast.error("Failed to refresh properties");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    try {
      setLoginLoading(true);
      // Use demo credentials for testing
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'admin@example.com',
        password: 'password123',
      });
      
      if (error) {
        console.error("Login error:", error);
        toast.error(`Login failed: ${error.message}`);
      } else {
        console.log("Login successful:", data);
        toast.success("Logged in successfully");
        setIsAuthenticated(true);
        fetchProperties();
      }
    } catch (err) {
      console.error("Unexpected login error:", err);
      toast.error("An unexpected error occurred during login");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error);
        toast.error(`Logout failed: ${error.message}`);
      } else {
        toast.success("Logged out successfully");
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Unexpected logout error:", err);
      toast.error("An unexpected error occurred during logout");
    }
  };

  if (loading) {
    return (
      <BackofficeLayout>
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-xl text-gray-500">Loading...</div>
          </div>
        </div>
      </BackofficeLayout>
    );
  }

  if (!isAuthenticated) {
    return (
      <BackofficeLayout showAuth={true} onSignIn={handleSignIn}>
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Login Required</h1>
            <p className="mb-6 text-gray-700">
              You need to be logged in to access the property management dashboard.
            </p>
            <Button 
              onClick={handleSignIn} 
              className="w-full bg-brand-teal hover:bg-brand-teal/90"
              disabled={loginLoading}
            >
              {loginLoading ? "Signing in..." : "Sign In with Demo Account"}
            </Button>
            <p className="mt-4 text-sm text-gray-500 text-center">
              This is a demo login for testing purposes.
            </p>
          </div>
        </div>
      </BackofficeLayout>
    );
  }

  return (
    <BackofficeLayout showAuth={true} onSignOut={handleSignOut} isAuthenticated={isAuthenticated}>
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Property Management</h1>
          <div className="flex space-x-4">
            <Button 
              onClick={() => {
                setIsEditingProperty(null);
                setIsAddingProperty(true);
              }}
              className="bg-brand-teal hover:bg-brand-teal/90"
            >
              Add New Property
            </Button>
          </div>
        </div>
        
        {isAddingProperty ? (
          <PropertyForm 
            propertyId={isEditingProperty}
            onCancel={() => {
              setIsAddingProperty(false);
              setIsEditingProperty(null);
            }}
            onSuccess={() => {
              setIsAddingProperty(false);
              setIsEditingProperty(null);
              refreshProperties();
              toast.success(isEditingProperty ? "Property updated successfully!" : "Property added successfully!");
            }}
          />
        ) : (
          <>
            {properties.length > 0 ? (
              <PropertyList 
                properties={properties} 
                onEdit={handleEditProperty}
                onRefresh={refreshProperties}
              />
            ) : (
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="text-center py-10">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Property management" 
                    className="w-64 h-64 object-cover rounded-full mx-auto mb-6"
                  />
                  <h2 className="text-2xl font-semibold mb-4">Manage Your Properties</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Add, edit, and remove properties from your portfolio. Keep track of bookings and availability.
                  </p>
                  <Button 
                    onClick={() => {
                      setIsEditingProperty(null);
                      setIsAddingProperty(true);
                    }}
                    className="bg-brand-teal hover:bg-brand-teal/90"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </BackofficeLayout>
  );
};

export default Backoffice;
