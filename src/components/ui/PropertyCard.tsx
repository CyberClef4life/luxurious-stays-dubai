
import { useState } from 'react';
import { MapPin, Users, PenSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  type: string;
  guests: number;
  bedrooms: number;
  index: number;
}

const PropertyCard = ({ image, title, location, type, guests, bedrooms, index }: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="property-card glass-card rounded-xl overflow-hidden flex flex-col animate-in"
      style={{"--index": index} as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Admin Edit Link */}
        <Link 
          to="/backoffice" 
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
          title="Edit in backoffice"
        >
          <PenSquare size={16} className="text-brand-teal" />
        </Link>
      </div>
      
      {/* Property Details */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-balance">{title}</h3>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin size={16} className="mr-1 text-brand-teal" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Users size={16} className="mr-1 text-brand-teal" />
          <span>{guests} guests · {bedrooms} {bedrooms === 1 ? 'bedroom' : 'bedrooms'}</span>
        </div>
        
        <div className="text-sm text-gray-500 mb-3">
          <span className="inline-block px-2 py-1 bg-gray-100 rounded-md">
            {type}
          </span>
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-100">
          <Button className="w-full bg-brand-teal hover:bg-brand-teal/90">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
