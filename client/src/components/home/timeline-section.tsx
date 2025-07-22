import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const milestones = [
  {
    year: "2020",
    title: "Project Inception",
    description: "Founded with the mission to revolutionize maternal care in low and middle-income countries through AI technology.",
  },
  {
    year: "2021",
    title: "AI Development",
    description: "Developed core AI algorithms with leading medical experts and data scientists from around the world.",
  },
  {
    year: "2022",
    title: "Pilot Programs",
    description: "Launched pilot programs in 5 countries, training over 200 healthcare workers on our platform.",
  },
  {
    year: "2023",
    title: "Scale Impact",
    description: "Expanded to 15 countries and supported over 10,000 births with improved outcomes.",
  },
  {
    year: "2024",
    title: "Recognition",
    description: "Received international recognition from WHO and won the Global Health Innovation Award.",
  },
  {
    year: "2025",
    title: "Future Goals",
    description: "Planning to reach 50 countries and support 1 million births annually by end of 2025.",
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
