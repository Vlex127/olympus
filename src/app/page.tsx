"use client";

import { useState, useEffect, useRef } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { FeaturesSection } from "@/components/features-section";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Course {
  icon: string;
  title: string;
  description: string;
  price: string;
  url: string;
  syllabus: string[];
  duration: string;
  level: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const courses: Course[] = [
  {
    icon: "/forex-icon.jpg",
    title: "Forex Trading",
    description: "Currency markets, risk management, and live strategy from active traders.",
    price: "Premium",
    url: "/courses/forex-trading",
    syllabus: ["Market structure & sessions", "Technical analysis fundamentals", "Risk management & position sizing", "Live trading strategy walkthroughs", "Psychology & discipline"],
    duration: "8 weeks",
    level: "Beginner → Advanced",
  },
  {
    icon: "/design-icon.jpg",
    title: "Graphics Design",
    description: "Figma, Adobe suite, and modern design principles from concept to delivery.",
    price: "Premium",
    url: "/courses/graphics-design",
    syllabus: ["Design theory & color", "Figma mastery", "Adobe Illustrator & Photoshop", "Brand identity projects", "Portfolio building"],
    duration: "6 weeks",
    level: "Beginner → Intermediate",
  },
  {
    icon: "/web-dev-icon.jpg",
    title: "Web Development",
    description: "Full-stack apps from React to databases — everything to ship real products.",
    price: "Premium",
    url: "/courses/web-development",
    syllabus: ["HTML, CSS & JavaScript foundations", "React & Next.js", "Node.js & REST APIs", "Databases & Supabase", "Deployment & DevOps basics"],
    duration: "12 weeks",
    level: "Beginner → Advanced",
  },
  {
    icon: "/security-icon.jpg",
    title: "Cybersecurity",
    description: "Hands-on threat analysis, ethical hacking, and digital asset protection.",
    price: "Premium",
    url: "/courses/cybersecurity",
    syllabus: ["Networking fundamentals", "Ethical hacking & pen testing", "OWASP Top 10", "Incident response", "Security certifications prep"],
    duration: "10 weeks",
    level: "Intermediate → Advanced",
  },
  {
    icon: "/data-icon.jpg",
    title: "Data Analytics",
    description: "Python, SQL, and visualization tools that turn raw data into decisions.",
    price: "Premium",
    url: "/courses/data-analytics",
    syllabus: ["Python for data science", "SQL & database querying", "Pandas & NumPy", "Data visualization (Tableau, Plotly)", "Machine learning basics"],
    duration: "10 weeks",
    level: "Beginner → Intermediate",
  },
  {
    icon: "/video-icon.jpg",
    title: "Video Production",
    description: "Cinematic storytelling from filming to post — professional techniques.",
    price: "Premium",
    url: "/courses/video-production",
    syllabus: ["Camera & lighting fundamentals", "Storyboarding & scriptwriting", "Adobe Premiere Pro editing", "Color grading & audio mixing", "YouTube & client workflows"],
    duration: "8 weeks",
    level: "Beginner → Intermediate",
  },
];

const instructors = [
  { name: "Amara Osei", role: "Senior FX Trader", company: "Goldman Sachs", initials: "AO", course: "Forex Trading" },
  { name: "Tunde Adeyemi", role: "Lead Product Designer", company: "Figma", initials: "TA", course: "Graphics Design" },
  { name: "Sofia Reyes", role: "Staff Engineer", company: "Vercel", initials: "SR", course: "Web Development" },
  { name: "Kemi Nwosu", role: "Security Researcher", company: "CrowdStrike", initials: "KN", course: "Cybersecurity" },
  { name: "James Liu", role: "Data Scientist", company: "Meta", initials: "JL", course: "Data Analytics" },
  { name: "Dara Akinde", role: "Creative Director", company: "BBC Studios", initials: "DA", course: "Video Production" },
];

const testimonials = [
  { name: "Sarah Chen", title: "Product Designer at Google", text: "Olympus completely transformed my career. The design course was hands-on and the instructors genuinely cared about my progress." },
  { name: "Marcus Johnson", title: "Full-Stack Developer", text: "Best investment I've made. From zero to shipping production apps in 3 months. The projects are real and impressive to employers." },
  { name: "Priya Patel", title: "Data Analyst at Microsoft", text: "The curriculum stays current with industry trends. I learned SQL and Python here, then got hired within 2 weeks of completion." },
  { name: "Alex Rivera", title: "Forex Trader", text: "Finally found traders willing to share real strategies. The live mentoring sessions are worth every penny. Seeing consistent returns now." },
  { name: "Jordan Lee", title: "Cybersecurity Specialist", text: "The ethical hacking course is intense and incredibly practical. I landed a security analyst role right after graduating." },
  { name: "Emma Watson", title: "Video Producer", text: "The cinematography techniques I learned are now my competitive advantage. Documentary work has never been better." },
  { name: "David Kim", title: "Graphics Designer", text: "Adobe mastery + design theory combined perfectly. I tripled my freelance rates after completing this course." },
  { name: "Lisa Anderson", title: "Cybersecurity Consultant", text: "Industry-standard training delivered by actual security professionals. I passed my CISSP exam with flying colors." },
];

const faqs = [
  { q: "How long do I have access to courses?", a: "Lifetime access — once you enroll, the course content and any future updates are yours forever. No subscription required after purchase." },
  { q: "Do I get a certificate upon completion?", a: "Yes. Every course awards a verified digital certificate you can share on LinkedIn and add to your resume. Our certificates are recognized by 200+ partner companies." },
  { q: "Can I get a refund if I'm not satisfied?", a: "Absolutely. We offer a 30-day money-back guarantee, no questions asked. Just reach out to support and we'll process your refund within 2 business days." },
  { q: "Are the courses self-paced or scheduled?", a: "Self-paced. Study at whatever speed works for you. Some tracks include optional live Q&A sessions with instructors you can join or watch back." },
  { q: "Do I need prior experience to enroll?", a: "Most courses start from zero. Each course listing shows the required level (Beginner / Intermediate / Advanced) so you can choose the right starting point." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, PayPal, and bank transfers. Pricing is available in NGN, USD, GBP, and EUR. Instalment plans are available on request." },
];

const pricingPlans = [
  {
    name: "Free",
    price: "₦0",
    period: "forever",
    description: "Get a feel for Olympus before committing.",
    features: ["Access to 1 free course", "Community forum access", "Course previews & syllabi", "Basic progress tracking"],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₦15,000",
    period: "per month",
    description: "Everything you need to grow fast.",
    features: ["All 6 premium courses", "Live Q&A with instructors", "Verified certificates", "Career support & CV review", "Private Discord community", "New courses as they launch"],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "₦75,000",
    period: "one-time",
    description: "Pay once, learn forever.",
    features: ["Everything in Pro", "Lifetime access to all content", "1-on-1 mentorship session", "Priority support", "Alumni network access", "Exclusive job board"],
    cta: "Get Lifetime",
    highlighted: false,
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

const CourseCard = ({ course, onOpen }: { course: Course; onOpen: (c: Course) => void }) => (
  <div
    className="border border-[#e8e0d0] flex flex-col items-start p-4 sm:p-5 relative h-[24rem] sm:h-[26rem] md:h-[28rem] rounded-2xl bg-[#faf8f4] cursor-pointer group hover:border-[#c07a1a] transition-colors"
    onClick={() => onOpen(course)}
  >

    <EvervaultCard text={`${course.title}`} src={`${course.icon}`} className="flex-1 w-full mb-3" />
     
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-[#1a1a18] text-sm sm:text-base font-medium leading-relaxed">
        {course.description}
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-sm border border-[#e8e0d0] font-medium rounded-full text-[#c07a1a] px-3 py-1 w-fit">
          {course.price}
        </p>
        <span className="text-xs text-[#c07a1a] opacity-0 group-hover:opacity-100 transition-opacity font-medium">
          View syllabus →
        </span>
      </div>
    </div>
  </div>
);

const CourseModal = ({ course, onClose }: { course: Course; onClose: () => void }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#faf8f4] rounded-2xl max-w-md w-full p-7 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#999] hover:text-[#1a1a18] transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="text-3xl mb-3">{course.icon}</div>
        <h3 className="font-serif text-xl font-bold text-[#1a1a18] mb-1">{course.title}</h3>
        <p className="text-sm text-[#666] mb-4 leading-relaxed">{course.description}</p>

        <div className="flex gap-3 mb-5">
          <span className="text-xs border border-[#e8e0d0] rounded-full px-3 py-1 text-[#555]">⏱ {course.duration}</span>
          <span className="text-xs border border-[#e8e0d0] rounded-full px-3 py-1 text-[#555]">📶 {course.level}</span>
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-3">What you'll learn</p>
        <ul className="space-y-2 mb-6">
          {course.syllabus.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#444]">
              <span className="text-[#c07a1a] mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={course.url}
          className="block w-full bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold text-sm py-3 rounded-full text-center transition-colors"
        >
          Enroll in this course
        </a>
      </div>
    </div>
  );
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8e0d0] last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm sm:text-base font-medium text-[#1a1a18]">{q}</span>
        <span
          className="text-[#c07a1a] text-xl leading-none flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-sm text-[#666] leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCTASubmit = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1a1a18] font-sans">

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#faf8f4] border-b border-[#e8e0d0] px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Olympus" className="w-10 h-auto" />
          <span className="font-serif text-lg sm:text-xl font-semibold">Olympus</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">Courses</a>
          <a href="#features" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">Features</a>
          <a href="#instructors" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">Instructors</a>
          <a href="#pricing" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="bg-[#1a1a18] text-[#faf8f4] text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 rounded-full hover:bg-[#333] transition-colors"
          >
            Login
          </a>
          {/* Hamburger – mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#1a1a18] transition-transform duration-200 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1a1a18] transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1a1a18] transition-transform duration-200 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f4] border-b border-[#e8e0d0] px-6 py-4 flex flex-col gap-4 z-40">
          {["courses", "features", "instructors", "pricing", "faq"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-[#555] capitalize"
              onClick={() => setMobileMenuOpen(false)}
            >
              {id}
            </a>
          ))}
        </div>
      )}

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <WavyBackground
        colors={["#c07a1a", "#a8680f", "#d4915f", "#e8b87a", "#f0d4a8"]}
        waveOpacity={0.15}
        blur={2}
        speed="slow"
        backgroundFill="#faf8f4"
        containerClassName="bg-[#faf8f4] min-h-[70vh]"
        className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center justify-center"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#c07a1a] bg-[#fdf0da] border border-[#e8c47a] px-4 py-1.5 rounded-full mb-7">
          ★ The future of learning
        </div>
        <TextGenerateEffect
          words="Master skills that actually matter"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a1a18] leading-tight mb-5"
          duration={0.5}
        />
        <p className="text-sm sm:text-base text-[#666] leading-relaxed max-w-md mx-auto mb-8">
          Expert-led courses in trading, design, development, and more — built for people serious about their next move.
        </p>
        <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
          <a
            href="#pricing"
            className="bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-colors"
          >
            Start for free
          </a>
          <a
            href="#courses"
            className="border border-[#d0c5b0] hover:border-[#c07a1a] hover:text-[#c07a1a] text-[#1a1a18] font-semibold px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-colors"
          >
            Browse courses
          </a>
        </div>
      </WavyBackground>

      {/* ── Courses ─────────────────────────────────────────────────────────── */}
      <section id="courses" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">Curriculum</p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18] mb-2">Six premium tracks</h2>
        <p className="text-xs sm:text-sm text-[#888] mb-8 sm:mb-14">Real-world projects. Expert instructors. Lifetime access. <span className="text-[#c07a1a]">Click any course to preview the syllabus.</span></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} onOpen={setSelectedCourse} />
          ))}
        </div>
      </section>

      {/* Course modal */}
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}

      {/* ── Features ────────────────────────────────────────────────────────── */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* ── How it works ────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">Process</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18]">How Olympus works</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 relative">
          {[
            { step: "01", title: "Browse & choose", desc: "Explore 6 industry-focused tracks and preview every syllabus before you commit." },
            { step: "02", title: "Enroll & learn", desc: "Self-paced video lessons, real-world projects, and live Q&As with instructors." },
            { step: "03", title: "Get certified", desc: "Complete the track, earn your verified certificate, and launch your new career." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="font-serif text-4xl font-bold text-[#e8c47a] mb-3">{item.step}</span>
              <h3 className="text-base font-bold text-[#1a1a18] mb-2">{item.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Instructors ─────────────────────────────────────────────────────── */}
      <section id="instructors" className="bg-white border-y border-[#e8e0d0] py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">The team</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18] mb-3">Learn from the best</h2>
            <p className="text-sm text-[#666] max-w-md mx-auto">Every instructor is an active professional — not just an academic. They bring real experience from the world's top companies.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {instructors.map((ins, i) => (
              <div key={i} className="flex items-center gap-4 p-5 border border-[#e8e0d0] rounded-2xl bg-[#faf8f4]">
                <div className="w-12 h-12 rounded-full bg-[#fdf0da] border border-[#e8c47a] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif font-bold text-sm text-[#c07a1a]">{ins.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1a1a18]">{ins.name}</p>
                  <p className="text-xs text-[#888]">{ins.role} · {ins.company}</p>
                  <p className="text-xs text-[#c07a1a] mt-0.5">Teaches {ins.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">About Us</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18] mb-4">
              Olympus Academy: Elite Learning for Ambitious Minds
            </h2>
            <p className="text-sm sm:text-base text-[#666] max-w-2xl mx-auto leading-relaxed">
              Founded in 2024, Olympus Academy bridges the gap between traditional education and real-world expertise. We partner with industry leaders to deliver cutting-edge courses that matter.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              { val: "12K+", label: "Active Learners" },
              { val: "98%", label: "Satisfaction Rate" },
              { val: "500+", label: "Expert Instructors" },
              { val: "150+", label: "Courses Available" },
            ].map((stat, i) => (
              <div key={i} className="p-5 sm:p-6 border border-[#e8e0d0] rounded-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#c07a1a] mb-1">{stat.val}</p>
                <p className="text-xs sm:text-sm text-[#666]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="p-6 sm:p-8 border border-[#e8e0d0] rounded-2xl bg-[#faf8f4]">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a18] mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-[#666] leading-relaxed">
                We're committed to democratizing access to world-class education. Every course is designed to transform knowledge into tangible skills that lead to real opportunities and measurable success.
              </p>
            </div>
            <div className="p-6 sm:p-8 border border-[#e8e0d0] rounded-2xl bg-[#faf8f4]">
              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a18] mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-[#666] leading-relaxed">
                To create a global community where ambitious learners connect with industry leaders, collaborate on real-world projects, and build careers they're genuinely excited about.
              </p>
            </div>
          </div>

          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a18] mb-6 sm:mb-8 text-center">Why Choose Olympus?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: "🎓", title: "Industry Leaders", desc: "Learn directly from professionals working at top companies" },
                { icon: "💼", title: "Career Support", desc: "Job placement assistance and networking opportunities" },
                { icon: "🔄", title: "Live Updates", desc: "Courses updated regularly with latest industry trends" },
                { icon: "🌍", title: "Global Community", desc: "Connect with learners from 180+ countries worldwide" },
                { icon: "📈", title: "Real Results", desc: "85% of graduates advance in their careers within 6 months" },
                { icon: "⭐", title: "Premium Quality", desc: "Rigorous instructor vetting and course curriculum review" },
              ].map((item, i) => (
                <div key={i} className="p-5 border border-[#e8e0d0] rounded-xl">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-[#1a1a18] mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .scroll-left { animation: scroll-left 32s linear infinite; }
        .scroll-right { animation: scroll-right 32s linear infinite; }
        .scroll-left:hover, .scroll-right:hover { animation-play-state: paused; }
      `}</style>
      <section className="bg-[#faf8f4] py-12 sm:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">Success Stories</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18]">What our students are saying</h2>
        </div>

        {/* Row 1 – left */}
        <div className="mb-5 overflow-hidden">
          <div className="scroll-left flex gap-5 w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-72 sm:w-80 p-6 border border-[#e8e0d0] rounded-2xl bg-white">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <span key={j} className="text-[#c07a1a] text-sm">★</span>)}</div>
                <p className="text-sm text-[#666] mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-[#1a1a18] text-sm">{t.name}</p>
                  <p className="text-xs text-[#999]">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 – right */}
        <div className="overflow-hidden">
          <div className="scroll-right flex gap-5 w-max">
            {[...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-72 sm:w-80 p-6 border border-[#e8e0d0] rounded-2xl bg-white">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <span key={j} className="text-[#c07a1a] text-sm">★</span>)}</div>
                <p className="text-sm text-[#666] mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-[#1a1a18] text-sm">{t.name}</p>
                  <p className="text-xs text-[#999]">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────────────── */}
      <section id="pricing" className="bg-white border-y border-[#e8e0d0] py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">Pricing</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18] mb-3">Simple, honest pricing</h2>
            <p className="text-sm text-[#666] max-w-md mx-auto">No hidden fees. No recurring surprise charges. Pick the plan that fits where you are right now.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-2xl p-6 sm:p-7 border transition-all ${
                  plan.highlighted
                    ? "border-[#c07a1a] bg-[#fdf7ee] shadow-sm"
                    : "border-[#e8e0d0] bg-[#faf8f4]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#c07a1a] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                      Most popular
                    </span>
                  </div>
                )}
                <p className="font-serif text-lg font-bold text-[#1a1a18] mb-1">{plan.name}</p>
                <p className="text-xs text-[#888] mb-4">{plan.description}</p>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-[#1a1a18]">{plan.price}</span>
                  <span className="text-xs text-[#999] ml-1">/ {plan.period}</span>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#444]">
                      <span className="text-[#c07a1a] mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className={`block w-full text-center font-semibold text-sm py-2.5 rounded-full transition-colors ${
                    plan.highlighted
                      ? "bg-[#c07a1a] hover:bg-[#a8680f] text-white"
                      : "border border-[#d0c5b0] hover:border-[#c07a1a] hover:text-[#c07a1a] text-[#1a1a18]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section id="faq" className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">FAQ</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a18]">Common questions</h2>
        </div>
        <div className="border-t border-[#e8e0d0]">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="bg-[#1a1a18] rounded-3xl px-6 sm:px-10 py-10 sm:py-14 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#faf8f4] mb-3">
            Join the first 500 members
          </h2>
          <p className="text-xs sm:text-sm text-[#aaa] mb-6 sm:mb-8 leading-relaxed">
            Lifetime benefits. Early access pricing. Limited spots remaining.
          </p>
          {submitted ? (
            <div className="py-4">
              <p className="text-[#c07a1a] font-semibold text-sm">🎉 You're on the list! We'll be in touch shortly.</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                  className="w-full sm:flex-1 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#2a2a28] border border-[#3a3a38] text-[#faf8f4] placeholder-[#666] text-sm focus:outline-none focus:border-[#c07a1a] transition-colors"
                />
                <button
                  onClick={handleCTASubmit}
                  className="bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold px-6 sm:px-7 py-2 sm:py-3 rounded-full transition-colors whitespace-nowrap"
                >
                  Get started
                </button>
              </div>
              {emailError && <p className="text-xs text-red-400 mt-2">{emailError}</p>}
            </>
          )}
          <p className="text-xs text-[#555] mt-3 sm:mt-4">30-day free trial · No credit card required</p>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#e8e0d0] py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/logo.svg" alt="Olympus" className="w-8 h-auto" />
                <span className="font-serif font-semibold text-[#1a1a18]">Olympus</span>
              </div>
              <p className="text-xs text-[#888] leading-relaxed max-w-xs">
                Expert-led courses for people serious about their next move.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-3">Courses</p>
              <ul className="space-y-2">
                {courses.map((c) => (
                  <li key={c.title}>
                    <a href={c.url} className="text-xs text-[#666] hover:text-[#c07a1a] transition-colors">{c.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-3">Company</p>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Contact", href: "mailto:hello@olympusacademy.com" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-[#666] hover:text-[#c07a1a] transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[#e8e0d0] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#aaa]">© 2026 <span className="text-[#c07a1a]">Olympus Academy</span> · All rights reserved</p>
            <div className="flex gap-4">
              {[
                { label: "Twitter/X", href: "https://x.com/olympusacademy" },
                { label: "LinkedIn", href: "https://linkedin.com/company/olympusacademy" },
                { label: "Instagram", href: "https://instagram.com/olympusacademy" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="text-xs text-[#aaa] hover:text-[#c07a1a] transition-colors" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}