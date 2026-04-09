import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="text-center">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a18] mb-2">Welcome back</h1>
        <p className="text-xs sm:text-sm text-[#555]">Login to access your courses</p>
      </div>

      <form className="space-y-4">
        <div className="space-y-3">
          <Button 
            variant="outline" 
            type="button"
            className="w-full border border-[#e8e0d0] hover:border-[#c07a1a] text-[#1a1a18] hover:text-[#c07a1a] text-sm py-2 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mr-2">
              <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
              />
            </svg>
            Login with Apple
          </Button>
          <Button 
            variant="outline" 
            type="button"
            className="w-full border border-[#e8e0d0] hover:border-[#c07a1a] text-[#1a1a18] hover:text-[#c07a1a] text-sm py-2 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mr-2">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Login with Google
          </Button>
        </div>

        <div className="relative flex items-center justify-center my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#e8e0d0]"></div>
          </div>
          <div className="relative bg-[#faf8f4] px-2 text-xs text-[#999]">
            Or continue with email
          </div>
        </div>

        <div className="space-y-3">
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

          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-[#1a1a18]">
                Password
              </label>
              <a href="#" className="text-xs text-[#c07a1a] hover:text-[#a8680f] transition-colors">
                Forgot?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              required
              className="w-full border border-[#e8e0d0] focus:border-[#c07a1a] bg-white text-[#1a1a18] placeholder-[#bbb] rounded-lg px-4 py-2 text-sm transition-colors"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#c07a1a] hover:bg-[#a8680f] text-white font-semibold py-2 rounded-lg text-sm transition-colors mt-4"
          >
            Login
          </Button>
        </div>

        <p className="text-center text-xs text-[#666]">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-[#c07a1a] hover:text-[#a8680f] font-semibold transition-colors">
            Sign up
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
