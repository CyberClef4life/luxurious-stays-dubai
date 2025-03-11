
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import BackofficeLayout from '@/components/backoffice/BackofficeLayout';
import PropertyForm from '@/components/backoffice/PropertyForm';
import PropertyList from '@/components/backoffice/PropertyList';
import { getProperties } from '@/lib/api';
import { Property } from '@/types/property';

const Backoffice = () => {
  const [isAddingProperty, setIsAddingProperty] = useState(false);
  const [isEditingProperty, setIsEditingProperty] = useState<string | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
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

    fetchProperties();
  }, []);

  const handleEditProperty = (id: string) => {
    setIsEditingProperty(id);
    setIsAddingProperty(true);
  };

  return (
    <BackofficeLayout>
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Property Management</h1>
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
        
        {isAddingProperty ? (
          <PropertyForm 
            propertyId={isEditingProperty !== null ? isEditingProperty : undefined}
            onCancel={() => {
              setIsAddingProperty(false);
              setIsEditingProperty(null);
            }}
            onSuccess={() => {
              setIsAddingProperty(false);
              setIsEditingProperty(null);
              toast.success(isEditingProperty ? "Property updated successfully!" : "Property added successfully!");
            }}
          />
        ) : (
          <>
            {properties.length > 0 ? (
              <PropertyList 
                properties={properties} 
                onEdit={handleEditProperty}
                onRefresh={() => {
                  setLoading(true);
                  getProperties().then(data => {
                    setProperties(data);
                    setLoading(false);
                  }).catch(error => {
                    console.error("Error refreshing properties:", error);
                    toast.error("Failed to refresh properties");
                    setLoading(false);
                  });
                }}
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
