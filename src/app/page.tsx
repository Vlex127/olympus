"use client";

import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { FeaturesSection } from "@/components/features-section";

const CourseCard = ({ icon, title, description, price }: { icon: string; title: string; description: string; price: string }) => (
  <div className="border border-[#e8e0d0] flex flex-col items-start p-4 sm:p-5 relative h-[24rem] sm:h-[26rem] md:h-[28rem] rounded-2xl bg-[#faf8f4]">
    {/* Evervault card with icon + title */}
    <EvervaultCard text={`${icon} ${title}`} className="flex-1 w-full mb-3" />

    {/* Below the card */}
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-[#1a1a18] text-sm sm:text-base font-medium leading-relaxed">
        {description}
      </h2>
      <p className="text-xs sm:text-sm border border-[#e8e0d0] font-medium rounded-full text-[#c07a1a] px-3 py-1 w-fit">
        {price}
      </p>
    </div>
  </div>
);

const courses = [
  { icon: "💹", title: "Forex Trading", description: "Currency markets, risk management, and live strategy from active traders.", price: "Premium", url: "/courses/forex-trading" },
  { icon: "🎨", title: "Graphics Design", description: "Figma, Adobe suite, and modern design principles from concept to delivery.", price: "Premium", url: "/courses/graphics-design" },
  { icon: "💻", title: "Web Development", description: "Full-stack apps from React to databases — everything to ship real products.", price: "Premium", url: "/courses/web-development" },
  { icon: "🔐", title: "Cybersecurity", description: "Hands-on threat analysis, ethical hacking, and digital asset protection.", price: "Premium", url: "/courses/cybersecurity" },
  { icon: "📊", title: "Data Analytics", description: "Python, SQL, and visualization tools that turn raw data into decisions.", price: "Premium", url: "/courses/data-analytics" },
  { icon: "🎬", title: "Video Production", description: "Cinematic storytelling from filming to post — professional techniques.", price: "Premium", url: "/courses/video-production" },
];

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1a1a18] font-sans">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#faf8f4] border-b border-[#e8e0d0] px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Olympus" className="w-10 h-auto" /> 
          <span className="font-serif text-lg sm:text-xl font-semibold">Olympus</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">Courses</a>
          <a href="#features" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">Features</a>
          <a href="#join" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">About</a>
        </div>
        <button className="bg-[#1a1a18] text-[#faf8f4] text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 rounded-full hover:bg-[#333] transition-colors">
          <a href="/login">Login</a>
        </button>
      </nav>

      {/* Hero */}
      <WavyBackground
        colors={["#c07a1a", "#a8680f", "#d4915f", "#e8b87a", "#f0d4a8"]}
        waveOpacity={0.15}
        blur={2}
        speed="slow"
        backgroundFill="#faf8f4"
        containerClassName="bg-[#faf8f4]"
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
          <button className="bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-colors">
            Start for free
          </button>
          <button className="border border-[#d0c5b0] hover:border-[#c07a1a] hover:text-[#c07a1a] text-[#1a1a18] font-semibold px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-colors">
            Browse courses
          </button>
        </div>
      </WavyBackground>

{/* Courses */}
<section id="courses" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
  <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">Curriculum</p>
  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18] mb-2">Six premium tracks</h2>
  <p className="text-xs sm:text-sm text-[#888] mb-8 sm:mb-14">Real-world projects. Expert instructors. Lifetime access.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
    {courses.map((course, i) => (
      <CourseCard key={i} {...course} />
    ))}
  </div>
