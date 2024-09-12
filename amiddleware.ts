import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(req: NextRequest) {
  // Use cookies for token instead of localStorage
  const cookie = cookies().get("userCookie"); // Get the token from cookies
  console.log(cookie);

  // Check if the user is accessing the login page and already has a token
  if (req.nextUrl.pathname === "/login" && cookie) {
    // Redirect to dashboard if the user is logged in and tries to access the login page
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Check if the user is trying to access a protected route (like /dashboard) and doesn't have a token
  if (req.nextUrl.pathname.startsWith("/dashboard") && !cookie) {
    // Redirect to login if token is missing and user is trying to access /dashboard
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Proceed to the next middleware or route handler
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard"], // Apply the middleware to both the login and dashboard routes
};
