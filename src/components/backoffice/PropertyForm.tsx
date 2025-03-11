
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PropertyFormProps {
  onCancel: () => void;
  onSuccess: () => void;
}

const PropertyForm = ({ onCancel, onSuccess }: PropertyFormProps) => {
  const [property, setProperty] = useState({
    // Basic info
    title: '',
    location: '',
    type: '',
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    image: '',
    subtitle: '',
    description: '',
    detailsDescription: '',
    price: 0,
    cleaningFee: 0,
    serviceFee: 0,
    size: 0,
    
    // Amenities
    amenities: {
      parking: false,
      pool: false,
      gym: false,
      kitchen: false,
      washer: false,
      dryer: false,
      airConditioning: false,
      wifi: false,
      tv: false,
      balcony: false,
      hairDryer: false,
      ironingEquipment: false,
      refrigerator: false,
      dishwasher: false,
      microwave: false,
      stove: false,
      oven: false,
      grill: false,
      cookingUtensils: false,
      coffeeMaker: false,
      toaster: false
    },
    
    // Rooms & beds
    beds: [
      { room: 'Bedroom 1', type: 'King Bed', count: 1 }
    ],
    
    // Bathrooms
    bathroomDetails: [
      { room: 'Bathroom 1', features: ['Toilet', 'Shower'] }
    ],
    
    // Spaces
    spaces: {
      kitchen: false,
      livingRoom: false,
      diningArea: false,
      balcony: false,
      garden: false,
      patio: false,
      office: false
    },
    
    // Entertainment
    entertainment: {
      games: false,
      books: false,
      television: false,
      satelliteCable: false
    },
    
    // Baby & toddler
    babyToddler: {
      travelCot: false,
      highchair: false,
      toys: false
    },
    
    // Safety
    safety: {
      smokeDetector: false,
      carbonMonoxideDetector: false,
      fireExtinguisher: false,
      firstAidKit: false
    },
    
    // Accessibility
    accessibility: {
      wheelchairAccessible: false,
      lift: false
    },
    
    // Location type
    locationType: {
      beach: false,
      nearOcean: false,
      cityCenter: false,
      town: false,
      oceanView: false,
      beachView: false
    },
    
    // Services
    services: {
      concierge: false
    },
    
    // Suitability
    suitability: {
      minimumAge: 18,
      petsAllowed: false
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [category, field] = name.split('.');
      setProperty(prev => ({
        ...prev,
        [category]: {
          ...prev[category as keyof typeof prev],
          [field]: field === 'minimumAge' ? parseInt(value) : value
        }
      }));
    } else {
      setProperty(prev => ({
        ...prev,
        [name]: ['guests', 'bedrooms', 'bathrooms', 'price', 'cleaningFee', 'serviceFee', 'size'].includes(name) 
          ? parseInt(value) || 0 
          : value
      }));
    }
  };

  const handleCheckboxChange = (category: string, field: string, checked: boolean) => {
    setProperty(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: checked
      }
    }));
  };

  // Handle bed changes
  const handleBedChange = (index: number, field: string, value: string | number) => {
    const updatedBeds = [...property.beds];
    updatedBeds[index] = {
      ...updatedBeds[index],
      [field]: field === 'count' ? parseInt(value as string) : value
    };
    setProperty(prev => ({ ...prev, beds: updatedBeds }));
  };

  // Add new bed
  const addBed = () => {
    setProperty(prev => ({
      ...prev,
      beds: [...prev.beds, { room: `Bedroom ${prev.beds.length + 1}`, type: 'Single Bed', count: 1 }]
    }));
  };

  // Remove bed
  const removeBed = (index: number) => {
    const updatedBeds = property.beds.filter((_, i) => i !== index);
    setProperty(prev => ({ ...prev, beds: updatedBeds }));
  };

  // Handle bathroom changes
  const handleBathroomChange = (index: number, field: string, value: string | string[]) => {
    const updatedBathrooms = [...property.bathroomDetails];
    if (field === 'features') {
      // Toggle feature in the array
      const feature = value as string;
      const features = updatedBathrooms[index].features;
      const newFeatures = features.includes(feature)
        ? features.filter(f => f !== feature)
        : [...features, feature];
      
      updatedBathrooms[index] = {
        ...updatedBathrooms[index],
        features: newFeatures
      };
    } else {
      updatedBathrooms[index] = {
        ...updatedBathrooms[index],
        [field]: value
      };
    }
    
    setProperty(prev => ({ ...prev, bathroomDetails: updatedBathrooms }));
  };

  // Add new bathroom
  const addBathroom = () => {
    setProperty(prev => ({
      ...prev,
      bathroomDetails: [...prev.bathroomDetails, { 
        room: `Bathroom ${prev.bathroomDetails.length + 1}`, 
        features: ['Toilet'] 
      }]
    }));
  };

  // Remove bathroom
  const removeBathroom = (index: number) => {
    const updatedBathrooms = property.bathroomDetails.filter((_, i) => i !== index);
    setProperty(prev => ({ ...prev, bathroomDetails: updatedBathrooms }));
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

  const bathroomFeatureOptions = [
    'Toilet', 'Shower', 'Bathtub', 'Double vanity', 'Bidet', 'Heated floors', 'Premium toiletries'
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Add New Property</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="rooms">Rooms & Spaces</TabsTrigger>
            <TabsTrigger value="other">Additional Details</TabsTrigger>
          </TabsList>
          
          {/* Basic Information Tab */}
          <TabsContent value="basic" className="space-y-6">
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
              
              {/* Subtitle */}
              <div className="space-y-2">
                <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                  Subtitle
                </label>
                <Input
                  id="subtitle"
                  name="subtitle"
                  value={property.subtitle}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Stunning penthouse with panoramic marina views"
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
              
              {/* Size */}
              <div className="space-y-2">
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                  Size (sq ft)
                </label>
                <Input
                  id="size"
                  name="size"
                  type="number"
                  min="1"
                  value={property.size || ''}
                  onChange={handleChange}
                  required
                />
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
              
              {/* Bathrooms */}
              <div className="space-y-2">
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
                  Bathrooms
                </label>
                <Input
                  id="bathrooms"
                  name="bathrooms"
                  type="number"
                  min="1"
                  max="10"
                  value={property.bathrooms}
                  onChange={handleChange}
                  required
                />
              </div>
              
              {/* Pricing */}
              <div className="space-y-2">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price per Night ($)
                </label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="1"
                  value={property.price || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="cleaningFee" className="block text-sm font-medium text-gray-700">
                  Cleaning Fee ($)
                </label>
                <Input
                  id="cleaningFee"
                  name="cleaningFee"
                  type="number"
                  min="0"
                  value={property.cleaningFee || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="serviceFee" className="block text-sm font-medium text-gray-700">
                  Service Fee ($)
                </label>
                <Input
                  id="serviceFee"
                  name="serviceFee"
                  type="number"
                  min="0"
                  value={property.serviceFee || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              
              {/* Description */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Short Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={property.description}
                  onChange={handleChange}
                  required
                  placeholder="Brief description of the property"
                  className="min-h-[100px]"
                />
              </div>
              
              {/* Detailed Description */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="detailsDescription" className="block text-sm font-medium text-gray-700">
                  Detailed Description
                </label>
                <Textarea
                  id="detailsDescription"
                  name="detailsDescription"
                  value={property.detailsDescription}
                  onChange={handleChange}
                  required
                  placeholder="Detailed description of the property"
                  className="min-h-[150px]"
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
          </TabsContent>
          
          {/* Amenities Tab */}
          <TabsContent value="amenities" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Essentials</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="wifi" 
                      checked={property.amenities.wifi}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'wifi', checked as boolean)
                      }
                    />
                    <label htmlFor="wifi" className="text-sm">WiFi</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="airConditioning" 
                      checked={property.amenities.airConditioning}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'airConditioning', checked as boolean)
                      }
                    />
                    <label htmlFor="airConditioning" className="text-sm">Air Conditioning</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hairDryer" 
                      checked={property.amenities.hairDryer}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'hairDryer', checked as boolean)
                      }
                    />
                    <label htmlFor="hairDryer" className="text-sm">Hair Dryer</label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Kitchen</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="kitchen" 
                      checked={property.amenities.kitchen}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'kitchen', checked as boolean)
                      }
                    />
                    <label htmlFor="kitchen" className="text-sm">Kitchen</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="refrigerator" 
                      checked={property.amenities.refrigerator}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'refrigerator', checked as boolean)
                      }
                    />
                    <label htmlFor="refrigerator" className="text-sm">Refrigerator</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="dishwasher" 
                      checked={property.amenities.dishwasher}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'dishwasher', checked as boolean)
                      }
                    />
                    <label htmlFor="dishwasher" className="text-sm">Dishwasher</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="microwave" 
                      checked={property.amenities.microwave}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'microwave', checked as boolean)
                      }
                    />
                    <label htmlFor="microwave" className="text-sm">Microwave</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="stove" 
                      checked={property.amenities.stove}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'stove', checked as boolean)
                      }
                    />
                    <label htmlFor="stove" className="text-sm">Stove</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="oven" 
                      checked={property.amenities.oven}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'oven', checked as boolean)
                      }
                    />
                    <label htmlFor="oven" className="text-sm">Oven</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="grill" 
                      checked={property.amenities.grill}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'grill', checked as boolean)
                      }
                    />
                    <label htmlFor="grill" className="text-sm">Grill</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="cookingUtensils" 
                      checked={property.amenities.cookingUtensils}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'cookingUtensils', checked as boolean)
                      }
                    />
                    <label htmlFor="cookingUtensils" className="text-sm">Dishes & Utensils</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="coffeeMaker" 
                      checked={property.amenities.coffeeMaker}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'coffeeMaker', checked as boolean)
                      }
                    />
                    <label htmlFor="coffeeMaker" className="text-sm">Coffee Maker</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="toaster" 
                      checked={property.amenities.toaster}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'toaster', checked as boolean)
                      }
                    />
                    <label htmlFor="toaster" className="text-sm">Toaster</label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Facilities</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="parking" 
                      checked={property.amenities.parking}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'parking', checked as boolean)
                      }
                    />
                    <label htmlFor="parking" className="text-sm">Parking Available</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="pool" 
                      checked={property.amenities.pool}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'pool', checked as boolean)
                      }
                    />
                    <label htmlFor="pool" className="text-sm">Pool</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="gym" 
                      checked={property.amenities.gym}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'gym', checked as boolean)
                      }
                    />
                    <label htmlFor="gym" className="text-sm">Gym</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="washer" 
                      checked={property.amenities.washer}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'washer', checked as boolean)
                      }
                    />
                    <label htmlFor="washer" className="text-sm">Washing Machine</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="dryer" 
                      checked={property.amenities.dryer}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'dryer', checked as boolean)
                      }
                    />
                    <label htmlFor="dryer" className="text-sm">Clothes Dryer</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="balcony" 
                      checked={property.amenities.balcony}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('amenities', 'balcony', checked as boolean)
                      }
                    />
                    <label htmlFor="balcony" className="text-sm">Balcony/Outdoor Space</label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Rooms & Spaces Tab */}
          <TabsContent value="rooms" className="space-y-6">
            <div className="space-y-6">
              {/* Beds Section */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Beds</h3>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={addBed}
                  >
                    Add Bed
                  </Button>
                </div>
                
                {property.beds.map((bed, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 items-center mb-4 p-3 border rounded-md">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-500">Room</label>
                      <Input
                        value={bed.room}
                        onChange={(e) => handleBedChange(index, 'room', e.target.value)}
                        placeholder="Room name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-500">Bed Type</label>
                      <select
                        value={bed.type}
                        onChange={(e) => handleBedChange(index, 'type', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                      >
                        <option value="King Bed">King Bed</option>
                        <option value="Queen Bed">Queen Bed</option>
                        <option value="Double Bed">Double Bed</option>
                        <option value="Single Bed">Single Bed</option>
                        <option value="Twin Beds">Twin Beds</option>
                        <option value="Sofa Bed">Sofa Bed</option>
                        <option value="Double Sofa Bed">Double Sofa Bed</option>
                      </select>
                    </div>
                    <div className="flex space-x-2 items-end">
                      <div className="flex-1 space-y-1">
                        <label className="text-xs text-gray-500">Count</label>
                        <Input
                          type="number"
                          min="1"
                          value={bed.count}
                          onChange={(e) => handleBedChange(index, 'count', e.target.value)}
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="mt-1"
                        onClick={() => removeBed(index)}
                        disabled={property.beds.length <= 1}
                      >
                        ✕
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bathrooms Section */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Bathrooms</h3>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={addBathroom}
                  >
                    Add Bathroom
                  </Button>
                </div>
                
                {property.bathroomDetails.map((bathroom, index) => (
                  <div key={index} className="mb-4 p-3 border rounded-md">
                    <div className="flex justify-between mb-3">
                      <div className="flex-1 mr-2">
                        <label className="text-xs text-gray-500 block mb-1">Room</label>
                        <Input
                          value={bathroom.room}
                          onChange={(e) => handleBathroomChange(index, 'room', e.target.value)}
                          placeholder="Bathroom name"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeBathroom(index)}
                        disabled={property.bathroomDetails.length <= 1}
                      >
                        ✕
                      </Button>
                    </div>
                    
                    <label className="text-xs text-gray-500 block mb-2">Features</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {bathroomFeatureOptions.map(feature => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`bathroom-${index}-${feature}`} 
                            checked={bathroom.features.includes(feature)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleBathroomChange(index, 'features', feature);
                              } else {
                                handleBathroomChange(index, 'features', feature);
                              }
                            }}
                          />
                          <label htmlFor={`bathroom-${index}-${feature}`} className="text-sm">{feature}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Spaces Section */}
              <div>
                <h3 className="font-medium mb-4">Spaces</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="space-kitchen" 
                      checked={property.spaces.kitchen}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('spaces', 'kitchen', checked as boolean)
                      }
                    />
                    <label htmlFor="space-kitchen" className="text-sm">Kitchen</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="space-livingRoom" 
                      checked={property.spaces.livingRoom}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('spaces', 'livingRoom', checked as boolean)
                      }
                    />
                    <label htmlFor="space-livingRoom" className="text-sm">Living Room</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="space-diningArea" 
                      checked={property.spaces.diningArea}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('spaces', 'diningArea', checked as boolean)
                      }
                    />
                    <label htmlFor="space-diningArea" className="text-sm">Dining Area</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="space-balcony" 
                      checked={property.spaces.balcony}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('spaces', 'balcony', checked as boolean)
                      }
                    />
                    <label htmlFor="space-balcony" className="text-sm">Balcony</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="space-garden" 
                      checked={property.spaces.garden}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('spaces', 'garden', checked as boolean)
                      }
                    />
                    <label htmlFor="space-garden" className="text-sm">Garden</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="space-patio" 
                      checked={property.spaces.patio}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('spaces', 'patio', checked as boolean)
                      }
                    />
                    <label htmlFor="space-patio" className="text-sm">Deck or Patio</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="space-office" 
                      checked={property.spaces.office}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('spaces', 'office', checked as boolean)
                      }
                    />
                    <label htmlFor="space-office" className="text-sm">Office Space</label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Additional Details Tab */}
          <TabsContent value="other" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Entertainment */}
              <div className="space-y-3">
                <h3 className="font-medium">Entertainment</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="entertainment-games" 
                      checked={property.entertainment.games}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('entertainment', 'games', checked as boolean)
                      }
                    />
                    <label htmlFor="entertainment-games" className="text-sm">Games</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="entertainment-books" 
                      checked={property.entertainment.books}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('entertainment', 'books', checked as boolean)
                      }
                    />
                    <label htmlFor="entertainment-books" className="text-sm">Books</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="entertainment-tv" 
                      checked={property.entertainment.television}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('entertainment', 'television', checked as boolean)
                      }
                    />
                    <label htmlFor="entertainment-tv" className="text-sm">Television</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="entertainment-satellite" 
                      checked={property.entertainment.satelliteCable}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('entertainment', 'satelliteCable', checked as boolean)
                      }
                    />
                    <label htmlFor="entertainment-satellite" className="text-sm">Satellite/Cable</label>
                  </div>
                </div>
              </div>
              
              {/* Baby & Toddler */}
              <div className="space-y-3">
                <h3 className="font-medium">Baby & Toddler</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="baby-travelCot" 
                      checked={property.babyToddler.travelCot}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('babyToddler', 'travelCot', checked as boolean)
                      }
                    />
                    <label htmlFor="baby-travelCot" className="text-sm">Travel Cot</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="baby-highchair" 
                      checked={property.babyToddler.highchair}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('babyToddler', 'highchair', checked as boolean)
                      }
                    />
                    <label htmlFor="baby-highchair" className="text-sm">Highchair</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="baby-toys" 
                      checked={property.babyToddler.toys}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('babyToddler', 'toys', checked as boolean)
                      }
                    />
                    <label htmlFor="baby-toys" className="text-sm">Toys</label>
                  </div>
                </div>
              </div>
              
              {/* Safety */}
              <div className="space-y-3">
                <h3 className="font-medium">Safety</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="safety-smoke" 
                      checked={property.safety.smokeDetector}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('safety', 'smokeDetector', checked as boolean)
                      }
                    />
                    <label htmlFor="safety-smoke" className="text-sm">Smoke Detector</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="safety-carbon" 
                      checked={property.safety.carbonMonoxideDetector}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('safety', 'carbonMonoxideDetector', checked as boolean)
                      }
                    />
                    <label htmlFor="safety-carbon" className="text-sm">Carbon Monoxide Detector</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="safety-fire" 
                      checked={property.safety.fireExtinguisher}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('safety', 'fireExtinguisher', checked as boolean)
                      }
                    />
                    <label htmlFor="safety-fire" className="text-sm">Fire Extinguisher</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="safety-firstaid" 
                      checked={property.safety.firstAidKit}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('safety', 'firstAidKit', checked as boolean)
                      }
                    />
                    <label htmlFor="safety-firstaid" className="text-sm">First Aid Kit</label>
                  </div>
                </div>
              </div>
              
              {/* Accessibility */}
              <div className="space-y-3">
                <h3 className="font-medium">Accessibility</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="access-wheelchair" 
                      checked={property.accessibility.wheelchairAccessible}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('accessibility', 'wheelchairAccessible', checked as boolean)
                      }
                    />
                    <label htmlFor="access-wheelchair" className="text-sm">Wheelchair Accessible</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="access-lift" 
                      checked={property.accessibility.lift}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('accessibility', 'lift', checked as boolean)
                      }
                    />
                    <label htmlFor="access-lift" className="text-sm">Lift</label>
                  </div>
                </div>
              </div>
              
              {/* Location Type */}
              <div className="space-y-3">
                <h3 className="font-medium">Location Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="location-beach" 
                      checked={property.locationType.beach}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('locationType', 'beach', checked as boolean)
                      }
                    />
                    <label htmlFor="location-beach" className="text-sm">Beach</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="location-ocean" 
                      checked={property.locationType.nearOcean}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('locationType', 'nearOcean', checked as boolean)
                      }
                    />
                    <label htmlFor="location-ocean" className="text-sm">Near the Ocean</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="location-city" 
                      checked={property.locationType.cityCenter}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('locationType', 'cityCenter', checked as boolean)
                      }
                    />
                    <label htmlFor="location-city" className="text-sm">City Centre</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="location-town" 
                      checked={property.locationType.town}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('locationType', 'town', checked as boolean)
                      }
                    />
                    <label htmlFor="location-town" className="text-sm">Town</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="location-oceanview" 
                      checked={property.locationType.oceanView}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('locationType', 'oceanView', checked as boolean)
                      }
                    />
                    <label htmlFor="location-oceanview" className="text-sm">Ocean View</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="location-beachview" 
                      checked={property.locationType.beachView}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('locationType', 'beachView', checked as boolean)
                      }
                    />
                    <label htmlFor="location-beachview" className="text-sm">Beach View</label>
                  </div>
                </div>
              </div>
              
              {/* Services & Suitability */}
              <div className="space-y-5 md:col-span-2">
                <div className="space-y-3">
                  <h3 className="font-medium">Services</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="services-concierge" 
                      checked={property.services.concierge}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('services', 'concierge', checked as boolean)
                      }
                    />
                    <label htmlFor="services-concierge" className="text-sm">Concierge Service</label>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Suitability</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="suitability-age" className="text-sm">Minimum Age Limit</label>
                      <Input 
                        id="suitability-age"
                        name="suitability.minimumAge"
                        type="number"
                        min="0"
                        value={property.suitability.minimumAge}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="suitability-pets" 
                          checked={property.suitability.petsAllowed}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange('suitability', 'petsAllowed', checked as boolean)
                          }
                        />
                        <label htmlFor="suitability-pets" className="text-sm">Pets Allowed</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
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
