
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Award, Clock, Heart, Landmark, Shield, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FloatingContactWidgets from "@/components/ui/FloatingContactWidgets";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About ConciergeSublime | Luxury Short-Term Rentals in Dubai</title>
        <meta
          name="description"
          content="Learn about ConciergeSublime, Dubai's premier luxury short-term rental provider. Discover our story, mission, values, and the team behind our exceptional service."
        />
        <meta
          name="keywords"
          content="ConciergeSublime history, Dubai rental company, luxury accommodation provider, property management Dubai, about us, company mission"
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
                  About ConciergeSublime
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
                  Elevating the Dubai short-term rental experience with luxury accommodations and exceptional personalized service.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Our Story
                    </h2>
                    <p className="text-gray-700 mb-4">
                      ConciergeSublime was founded in 2018 by a team of hospitality professionals who recognized a gap in Dubai's accommodation market: high-quality, serviced short-term rentals with the personalized touch of a luxury hotel.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Beginning with just three properties in Dubai Marina, our reputation for exceptional service and attention to detail quickly grew. Today, we manage a curated portfolio of over 50 premium properties across Dubai's most desirable neighborhoods, from Downtown Dubai to Palm Jumeirah.
                    </p>
                    <p className="text-gray-700">
                      What sets us apart is our commitment to combining the space and privacy of a home with the amenities and services of a five-star hotel. Each property is personally selected, beautifully designed, and maintained to our exacting standards, while our concierge team ensures that every guest enjoys a seamless, memorable stay.
                    </p>
                  </div>
                  <div className="lg:pl-8">
                    <img 
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" 
                      alt="Dubai Skyline" 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Our Mission & Values */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our Mission & Values
                  </h2>
                  <p className="text-xl text-gray-700">
                    We are committed to redefining the short-term rental experience in Dubai, delivering exceptional service that exceeds expectations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ValueCard 
                    icon={<Shield className="h-10 w-10 text-brand-teal" />}
                    title="Trust & Reliability"
                    description="We build trust through transparency, consistency, and absolute reliability in every interaction."
                  />
                  <ValueCard 
                    icon={<Heart className="h-10 w-10 text-brand-teal" />}
                    title="Passion for Service"
                    description="Our team is passionate about hospitality and dedicated to creating exceptional experiences for every guest."
                  />
                  <ValueCard 
                    icon={<Award className="h-10 w-10 text-brand-teal" />}
                    title="Excellence"
                    description="We pursue excellence in everything we do, from property selection and design to guest communication and support."
                  />
                  <ValueCard 
                    icon={<Landmark className="h-10 w-10 text-brand-teal" />}
                    title="Local Expertise"
                    description="Our deep understanding of Dubai allows us to offer authentic insights and recommendations to enhance our guests' stay."
                  />
                  <ValueCard 
                    icon={<Clock className="h-10 w-10 text-brand-teal" />}
                    title="Responsiveness"
                    description="We pride ourselves on swift, effective responses to guest needs and inquiries, 24 hours a day."
                  />
                  <ValueCard 
                    icon={<Users className="h-10 w-10 text-brand-teal" />}
                    title="Community"
                    description="We value our relationships with property owners, guests, and the broader Dubai community, contributing positively to all."
                  />
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Meet the Team */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Meet Our Leadership Team
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <TeamMember 
                    name="Ahmed Khalil"
                    position="Founder & CEO"
                    image="https://randomuser.me/api/portraits/men/32.jpg"
                    bio="With over 15 years in luxury hospitality, Ahmed founded ConciergeSublime to bring hotel-quality service to the short-term rental market."
                  />
                  <TeamMember 
                    name="Sofia Rodriguez"
                    position="Operations Director"
                    image="https://randomuser.me/api/portraits/women/33.jpg"
                    bio="Sofia ensures that every property and guest experience meets our exacting standards. Her background in five-star hotels brings invaluable expertise."
                  />
                  <TeamMember 
                    name="James Chen"
                    position="Head of Guest Relations"
                    image="https://randomuser.me/api/portraits/men/89.jpg"
                    bio="James leads our concierge team, bringing his passion for Dubai and exceptional service to create memorable experiences for our guests."
                  />
                  <TeamMember 
                    name="Layla Al Mansouri"
                    position="Property Portfolio Manager"
                    image="https://randomuser.me/api/portraits/women/42.jpg"
                    bio="With her keen eye for quality and design, Layla oversees our property selection and ensures each home in our portfolio is truly sublime."
                  />
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Achievements */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Our Achievements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AchievementCard 
                    year="2023"
                    title="TripAdvisor Travelers' Choice Award"
                    description="Recognized for consistently earning outstanding reviews and being ranked in the top 10% of hospitality businesses worldwide."
                  />
                  <AchievementCard 
                    year="2022"
                    title="Dubai Tourism Excellence Award"
                    description="Honored for innovation and excellence in enhancing Dubai's tourism offering through exceptional short-term rental experiences."
                  />
                  <AchievementCard 
                    year="2021"
                    title="Booking.com Traveller Review Award"
                    description="Achieved an average rating of 9.2/10 across all properties, recognizing our exceptional guest experiences."
                  />
                  <AchievementCard 
                    year="2020"
                    title="Airbnb Superhost Status"
                    description="Maintained Superhost status across all properties, demonstrating our commitment to outstanding hospitality."
                  />
                  <AchievementCard 
                    year="2019"
                    title="Luxury Lifestyle Awards"
                    description="Named 'Best Luxury Vacation Rental Provider in UAE' in recognition of our premium accommodations and services."
                  />
                  <AchievementCard 
                    year="2018"
                    title="Entrepreneur of the Year Finalist"
                    description="Our founder recognized as a finalist in the Hospitality category of the Arabian Business Awards."
                  />
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
                    Experience the ConciergeSublime Difference
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Discover why discerning travelers choose us for their Dubai accommodation needs.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="/#properties"
                      className="px-8 py-4 bg-brand-teal text-white font-medium rounded-md hover:bg-brand-teal/90 transition-colors"
                    >
                      Browse Our Properties
                    </a>
                    <a
                      href="/concierge-services"
                      className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                    >
                      Our Services
                    </a>
                  </div>
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

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const TeamMember = ({ name, position, image, bio }: { name: string, position: string, image: string, bio: string }) => {
  return (
    <div className="text-center">
      <img 
        src={image} 
        alt={name} 
        className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-brand-teal mb-2">{position}</p>
      <p className="text-gray-700 text-sm">{bio}</p>
    </div>
  );
};

const AchievementCard = ({ year, title, description }: { year: string, title: string, description: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="text-brand-teal font-semibold text-lg mb-2">{year}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <Separator className="mb-4" />
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default AboutUs;
