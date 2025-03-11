
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ConciergeServices = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>Concierge Services | ConciergeSublime Luxury Properties</title>
        <meta name="description" content="Experience personalized luxury with our premium concierge services. From airport transfers to private chefs, we cater to your every need during your stay." />
        <meta name="keywords" content="concierge services, luxury accommodation, dubai concierge, private chef, airport transfers, yacht charter, luxury experience" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-center">Concierge Services</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-center mb-8">
          At ConciergeSublime, we believe that true luxury goes beyond beautiful properties. Our dedicated concierge team is available 24/7 to ensure your stay is nothing short of exceptional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle>Airport Transfers</CardTitle>
            <CardDescription>Travel in style and comfort</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Begin your luxury experience the moment you land in Dubai. Our fleet of premium vehicles and professional chauffeurs will ensure a smooth and comfortable journey to your accommodation. Whether you prefer a sleek sedan, spacious SUV, or luxury van for group travel, we have the perfect vehicle for your needs.</p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle>Private Chef</CardTitle>
            <CardDescription>Exquisite dining in the comfort of your accommodation</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Experience culinary excellence with our private chef services. Our talented chefs will create personalized menus tailored to your preferences and dietary requirements. From intimate dinners to festive gatherings, elevate your dining experience with gourmet meals prepared in your own kitchen.</p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle>Yacht Charters</CardTitle>
            <CardDescription>Explore Dubai's stunning coastline</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Discover the beauty of Dubai from the water with our exclusive yacht charter services. Whether you're planning a romantic sunset cruise, a family day out, or an extravagant party, our range of luxury yachts offers the perfect setting for an unforgettable experience.</p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle>VIP Reservations</CardTitle>
            <CardDescription>Access to Dubai's most exclusive venues</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Gain privileged access to Dubai's most sought-after restaurants, clubs, and entertainment venues. Our concierge team has established relationships with the city's most exclusive establishments, ensuring you enjoy priority reservations and special treatment.</p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle>Personalized Tours</CardTitle>
            <CardDescription>Explore Dubai with expert guides</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Discover the rich culture and breathtaking landmarks of Dubai with our customized tours. Whether you're interested in historical sites, architectural marvels, or hidden gems known only to locals, our experienced guides will craft an itinerary tailored to your interests.</p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle>24/7 Support</CardTitle>
            <CardDescription>Round-the-clock assistance for all your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our dedicated concierge team is available 24 hours a day, 7 days a week to assist with any requests or concerns during your stay. From restaurant recommendations to emergency assistance, we're committed to ensuring you have everything you need for a perfect experience.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-brand-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Request</h3>
            <p>Contact our concierge team with your specific requirements</p>
          </div>
          <div className="text-center">
            <div className="bg-brand-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Customize</h3>
            <p>We'll tailor our services to meet your exact preferences</p>
          </div>
          <div className="text-center">
            <div className="bg-brand-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Enjoy</h3>
            <p>Relax and enjoy a seamless, luxurious experience</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ready to Enhance Your Stay?</h2>
        <p className="mb-6">Contact our concierge team today to discuss your requirements and let us create a tailored experience that exceeds your expectations.</p>
        <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md">Contact Concierge</button>
      </div>
    </div>
  );
};

export default ConciergeServices;
