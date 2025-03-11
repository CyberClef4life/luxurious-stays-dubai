
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FloatingContactWidgets from "@/components/ui/FloatingContactWidgets";

const ConciergeServices = () => {
  return (
    <>
      <Helmet>
        <title>Premium Concierge Services | ConciergeSublime Dubai</title>
        <meta
          name="description"
          content="Experience tailored concierge services by ConciergeSublime in Dubai. From airport transfers to exclusive reservations and personalized experiences - we elevate your stay."
        />
        <meta
          name="keywords"
          content="Dubai concierge, luxury concierge services, VIP services Dubai, personal concierge Dubai, vacation concierge, airport transfer Dubai"
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
                  Personalized Concierge Services in Dubai
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
                  Experience Dubai in unparalleled luxury with our premium concierge services tailored to your preferences.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Our Premium Concierge Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  <ServiceCard 
                    title="Airport Transfers" 
                    description="Luxury transportation from Dubai International Airport to your accommodation with our fleet of premium vehicles and professional chauffeurs."
                  />
                  <ServiceCard 
                    title="Restaurant Reservations" 
                    description="Secure tables at Dubai's most exclusive restaurants, including those with long waiting lists and special occasions."
                  />
                  <ServiceCard 
                    title="Event Tickets" 
                    description="Access to premier sporting events, concerts, shows, and exhibitions happening throughout Dubai and the UAE."
                  />
                  <ServiceCard 
                    title="Yacht & Desert Safaris" 
                    description="Private yacht charters along Dubai's coastline or authentic desert experiences with luxury transportation and amenities."
                  />
                  <ServiceCard 
                    title="Personal Shopping" 
                    description="From designer boutiques to traditional souks, our personal shopping assistants help you find exactly what you're looking for."
                  />
                  <ServiceCard 
                    title="Childcare Services" 
                    description="Professional nannies and babysitters, as well as recommendations for family-friendly activities throughout Dubai."
                  />
                  <ServiceCard 
                    title="Wellness & Spa" 
                    description="In-residence massage and wellness treatments or reservations at Dubai's most exclusive spas and health facilities."
                  />
                  <ServiceCard 
                    title="Business Services" 
                    description="Meeting room bookings, translation services, equipment rental, and other business-related assistance for corporate travelers."
                  />
                  <ServiceCard 
                    title="Custom Experiences" 
                    description="Bespoke experiences tailored to your interests, from helicopter tours to private cultural experiences with local experts."
                  />
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Premium Membership */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Premium Membership Benefits
                  </h2>
                  <p className="text-lg text-gray-700 mb-12">
                    Enhance your Dubai experience with our exclusive membership program, offering priority access to services and special privileges.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-4">Silver Membership</h3>
                      <ul className="text-left space-y-3 mb-6">
                        <BenefitItem>24/7 concierge assistance</BenefitItem>
                        <BenefitItem>Priority restaurant reservations</BenefitItem>
                        <BenefitItem>Standard airport transfers</BenefitItem>
                        <BenefitItem>10% discount on additional services</BenefitItem>
                      </ul>
                      <p className="font-bold text-lg">AED 1,500 / month</p>
                    </div>

                    <div className="bg-brand-dark text-white p-8 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-4">Platinum Membership</h3>
                      <ul className="text-left space-y-3 mb-6">
                        <BenefitItem>Dedicated personal concierge</BenefitItem>
                        <BenefitItem>VIP access to exclusive venues</BenefitItem>
                        <BenefitItem>Luxury airport transfers</BenefitItem>
                        <BenefitItem>25% discount on additional services</BenefitItem>
                        <BenefitItem>Complimentary yacht experience (4 hours)</BenefitItem>
                      </ul>
                      <p className="font-bold text-lg">AED 5,000 / month</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Request Concierge Services
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                    <p className="text-gray-700 mb-8">
                      Our concierge team is available 24/7 to assist with your requests. Fill out the form or contact us directly for immediate assistance.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <MapPin size={20} className="mr-4 mt-1 text-brand-teal" />
                        <div>
                          <p className="font-medium">Our Office</p>
                          <p className="text-gray-600">
                            Level 14, Boulevard Plaza Tower 1,<br />
                            Downtown Dubai, UAE
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Phone size={20} className="mr-4 text-brand-teal" />
                        <div>
                          <p className="font-medium">Call Us</p>
                          <p className="text-gray-600">+971-58-5959-868</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Mail size={20} className="mr-4 text-brand-teal" />
                        <div>
                          <p className="font-medium">Email Us</p>
                          <p className="text-gray-600">customercare247f@conciergesublime.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Service Request
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                          placeholder="Please describe the services you're interested in..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-3 bg-brand-teal text-white font-medium rounded-md hover:bg-brand-teal/90 transition-colors"
                      >
                        Submit Request
                      </button>
                    </form>
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

const ServiceCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg transition-transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <Separator className="mb-4" />
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const BenefitItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="flex items-center">
    <span className="mr-2 text-brand-teal">✓</span> {children}
  </li>;
};

export default ConciergeServices;
