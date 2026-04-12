import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export default async function AuthCallback({
  searchParams,
}: {
  searchParams: { code?: string; error?: string };
}) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Handle OAuth callback
  if (searchParams.code) {
    try {
      const { error: sessionError } = await supabase.auth.exchangeCodeForSession(
        searchParams.code
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

  if (searchParams.error) {
    return redirect(`/login?error=${searchParams.error}`);
  }

  // If no code or error, redirect to login
  return redirect("/login");
}
