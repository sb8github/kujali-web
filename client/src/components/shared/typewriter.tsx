import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
}

export default function Typewriter({ text, delay = 0, speed = 50 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        
        if (index >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <span className="relative">
      {displayedText}
      <motion.span
        animate={{ opacity: isComplete ? 0 : [1, 0, 1] }}
        transition={{ 
          duration: 1, 
          repeat: isComplete ? 0 : Infinity,
          ease: "easeInOut" 
        }}
        className="border-r-2 border-[#2b5f56] ml-1"
      />
    </span>
  );
}
