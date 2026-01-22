"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Linkedin, ArrowUp, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = () => {
    // Add subscription logic
    console.log("Subscribed:", email);
  };

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
    ],
    contact: [
      { icon: Mail, text: "info@arohance.com", href: "mailto:info@arohance.com" },
      { icon: Phone, text: "+91 94276 73035", href: "tel:+919427673035" },
      { icon: Phone, text: "+91 97273 61979", href: "tel:+919727361979" },
    ],
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden" id="footer">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Top Section with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-16 border-b border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Let's Create Something Amazing
              </motion.h2>
              <p className="text-gray-400 text-lg">
                Stay updated with our latest insights and innovations
              </p>
            </div>

            {/* Newsletter Section */}
            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 transition-all"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleSubscribe}
                    className="h-14 px-8 bg-white text-black hover:bg-gray-200 transition-all"
                  >
                    Subscribe
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h3
              className="text-3xl font-bold mb-6 relative inline-block"
              whileHover={{ x: 5 }}
            >
              Arohance
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-white"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pioneering the future of marketing with innovative tech-powered solutions
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/arohance-india/" },
                { Icon: Instagram, href: "https://www.instagram.com/arohance/" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors group"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 relative z-10" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  onHoverStart={() => setIsHovered(link.name)}
                  onHoverEnd={() => setIsHovered(null)}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <motion.span
                      animate={{ x: isHovered === link.name ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <span className="w-0 h-px bg-white mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white" />
            </h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-start group"
                  >
                    <item.icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400 flex items-start group"
              >
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">
                  Jayanagar 9th Block, Bangalore, Karnataka, India, 560069
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Business Hours
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white" />
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between items-center pb-2 border-b border-white/5">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-white/5">
                <span>Saturday</span>
                <span className="text-white font-medium">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="text-gray-600">Closed</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Arohance. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 group overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-300 to-white"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