</section>

      {/* Features */}
      <FeaturesSection />

      {/* About Section */}
      <section id="join" className="bg-white border-y border-[#e8e0d0] py-12 sm:py-20 px-4 sm:px-6">
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="p-5 sm:p-6 border border-[#e8e0d0] rounded-xl text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#c07a1a] mb-1">12K+</p>
              <p className="text-xs sm:text-sm text-[#666]">Active Learners</p>
            </div>
            <div className="p-5 sm:p-6 border border-[#e8e0d0] rounded-xl text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#c07a1a] mb-1">98%</p>
              <p className="text-xs sm:text-sm text-[#666]">Satisfaction Rate</p>
            </div>
            <div className="p-5 sm:p-6 border border-[#e8e0d0] rounded-xl text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#c07a1a] mb-1">500+</p>
              <p className="text-xs sm:text-sm text-[#666]">Expert Instructors</p>
            </div>
            <div className="p-5 sm:p-6 border border-[#e8e0d0] rounded-xl text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#c07a1a] mb-1">150+</p>
              <p className="text-xs sm:text-sm text-[#666]">Courses Available</p>
            </div>
          </div>

          {/* Mission & Vision */}
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

          {/* Why Choose Us */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a18] mb-6 sm:mb-8 text-center">Why Choose Olympus?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-5 border border-[#e8e0d0] rounded-xl">
                <div className="text-2xl mb-2">🎓</div>
                <h4 className="font-semibold text-[#1a1a18] mb-2">Industry Leaders</h4>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">Learn directly from professionals working at top companies</p>
              </div>
              <div className="p-5 border border-[#e8e0d0] rounded-xl">
                <div className="text-2xl mb-2">💼</div>
                <h4 className="font-semibold text-[#1a1a18] mb-2">Career Support</h4>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">Job placement assistance and networking opportunities</p>
              </div>
              <div className="p-5 border border-[#e8e0d0] rounded-xl">
                <div className="text-2xl mb-2">🔄</div>
                <h4 className="font-semibold text-[#1a1a18] mb-2">Live Updates</h4>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">Courses updated regularly with latest industry trends</p>
              </div>
              <div className="p-5 border border-[#e8e0d0] rounded-xl">
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="font-semibold text-[#1a1a18] mb-2">Global Community</h4>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">Connect with learners from 180+ countries worldwide</p>
              </div>
              <div className="p-5 border border-[#e8e0d0] rounded-xl">
                <div className="text-2xl mb-2">📈</div>
                <h4 className="font-semibold text-[#1a1a18] mb-2">Real Results</h4>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">85% of graduates advance in their careers within 6 months</p>
              </div>
              <div className="p-5 border border-[#e8e0d0] rounded-xl">
                <div className="text-2xl mb-2">⭐</div>
                <h4 className="font-semibold text-[#1a1a18] mb-2">Premium Quality</h4>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">Rigorous instructor vetting and course curriculum review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .testimonial-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        .testimonial-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
      `}</style>
      <section className="bg-[#faf8f4] py-12 sm:py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">Success Stories</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18]">
              What our students are saying
            </h2>
          </div>
        </div>

        {/* First Row - Moving Left */}
        <div className="mb-6 overflow-hidden">
          <div className="flex gap-4 sm:gap-6 testimonial-scroll-left">
            {[
              { name: "Sarah Chen", title: "Product Designer at Google", text: "Olympus completely transformed my career. The design course was hands-on and the instructors genuinely cared about my progress." },
              { name: "Marcus Johnson", title: "Full-Stack Developer", text: "Best investment I've made. From zero to shipping production apps in 3 months. The projects are real and impressive to employers." },
              { name: "Priya Patel", title: "Data Analyst at Microsoft", text: "The curriculum stays current with industry trends. I learned SQL and Python here, then got hired within 2 weeks of completion." },
              { name: "Alex Rivera", title: "Forex Trader", text: "Finally found traders willing to share real strategies. The live mentoring sessions are worth every penny. Seeing consistent returns now." },
              { name: "Jordan Lee", title: "Cybersecurity Specialist", text: "The ethical hacking course is intense and incredibly practical. I landed a security analyst role right after graduating." },
            ].map((testimonial, i) => (
              <div key={i} className="flex-shrink-0 w-80 p-6 border border-[#e8e0d0] rounded-2xl bg-white">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#c07a1a]">★</span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#666] mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#1a1a18] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#999]">{testimonial.title}</p>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              { name: "Sarah Chen", title: "Product Designer at Google", text: "Olympus completely transformed my career. The design course was hands-on and the instructors genuinely cared about my progress." },
              { name: "Marcus Johnson", title: "Full-Stack Developer", text: "Best investment I've made. From zero to shipping production apps in 3 months. The projects are real and impressive to employers." },
              { name: "Priya Patel", title: "Data Analyst at Microsoft", text: "The curriculum stays current with industry trends. I learned SQL and Python here, then got hired within 2 weeks of completion." },
            ].map((testimonial, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0 w-80 p-6 border border-[#e8e0d0] rounded-2xl bg-white">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#c07a1a]">★</span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#666] mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#1a1a18] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#999]">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 sm:gap-6 testimonial-scroll-right">
            {[
              { name: "Emma Watson", title: "Video Producer", text: "The cinematography techniques I learned are now my competitive advantage. Documentary work has never been better." },
              { name: "David Kim", title: "Graphics Designer", text: "Adobe mastery + design theory combined perfectly. I tripled my freelance rates after completing this course." },
              { name: "Lisa Anderson", title: "Cybersecurity Consultant", text: "Industry-standard training delivered by actual security professionals. I passed my CISSP exam with flying colors." },
              { name: "James Thompson", title: "Junior Developer", text: "The mentorship component is what makes this different. My mentor introduces me to clients. Already landed 2 projects." },
              { name: "Rachel Zhang", title: "Analyst at Goldman Sachs", text: "Forex trading course taught me real risk management. Now I trade with confidence and consistency. Game changer!" },
            ].map((testimonial, i) => (
              <div key={i} className="flex-shrink-0 w-80 p-6 border border-[#e8e0d0] rounded-2xl bg-white">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#c07a1a]">★</span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#666] mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#1a1a18] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#999]">{testimonial.title}</p>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              { name: "Emma Watson", title: "Video Producer", text: "The cinematography techniques I learned are now my competitive advantage. Documentary work has never been better." },
              { name: "David Kim", title: "Graphics Designer", text: "Adobe mastery + design theory combined perfectly. I tripled my freelance rates after completing this course." },
              { name: "Lisa Anderson", title: "Cybersecurity Consultant", text: "Industry-standard training delivered by actual security professionals. I passed my CISSP exam with flying colors." },
            ].map((testimonial, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0 w-80 p-6 border border-[#e8e0d0] rounded-2xl bg-white">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#c07a1a]">★</span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#666] mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#1a1a18] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#999]">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="bg-[#1a1a18] rounded-3xl px-6 sm:px-10 py-10 sm:py-14 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#faf8f4] mb-3">
            Join the first 500 members
          </h2>
          <p className="text-xs sm:text-sm text-[#aaa] mb-6 sm:mb-8 leading-relaxed">
            Lifetime benefits. Early access pricing. Limited spots remaining.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#2a2a28] border border-[#3a3a38] text-[#faf8f4] placeholder-[#666] text-sm focus:outline-none focus:border-[#c07a1a] transition-colors"
            />
            <button className="bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold px-6 sm:px-7 py-2 sm:py-3 rounded-full transition-colors whitespace-nowrap">
              Get started
            </button>
          </div>
          <p className="text-xs text-[#555] mt-3 sm:mt-4">30-day free trial · No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e0d0] py-6 text-center text-xs text-[#aaa]">
        © 2026 <span className="text-[#c07a1a]">Olympus Academy</span> · All rights reserved
      </footer>
    </div>
  );
}