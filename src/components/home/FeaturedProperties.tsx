
import PropertyCard from '@/components/ui/PropertyCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    title: 'Luxury Marina Penthouse',
    location: 'Dubai Marina',
    type: 'Penthouse',
    guests: 6,
    bedrooms: 3
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    title: 'Downtown Executive Suite',
    location: 'Downtown Dubai',
    type: 'Apartment',
    guests: 4,
    bedrooms: 2
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    title: 'Palm Jumeirah Villa',
    location: 'Palm Jumeirah',
    type: 'Villa',
    guests: 8,
    bedrooms: 4
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    title: 'DIFC Modern Apartment',
    location: 'DIFC',
    type: 'Apartment',
    guests: 2,
    bedrooms: 1
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1638688582253-4a275cda7e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    title: 'Business Bay Loft',
    location: 'Business Bay',
    type: 'Loft',
    guests: 3,
    bedrooms: 1
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    title: 'JBR Beachfront Condo',
    location: 'Jumeirah Beach Residence',
    type: 'Condo',
    guests: 5,
    bedrooms: 2
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-gray-50" id="properties">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-brand-teal uppercase tracking-wide">
              Handpicked Properties
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Discover Our Premium Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're looking for a beachfront villa or a downtown high-rise, our curated selection offers the finest accommodations in Dubai's most sought-after locations.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard 
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              type={property.type}
              guests={property.guests}
              bedrooms={property.bedrooms}
              index={index}
            />
          ))}
        </div>
        
        <AnimatedSection className="text-center mt-12">
          <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-6 text-base">
            View All Properties
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedProperties;
