"use client";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import CourseCard from "@/components/CourseCard";
import FeatureSection from "@/components/FeatureSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Lamp */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center space-y-6 py-12 sm:py-20"
        >
          <h1 className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-transparent leading-tight px-4">
            Olympus AI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
            The <span className="text-yellow-400 font-semibold">intelligent learning ecosystem</span> that <br />
            <span className="text-yellow-400 font-semibold">anticipates needs</span> before they arise
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mt-4 px-4">
            Purpose-built LMS that learns from your teaching style, automates administrative burdens, and creates personalized learning journeys at scale
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 px-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full font-bold text-sm sm:text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105">
              Build Your Academy
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-500/50 text-yellow-400 rounded-full font-bold text-sm sm:text-lg hover:bg-yellow-500/10 hover:border-yellow-400 transition-all duration-300 backdrop-blur-sm">
              Explore Olympian Features
            </button>
          </div>
        </motion.div>
      </LampContainer>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Featured Courses */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent px-4">
            Curated Learning Pathways
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto text-center leading-relaxed px-4">
            Specialized programs designed by educational technologists to solve real-world instructional challenges and accelerate institutional growth
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            <CourseCard
              title="Adaptive Assessment Design"
              description="Master the art of creating intelligent evaluations that dynamically adjust difficulty based on learner performance and knowledge gaps"
              price="$429"
              students={892}
              rating={4.9}
            />
            <CourseCard
              title="Learning Analytics Mastery"
              description="Transform raw educational data into actionable insights with predictive modeling, engagement forecasting, and intervention strategies"
              price="$479"
              students={1256}
              rating={4.8}
            />
            <CourseCard
              title="Automated Content Curation"
              description="Build AI-powered systems that automatically source, evaluate, and organize learning materials based on curriculum objectives and learner profiles"
              price="$529"
              students={643}
              rating={4.9}
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent px-4">
              Command Your Educational Empire
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed px-4">
              Monitor enrollment trends, predict learner outcomes, automate grading workflows, and optimize content delivery—all from your intelligent command center
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Instructor Dashboard</h3>
                  <p className="text-yellow-100">Welcome back, Sarah Johnson!</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Students", value: "4,282", change: "+12%", color: "text-blue-600" },
                  { label: "Revenue", value: "$426K", change: "+8%", color: "text-green-600" },
                  { label: "Courses", value: "12", change: "+2", color: "text-yellow-600" },
                  { label: "Rating", value: "4.8", change: "+0.2", color: "text-purple-600" },
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Charts Area */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Student Enrollment</h4>
                  <div className="h-32 flex items-end justify-between gap-2">
                    {[65, 80, 45, 90, 70, 85, 95].map((height, index) => (
                      <div key={index} className="flex-1 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <span key={index}>{day}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Course Performance</h4>
                  <div className="space-y-3">
                    {[
                      { name: "AI Fundamentals", progress: 78, color: "bg-blue-500" },
                      { name: "Web Development", progress: 65, color: "bg-green-500" },
                      { name: "Data Science", progress: 92, color: "bg-purple-500" },
                    ].map((course, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{course.name}</span>
                          <span className="text-gray-600">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`${course.color} h-2 rounded-full`} style={{ width: `${course.progress}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  {[
                    { icon: "👤", text: "New student enrolled in AI Fundamentals", time: "2 mins ago" },
                    { icon: "✅", text: "5 students completed Web Development module", time: "1 hour ago" },
                    { icon: "⭐", text: "New 5-star review for Data Science course", time: "3 hours ago" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <span className="text-lg">{activity.icon}</span>
                      <span className="text-gray-700 flex-1">{activity.text}</span>
                      <span className="text-gray-500 text-xs">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105">
              Command Your Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
