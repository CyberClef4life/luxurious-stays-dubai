
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import BackofficeLayout from '@/components/backoffice/BackofficeLayout';
import PropertyDashboard from '@/components/backoffice/PropertyDashboard';
import LoginForm from '@/components/backoffice/LoginForm';
import LoadingState from '@/components/backoffice/LoadingState';
import { getProperties } from '@/lib/api';
import { Property } from '@/types/property';
import { useAuth } from '@/hooks/useAuth';

const Backoffice = () => {
  const { isAuthenticated, loading, signOut } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProperties();
    }
  }, [isAuthenticated]);

  const fetchProperties = async () => {
    try {
      setDataLoading(true);
      const data = await getProperties();
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
      toast.error("Failed to load properties");
    } finally {
      setDataLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    fetchProperties();
  };

  const handleSignOut = async () => {
    const { success, error } = await signOut();
    if (success) {
      toast.success("Logged out successfully");
      setProperties([]);
    } else {
      toast.error(`Logout failed: ${error?.message || 'Unknown error'}`);
    }
  };

  if (loading) {
    return (
      <BackofficeLayout>
        <LoadingState />
      </BackofficeLayout>
    );
  }

  if (!isAuthenticated) {
    return (
      <BackofficeLayout showAuth={true} onSignIn={() => {}} isAuthenticated={isAuthenticated} onSignOut={handleSignOut}>
        <div className="container mx-auto px-6 py-8">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </BackofficeLayout>
    );
  }

  return (
    <BackofficeLayout showAuth={true} onSignOut={handleSignOut} isAuthenticated={isAuthenticated}>
      {dataLoading ? (
        <LoadingState />
      ) : (
        <PropertyDashboard 
          properties={properties} 
          onRefresh={fetchProperties} 
        />
      )}
    </BackofficeLayout>
  );
};

export default Backoffice;
