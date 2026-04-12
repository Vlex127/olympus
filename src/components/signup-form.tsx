"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    // Validate password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      setLoading(false)
      return
    }

    try {
      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      })

      if (signUpError) {
        setError(signUpError.message)
        setLoading(false)
        return
      }

      // Check if email confirmation is required
      if (data?.user && !data.user.confirmed_at) {
        setSuccess(true)
        // Redirect after a few seconds
        setTimeout(() => router.push("/login"), 3000)
      } else {
        // User created and confirmed, redirect to dashboard
        router.push("/dashboard")
      }
    } catch (err) {
      setError("An unexpected error occurred")
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="text-center">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a18] mb-2">Create your account</h1>
        <p className="text-xs sm:text-sm text-[#555]">Join thousands of students mastering new skills</p>
      </div>

      <form className="space-y-4" onSubmit={handleSignup}>
        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-[#1a1a18] mb-2">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              className="w-full border border-[#e8e0d0] focus:border-[#c07a1a] bg-white text-[#1a1a18] placeholder-[#bbb] rounded-lg px-4 py-2 text-sm transition-colors disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-[#1a1a18] mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full border border-[#e8e0d0] focus:border-[#c07a1a] bg-white text-[#1a1a18] placeholder-[#bbb] rounded-lg px-4 py-2 text-sm transition-colors disabled:opacity-50"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-[#1a1a18] mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full border border-[#e8e0d0] focus:border-[#c07a1a] bg-white text-[#1a1a18] placeholder-[#bbb] rounded-lg px-4 py-2 text-sm transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-xs sm:text-sm font-semibold text-[#1a1a18] mb-2">
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                className="w-full border border-[#e8e0d0] focus:border-[#c07a1a] bg-white text-[#1a1a18] placeholder-[#bbb] rounded-lg px-4 py-2 text-sm transition-colors disabled:opacity-50"
              />
            </div>
          </div>

          <p className="text-xs text-[#999]">Must be at least 8 characters long.</p>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-600">
              Account created! Check your email to confirm. Redirecting to login...
            </div>
          )}

          <Button
            type="submit"
            disabled={loading || success}
            className="w-full bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold py-2 rounded-lg text-sm transition-colors mt-2 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </Button>
        </div>

        <p className="text-center text-xs text-[#666]">
          Already have an account?{" "}
          <a href="/login" className="text-[#c07a1a] hover:text-[#a8680f] font-semibold transition-colors">
            Sign in
          </a>
        </p>
      </form>

      <p className="text-center text-xs text-[#999]">
        By continuing, you agree to our{" "}
        <a href="#" className="text-[#c07a1a] hover:text-[#a8680f] transition-colors">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-[#c07a1a] hover:text-[#a8680f] transition-colors">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  )
}
