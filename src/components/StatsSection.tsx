"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { number: "250,000+", label: "Global Learners", subtitle: "Across 145 countries" },
  { number: "5,000+", label: "Expert Instructors", subtitle: "From Fortune 500 companies" },
  { number: "1,200+", label: "Premium Courses", subtitle: "Across 25 disciplines" },
  { number: "99.2%", label: "Success Rate", subtitle: "Career advancement" }
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-500 via-yellow-600 to-amber-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Millions Worldwide
          </h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Join the global community of learners and educators transforming their futures with Olympus AI
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl text-yellow-100 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-yellow-200/80">
                {stat.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
