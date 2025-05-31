
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { t, dir } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = content.testimonials.items;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title section-title-gradient text-center">
          {t(content.testimonials.title.ar, content.testimonials.title.en)}
        </h2>
        
        <div className="mt-10 relative max-w-3xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:ml-0 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg"
            aria-label="Previous testimonial"
          >
            {dir === 'rtl' ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:mr-0 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg"
            aria-label="Next testimonial"
          >
            {dir === 'rtl' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
          
          {/* Testimonials */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(${dir === 'rtl' ? activeIndex * 100 : -activeIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full flex-shrink-0 px-6"
                >
                  <div className="bg-white rounded-xl p-8 shadow-md relative">
                    <Quote className="absolute text-brand-purple/10 top-4 right-4 h-16 w-16" />
                    
                    <p className="text-gray-700 mb-6 relative z-10">
                      {t(item.text.ar, item.text.en)}
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-brand-purple/20 rounded-full flex items-center justify-center text-brand-purple font-bold">
                        {t(item.name.ar.charAt(0), item.name.en.charAt(0))}
                      </div>
                      <div className="ml-4 rtl:mr-4 rtl:ml-0">
                        <h4 className="font-bold">{t(item.name.ar, item.name.en)}</h4>
                        <p className="text-gray-500 text-sm">{t(item.position.ar, item.position.en)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-brand-purple' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
