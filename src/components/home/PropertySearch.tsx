
import { useState } from 'react';
import { Calendar, MapPin, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';

const locations = [
  "Dubai Marina",
  "Downtown Dubai", 
  "Palm Jumeirah", 
  "Jumeirah Beach Residence",
  "Business Bay",
  "DIFC"
];

const PropertySearch = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, checkIn, checkOut, guests });
    // Search functionality would be implemented here
  };

  return (
    <section className="relative -mt-24 mb-20 z-20 container mx-auto px-6" id="search">
      <AnimatedSection animation="fade-in" delay={1100}>
        <div className="search-bar bg-white backdrop-blur-md rounded-xl p-6 md:p-8">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin size={16} className="text-brand-teal" />
                  Location
                </label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all"
                  >
                    <option value="">Select location</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Check-in */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar size={16} className="text-brand-teal" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all"
                />
              </div>
              
              {/* Check-out */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar size={16} className="text-brand-teal" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all"
                />
              </div>
              
              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Users size={16} className="text-brand-teal" />
                  Guests
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full p-3 rounded-l-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all"
                  />
                  <Button 
                    type="submit" 
                    className="rounded-l-none bg-brand-teal hover:bg-brand-teal/90 py-6"
                  >
                    <Search size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default PropertySearch;
