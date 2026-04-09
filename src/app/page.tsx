"use client";

import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const CourseCard = ({ icon, title, description, price }: { icon: string; title: string; description: string; price: string }) => (
  <div className="group bg-white border border-[#e8e0d0] rounded-2xl p-6 hover:border-[#c07a1a] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="font-semibold text-base text-[#1a1a18] mb-1">{title}</h3>
    <p className="text-sm text-[#888] leading-relaxed">{description}</p>
    <div className="flex justify-between items-center mt-5 pt-4 border-t border-[#f0ebe0]">
      <span className="text-xs font-semibold text-[#c07a1a] bg-[#fdf0da] px-3 py-1 rounded-full">{price}</span>
      <span className="text-sm font-semibold text-[#c07a1a]">Explore →</span>
    </div>
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
      <nav className="sticky top-0 z-50 bg-[#faf8f4] border-b border-[#e8e0d0] px-10 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#c07a1a] rounded-full flex items-center justify-center text-white font-bold text-sm">★</div>
          <span className="font-serif text-xl font-semibold">Olympus</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">Courses</a>
          <a href="#features" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">Features</a>
          <a href="#join" className="text-sm font-medium text-[#555] hover:text-[#c07a1a] transition-colors">About</a>
          <button className="bg-[#1a1a18] text-[#faf8f4] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#333] transition-colors">
            Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#c07a1a] bg-[#fdf0da] border border-[#e8c47a] px-4 py-1.5 rounded-full mb-7">
          ★ The future of learning
        </div>
          <TextGenerateEffect
            words="Master skills that actually matter"
            className="text-5xl md:text-6xl font-serif font-bold text-[#1a1a18] leading-tight mb-5"
            duration={0.8}
          />
        <p className="text-base text-[#666] leading-relaxed max-w-md mx-auto mb-8">
          Expert-led courses in trading, design, development, and more — built for people serious about their next move.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button className="bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Start for free
          </button>
          <button className="border border-[#d0c5b0] hover:border-[#c07a1a] hover:text-[#c07a1a] text-[#1a1a18] font-semibold px-8 py-3 rounded-full transition-colors">
            Browse courses
          </button>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">Curriculum</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a18] mb-2">Six premium tracks</h2>
        <p className="text-sm text-[#888] mb-10">Real-world projects. Expert instructors. Lifetime access.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white border-y border-[#e8e0d0] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">Why Olympus</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a18] mb-10">Everything you need to succeed</h2>
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
      <section id="join" className="max-w-2xl mx-auto px-6 py-20">
        <div className="bg-[#1a1a18] rounded-3xl px-10 py-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#faf8f4] mb-3">
            Join the first 500 members
          </h2>
          <p className="text-sm text-[#aaa] mb-8 leading-relaxed">
            Lifetime benefits. Early access pricing. Limited spots remaining.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[200px] px-5 py-3 rounded-full bg-[#2a2a28] border border-[#3a3a38] text-[#faf8f4] placeholder-[#666] text-sm focus:outline-none focus:border-[#c07a1a] transition-colors"
            />
            <button className="bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold px-7 py-3 rounded-full transition-colors whitespace-nowrap">
              Get started
            </button>
          </div>
          <p className="text-xs text-[#555] mt-4">30-day free trial · No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e0d0] py-6 text-center text-xs text-[#aaa]">
        © 2025 <span className="text-[#c07a1a]">Olympus Academy</span> · All rights reserved
      </footer>
    </div>
  );
}