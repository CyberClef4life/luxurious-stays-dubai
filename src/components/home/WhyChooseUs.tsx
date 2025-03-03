
import { Hotel, CreditCard, Star, CalendarCheck } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const features = [
  {
    id: 1,
    icon: <Hotel className="h-10 w-10 text-brand-teal" />,
    title: 'Hotel-Standard Stays',
    description: 'All properties are professionally managed and maintained to ensure hotel-quality standards with the comfort and space of a private home.'
  },
  {
    id: 2,
    icon: <CreditCard className="h-10 w-10 text-brand-teal" />,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. We provide clear pricing upfront so you know exactly what you're paying for.'
  },
  {
    id: 3,
    icon: <Star className="h-10 w-10 text-brand-teal" />,
    title: '5-Star Service',
    description: 'Our dedicated concierge team is available 24/7 to assist with any requests, from airport transfers to personalized recommendations.'
  },
  {
    id: 4,
    icon: <CalendarCheck className="h-10 w-10 text-brand-teal" />,
    title: 'Flexible Bookings',
    description: 'Plans change. That's why we offer flexible booking options to accommodate your schedule.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20" id="whyus">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <AnimatedSection animation="fade-in-right" className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Luxury interior" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="User"
                  />
                  <img 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="User"
                  />
                  <img 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="User"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-gray-500">Trusted by</p>
                  <p className="text-sm font-semibold">10,000+ guests</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Right Column - Content */}
          <AnimatedSection animation="fade-in-left">
            <span className="text-sm font-medium text-brand-teal uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Experience the ConciergeSublime Difference
            </h2>
            <p className="text-gray-600 mb-8">
              We're dedicated to providing exceptional short-term accommodations that combine the luxury of a five-star hotel with the comfort and privacy of a home. Our commitment to excellence ensures an unforgettable stay.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.id} className="p-6 glass-card rounded-xl hover:shadow-md transition-all">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
