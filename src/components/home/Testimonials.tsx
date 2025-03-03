
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    location: "London, UK",
    rating: 5,
    text: "The Marina Penthouse exceeded all my expectations. The views were breathtaking, and the service was impeccable. I felt like royalty throughout my stay.",
    date: "June 2023"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    location: "Singapore",
    rating: 5,
    text: "Perfect location in Downtown Dubai with easy access to all attractions. The apartment was spotless and exactly as advertised. Will definitely book again!",
    date: "August 2023"
  },
  {
    id: 3,
    name: "Aisha Al-Mansour",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    location: "Riyadh, Saudi Arabia",
    rating: 5,
    text: "The Palm Jumeirah Villa provided the ultimate luxury experience. From the private pool to the stunning interiors, everything was perfect. The concierge service was beyond helpful.",
    date: "September 2023"
  },
  {
    id: 4,
    name: "David Williams",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    location: "New York, USA",
    rating: 5,
    text: "As a frequent business traveler to Dubai, I've found my permanent accommodation. The DIFC apartment was ideally located for my meetings and the amenities were top-notch.",
    date: "October 2023"
  },
  {
    id: 5,
    name: "Elena Petrov",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    location: "Moscow, Russia",
    rating: 5,
    text: "My family and I had an incredible stay at the JBR Beachfront property. The beach access and views were amazing, and the apartment had everything we needed for a comfortable stay.",
    date: "November 2023"
  }
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!testimonialsRef.current) return;
    
    const container = testimonialsRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setScrollPosition(Math.max(0, scrollPosition - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(Math.min(testimonials.length - 1, scrollPosition + 1));
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-brand-teal uppercase tracking-wide">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Read what our satisfied guests have to say about their experiences with ConciergeSublime.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
              disabled={scrollPosition === 0}
            >
              <ChevronLeft size={24} className={scrollPosition === 0 ? 'text-gray-300' : 'text-gray-700'} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
              disabled={scrollPosition === testimonials.length - 1}
            >
              <ChevronRight size={24} className={scrollPosition === testimonials.length - 1 ? 'text-gray-300' : 'text-gray-700'} />
            </button>
          </div>
          
          {/* Testimonials Slider */}
          <div 
            ref={testimonialsRef}
            className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 pb-4 snap-x gap-6 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card glass-card rounded-xl p-6 min-w-[320px] md:min-w-[380px] flex-shrink-0 snap-start"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">{testimonial.date}</span>
                </div>
                
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`mx-1 h-2 w-2 rounded-full transition-all ${
                  i === scrollPosition ? 'bg-brand-teal w-4' : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (!testimonialsRef.current) return;
                  const container = testimonialsRef.current;
                  const scrollAmount = i * container.clientWidth;
                  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                  setScrollPosition(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
