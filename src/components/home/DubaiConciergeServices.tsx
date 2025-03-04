
import { Car, Ticket, Star } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    icon: <Car className="h-12 w-12 text-brand-teal" />,
    title: "Luxury Car Rental",
    description: "Explore Dubai in style with our premium car rental service. Choose from exotic sports cars, luxury SUVs, or chauffeur-driven limousines."
  },
  {
    id: 2,
    icon: <Ticket className="h-12 w-12 text-brand-teal" />,
    title: "Dubai Activities",
    description: "Skip the lines with VIP access to Dubai's top attractions, desert safaris, yacht cruises, and exclusive dining experiences."
  },
  {
    id: 3,
    icon: <Star className="h-12 w-12 text-brand-teal" />,
    title: "Special Requests",
    description: "From private chefs to personal shopping assistants, our concierge team can arrange anything to make your Dubai stay extraordinary."
  }
];

const DubaiConciergeServices = () => {
  return (
    <section className="py-20 bg-gray-50" id="concierge">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-brand-teal uppercase tracking-wide">
              Premium Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Dubai Concierge Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elevate your stay with our exclusive concierge services, designed to provide you with unforgettable experiences in the city of luxury.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.id} 
              delay={index * 150}
              className="h-full"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button className="w-full">
                    Inquire Now
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DubaiConciergeServices;
