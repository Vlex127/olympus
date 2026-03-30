"use client";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Scale</span> Your Educational Impact?
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join institutions using Olympus AI to reduce administrative overhead by 70% while increasing student completion rates by 45%
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className="px-12 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full font-black text-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 transform hover:scale-105">
              Launch Your LMS Platform
            </button>
            <button className="px-12 py-5 border-2 border-yellow-500/50 text-yellow-400 rounded-full font-bold text-xl hover:bg-yellow-500/10 hover:border-yellow-400 transition-all duration-300 backdrop-blur-sm">
              Schedule Institutional Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center mt-20 text-gray-400">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-white">Zero Implementation Fees</span>
              <span className="text-sm">Free setup and data migration</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-white">30-Day Pilot Program</span>
              <span className="text-sm">Full platform access for testing</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-white">Institutional Pricing</span>
              <span className="text-sm">Custom plans for your scale</span>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Trusted by 1,200+ educational institutions worldwide to power their digital learning transformation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
