
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle, Trophy, Clock, Shield, Smile, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  // SEO-related useEffect
  useEffect(() => {
    document.title = "Why Choose ConciergeSublime | Premium Dubai Vacation Rentals";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover why ConciergeSublime is Dubai\'s premier luxury rental provider, offering exceptional properties, personalized service, and attention to detail.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover why ConciergeSublime is Dubai\'s premier luxury rental provider, offering exceptional properties, personalized service, and attention to detail.';
      document.head.appendChild(meta);
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-brand-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Why Choose ConciergeSublime</h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Experience the ultimate in luxury vacation rentals with our exceptional service, 
                hand-picked properties, and attention to every detail of your stay.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed mb-10">
                At ConciergeSublime, we understand that your choice of accommodation plays a pivotal role in defining your Dubai experience. 
                We've devoted ourselves to creating an unparalleled standard of luxury short-term rentals that consistently exceed expectations.
                Here's why discerning travelers choose us time and again for their Dubai stays:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-10 w-10 text-brand-teal mr-3" />
                    <h3 className="text-xl font-semibold">Premium Property Selection</h3>
                  </div>
                  <p className="text-gray-600">
                    Our portfolio consists exclusively of properties that meet our stringent quality standards. We personally 
                    inspect every location, ensuring superior comfort, prime locations, and exceptional amenities. From sleek
                    Dubai Marina penthouses to Downtown gems with Burj Khalifa views, we offer only the most desirable addresses.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Smile className="h-10 w-10 text-brand-teal mr-3" />
                    <h3 className="text-xl font-semibold">Personalized Service</h3>
                  </div>
                  <p className="text-gray-600">
                    Every guest receives our undivided attention and care. Our concierge team is available 24/7 to address any 
                    concerns or special requests. From personalized check-ins to tailored recommendations, we ensure your 
                    experience is seamless and memorable. We don't just offer accommodations; we create bespoke experiences.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Shield className="h-10 w-10 text-brand-teal mr-3" />
                    <h3 className="text-xl font-semibold">Reliability & Transparency</h3>
                  </div>
                  <p className="text-gray-600">
                    We pride ourselves on accurate representations of our properties and transparent pricing with no hidden fees. 
                    What you see is precisely what you get—often exceeding expectations. Our booking process is straightforward, 
                    and our team maintains clear communication from inquiry to check-out.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-10 w-10 text-brand-teal mr-3" />
                    <h3 className="text-xl font-semibold">Attention to Detail</h3>
                  </div>
                  <p className="text-gray-600">
                    The difference is in the details. From premium linens and toiletries to fully equipped kitchens and thoughtful 
                    welcome packages, every element of your stay has been carefully considered. Our properties feature 
                    high-quality furnishings, smart home technologies, and aesthetic designs that create a truly luxurious atmosphere.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
                <p className="text-lg mb-6">
                  ConciergeSublime was founded on a simple principle: to elevate the standard of short-term rentals in Dubai to match 
                  the city's reputation for luxury and innovation. Our team brings decades of combined experience in hospitality, 
                  real estate, and customer service to create a rental experience that rivals the finest hotels while offering the 
                  space, privacy, and value of a private residence.
                </p>
                <p className="text-lg mb-6">
                  We understand that your time in Dubai is precious, whether you're here for business, leisure, or a blend of both. 
                  Our role extends beyond providing beautiful accommodations—we see ourselves as facilitators of exceptional 
                  experiences, helping you make the most of every moment in this remarkable city.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Clock className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="font-semibold mb-2">Time-Saving</h3>
                    <p className="text-gray-600">
                      Our efficient processes and responsive team ensure no time is wasted during your stay.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <ThumbsUp className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Every property undergoes regular quality checks to maintain our high standards.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Shield className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="font-semibold mb-2">Peace of Mind</h3>
                    <p className="text-gray-600">
                      Professional management and 24/7 support mean complete security and peace of mind.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What Our Guests Say</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-brand-teal">
                    <p className="italic text-gray-600 mb-6">
                      "Our stay with ConciergeSublime exceeded all expectations. The apartment was even more beautiful than the pictures, 
                      and the view of the Burj Khalifa from our terrace was simply breathtaking. The team's attention to detail and 
                      responsiveness made our family vacation perfect. We'll definitely be back!"
                    </p>
                    <div>
                      <p className="font-semibold">Sarah & James Thompson</p>
                      <p className="text-sm text-gray-500">London, UK</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-brand-teal">
                    <p className="italic text-gray-600 mb-6">
                      "As a frequent business traveler to Dubai, I've tried various accommodation options. ConciergeSublime has been 
                      by far the most consistent in quality and service. Their properties are impeccably maintained, and their team 
                      is always professional and accommodating. They've made Dubai feel like my second home."
                    </p>
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-gray-500">Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Discover why ConciergeSublime is the preferred choice for discerning travelers seeking exceptional accommodation in Dubai.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-brand-teal hover:bg-brand-teal/90 px-8 py-6 text-lg">
                    <Link to="/#properties">Browse Properties</Link>
                  </Button>
                  <Button asChild variant="outline" className="px-8 py-6 text-lg">
                    <Link to="/concierge-services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
