"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Brain, Target, Users, Sparkles, Zap, TrendingUp } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 11, label: "Team Members", suffix: "+", icon: Users },
    { value: 94, label: "Client Satisfaction", suffix: "%", icon: TrendingUp },
    { value: 50, label: "Projects Delivered", suffix: "+", icon: Sparkles },
  ];

  const features = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Cutting-edge technological advancement and creative problem-solving approach that drives transformation",
      gradient: "from-white/10 to-white/5",
    },
    {
      icon: Target,
      title: "Integration",
      description: "Seamless blend of marketing strategies and technology solutions for maximum impact",
      gradient: "from-white/10 to-white/5",
    },
    {
      icon: Zap,
      title: "Acceleration",
      description: "Rapid growth and transformative business potential through data-driven insights",
      gradient: "from-white/10 to-white/5",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern */}
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
              <span className="text-sm font-medium text-gray-300">About Us</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Transforming Vision Into Reality
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Pioneering the Future of{" "}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Tech-Powered Marketing
              </span>
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Arohance is a dynamic tech and marketing powerhouse based in Bangalore, 
                dedicated to transforming businesses through innovative solutions.
              </p>
              <p>
                We blend cutting-edge technology with strategic marketing to create 
                unparalleled growth opportunities for our clients. Our approach goes 
                beyond traditional boundaries, leveraging data-driven insights and 
                AI-powered automation to deliver measurable results.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <stat.icon className="w-6 h-6 mb-3 text-white/70" />
                    <div className="text-3xl md:text-4xl font-bold mb-1">
                      {inView && (
                        <CountUp 
                          end={stat.value} 
                          suffix={stat.suffix} 
                          duration={2.5}
                          useEasing={true}
                        />
                      )}
                    </div>
                    <div className="text-xs text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: 50 }}
            animate={cardInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                  {/* Icon Container */}
                  <motion.div
                    className="relative inline-block mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
                    <div className="relative w-16 h-16 flex items-center justify-center bg-white/10 rounded-2xl border border-white/20">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Line */}
                  <motion.div
                    className="mt-6 h-0.5 bg-gradient-to-r from-white/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </div>
    </section>
  );
}
