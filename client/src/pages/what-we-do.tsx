import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Brain, 
  Clock, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Shield,
  Stethoscope,
  GraduationCap,
  Users,
  Home
} from "lucide-react";

const keyFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Diagnostics",
    description: "Advanced machine learning algorithms analyze symptoms and provide instant diagnostic support for complex maternal conditions.",
  },
  {
    icon: Clock,
    title: "Real-Time Guidance",
    description: "24/7 instant access to expert medical knowledge and step-by-step treatment protocols for emergency situations.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for smartphones and tablets, ensuring accessibility even in areas with limited internet connectivity.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Available in multiple local languages to ensure healthcare workers can provide care in their native tongue.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Comprehensive reporting and analytics to track outcomes and improve care delivery at scale.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Enterprise-grade security and privacy protection ensuring patient data remains confidential and secure.",
  },
];

const services = [
  {
    icon: Stethoscope,
    title: "Clinical Decision Support",
    description: "AI-driven recommendations for diagnosis, treatment, and care management tailored to local resources and protocols.",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Comprehensive training programs and continuous education modules to enhance healthcare worker capabilities.",
  },
  {
    icon: Users,
    title: "Healthcare Systems Integration",
    description: "Seamless integration with existing health information systems and workflows for maximum impact.",
  },
];

export default function WhatWeDo() {
  return (
    <div className="pt-32 pb-20 kujali-gradient">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-center mb-16 text-white"
        >
          What We Do
        </motion.h1>
        
        {/* Key Features */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-center mb-12 text-[#f2ddc7]"
          >
            Key Features
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-black/30 backdrop-blur-custom rounded-2xl p-8 card-hover"
                >
                  <div className="w-16 h-16 bg-[#f2ddc7] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-[#2b5f56] text-2xl" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Our Services */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-[#f2ddc7]"
          >
            Our Services
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#2b5f56] to-[#1a403a] rounded-2xl p-8 card-hover"
                >
                  <div className="w-20 h-20 bg-[#f2ddc7] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="text-[#2b5f56] text-3xl" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-100 text-center">{service.description}</p>
                </motion.div>
              );
            })}
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
