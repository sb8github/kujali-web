import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Kujali has transformed how we approach maternal care in our region. The real-time decision support has been a game-changer for our healthcare workers.",
    name: "Dr. Amara Johnson",
    title: "Lead Obstetrician, Regional Hospital",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    quote: "The AI-powered insights help us make critical decisions with confidence, even in resource-limited settings. It's like having an expert consultant available 24/7.",
    name: "Sarah Nakamura",
    title: "Senior Midwife, Community Health Center",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    quote: "Kujali's technology bridges the gap between rural clinics and expert knowledge. We've seen significant improvements in maternal and newborn outcomes.",
    name: "Dr. Michael Chen",
    title: "Health Systems Director, Ministry of Health",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
];

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-t from-kujali-dark to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          What People Are Saying
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="text-center p-8 w-full">
                  <blockquote className="text-2xl md:text-3xl italic text-gray-300 mb-8">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#f2ddc7]">
                        {testimonials[currentSlide].name}
                      </p>
                      <p className="text-gray-400">
                        {testimonials[currentSlide].title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-[#f2ddc7]"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
