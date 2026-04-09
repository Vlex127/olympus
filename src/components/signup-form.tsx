import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="text-center">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a18] mb-2">Create your account</h1>
        <p className="text-xs sm:text-sm text-[#555]">Join thousands of students mastering new skills</p>
      </div>

      <form className="space-y-4">
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
              className="w-full border border-[#e8e0d0] focus:border-[#c07a1a] bg-white text-[#1a1a18] placeholder-[#bbb] rounded-lg px-4 py-2 text-sm transition-colors"
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
              className="w-full border border-[#e8e0d0] focus:border-[#c07a1a] bg-white text-[#1a1a18] placeholder-[#bbb] rounded-lg px-4 py-2 text-sm transition-colors"
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
                className="w-full border border-[#e8e0d0] focus:border-[#c07a1a] bg-white text-[#1a1a18] placeholder-[#bbb] rounded-lg px-4 py-2 text-sm transition-colors"
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
                className="w-full border border-[#e8e0d0] focus:border-[#c07a1a] bg-white text-[#1a1a18] placeholder-[#bbb] rounded-lg px-4 py-2 text-sm transition-colors"
              />
            </div>
          </div>

          <p className="text-xs text-[#999]">Must be at least 8 characters long.</p>

          <Button
            type="submit"
            className="w-full bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold py-2 rounded-lg text-sm transition-colors mt-2"
          >
            Create Account
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
