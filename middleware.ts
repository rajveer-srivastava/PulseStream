import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a route matcher for public routes like sign-in and sign-up
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware((auth, request) => {
  // Check if the current request is for a public route
  if (!isPublicRoute(request)) {
    // Protect all other routes by enforcing authentication
    auth().protect();
  }
});

// Middleware configuration for route matching
export const config = {
  matcher: [
    // Exclude static files and Next.js internals
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Apply middleware to API and TRPC routes
    "/(api|trpc)(.*)",
  ],
};
