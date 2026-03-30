"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "courses", label: "My Courses", icon: "📚" },
    { id: "students", label: "Students", icon: "👥" },
    { id: "analytics", label: "Analytics", icon: "📈" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  const courseData = [
    { name: "AI Fundamentals", students: 1234, revenue: "$122,000", progress: 78 },
    { name: "Web Development", students: 892, revenue: "$89,000", progress: 65 },
    { name: "Data Science", students: 2156, revenue: "$215,000", progress: 92 },
  ];

  const recentActivity = [
    { type: "enrollment", message: "New student enrolled in AI Fundamentals", time: "2 mins ago" },
    { type: "completion", message: "5 students completed Web Development module", time: "1 hour ago" },
    { type: "review", message: "New 5-star review for Data Science course", time: "3 hours ago" },
    { type: "revenue", message: "Monthly revenue target achieved", time: "5 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-yellow-600">Olympus AI</h1>
          <p className="text-sm text-gray-600">Dashboard</p>
        </div>
        
        <nav className="p-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                selectedTab === item.id
                  ? "bg-yellow-50 text-yellow-600 border-l-4 border-yellow-500"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Instructor!</h2>
            <p className="text-gray-600">Here's what's happening with your courses today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Students", value: "4,282", change: "+12%", positive: true },
              { label: "Total Revenue", value: "$426,000", change: "+8%", positive: true },
              { label: "Active Courses", value: "12", change: "+2", positive: true },
              { label: "Avg. Rating", value: "4.8", change: "+0.2", positive: true },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                  <span className={`text-sm font-semibold ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Performance */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Course Performance</h3>
              <div className="space-y-4">
                {courseData.map((course, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{course.name}</h4>
                      <span className="text-sm text-gray-600">{course.students} students</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-yellow-600 font-semibold">{course.revenue}</span>
                      <span className="text-sm text-gray-600">{course.progress}% complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors">
                Create New Course
              </button>
              <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30">
                View Analytics
              </button>
              <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30">
                Manage Students
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
