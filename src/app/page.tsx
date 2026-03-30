"use client";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import CourseCard from "@/components/CourseCard";
import FeatureSection from "@/components/FeatureSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

// ── Inline Dashboard Chart ────────────────────────────────────────────────────
const enrollmentData = [
  { day: "Mon", value: 65, students: 182 },
  { day: "Tue", value: 80, students: 224 },
  { day: "Wed", value: 45, students: 126 },
  { day: "Thu", value: 90, students: 252 },
  { day: "Fri", value: 70, students: 196 },
  { day: "Sat", value: 85, students: 238 },
  { day: "Sun", value: 95, students: 266 },
];

const revenueData = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 58 },
  { month: "Mar", value: 51 },
  { month: "Apr", value: 73 },
  { month: "May", value: 65 },
  { month: "Jun", value: 89 },
  { month: "Jul", value: 82 },
  { month: "Aug", value: 94 },
];

function EnrollmentChart() {
  const max = Math.max(...enrollmentData.map((d) => d.value));

  // Build SVG polyline points (area chart)
  const W = 320;
  const H = 100;
  const pad = 16;
  const points = enrollmentData.map((d, i) => {
    const x = pad + (i / (enrollmentData.length - 1)) * (W - pad * 2);
    const y = H - pad - ((d.value / max) * (H - pad * 2));
    return { x, y, ...d };
  });
  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPath =
    `M${points[0].x},${H - pad} ` +
    points.map((p) => `L${p.x},${p.y}`).join(" ") +
    ` L${points[points.length - 1].x},${H - pad} Z`;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-bold text-gray-800 text-sm sm:text-base">Student Enrollment</h4>
          <p className="text-xs text-gray-500">This week · 1,484 new students</p>
        </div>
        <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">↑ 18.4%</span>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        style={{ height: 100 }}
        aria-label="Student enrollment chart"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EAB308" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#EAB308" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        {/* grid lines */}
        {[0.25, 0.5, 0.75, 1].map((t) => {
          const y = pad + (1 - t) * (H - pad * 2);
          return (
            <line
              key={t}
              x1={pad}
              y1={y}
              x2={W - pad}
              y2={y}
              stroke="#E5E7EB"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          );
        })}
        <path d={areaPath} fill="url(#areaGrad)" />
        <polyline
          points={polyline}
          fill="none"
          stroke="#EAB308"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* dots */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="#EAB308" stroke="white" strokeWidth="2" />
        ))}
      </svg>
      <div className="flex justify-between mt-1">
        {enrollmentData.map((d) => (
          <span key={d.day} className="text-[10px] sm:text-xs text-gray-400 flex-1 text-center">
            {d.day}
          </span>
        ))}
      </div>
    </div>
  );
}

