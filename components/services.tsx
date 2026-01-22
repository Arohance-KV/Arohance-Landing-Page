"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Clapperboard, LineChart, Video, Users, Lightbulb, Sparkles, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Clapperboard,
      title: "Strategic Marketing Solutions",
      description: "Comprehensive marketing strategies across digital and offline channels, leveraging data-driven insights to amplify brand visibility and engagement.",
      color: "from-white/20 to-white/5",
    },
    {
      icon: LineChart,
      title: "E-Commerce Optimization",
      description: "End-to-end e-commerce solutions including website development, conversion optimization, and targeted marketing to transform online traffic into loyal customers.",
      color: "from-white/20 to-white/5",
    },
    {
      icon: Video,
      title: "Integrated Technology Consulting",
      description: "Custom tech solutions that align with your business objectives, including AI integration, marketing technology stack development, and digital transformation strategies.",
      color: "from-white/20 to-white/5",
    },
    {
      icon: Users,
      title: "AI-Powered Digital Marketing",
      description: "Advanced AI automation and digital marketing services that personalize customer experiences and drive measurable growth through intelligent technology.",
      color: "from-white/20 to-white/5",
    },
    {
      icon: Lightbulb,
      title: "Brand Identity Development",
      description: "Comprehensive brand positioning, visual identity creation, and storytelling strategies that differentiate your business in competitive markets, crafting a unique and compelling brand narrative.",
      color: "from-white/20 to-white/5",
    },
  ];

  return (
    <section id="services" className="relative py-24 px-4 bg-gradient-to-b from-black to-zinc-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px]"
          animate={{
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px]"
          animate={{
            y: [0, -100, 0],
            scale: [1.3, 1, 1.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-gray-300">Our Services</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Solutions That Drive Growth
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of solutions designed to transform your business 
            through innovation and strategic excellence
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative h-full"
            >
              {/* Card Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-br from-white/30 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
              />

              {/* Card Container */}
              <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl backdrop-blur-sm hover:border-white/20 transition-all duration-300 flex flex-col">
                {/* Icon Container - Simple Scale Up on Hover */}
                <motion.div
                  className="relative inline-block mb-6"
                  animate={
                    hoveredIndex === index
                      ? { scale: 1.1 }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-white/30 rounded-2xl blur-2xl opacity-50" />
                  
                  {/* Icon Background */}
                  <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-white/15 to-white/5 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
                    animate={hoveredIndex === index ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="relative mb-6">
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "75%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                    <motion.div
                      className="absolute -top-1 bg-white rounded-full w-3 h-3 shadow-lg shadow-white/50"
                      initial={{ left: 0 }}
                      animate={inView ? { left: "75%" } : { left: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    />
                  </div>

                  {/* Learn More Link 
                  <motion.div
                    className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>*/}
                </div>

                {/* Decorative Corner Lines */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl opacity-20">
                  <motion.div
                    className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-white to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-white to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={hoveredIndex === index ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Card Number */}
                <div className="absolute bottom-6 right-6 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
