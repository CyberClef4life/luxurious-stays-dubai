
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ArrowRight, Headphones, Gift, Coffee, Car, Utensils, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const ConciergeServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concierge Services | ConciergeSublime Dubai</title>
        <meta name="description" content="Discover our premium concierge services in Dubai. From restaurant reservations to private yacht charters, we take care of every detail of your luxury experience." />
        <meta name="keywords" content="dubai concierge, luxury concierge, concierge service, dubai vip service, restaurant reservations dubai, dubai yacht rental" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-teal to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Concierge Services in Dubai</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">Experience the height of luxury with our bespoke concierge services tailored to your every need and desire.</p>
            <Button className="bg-white text-brand-teal hover:bg-gray-100 text-lg px-8 py-6">
              Contact Us <ArrowRight className="ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Concierge Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Headphones className="w-12 h-12 text-brand-teal mb-4" />
                <h3 className="text-xl font-bold mb-3">24/7 Dedicated Support</h3>
                <p className="text-gray-600">Our concierge team is available around the clock to assist with any requests or inquiries during your stay in Dubai.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Utensils className="w-12 h-12 text-brand-teal mb-4" />
                <h3 className="text-xl font-bold mb-3">Restaurant Reservations</h3>
                <p className="text-gray-600">Secure tables at Dubai's most exclusive restaurants, from Michelin-starred venues to hidden local gems.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Calendar className="w-12 h-12 text-brand-teal mb-4" />
                <h3 className="text-xl font-bold mb-3">Event Planning</h3>
                <p className="text-gray-600">From private dinners to birthday celebrations, our team will handle all aspects of your special occasions.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Car className="w-12 h-12 text-brand-teal mb-4" />
                <h3 className="text-xl font-bold mb-3">Transportation Services</h3>
                <p className="text-gray-600">Luxury car rentals, chauffeur services, and private jet arrangements for seamless travel experiences.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Coffee className="w-12 h-12 text-brand-teal mb-4" />
                <h3 className="text-xl font-bold mb-3">In-home Services</h3>
                <p className="text-gray-600">Private chefs, housekeeping, childcare, and wellness practitioners available at your convenience.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Gift className="w-12 h-12 text-brand-teal mb-4" />
                <h3 className="text-xl font-bold mb-3">Personal Shopping</h3>
                <p className="text-gray-600">VIP shopping experiences, personal stylists, and gift procurement services for all occasions.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Premium Experiences */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Premium Experiences</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Dubai Yacht Charter" className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Private Yacht Charters</h3>
                  <p className="text-gray-600 mb-6">Experience Dubai's stunning coastline from the deck of a private yacht. Whether it's a sunset cruise around the Palm Jumeirah or a full-day excursion with water sports, our concierge team will arrange the perfect maritime adventure.</p>
                  <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">Learn More</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1576074623392-2c065cc549e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Desert Safari" className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Desert Experiences</h3>
                  <p className="text-gray-600 mb-6">From private desert safaris with gourmet dining under the stars to hot air balloon rides at dawn, discover the magic of Dubai's desert landscape with carefully curated experiences that capture the essence of Arabian adventure.</p>
                  <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">Learn More</Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-brand-teal">
                <p className="text-gray-600 italic mb-6">"The concierge service was impeccable. From arranging last-minute dinner reservations at a fully booked restaurant to organizing a surprise birthday celebration for my wife, they exceeded all expectations."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">James Robertson</h4>
                    <p className="text-sm text-gray-500">New York, USA</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-brand-teal">
                <p className="text-gray-600 italic mb-6">"Their attention to detail is remarkable. They remembered all our preferences from our previous stay and had everything prepared just the way we like it. The private desert dinner they arranged was the highlight of our trip."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah & Thomas Chen</h4>
                    <p className="text-sm text-gray-500">Singapore</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-brand-teal">
                <p className="text-gray-600 italic mb-6">"As frequent travelers to Dubai, we've tried several concierge services, but ConciergeSublime is in a league of its own. Their connections in the city opened doors to experiences we didn't even know existed."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Elena Volkov</h4>
                    <p className="text-sm text-gray-500">Moscow, Russia</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Dubai Experience?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">Contact our concierge team today to start planning your perfect Dubai getaway with personalized service every step of the way.</p>
            <Button className="bg-white text-brand-teal hover:bg-gray-100 text-lg px-8 py-6">
              Request Concierge Service
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ConciergeServices;
