
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      comment: "Our stay at the Palm Jumeirah villa was nothing short of extraordinary. The property was immaculate, with breathtaking views of the Dubai skyline. ConciergeSublime's attention to detail made all the difference - from the seamless check-in process to the thoughtful welcome package. The concierge service was exceptional, arranging everything from restaurant reservations to a private yacht tour. We've already booked our next stay!",
      property: "Palm Jumeirah Villa",
      date: "March 2023"
    },
    {
      id: 2,
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      comment: "I've stayed in luxury accommodations around the world, but my experience with ConciergeSublime was truly exceptional. The Downtown Dubai apartment exceeded all expectations - spacious, beautifully designed, and equipped with every amenity you could imagine. The views of the Burj Khalifa were spectacular, especially at night. What really set this apart was the personalized service - the team knew my preferences before I even arrived and ensured everything was tailored to my needs.",
      property: "Downtown Dubai Apartment",
      date: "January 2023"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      comment: "We chose ConciergeSublime for our family vacation in Dubai, and it was the best decision we made. The Marina penthouse was perfect for our family of five - spacious, modern, and with the most incredible views. The children loved the pool, and we appreciated the thoughtful touches like the welcome basket and children's amenities. The concierge team went above and beyond, organizing activities that kept everyone entertained. A truly memorable holiday!",
      property: "Dubai Marina Penthouse",
      date: "December 2022"
    },
    {
      id: 4,
      name: "James Wilson",
      location: "New York, USA",
      rating: 5,
      comment: "As a frequent business traveler to Dubai, I've tried various accommodation options, but ConciergeSublime is now my go-to choice. The Business Bay apartment offered the perfect balance of luxury and functionality. The high-speed internet and dedicated workspace were exactly what I needed, while the stunning views and premium amenities made it feel like a vacation rather than a business trip. The 24/7 concierge service was invaluable for last-minute requests.",
      property: "Business Bay Executive Apartment",
      date: "February 2023"
    },
    {
      id: 5,
      name: "Aisha Al-Mahmoud",
      location: "Riyadh, Saudi Arabia",
      rating: 4,
      comment: "Our extended family gathering at the Jumeirah Beach villa was perfect thanks to ConciergeSublime. The property was spacious enough for our large group, and the beachfront location was ideal. The kitchen was well-equipped for our family meals, and the outdoor area was perfect for relaxing together. Special mention to the concierge team who arranged a beautiful surprise celebration for my parents' anniversary. The only minor issue was with the air conditioning in one room, but it was fixed promptly.",
      property: "Jumeirah Beach Villa",
      date: "April 2023"
    },
    {
      id: 6,
      name: "Thomas Schmidt",
      location: "Berlin, Germany",
      rating: 5,
      comment: "As design enthusiasts, my partner and I were blown away by the attention to detail in our DIFC loft. The interior design was magazine-worthy, combining luxury with functionality. The location was perfect for exploring Dubai's art scene and fine dining. ConciergeSublime's recommendations were spot on, and they secured us reservations at restaurants that were supposedly fully booked. An unforgettable experience that we've been recommending to all our friends.",
      property: "DIFC Designer Loft",
      date: "November 2022"
    },
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-5 w-5 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>Client Testimonials | ConciergeSublime Luxury Properties</title>
        <meta name="description" content="Read authentic reviews from our satisfied guests. Discover why ConciergeSublime is the preferred choice for luxury accommodation in Dubai." />
        <meta name="keywords" content="testimonials, client reviews, luxury accommodation dubai, guest experiences, 5-star reviews, dubai luxury properties" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-center">Guest Experiences</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-center mb-8">
          Don't just take our word for it. Here's what our guests have to say about their experience with ConciergeSublime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="transition-all hover:shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{testimonial.property}</p>
                  <p className="text-sm text-gray-600">{testimonial.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Commitment to Excellence</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            At ConciergeSublime, guest satisfaction is at the heart of everything we do. We are committed to providing exceptional experiences that exceed expectations and create lasting memories.
          </p>
          <p className="mb-4">
            Our dedication to excellence is reflected in our attention to detail, personalized service, and the quality of our luxury properties. We continuously strive to improve our offerings based on guest feedback and the evolving needs of our discerning clientele.
          </p>
          <p>
            We invite you to experience the ConciergeSublime difference for yourself and join our growing family of satisfied guests from around the world.
          </p>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ready to Create Your Own Story?</h2>
        <p className="mb-6">Discover our collection of luxury properties and experience the exemplary service that our guests rave about.</p>
        <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md">Explore Properties</button>
      </div>
    </div>
  );
};

export default Testimonials;