function RevenueChart() {
  const max = Math.max(...revenueData.map((d) => d.value));

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-bold text-gray-800 text-sm sm:text-base">Monthly Revenue</h4>
          <p className="text-xs text-gray-500">Jan – Aug · $426K total</p>
        </div>
        <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-1 rounded-full">↑ 8%</span>
      </div>
      <div className="flex items-end gap-1 sm:gap-2 h-24">
        {revenueData.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md transition-all duration-700"
              style={{
                height: `${(d.value / max) * 80}px`,
                background: `linear-gradient(to top, #ca8a04, #facc15)`,
                opacity: 0.7 + (d.value / max) * 0.3,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-1">
        {revenueData.map((d) => (
          <span key={d.month} className="text-[10px] sm:text-xs text-gray-400 flex-1 text-center">
            {d.month}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ── Hero ── */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-center space-y-6 py-12 sm:py-20"
        >
          <h1 className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight text-transparent leading-tight px-4">
            Olympus AI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
            The{" "}
            <span className="text-yellow-400 font-semibold">intelligent learning ecosystem</span>{" "}
            that{" "}
            <span className="text-yellow-400 font-semibold">anticipates needs</span> before they
            arise
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mt-4 px-4">
            Purpose-built LMS that learns from your teaching style, automates administrative
            burdens, and creates personalized learning journeys at scale
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 px-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full font-bold text-sm sm:text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105 active:scale-95">
              Build Your Academy
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-500/50 text-yellow-400 rounded-full font-bold text-sm sm:text-lg hover:bg-yellow-500/10 hover:border-yellow-400 transition-all duration-300 backdrop-blur-sm active:scale-95">
              Explore Olympian Features
            </button>
          </div>
        </motion.div>
      </LampContainer>

      {/* ── Stats ── */}
      <StatsSection />

      {/* ── Features ── */}
      <FeatureSection />

      {/* ── Courses ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Curated Learning Pathways
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 sm:mb-16 max-w-3xl mx-auto text-center leading-relaxed">
            Specialized programs designed by educational technologists to solve real-world
            instructional challenges and accelerate institutional growth
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

      {/* ── Dashboard Preview ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Command Your Educational Empire
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Monitor enrollment trends, predict learner outcomes, automate grading workflows, and
              optimize content delivery—all from your intelligent command center
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 sm:px-6 py-4 sm:py-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">Instructor Dashboard</h3>
                  <p className="text-yellow-100 text-sm">Welcome back, Sarah Johnson · Monday, Mar 30</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">
                    Live
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-white rounded-full opacity-90" />
                    <div className="w-2.5 h-2.5 bg-white rounded-full opacity-60" />
                    <div className="w-2.5 h-2.5 bg-white rounded-full opacity-30" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">

              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  {
                    label: "Total Students",
                    value: "4,282",
                    change: "+12%",
                    sub: "vs last month",
                    icon: "👥",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    label: "Revenue",
                    value: "$426K",
                    change: "+8%",
                    sub: "vs last month",
                    icon: "💰",
                    color: "text-green-600",
                    bg: "bg-green-50",
                  },
                  {
                    label: "Active Courses",
                    value: "12",
                    change: "+2 new",
                    sub: "this quarter",
                    icon: "📚",
                    color: "text-yellow-600",
                    bg: "bg-yellow-50",
                  },
                  {
                    label: "Avg. Rating",
                    value: "4.8 ★",
                    change: "+0.2",
                    sub: "from reviews",
                    icon: "⭐",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs sm:text-sm font-medium text-gray-500`}>{stat.label}</span>
                      <span className={`text-base sm:text-xl p-1.5 rounded-lg ${stat.bg}`}>{stat.icon}</span>
                    </div>
                    <div className={`text-xl sm:text-2xl font-black ${stat.color}`}>{stat.value}</div>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] sm:text-xs text-green-600 font-bold">{stat.change}</span>
                      <span className="text-[10px] sm:text-xs text-gray-400">{stat.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                {/* Enrollment Line Chart */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
                  <EnrollmentChart />
                </div>

                {/* Revenue Bar Chart */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
                  <RevenueChart />
                </div>
              </div>

              {/* Bottom Row: Course Performance + Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">

                {/* Course Performance */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Course Performance</h4>
                    <span className="text-xs text-gray-400">Completion rate</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "AI Fundamentals", progress: 78, color: "from-blue-400 to-blue-600", students: 1243 },
                      { name: "Web Development", progress: 65, color: "from-green-400 to-green-600", students: 987 },
                      { name: "Data Science", progress: 92, color: "from-purple-400 to-purple-600", students: 756 },
                      { name: "UX Design", progress: 54, color: "from-pink-400 to-pink-600", students: 432 },
                    ].map((course, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                          <span className="text-gray-700 font-medium">{course.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-xs">{course.students} students</span>
                            <span className="font-bold text-gray-700">{course.progress}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 sm:h-2.5 overflow-hidden">
                          <div
                            className={`bg-gradient-to-r ${course.color} h-full rounded-full transition-all duration-1000`}
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Recent Activity</h4>
                    <button className="text-xs text-yellow-600 font-semibold hover:text-yellow-700">
                      View all →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        icon: "👤",
                        text: "New student enrolled in AI Fundamentals",
                        time: "2 min ago",
                        dot: "bg-blue-400",
                      },
                      {
                        icon: "✅",
                        text: "5 students completed Web Development module",
                        time: "1 hr ago",
                        dot: "bg-green-400",
                      },
                      {
                        icon: "⭐",
                        text: "New 5-star review for Data Science course",
                        time: "3 hr ago",
                        dot: "bg-yellow-400",
                      },
                      {
                        icon: "📝",
                        text: "Assignment batch graded — UX Design cohort",
                        time: "5 hr ago",
                        dot: "bg-purple-400",
                      },
                      {
                        icon: "🔔",
                        text: "Reminder: Live session in 30 minutes",
                        time: "Just now",
                        dot: "bg-red-400",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="relative flex-shrink-0 mt-0.5">
                          <div className={`w-2 h-2 rounded-full ${item.dot} mt-1`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-gray-700 leading-snug truncate">
                            {item.icon} {item.text}
                          </p>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-400 flex-shrink-0 whitespace-nowrap">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full font-bold text-base sm:text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105 active:scale-95">
              Command Your Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </div>
  );
}