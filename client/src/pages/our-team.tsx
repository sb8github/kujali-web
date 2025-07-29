import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home } from "lucide-react";

// Import team member images
import sbImage from "@/assets/sb.jpg";
import srImage from "@/assets/sr.jpg";
import hsImage from "@/assets/hs.jpg";

// Import advisor images
import saImage from "@/assets/sa.jpg";
import hdImage from "@/assets/hd.jpg";
import ktImage from "@/assets/kt.jpg";
import dlImage from "@/assets/dl.jpg";
import dmImage from "@/assets/dm.jpg";
import paImage from "@/assets/pa.jpg";

const teamMembers = [
  {
    name: "Samhith Bhrugubanda",
    role: "Co-Founder",
    description: "B.S./M.S.E in Biomedical Engineering, Johns Hopkins University. Specializes in designing AI-integrated medical devices for low-resource settings. Brings hands-on experience in medical equipment repair and user-centered product design for LMICs.",
    image: sbImage,
  },
  {
    name: "Sidharth Raghavan",
    role: "Co-Founder",
    description: "B.S./M.S.E in Biomedical Engineering & Computer Science, Johns Hopkins University. Leads technical development, with expertise in deploying AI in clinical trials, including PedAccel's validation in the Johns Hopkins PICU. Secured $100k+ in grants and managed IRB approved, regulatory-compliant trials.",
    image: srImage,
  },
  {
    name: "Dr. Harshadkumar Sanghvi",
    role: "Clinical Advisor",
    description: "Former CMO at Jhpiego and inventor of the paper and digital ePartogram. Offers access to WHO-aligned protocols and clinical networks across Africa, with decades of expertise in maternal health innovation and LMIC care delivery.",
    image: hsImage,
  },
];

const advisors = [
  {
    name: "Dr. Soumyadipta Acharya",
    role: "Global Health Implementation Advisor",
    description: "Director of Center for Bioengineering and Design, Johns Hopkins University",
    image: saImage,
  },
  {
    name: "Dr. Hema Divakar",
    role: "Medical Advisor India",
    description: "CEO of ARTIST, Medical Director, OBGYN",
    image: hdImage,
  },
  {
    name: "Dr. Kusum Thapa",
    role: "Medical Advisor Nepal",
    description: "VP of South Asian Federation for OBGYN",
    image: ktImage,
  },
  {
    name: "Daniel Lee",
    role: "Business Strategy Advisor",
    description: "CEO of Tissue Regenix",
    image: dlImage,
  },
  {
    name: "Dr. Diwakar Mohan",
    role: "Digital Health Advisor",
    description: "Associate Director for the International Center for Maternal Newborn Health at the Johns Hopkins Bloomberg School of Public Health",
    image: dmImage,
  },
  {
    name: "Paul Davidson",
    role: "Innovation Advisor",
    description: "Associate Director at Pava Center for Entrepreneurship",
    image: paImage,
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
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>

        {/* Advisors & Mentors */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-[#f2ddc7]"
          >
            Advisors & Mentors
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
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
              </div>
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
