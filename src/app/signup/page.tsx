"use client"

import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1a1a18] font-sans flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#faf8f4] border-b border-[#e8e0d0] px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <img src="/logo.svg" alt="Olympus" className="w-10 h-auto" />
          <span className="font-serif text-lg sm:text-xl font-semibold text-[#1a1a18]">Olympus</span>
        </a>
        <a 
          href="/" 
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#c07a1a] hover:text-[#a8680f] transition-colors border border-[#e8e0d0] hover:border-[#c07a1a] px-4 py-2 rounded-full"
        >
          ← Back to home
        </a>
      </nav>

      {/* Signup Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="w-full max-w-sm lg:max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Form */}
            <div>
              <SignupForm />
            </div>
            
            {/* Image Placeholder - Desktop Only */}
            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-[#fdf0da] to-[#faf8f4] border border-[#e8e0d0] rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/logo.svg" alt="Olympus" className="w-20 h-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold text-[#1a1a18] mb-2">Start Your Journey</h3>
                  <p className="text-sm text-[#666]">Join exclusive courses and unlock your potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#e8e0d0] py-4 text-center text-xs text-[#aaa]">
        © 2026 <span className="text-[#c07a1a]">Olympus Academy</span> · All rights reserved
      </footer>
    </div>
  )
}
