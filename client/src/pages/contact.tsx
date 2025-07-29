import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-20 kujali-gradient min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-center mb-16 text-white"
        >
          Contact Us
        </motion.h1>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/30 backdrop-blur-custom rounded-2xl p-8 md:p-12"
          >
            <p className="text-xl text-gray-200 text-center mb-8">
              Ready to transform maternal care in your region? Get in touch with our team to learn more about Kujali's AI-powered solutions.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#f2ddc7] mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-[#2b5f56]/30 text-white placeholder:text-gray-400 focus:border-[#f2ddc7]"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#f2ddc7] mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-[#2b5f56]/30 text-white placeholder:text-gray-400 focus:border-[#f2ddc7]"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#f2ddc7] mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-[#2b5f56]/30 text-white placeholder:text-gray-400 focus:border-[#f2ddc7] resize-none"
                  placeholder="Tell us about your organization and how we can help improve maternal care in your region"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-[#f2ddc7] text-[#2b5f56] hover:bg-white hover:scale-105 transition-all transform py-4 text-lg font-semibold"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="text-center mt-8">
              <p className="text-gray-300 mb-4">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto samhith@kujali-ai.org"
                  className="flex items-center text-[#f2ddc7] hover:text-white transition-colors"
                >
                  <Mail className="mr-2" size={20} />
                  samhith@kujali-ai.org
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://www.linkedin.com/in/samhithb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#f2ddc7] hover:text-white transition-colors"
                >
                  <FaLinkedin className="mr-2" size={20} />
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
    </div>
  );
}
