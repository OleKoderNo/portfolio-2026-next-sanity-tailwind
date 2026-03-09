import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";

// Creates locale-aware middleware based on the routing setup above
export default createMiddleware(routing);

// Tells Next.js where this middleware should run
export const config = {
	// Run on all normal pages, but ignore:
	// - API routes
	// - internal Next.js files
	// - Vercel internals
	// - files like images, favicon, etc.
	matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
