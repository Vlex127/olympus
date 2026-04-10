"use client";

import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FeaturesSection } from "@/components/features-section";

const CourseCard = ({ icon, title, description, price }: { icon: string; title: string; description: string; price: string }) => (
  <div className="border border-[#e8e0d0] flex flex-col items-start p-4 sm:p-5 relative rounded-2xl bg-[#faf8f4] hover:border-[#c07a1a] transition-colors duration-300 group h-full">
    {/* Icon and Title */}
    <div className="flex items-center gap-2 mb-4">
      <span className="text-2xl sm:text-3xl">{icon}</span>
      <h3 className="text-[#1a1a18] text-base sm:text-lg font-semibold">
        {title}
      </h3>
    </div>

    {/* Description */}
    <p className="text-[#1a1a18] text-sm sm:text-base font-medium leading-relaxed flex-1 mb-4">
      {description}
    </p>

    {/* Price Badge */}
    <p className="text-xs sm:text-sm border border-[#e8e0d0] font-medium rounded-full text-[#c07a1a] px-3 py-1 w-fit">
      {price}
    </p>
  </div>
);

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