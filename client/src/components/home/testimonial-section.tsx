import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hsImage from "@/assets/hs.jpg";
import blankImage from "@/assets/Icon_Tan_on_Green.svg";

const testimonials = [
  {
    quote: "“Kujali represents a paradigm-shift in labor care. Decision-making is so complicated that frontline workers cannot make good decisions because there are too many variables changing all the time.”",
    name: "Dr. Harshadkumar Sanghvi",
    title: "Global Leader of Maternal Health, Emeritus CMO at Jhpiego",
    image: hsImage,
  },
  {
    quote: "“[Decision support] helps us very much and empowers us to know what to do to the mother. I feel good hearing reminders. They jolt me into making decisions, and they help me a lot in my decisions.”",
    name: "Skilled Birth Attendant",
    title: "Tanzania",
    image: blankImage,
  },
  {
    quote: "This app would be very helpful for us. It would be a great tool for us to use in the hospital.",
    name: "OBGYN",
    title: "Nepal",
    image: blankImage,
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
          <div className="relative min-h-[300px] md:min-h-[320px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="text-center p-4 md:p-8 w-full">
                  <blockquote className="text-lg md:text-2xl lg:text-3xl italic text-gray-300 mb-6 md:mb-8 leading-relaxed">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 md:mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#f2ddc7] text-sm md:text-base">
                        {testimonials[currentSlide].name}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {testimonials[currentSlide].title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
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
