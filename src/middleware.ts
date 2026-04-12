import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect uppercase routes to lowercase
  if (pathname === "/Dashboard") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (pathname === "/Login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname === "/Signup") {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Dashboard", "/Login", "/Signup"],
};
