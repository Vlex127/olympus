"use client";

import { useState } from "react";
import { motion } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  icon: string;
  nextLesson: string;
  category: string;
}

interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  earned: boolean;
  date?: string;
}

interface Activity {
  id: string;
  action: string;
  course: string;
  time: string;
  icon: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const student = {
  name: "Vincent",
  avatar: "VA",
  streak: 7,
  totalHours: 42,
  certificates: 1,
  rank: "Rising Star",
};

const enrolledCourses: Course[] = [
  {
    id: "1",
    title: "Web Development",
    instructor: "Sofia Reyes",
    progress: 68,
    totalLessons: 48,
    completedLessons: 33,
    icon: "💻",
    nextLesson: "Building REST APIs with Node.js",
    category: "Development",
  },
  {
    id: "2",
    title: "Graphics Design",
    instructor: "Tunde Adeyemi",
    progress: 35,
    totalLessons: 30,
    completedLessons: 11,
    icon: "🎨",
    nextLesson: "Brand Identity — Color Systems",
    category: "Design",
  },
  {
    id: "3",
    title: "Data Analytics",
    instructor: "James Liu",
    progress: 12,
    totalLessons: 40,
    completedLessons: 5,
    icon: "📊",
    nextLesson: "Pandas DataFrames — Intro",
    category: "Data",
  },
];

const achievements: Achievement[] = [
  { id: "1", title: "First Step", desc: "Completed your first lesson", icon: "🎯", earned: true, date: "Jan 12" },
  { id: "2", title: "On a Roll", desc: "7-day learning streak", icon: "🔥", earned: true, date: "Jan 18" },
  { id: "3", title: "Certified", desc: "Earned your first certificate", icon: "🏆", earned: true, date: "Jan 20" },
  { id: "4", title: "Halfway There", desc: "50% on any course", icon: "⚡", earned: true, date: "Jan 22" },
  { id: "5", title: "Deep Diver", desc: "10 hours in one course", icon: "🌊", earned: false },
  { id: "6", title: "Completionist", desc: "Finish all enrolled courses", icon: "👑", earned: false },
];

const recentActivity: Activity[] = [
  { id: "1", action: "Completed lesson", course: "Web Development", time: "2h ago", icon: "✓" },
  { id: "2", action: "Started lesson", course: "Graphics Design", time: "Yesterday", icon: "▶" },
  { id: "3", action: "Earned achievement", course: "7-day streak", time: "Yesterday", icon: "🔥" },
  { id: "4", action: "Completed lesson", course: "Web Development", time: "2 days ago", icon: "✓" },
  { id: "5", action: "Enrolled in", course: "Data Analytics", time: "3 days ago", icon: "+" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const ProgressRing = ({ progress, size = 56 }: { progress: number; size?: number }) => {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e8e0d0" strokeWidth="4" />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke="#c07a1a" strokeWidth="4"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />
    </svg>
  );
};

const StatCard = ({ label, value, sub, icon }: { label: string; value: string | number; sub?: string; icon: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white border border-[#e8e0d0] rounded-2xl p-5 flex flex-col gap-1"
  >
    <span className="text-xl">{icon}</span>
    <p className="text-2xl font-bold text-[#1a1a18] font-serif mt-1">{value}</p>
    <p className="text-xs font-semibold text-[#c07a1a] uppercase tracking-widest">{label}</p>
    {sub && <p className="text-xs text-[#999]">{sub}</p>}
  </motion.div>
);

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "⊞" },
  { id: "courses", label: "My Courses", icon: "📚" },
  { id: "achievements", label: "Achievements", icon: "🏆" },
  { id: "certificates", label: "Certificates", icon: "📜" },
  { id: "community", label: "Community", icon: "🌍" },
  { id: "settings", label: "Settings", icon: "⚙" },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f2ec] font-sans flex">

      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-full w-60 bg-[#1a1a18] z-40 flex flex-col
        transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:flex
      `}>
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/10 flex items-center gap-2.5">
          <img src="/logo.svg" alt="Olympus" className="w-8 h-auto" />
          <span className="font-serif text-lg font-semibold text-[#faf8f4]">Olympus</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                activeNav === item.id
                  ? "bg-[#c07a1a] text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="text-base w-5 text-center">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="px-4 py-5 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#c07a1a] flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white font-serif">{student.avatar}</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{student.name}</p>
              <p className="text-xs text-[#c07a1a]">{student.rank}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <main className="flex-1 min-w-0 flex flex-col">

        {/* Top bar */}
        <header className="bg-white border-b border-[#e8e0d0] px-5 sm:px-8 py-4 flex items-center justify-between gap-4 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1 p-1"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="block w-5 h-0.5 bg-[#1a1a18]" />
              <span className="block w-5 h-0.5 bg-[#1a1a18]" />
              <span className="block w-5 h-0.5 bg-[#1a1a18]" />
            </button>
            <div>
              <h1 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a18] leading-tight">
                Good morning, {student.name} 👋
              </h1>
              <p className="text-xs text-[#888] hidden sm:block">You're on a {student.streak}-day streak — keep it up!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 bg-[#fdf0da] border border-[#e8c47a] px-3 py-1.5 rounded-full">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-bold text-[#c07a1a]">{student.streak} days</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#c07a1a] flex items-center justify-center">
              <span className="text-xs font-bold text-white font-serif">{student.avatar}</span>
            </div>
          </div>
        </header>

        {/* Page body */}
        <div className="flex-1 px-5 sm:px-8 py-7 overflow-auto">

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard label="Hours Learned" value={student.totalHours} sub="This month" icon="⏱" />
            <StatCard label="Courses Active" value={enrolledCourses.length} sub="In progress" icon="📚" />
            <StatCard label="Certificates" value={student.certificates} sub="Earned" icon="🏆" />
            <StatCard label="Day Streak" value={`${student.streak}🔥`} sub="Personal best: 12" icon="⚡" />
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Left — courses (2/3 width) */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Continue learning */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-lg font-bold text-[#1a1a18]">Continue learning</h2>
                  <a href="/courses" className="text-xs text-[#c07a1a] font-medium hover:underline">View all →</a>
                </div>
                <div className="flex flex-col gap-4">
                  {enrolledCourses.map((course, i) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-white border border-[#e8e0d0] rounded-2xl p-5 hover:border-[#c07a1a] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        {/* Progress ring + icon */}
                        <div className="relative flex-shrink-0">
                          <ProgressRing progress={course.progress} size={56} />
                          <span className="absolute inset-0 flex items-center justify-center text-lg">
                            {course.icon}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-semibold text-[#1a1a18] text-sm">{course.title}</p>
                              <p className="text-xs text-[#999] mt-0.5">{course.instructor}</p>
                            </div>
                            <span className="text-sm font-bold text-[#c07a1a] flex-shrink-0">{course.progress}%</span>
                          </div>

                          {/* Progress bar */}
                          <div className="mt-3 h-1.5 bg-[#f0ebe0] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${course.progress}%` }}
                              transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-[#c07a1a] rounded-full"
                            />
                          </div>

                          <div className="mt-2.5 flex items-center justify-between">
                            <p className="text-xs text-[#888]">
                              Next: <span className="text-[#1a1a18] font-medium">{course.nextLesson}</span>
                            </p>
                            <span className="text-xs text-[#aaa]">{course.completedLessons}/{course.totalLessons} lessons</span>
                          </div>
                        </div>
                      </div>

                      {/* Resume button on hover */}
                      <div className="mt-4 overflow-hidden max-h-0 group-hover:max-h-10 transition-all duration-300">
                        <a
                          href={`/courses/${course.id}`}
                          className="block w-full text-center text-xs font-semibold text-white bg-[#c07a1a] hover:bg-[#a8680f] py-2 rounded-full transition-colors"
                        >
                          Resume course →
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-lg font-bold text-[#1a1a18]">Achievements</h2>
                  <span className="text-xs text-[#888]">{achievements.filter(a => a.earned).length}/{achievements.length} earned</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {achievements.map((a, i) => (
                    <motion.div
                      key={a.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.06 }}
                      className={`border rounded-xl p-4 flex flex-col items-center text-center gap-1.5 ${
                        a.earned
                          ? "bg-[#fdf7ee] border-[#e8c47a]"
                          : "bg-white border-[#e8e0d0] opacity-50"
                      }`}
                    >
                      <span className="text-2xl">{a.icon}</span>
                      <p className="text-xs font-bold text-[#1a1a18]">{a.title}</p>
                      <p className="text-[10px] text-[#888] leading-tight">{a.desc}</p>
                      {a.earned && a.date && (
                        <span className="text-[10px] text-[#c07a1a] font-medium">{a.date}</span>
                      )}
                      {!a.earned && (
                        <span className="text-[10px] text-[#bbb]">Locked</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right sidebar (1/3 width) */}
            <div className="flex flex-col gap-6">

              {/* Weekly goal */}
              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#1a1a18] rounded-2xl p-6 text-white"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-1">Weekly Goal</p>
                <p className="font-serif text-2xl font-bold mb-1">5 <span className="text-base font-normal text-white/60">/ 7 hrs</span></p>
                <p className="text-xs text-white/50 mb-4">2 hours left this week</p>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "71%" }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="h-full bg-[#c07a1a] rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${i < 5 ? "bg-[#c07a1a]" : "bg-white/20"}`} />
                      <span className="text-[9px] text-white/40">{day}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Recommended courses */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#1a1a18] mb-4">Recommended</h2>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: "🔐", title: "Cybersecurity", desc: "Ethical hacking & pen testing", tag: "Popular" },
                    { icon: "💹", title: "Forex Trading", desc: "Live strategy from traders", tag: "New" },
                  ].map((rec, i) => (
                    <div key={i} className="bg-white border border-[#e8e0d0] rounded-xl p-4 flex items-center gap-3 hover:border-[#c07a1a] transition-colors cursor-pointer group">
                      <span className="text-2xl">{rec.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1a1a18]">{rec.title}</p>
                        <p className="text-xs text-[#888] truncate">{rec.desc}</p>
                      </div>
                      <span className="text-[10px] font-bold text-[#c07a1a] bg-[#fdf0da] px-2 py-0.5 rounded-full flex-shrink-0">{rec.tag}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recent activity */}
              <section>
                <h2 className="font-serif text-lg font-bold text-[#1a1a18] mb-4">Recent activity</h2>
                <div className="bg-white border border-[#e8e0d0] rounded-2xl divide-y divide-[#f0ebe0]">
                  {recentActivity.map((act) => (
                    <div key={act.id} className="flex items-start gap-3 px-4 py-3">
                      <div className="w-6 h-6 rounded-full bg-[#fdf0da] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">{act.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-[#555]">
                          <span className="font-medium text-[#1a1a18]">{act.action}</span>{" "}
                          <span className="text-[#c07a1a]">{act.course}</span>
                        </p>
                        <p className="text-[10px] text-[#aaa] mt-0.5">{act.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}