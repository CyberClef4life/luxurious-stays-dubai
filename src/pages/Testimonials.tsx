
import React from 'react';
import { Helmet } from 'react-helmet';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma & Richard Thompson",
      location: "London, UK",
      quote: "Our stay at the Palm Jumeirah villa exceeded all expectations. The property was immaculate, and the views were breathtaking. The concierge service went above and beyond to make our anniversary special.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      propertyStayed: "Luxury Villa, Palm Jumeirah"
    },
    {
      id: 2,
      name: "Ahmed Al-Farsi",
      location: "Riyadh, Saudi Arabia",
      quote: "As a frequent visitor to Dubai, I've stayed in many luxury properties, but none compare to the attention to detail and personalized service provided by ConciergeSublime. The Downtown penthouse had panoramic views that were unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      propertyStayed: "Signature Penthouse, Downtown Dubai"
    },
    {
      id: 3,
      name: "Sophia Chen",
      location: "Hong Kong",
      quote: "The Dubai Marina apartment was perfectly located for our business trip. The concierge arranged our transportation, meetings, and even secured last-minute restaurant reservations at Nobu. Truly a five-star experience.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      propertyStayed: "Executive Suite, Dubai Marina"
    },
    {
      id: 4,
      name: "Alexander & Maria Petrov",
      location: "Moscow, Russia",
      quote: "Our family vacation was made perfect by the spacious villa and attentive service. The private pool was a hit with our children, and the in-villa chef prepared the most delicious meals. We're already planning our return next year.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      propertyStayed: "Family Villa, Jumeirah"
    },
    {
      id: 5,
      name: "Julia & Thomas Schmidt",
      location: "Berlin, Germany",
      quote: "The attention to detail was remarkable. From the moment we booked until our departure, everything was handled with the utmost professionalism. The property was even more beautiful than the pictures suggested.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      propertyStayed: "Beachfront Apartment, JBR"
    },
    {
      id: 6,
      name: "Rajiv Patel",
      location: "Mumbai, India",
      quote: "My business colleagues and I were thoroughly impressed by the DIFC apartment. The proximity to our meetings was ideal, and the concierge arranged seamless airport transfers despite our late arrival. Truly world-class service.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      propertyStayed: "Business Loft, DIFC"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Client Testimonials | ConciergeSublime Dubai</title>
        <meta name="description" content="Read authentic reviews and testimonials from our satisfied clients who have experienced our luxury properties and concierge services in Dubai." />
        <meta name="keywords" content="dubai property reviews, luxury accommodation dubai, dubai concierge reviews, customer testimonials dubai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-teal to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover authentic experiences from guests who have enjoyed our luxury properties and concierge services in Dubai.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <Quote className="text-brand-teal h-8 w-8" />
                    </div>
                    
                    <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{testimonial.propertyStayed}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Video Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-16:9 h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Video Testimonial Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">The Williams Family Experience</h3>
                  <p className="text-gray-600 text-sm">The Williams family shares their experience of staying in our 4-bedroom villa on Palm Jumeirah with full concierge service.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-16:9 h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Video Testimonial Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">Corporate Retreat Success</h3>
                  <p className="text-gray-600 text-sm">Hear from the CEO of a global tech company about how we accommodated their executive team during their annual retreat in Dubai.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold mb-12">Trusted by Discerning Clients Worldwide</h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">98%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">4.9/5</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">85%</div>
                <p className="text-gray-600">Repeat Clients</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">1,200+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our commitment to excellence has earned us the trust of clients from over 40 countries. We pride ourselves on creating memorable experiences that exceed expectations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience It For Yourself</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join our community of satisfied clients and discover the ConciergeSublime difference. Book your luxury Dubai accommodation today.
            </p>
            <button className="bg-white text-brand-teal font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Browse Our Properties
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
