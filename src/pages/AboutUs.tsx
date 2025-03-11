
import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Users, Award, Globe, Check } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | ConciergeSublime Dubai</title>
        <meta name="description" content="ConciergeSublime is Dubai's premier luxury property and concierge service provider. Learn about our commitment to excellence and personalized service." />
        <meta name="keywords" content="dubai luxury properties, dubai concierge service, about conciergeSublime, luxury accommodation dubai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-teal to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ConciergeSublime</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Dubai's premier luxury property and concierge service provider, dedicated to creating exceptional experiences for discerning clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Luxury Dubai Property" 
                className="rounded-lg shadow-xl"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, ConciergeSublime emerged from a vision to transform the luxury accommodation experience in Dubai. Our founder, having traveled extensively and experienced hospitality at its finest across the globe, identified a gap in Dubai's booming property market: truly personalized, high-end property management combined with world-class concierge services.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a boutique operation with just three exclusive properties has grown into a curated portfolio of over 50 premium properties across Dubai's most prestigious neighborhoods. Despite our growth, we have maintained our commitment to personalized service and attention to detail that sets us apart in the luxury market.
              </p>
              <p className="text-gray-700">
                Today, ConciergeSublime is recognized as the preferred choice for discerning travelers, business executives, and celebrities seeking exceptional accommodations and services in Dubai. Our success is built on our unwavering dedication to exceeding expectations and creating memorable experiences for our clients.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white mb-6">
                  <Award size={30} />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to maintaining the highest standards in every aspect of our service, from property selection and maintenance to client interactions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white mb-6">
                  <Users size={30} />
                </div>
                <h3 className="text-xl font-bold mb-4">Personalization</h3>
                <p className="text-gray-600">
                  We believe that true luxury lies in customization. Every client's needs and preferences are unique, and our service reflects this understanding.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white mb-6">
                  <Shield size={30} />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  Honesty, transparency, and ethical practices are at the heart of our business. We value trust above all in our client relationships.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white mb-6">
                  <Globe size={30} />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously evolve our services and adopt new technologies to enhance the guest experience and stay ahead of industry trends.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-brand-teal mb-4">Founder & CEO</p>
                  <p className="text-gray-600 mb-4">
                    With over 15 years of experience in luxury hospitality across Asia, Europe, and the Middle East, Sarah brings unparalleled expertise to ConciergeSublime.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Mohammed Al-Farsi" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Mohammed Al-Farsi</h3>
                  <p className="text-brand-teal mb-4">Chief Operations Officer</p>
                  <p className="text-gray-600 mb-4">
                    A Dubai native with extensive connections in the local business community, Mohammed ensures our operations run smoothly and our properties meet the highest standards.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Elena Kowalski" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Elena Kowalski</h3>
                  <p className="text-brand-teal mb-4">Head of Concierge Services</p>
                  <p className="text-gray-600 mb-4">
                    With a background in luxury travel planning and VIP event management, Elena leads our concierge team in creating exceptional experiences for every client.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose ConciergeSublime</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">The ConciergeSublime Difference</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700"><span className="font-semibold">Curated Property Portfolio:</span> Each property in our collection is personally vetted and selected based on location, design, amenities, and overall quality.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700"><span className="font-semibold">Personalized Service:</span> From the moment you inquire until after your departure, our team is dedicated to tailoring every aspect of your stay to your preferences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700"><span className="font-semibold">Local Expertise:</span> Our team's intimate knowledge of Dubai ensures you receive insider recommendations and access to the city's best experiences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700"><span className="font-semibold">24/7 Support:</span> Our concierge team is available around the clock to assist with any requests or address any concerns during your stay.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Our Commitment to Quality</h3>
                
                <p className="text-gray-700 mb-6">
                  At ConciergeSublime, we believe that luxury is in the details. That's why we've implemented a rigorous quality assurance process for all our properties and services:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700"><span className="font-semibold">Regular Property Inspections:</span> Our properties undergo thorough inspections before and after each stay to ensure everything meets our standards.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700"><span className="font-semibold">Premium Amenities:</span> From luxury linens to high-end toiletries, we provide only the best for our guests.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700"><span className="font-semibold">Staff Training:</span> Our team undergoes regular training to ensure they're equipped to provide exceptional service at all times.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700"><span className="font-semibold">Client Feedback:</span> We actively seek and incorporate feedback to continuously improve our offerings.</p>
                    </div>
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
            <h2 className="text-3xl font-bold mb-6">Experience the ConciergeSublime Difference</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Ready to discover unparalleled luxury and service in Dubai? Contact our team today to begin planning your perfect stay.
            </p>
            <button className="bg-white text-brand-teal font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
