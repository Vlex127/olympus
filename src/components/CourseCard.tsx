"use client";
import { motion } from "motion/react";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  students: number;
  rating: number;
}

export default function CourseCard({ title, description, price, students, rating }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="h-48 sm:h-56 bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-transparent opacity-50"></div>
        <div className="w-16 sm:w-20 sm:w-24 h-16 sm:h-20 sm:h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg relative z-10">
          <svg className="w-6 sm:w-8 sm:w-12 h-6 sm:h-8 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-3">
          <div className="px-2 py-1 sm:px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full uppercase tracking-wide">
            Premium
          </div>
          <div className="px-2 py-1 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide">
            Bestseller
          </div>
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3 text-sm sm:text-base">{description}</p>
        
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text">{price}</span>
            <span className="text-xs sm:text-sm text-gray-500 line-through">$599</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-3 sm:w-4 h-3 sm:h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>{students.toLocaleString()} students</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>42 hours</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 sm:space-y-3">
          <button className="w-full py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105">
            Enroll Now - Save 50%
          </button>
          <button className="w-full py-2 sm:py-3 border-2 border-gray-200 text-gray-700 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors">
            Preview Course
          </button>
        </div>
      </div>
    </motion.div>
  );
}
