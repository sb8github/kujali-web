import HeroSection from "@/components/home/hero-section";
import ImpactSection from "@/components/home/impact-section";
import TestimonialSection from "@/components/home/testimonial-section";
import TimelineSection from "@/components/home/timeline-section";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Home() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <HeroSection />
      <ImpactSection />
      <TestimonialSection />
      <TimelineSection />
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-[#2b5f56] text-[#f2ddc7] p-3 rounded-full shadow-lg hover:bg-[#1a403a] transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp size={28} />
        </button>
      )}
    </div>
  );
}
