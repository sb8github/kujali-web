import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "CEO & Co-Founder",
    description: "Former WHO Global Health Director with 15+ years in maternal health. Led initiatives across 30+ countries improving care for underserved populations.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Dr. James Rodriguez",
    role: "CTO & Co-Founder",
    description: "AI research scientist from Stanford with expertise in healthcare applications. Previously led machine learning teams at Google Health and Microsoft Research.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Chief Medical Officer",
    description: "Board-certified obstetrician with 20+ years of experience in low-resource settings. Former medical director at Doctors Without Borders, specializing in emergency obstetric care.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
];

const advisors = [
  {
    name: "Prof. Michael Thompson",
    role: "Global Health Policy Advisor",
    description: "Harvard School of Public Health, former WHO Assistant Director-General",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "David Kim",
    role: "Technology Advisor",
    description: "Former VP of Engineering at Apple Health, AI/ML expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "Lisa Chen",
    role: "Strategic Advisor",
    description: "Partner at Andreessen Horowitz, healthcare investment specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "Dr. Patricia Williams",
    role: "Clinical Advisor",
    description: "Johns Hopkins Bloomberg School of Public Health, maternal health researcher",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "Roberto Santos",
    role: "Impact Advisor",
    description: "Former UNICEF Regional Director, social impact measurement expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Innovation Advisor",
    description: "MIT Innovation Lab, digital health transformation specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
  },
];

export default function OurTeam() {
  return (
    <div className="pt-32 pb-20 kujali-gradient">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-center mb-16 text-white"
        >
          Our Team
        </motion.h1>
        
        {/* Leadership Team */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-center mb-12 text-[#f2ddc7]"
          >
            Leadership Team
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-black/30 backdrop-blur-custom rounded-2xl p-8 text-center card-hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#f2ddc7]"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#f2ddc7] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors & Mentors */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-[#f2ddc7]"
          >
            Advisors & Mentors
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-[#2b5f56]/20 backdrop-blur-custom rounded-xl p-6 text-center card-hover"
              >
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#f2ddc7]"
                />
                <h4 className="text-lg font-bold text-white">{advisor.name}</h4>
                <p className="text-[#f2ddc7] text-sm mb-2">{advisor.role}</p>
                <p className="text-gray-300 text-sm">{advisor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-[#f2ddc7] text-[#2b5f56] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all cursor-pointer"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
