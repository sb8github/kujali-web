import { motion } from "framer-motion";
import Counter from "@/components/shared/counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const stats = [
  {
    target: 30,
    label: "Potential to reduce maternal mortality",
    suffix: "%",
  },
  {
    target: 40,
    label: "Potential decrease in unnecessary interventions",
    suffix: "%",
  },
  {
    target: 2000000,
    label: "Poised to impact over 2 million births, preventing 500k deaths",
    suffix: "+",
  },
];

export default function ImpactSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-br from-kujali-dark via-gray-900 to-kujali-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Our Potential Impact
        </motion.h2>
        
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-[#2b5f56]/10 p-8 rounded-2xl backdrop-blur-sm card-hover"
            >
              <div className="text-5xl md:text-6xl font-black text-[#f2ddc7] mb-4">
                <Counter target={stat.target} isVisible={isVisible} suffix={stat.suffix} />
              </div>
              <p className="text-xl text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
