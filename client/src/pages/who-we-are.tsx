import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home } from "lucide-react";
import Typewriter from "@/components/shared/typewriter";

export default function WhoWeAre() {
  return (
    <div className="pt-32 pb-20 kujali-gradient min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-center mb-16 text-white"
        >
          Who We Are
        </motion.h1>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/30 backdrop-blur-custom rounded-2xl p-8 md:p-12 mb-16"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-8">
              Kujali is a groundbreaking AI-powered decision support platform specifically designed for maternal and newborn care in low and middle-income countries. Our team of healthcare professionals, AI specialists, and global health experts work tirelessly to bridge the gap between cutting-edge medical knowledge and frontline healthcare delivery.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
              We believe that every mother and baby deserves access to life-saving medical expertise, regardless of their location or economic circumstances. Through innovative technology and strategic partnerships, we're working to make this vision a reality.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#2b5f56]/20 backdrop-blur-custom rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-[#f2ddc7] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-200">
                <Typewriter 
                  text="To democratize access to expert maternal care knowledge through AI-powered decision support, ensuring safer deliveries and healthier outcomes for mothers and babies worldwide."
                  delay={1000}
                  speed={30}
                />
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#2b5f56]/20 backdrop-blur-custom rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-[#f2ddc7] mb-6">Our Vision</h2>
              <p className="text-lg text-gray-200">
                <Typewriter 
                  text="A world where every healthcare worker has instant access to expert guidance, where technology empowers compassionate care, and where no mother or baby is lost due to lack of knowledge or resources."
                  delay={1000}
                  speed={30}
                />
              </p>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
