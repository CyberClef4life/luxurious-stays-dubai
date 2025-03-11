
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FloatingContactWidgets from "@/components/ui/FloatingContactWidgets";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      text: "Our stay at ConciergeSublime's Dubai Marina apartment exceeded all expectations. The view was breathtaking, and the concierge service was exceptional - from arranging dinner reservations to organizing a last-minute desert safari. The apartment itself was immaculate and luxurious. We'll definitely be returning for our next Dubai vacation!",
      property: "Dubai Marina Penthouse",
      date: "January 2023"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "As a frequent business traveler to Dubai, I've stayed in many accommodations, but ConciergeSublime offers something truly special. Their Downtown Dubai apartment was perfectly located for my meetings, and the workspace was ideal. The 24/7 concierge team helped me navigate a busy schedule with ease, arranging transport and even handling some urgent printing needs. Highly recommended for business travelers.",
      property: "Downtown Dubai Executive Suite",
      date: "March 2023"
    },
    {
      name: "Emma and David Wilson",
      location: "Sydney, Australia",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      text: "We traveled with our two children and the Palm Jumeirah villa was perfect for our family vacation. The private pool was a huge hit, and the villa was spacious enough that we never felt cramped. ConciergeSublime went above and beyond, arranging age-appropriate activities for the kids and suggesting family-friendly restaurants. The welcome basket with local treats was a thoughtful touch!",
      property: "Palm Jumeirah Villa",
      date: "April 2023"
    },
    {
      name: "Sophia Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "I celebrated my 30th birthday in Dubai and stayed at ConciergeSublime's JBR beachfront apartment. The team helped make my celebration unforgettable - from decorating the apartment to surprise me, to arranging a private yacht party. The location was perfect, with the beach just steps away and plenty of restaurants nearby. The apartment itself was stylish and comfortable with amazing sea views.",
      property: "JBR Beachfront Residence",
      date: "June 2023"
    },
    {
      name: "Mohammed Al-Farsi",
      location: "Muscat, Oman",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      text: "Being from the region, I have high standards for hospitality, and ConciergeSublime did not disappoint. Their attention to detail is impeccable - from the quality of the furnishings to the selection of amenities. What truly impressed me was how personalized the service felt. Their team remembered my preferences from a previous stay and had everything arranged accordingly. The DIFC apartment was elegant and perfectly maintained.",
      property: "DIFC Luxury Apartment",
      date: "August 2023"
    },
    {
      name: "Olivia and James Taylor",
      location: "New York, USA",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/59.jpg",
      text: "We spent our honeymoon in Dubai and ConciergeSublime made it absolutely magical. From the moment we arrived, we were treated like royalty. The romantic setup in our Business Bay apartment was stunning - rose petals, champagne, and spectacular views of the Burj Khalifa. Their concierge arranged a private dinner in the desert that was one of the highlights of our trip. The apartment was modern, luxurious and had everything we needed.",
      property: "Business Bay Skyline View",
      date: "October 2023"
    },
    {
      name: "Raj Patel",
      location: "Mumbai, India",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      text: "I organized a group trip for six friends and we chose ConciergeSublime's three-bedroom apartment in Dubai Marina. The space was perfect for our group, with plenty of room for everyone. The booking process was smooth and their team was incredibly responsive to our many questions. They helped arrange a dhow cruise, desert safari, and several other activities. The apartment was beautiful and had a fantastic balcony where we spent many evenings enjoying the view.",
      property: "Dubai Marina Group Apartment",
      date: "November 2023"
    },
    {
      name: "Anna Schmidt",
      location: "Berlin, Germany",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      text: "As someone who works remotely, I was looking for a comfortable place for a month-long workcation. The Downtown Dubai apartment was ideal - fast internet, a dedicated workspace, and all the amenities I needed. ConciergeSublime made the extended stay so easy, with weekly cleaning services and quick responses to any questions. The location was perfect for exploring the city after work hours, and I felt completely at home the entire time.",
      property: "Downtown Dubai Long Stay",
      date: "December 2023"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Client Testimonials | ConciergeSublime Dubai Luxury Stays</title>
        <meta
          name="description"
          content="Read authentic guest reviews and testimonials about ConciergeSublime luxury rental experiences in Dubai. Discover why our guests love our properties and service."
        />
        <meta
          name="keywords"
          content="Dubai rental reviews, ConciergeSublime testimonials, Dubai luxury stay experiences, guest feedback Dubai, vacation rental reviews"
        />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-brand-dark text-white">
            <div className="container mx-auto px-6 py-24 md:py-32">
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Guest Testimonials
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
                  Discover what our guests have to say about their experience with ConciergeSublime's luxury properties and premium services.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Hear From Our Guests
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <StatCard value="5.0" label="Average Rating" />
                  <StatCard value="98%" label="Guest Satisfaction" />
                  <StatCard value="1,200+" label="Happy Guests" />
                  <StatCard value="82%" label="Return Guests" />
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Review Platforms */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Find Us On Review Platforms
                </h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                  <div className="text-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                      alt="Airbnb" 
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <div className="flex items-center justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#FF5A5F" stroke="none" />
                      ))}
                    </div>
                    <p className="font-medium">4.97 out of 5</p>
                  </div>

                  <div className="text-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png" 
                      alt="Booking.com" 
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <div className="flex items-center justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#003580" stroke="none" />
                      ))}
                    </div>
                    <p className="font-medium">9.2 out of 10</p>
                  </div>

                  <div className="text-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/VRBO_Logo_2019.svg/2560px-VRBO_Logo_2019.svg.png" 
                      alt="VRBO" 
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <div className="flex items-center justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#3662D8" stroke="none" />
                      ))}
                    </div>
                    <p className="font-medium">4.9 out of 5</p>
                  </div>

                  <div className="text-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tripadvisor_Logo.svg/2560px-Tripadvisor_Logo.svg.png" 
                      alt="TripAdvisor" 
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <div className="flex items-center justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#00AA6C" stroke="none" />
                      ))}
                    </div>
                    <p className="font-medium">4.8 out of 5</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 bg-brand-dark text-white">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Experience Dubai with ConciergeSublime
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Join our satisfied guests and discover the perfect blend of luxury accommodation and personalized service.
                  </p>
                  <a
                    href="/#properties"
                    className="px-8 py-4 bg-brand-teal text-white font-medium rounded-md hover:bg-brand-teal/90 transition-colors inline-block"
                  >
                    Browse Our Properties
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>

          <FloatingContactWidgets />
        </main>
        <Footer />
      </div>
    </>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-4 items-center">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} fill="#FFB800" stroke="none" className="mr-1" />
        ))}
        <span className="text-sm text-gray-600 ml-2">
          {testimonial.date}
        </span>
      </div>
      
      <Separator className="mb-4" />
      
      <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
      
      <p className="text-sm font-medium text-brand-teal">
        {testimonial.property}
      </p>
    </div>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="p-6">
      <p className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">{value}</p>
      <p className="text-gray-700">{label}</p>
    </div>
  );
};

export default Testimonials;
