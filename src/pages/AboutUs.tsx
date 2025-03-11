
import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>About ConciergeSublime | Luxury Property Rentals in Dubai</title>
        <meta name="description" content="Learn about ConciergeSublime, Dubai's premier luxury property rental company. Discover our story, mission, and commitment to exceptional hospitality experiences." />
        <meta name="keywords" content="about us, ConciergeSublime, luxury rentals Dubai, premium hospitality, luxury accommodation, Dubai property experts" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-center">About ConciergeSublime</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-center mb-8">
          Redefining luxury hospitality in Dubai with curated properties and exceptional personalized service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            ConciergeSublime was founded in 2015 by a team of hospitality enthusiasts who recognized a gap in Dubai's luxury accommodation market. While the city offered numerous hotels and rental options, there was a lack of personalized, high-end experiences that combined the space and privacy of a private residence with the service standards of a five-star hotel.
          </p>
          <p className="mb-4">
            Drawing on decades of collective experience in luxury hospitality and real estate, our founders set out to create a company that would offer discerning travelers an alternative to traditional accommodation options. The vision was to curate a collection of the finest properties in Dubai's most desirable locations and complement them with bespoke concierge services tailored to each guest's preferences.
          </p>
          <p>
            What began as a small collection of premium properties has since evolved into one of Dubai's most respected luxury accommodation providers, serving guests from around the world who seek exceptional experiences in the city of gold.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Luxury Dubai Skyline" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Mission & Values</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p>
              To provide unparalleled hospitality experiences that combine luxurious accommodations with personalized service, creating memorable stays that exceed our guests' expectations and showcase the very best of Dubai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p>
                We are committed to excellence in every aspect of our service, from the quality of our properties to the attention to detail in our guest interactions. We continuously strive to improve and innovate in pursuit of perfection.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Personalization</h3>
              <p>
                We believe that true luxury lies in personalization. We take the time to understand each guest's unique preferences and requirements, tailoring our services to create bespoke experiences that feel genuinely special.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p>
                We operate with unwavering integrity in all our dealings, building trust through transparency, honesty, and ethical business practices. We value long-term relationships over short-term gains.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p>
                We embrace innovation and continuously seek new ways to enhance our offerings and improve the guest experience. We stay ahead of trends and leverage technology to deliver seamless, state-of-the-art service.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Alexander Reed" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg">Alexander Reed</h3>
            <p className="text-brand-teal mb-2">Founder & CEO</p>
            <p className="text-sm">With over 20 years in luxury hospitality, Alexander leads with passion and vision, ensuring ConciergeSublime remains at the forefront of Dubai's luxury accommodation sector.</p>
          </div>
          
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Sophia Martinez" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg">Sophia Martinez</h3>
            <p className="text-brand-teal mb-2">Head of Guest Experience</p>
            <p className="text-sm">Sophia's expertise in luxury guest relations ensures that every ConciergeSublime experience is memorable and exceeds expectations. Her attention to detail is unmatched.</p>
          </div>
          
          <div className="text-center">
            <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Omar Al Farsi" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg">Omar Al Farsi</h3>
            <p className="text-brand-teal mb-2">Property Portfolio Director</p>
            <p className="text-sm">Omar's deep understanding of Dubai's real estate market helps ConciergeSublime curate the most exclusive properties in the city's most prestigious locations.</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-4">Join the ConciergeSublime Experience</h2>
        <p className="mb-6">Discover the difference that comes with our commitment to excellence and personalized service. Whether you're visiting Dubai for business or pleasure, we look forward to welcoming you to one of our exceptional properties.</p>
        <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md">Contact Us</button>
      </div>
    </div>
  );
};

export default AboutUs;
