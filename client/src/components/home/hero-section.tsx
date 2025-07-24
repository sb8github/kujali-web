import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import LogoKujali from "@/assets/Logo_Green_on_Tan-3.svg";

// Add Google Fonts import for Montserrat (or another modern font)
if (typeof document !== 'undefined') {
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
}

const messages = [
  "Real-time support for safer deliveries",
  "Support for every birth, everywhere",
  "Bridging gaps in maternal care",
];

export default function HeroSection() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(1);
  const { scrollY } = useViewportScroll();

  // Update section position/height on mount and resize
  useEffect(() => {
    function updateSectionMetrics() {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setSectionTop(window.scrollY + rect.top);
        setSectionHeight(rect.height);
      }
    }
    updateSectionMetrics();
    window.addEventListener('resize', updateSectionMetrics);
    return () => window.removeEventListener('resize', updateSectionMetrics);
  }, []);

  // Calculate scroll progress through the hero section (0 = top, 1 = bottom)
  const scrollProgress = useTransform(scrollY, [sectionTop, sectionTop + sectionHeight], [0, 1]);
  // Scale from 1 to 8 as you scroll through the section
  const scale = useTransform(scrollProgress, [0, 1], [1, 8]);
  // Fade out messages as you scroll
  const messageOpacity = useTransform(scrollProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);
  // Fade out title as it gets very large
  const titleOpacity = useTransform(scrollProgress, [0, 0.9, 1], [1, 1, 0]);

  // Poppins font import (if not already in index.html)
  useEffect(() => {
    if (typeof document !== 'undefined' && !document.getElementById('poppins-font')) {
      const fontLink = document.createElement('link');
      fontLink.id = 'poppins-font';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap';
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ background: '#2b5f56' }}>
      <motion.div
        className="hero-logo mb-8 mx-auto"
        style={{
          zIndex: 20,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'min(60vw, 600px)',
        }}
        animate={{}}
      >
        <motion.img
          src={LogoKujali}
          alt="Kujali Logo"
          style={{
            width: '100%',
            height: 'auto',
            scale,
            opacity: titleOpacity,
            display: 'block',
          }}
        />
      </motion.div>
      <motion.div
        className="h-20 flex items-center justify-center w-full"
        style={{ opacity: messageOpacity, justifyContent: 'center', alignItems: 'center', display: 'flex' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-3xl text-[#f2ddc7] font-medium max-w-5xl px-4 text-center"
          >
            {messages[currentMessage]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      
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
