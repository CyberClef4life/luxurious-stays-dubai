
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Star, Bed, Bath, Users, Home, Car, Waves, Dumbbell, Utensils, Trees, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { properties } from '@/data/properties';

interface PropertyData {
  id: number;
  title: string;
  location: string;
  type: string;
  subtitle: string;
  description: string;
  detailsDescription: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  features: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  beds: {
    room: string;
    type: string;
    count: number;
  }[];
  bathroomDetails: {
    room: string;
    features: string[];
  }[];
  amenities: {
    icon: string;
    name: string;
  }[];
  nearby: {
    name: string;
    distance: string;
  }[];
  spaceDetails: string[];
  size: number;
}

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyData | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch from an API
    // For now, we'll simulate with a timeout
    const propertyData = properties.find(p => p.id === Number(id));
    
    setTimeout(() => {
      if (propertyData) {
        setProperty(propertyData);
        setSelectedImage(propertyData.images[0]);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-teal"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
              <a href="/#properties">Browse Properties</a>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Property Title Section */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-sm font-medium text-brand-teal">{property.type}</span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1">{property.title}</h1>
                <p className="text-lg text-gray-600 mt-1">{property.subtitle}</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 font-medium">{property.rating}</span>
                  <span className="text-gray-500 ml-1">({property.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mt-3 text-gray-600">
              <MapPin className="h-4 w-4 text-brand-teal mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          
          {/* Property Images */}
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-3 rounded-lg overflow-hidden">
                <img 
                  src={selectedImage} 
                  alt={property.title} 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {property.images.slice(1, 5).map((image, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${property.title} view ${index + 2}`} 
                      className="w-full h-[190px] object-cover hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-3">
              {property.images.slice(0, 10).map((image, index) => (
                <div 
                  key={index} 
                  className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                    selectedImage === image ? 'border-brand-teal' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Property Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              <div className="mb-10">
                <div className="flex items-center justify-between pb-4 border-b">
                  <h2 className="text-2xl font-bold">About this property</h2>
                  <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">{property.size} sq ft</span>
                </div>
                
                <div className="mt-4 prose max-w-none">
                  <p>{property.description}</p>
                  <p className="mt-4">{property.detailsDescription}</p>
                </div>
              </div>
              
              {/* Key Features */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Popular amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      {amenity.icon === 'car' && <Car className="h-5 w-5 text-brand-teal mr-2" />}
                      {amenity.icon === 'waves' && <Waves className="h-5 w-5 text-brand-teal mr-2" />}
                      {amenity.icon === 'dumbbell' && <Dumbbell className="h-5 w-5 text-brand-teal mr-2" />}
                      {amenity.icon === 'utensils' && <Utensils className="h-5 w-5 text-brand-teal mr-2" />}
                      {amenity.icon === 'trees' && <Trees className="h-5 w-5 text-brand-teal mr-2" />}
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rooms & beds */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Rooms & beds</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.beds.map((bed, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">{bed.room}</h4>
                      <p className="text-gray-600 mt-1">{bed.count} {bed.type}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Bathrooms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.bathroomDetails.map((bathroom, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium">{bathroom.room}</h4>
                      <ul className="text-gray-600 mt-1 space-y-1">
                        {bathroom.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-4 w-4 text-brand-teal mt-0.5 mr-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Spaces */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Spaces</h3>
                <div className="grid grid-cols-2 gap-y-3">
                  {property.spaceDetails.map((space, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-brand-teal mr-2" />
                      <span>{space}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Location */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Explore the area</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium mb-3">{property.location}</h4>
                  <ul className="space-y-2">
                    {property.nearby.map((place, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{place.name}</span>
                        <span className="text-gray-600">{place.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="glass-card p-6 rounded-xl shadow-lg">
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">${property.price}</span>
                      <span className="text-gray-600">per night</span>
                    </div>
                    
                    <div className="flex mt-2 text-sm text-gray-600">
                      <div className="flex items-center mr-3">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{property.guests} guests</span>
                      </div>
                      <div className="flex items-center mr-3">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{property.bedrooms} bedrooms</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{property.bathrooms} baths</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-sm font-medium mb-1">Check-in</label>
                        <input 
                          type="date" 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Check-out</label>
                        <input 
                          type="date" 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50" 
                        />
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <label className="block text-sm font-medium mb-1">Guests</label>
                      <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal/50">
                        {[...Array(property.guests)].map((_, i) => (
                          <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'guest' : 'guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 py-6 text-lg">
                    Book Now
                  </Button>
                  
                  <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span>$299 x 5 nights</span>
                      <span>$1,495</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Cleaning fee</span>
                      <span>$85</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Service fee</span>
                      <span>$120</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                      <span>Total</span>
                      <span>$1,700</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Contact Host
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
