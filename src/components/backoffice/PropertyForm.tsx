
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PropertyFormProps {
  onCancel: () => void;
  onSuccess: () => void;
}

const PropertyForm = ({ onCancel, onSuccess }: PropertyFormProps) => {
  const [property, setProperty] = useState({
    title: '',
    location: '',
    type: '',
    guests: 1,
    bedrooms: 1,
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProperty(prev => ({
      ...prev,
      [name]: name === 'guests' || name === 'bedrooms' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your API
    console.log('New property:', property);
    
    // For now, we'll just simulate success
    setTimeout(() => {
      onSuccess();
    }, 500);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Add New Property</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Property Title
            </label>
            <Input
              id="title"
              name="title"
              value={property.title}
              onChange={handleChange}
              required
              placeholder="e.g. Luxury Marina Penthouse"
            />
          </div>
          
          {/* Location */}
          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <select
              id="location"
              name="location"
              value={property.location}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            >
              <option value="">Select location</option>
              <option value="Dubai Marina">Dubai Marina</option>
              <option value="Downtown Dubai">Downtown Dubai</option>
              <option value="Palm Jumeirah">Palm Jumeirah</option>
              <option value="Jumeirah Beach Residence">Jumeirah Beach Residence</option>
              <option value="Business Bay">Business Bay</option>
              <option value="DIFC">DIFC</option>
            </select>
          </div>
          
          {/* Type */}
          <div className="space-y-2">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Property Type
            </label>
            <select
              id="type"
              name="type"
              value={property.type}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
            >
              <option value="">Select type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Loft">Loft</option>
              <option value="Condo">Condo</option>
            </select>
          </div>
          
          {/* Guests */}
          <div className="space-y-2">
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
              Maximum Guests
            </label>
            <Input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max="20"
              value={property.guests}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Bedrooms */}
          <div className="space-y-2">
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
              Bedrooms
            </label>
            <Input
              id="bedrooms"
              name="bedrooms"
              type="number"
              min="1"
              max="10"
              value={property.bedrooms}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Image URL */}
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Property Image URL
            </label>
            <Input
              id="image"
              name="image"
              value={property.image}
              onChange={handleChange}
              required
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-xs text-gray-500">Provide a URL to a high-quality image of the property</p>
          </div>
        </div>
        
        {/* Preview */}
        {property.image && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Image Preview</p>
            <img 
              src={property.image} 
              alt="Property preview" 
              className="w-full h-64 object-cover rounded-md"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d';
              }}
            />
          </div>
        )}
        
        {/* Buttons */}
        <div className="flex justify-end space-x-3 pt-4 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            className="bg-brand-teal hover:bg-brand-teal/90"
          >
            Add Property
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
