"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  { icon: "👨‍🏫", title: "Live mentorship", desc: "1-on-1 guidance from top professionals in each field." },
  { icon: "💼", title: "Hands-on projects", desc: "Build real things. Ship a portfolio worth showing." },
  { icon: "♾️", title: "Lifetime access", desc: "Pay once. Learn forever at your own pace." },
  { icon: "🏆", title: "Certifications", desc: "Industry-recognized credentials you can actually use." },
  { icon: "🎯", title: "Job placement", desc: "Connect directly with employers hiring for your skills." },
  { icon: "🆘", title: "24/7 support", desc: "Expert help whenever you're stuck — day or night." },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="bg-white border-y border-[#e8e0d0] py-12 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#c07a1a] mb-2">
          Why Olympus
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a18] mb-6 sm:mb-10">
          Everything you need to succeed
        </h2>
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-5 border border-[#e8e0d0] rounded-xl bg-[#faf8f4] transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={isVisible ? { transitionDelay: `${i * 50}ms` } : {}}
            >
              <div className="text-xl mb-3">{f.icon}</div>
              <h4 className="font-semibold text-sm text-[#1a1a18] mb-1">
                {f.title}
              </h4>
              <p className="text-xs text-[#888] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
