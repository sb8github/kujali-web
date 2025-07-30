import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LogoKujali from "@/assets/Logo_transparent.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Our Team", href: "/our-team" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    return href !== "/" && location.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-custom border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <img
                  src={LogoKujali}
                  alt="Kujali Logo"
                  className="w-14 h-14 object-contain"
                  style={{ background: 'transparent' }}
                />
                <span className="text-xl font-bold text-gradient">KUJALI</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                      isActive(item.href)
                        ? "bg-[#f2ddc7]/20 text-[#f2ddc7]"
                        : "hover:bg-[#f2ddc7]/10 text-white"
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Social Links & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:samhith@kujali-ai.org"
                className="text-[#f2ddc7] hover:text-white transition-colors"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/samhithb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f2ddc7] hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-gradient-to-br from-[#2b5f56] to-[#1a403a] p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-6 mt-20">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href}>
                      <div
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-2xl font-medium py-3 px-4 rounded-lg transition-all ${
                          isActive(item.href)
                            ? "bg-[#f2ddc7]/20 text-[#f2ddc7]"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="pt-8 flex space-x-6"
                >
                  <a
                    href="mailto:samhith@kujali-ai.org"
                    className="text-[#f2ddc7] hover:text-white transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/samhithb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f2ddc7] hover:text-white transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
