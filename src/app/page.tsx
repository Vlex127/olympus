"use client";

import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Icon } from "@/components/ui/evervault-card";

const CourseCard = ({ icon, title, description, price }: { icon: string; title: string; description: string; price: string }) => (
  <div className="border border-[#e8e0d0] flex flex-col items-start p-4 relative h-[22rem] sm:h-[24rem] md:h-[26rem] rounded-2xl bg-[#faf8f4]">
    {/* Corner icons */}
    <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#c07a1a]" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#c07a1a]" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#c07a1a]" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#c07a1a]" />

    {/* Evervault card with icon + title */}
    <EvervaultCard text={`${icon} ${title}`} className="flex-1 w-full" />

    {/* Below the card */}
    <h2 className="text-[#1a1a18] mt-4 text-sm font-medium leading-relaxed">
      {description}
    </h2>
    <p className="text-xs border border-[#e8e0d0] font-medium rounded-full mt-3 text-[#c07a1a] px-3 py-0.5">
      {price}
    </p>
  </div>
);

const features = [
  { icon: "👨‍🏫", title: "Live mentorship", desc: "1-on-1 guidance from top professionals in each field." },
  { icon: "💼", title: "Hands-on projects", desc: "Build real things. Ship a portfolio worth showing." },
  { icon: "♾️", title: "Lifetime access", desc: "Pay once. Learn forever at your own pace." },
  { icon: "🏆", title: "Certifications", desc: "Industry-recognized credentials you can actually use." },
  { icon: "🎯", title: "Job placement", desc: "Connect directly with employers hiring for your skills." },
  { icon: "🆘", title: "24/7 support", desc: "Expert help whenever you're stuck — day or night." },
];

const courses = [
  { icon: "💹", title: "Forex Trading", description: "Currency markets, risk management, and live strategy from active traders.", price: "Premium" },
  { icon: "🎨", title: "Graphics Design", description: "Figma, Adobe suite, and modern design principles from concept to delivery.", price: "Premium" },
  { icon: "💻", title: "Web Development", description: "Full-stack apps from React to databases — everything to ship real products.", price: "Premium" },
  { icon: "🔐", title: "Cybersecurity", description: "Hands-on threat analysis, ethical hacking, and digital asset protection.", price: "Premium" },
  { icon: "📊", title: "Data Analytics", description: "Python, SQL, and visualization tools that turn raw data into decisions.", price: "Premium" },
  { icon: "🎬", title: "Video Production", description: "Cinematic storytelling from filming to post — professional techniques.", price: "Premium" },
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
          duration={0.8}
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
      <section id="features" className="bg-white border-y border-[#e8e0d0] py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">Why Olympus</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18] mb-6 sm:mb-10">Everything you need to succeed</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="p-5 border border-[#e8e0d0] rounded-xl bg-[#faf8f4]">
                <div className="text-xl mb-3">{f.icon}</div>
                <h4 className="font-semibold text-sm text-[#1a1a18] mb-1">{f.title}</h4>
                <p className="text-xs text-[#888] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
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