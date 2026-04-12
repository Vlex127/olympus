# Supabase Setup Guide

## Steps to set up Supabase authentication:

1. **Create a Supabase Project:**
   - Go to https://app.supabase.com
   - Sign up or log in
   - Click "New Project"
   - Fill in project details and create

2. **Get Your Credentials:**
   - Navigate to Project Settings → API
   - Copy your `Project URL` and `anon public` key

3. **Update .env.local:**
   - Copy the values to your `.env.local` file:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
     ```

4. **Set Up Google OAuth (Optional):**
   - In Supabase: Authentication → Providers → Google
   - Enable Google provider
   - Add your Google OAuth credentials from Google Cloud Console
   - Add `http://localhost:3000/auth/callback` as redirect URI for local development

5. **Email Verification (Optional):**
   - In Supabase: Authentication → Providers → Email
   - Configure email templates if desired
   - Users will receive a confirmation email when signing up

6. **Test Authentication:**
   - Run `npm run dev`
   - Navigate to `/signup` and create an account
   - Test login at `/login`
