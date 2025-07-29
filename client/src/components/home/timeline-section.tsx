import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const milestones = [
  {
    year: "Q4 2024",
    title: "Project Inception",
    description: "Founded with the mission to revolutionize maternal care in low and middle-income countries through AI technology.",
  },
  
  {
    year: "Q1 2025",
    title: "AI Development",
    description: "Developed core AI algorithms with leading medical experts and clinicians from around the world.",
  },
  {
    year: "Q1 2025",
    title: "CBID Healthcare Design Award",
    description: "Kujali awarded 3rd place in Digital Health Track among 440 proposals from 44 countries",
  },
  {
    year: "Q2 2025",
    title: "Pava Center Summer Incubator",
    description: "Kujali selected for Pava Center Summer Incubator, a 10-week program for early-stage startups",
  },
  {
  year: "Q2 2025",
  title: "Preliminary Validation ",
  description: "Started preliminary validation with data from 2000+ patients with maternal health experts",
  },

  {
    year: "Q3 2025",
    title: "Field Interviews",
    description: "Conducted field interviews with healthcare workers and patients in India.",
  },

  {
    year: "2026",
    title: "Future Goals",
    description: "Planning to reach 100 hospitals across 5 countries by end of 2026.",
  },
];

export default function TimelineSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-kujali-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Our Milestones
        </motion.h2>
        
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="timeline-item flex items-start"
              >
                <div className="w-4 h-4 bg-[#f2ddc7] rounded-full mr-8 flex-shrink-0 mt-2" />
                <div className="bg-[#2b5f56]/20 p-6 rounded-lg flex-1 card-hover">
                  <h3 className="text-xl font-semibold text-[#f2ddc7] mb-2">
                    {milestone.year} - {milestone.title}
                  </h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
