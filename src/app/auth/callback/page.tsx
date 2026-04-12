import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export default async function AuthCallback({
  searchParams,
}: {
  searchParams: Promise<{ code?: string; error?: string }>;
}) {
  const params = await searchParams;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Handle OAuth callback
  if (params.code) {
    try {
      const { error: sessionError } = await supabase.auth.exchangeCodeForSession(
        params.code
      );

      if (sessionError) {
        throw sessionError;
      }

      // Successfully authenticated, redirect to dashboard
      return redirect("/dashboard");
    } catch (error) {
      console.error("Auth callback error:", error);
      return redirect("/login?error=auth-failed");
    }
  }

  if (params.error) {
    return redirect(`/login?error=${params.error}`);
  }

  // If no code or error, redirect to login
  return redirect("/login");
}
