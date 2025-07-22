import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";

const messages = [
  "Real-time support for safer deliveries",
  "Support for every birth, everywhere",
  "Bridging gaps in maternal care",
];

export default function HeroSection() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const scrollY = useScroll();
  const isExpanded = scrollY > 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative kujali-gradient">
      <div className="text-center z-10 px-4 w-full">
        <motion.h1
          className={`hero-title font-black text-white mb-8 mx-auto ${
            isExpanded ? "expanded" : ""
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          KUJALI
        </motion.h1>
        
        <div className="h-20 flex items-center justify-center">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-3xl text-[#f2ddc7] font-medium max-w-5xl px-4"
          >
            {messages[currentMessage]}
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-[#f2ddc7] text-2xl" />
      </motion.div>
    </section>
  );
}
