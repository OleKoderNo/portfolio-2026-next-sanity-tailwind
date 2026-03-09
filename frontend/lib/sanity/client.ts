// Import the helper from the next-sanity toolkit.
// This creates a configured client used to query the Sanity API.
import { createClient } from "next-sanity";

// Read environment variables from .env.local.
// NEXT_PUBLIC_ variables are safe to expose to the browser.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

// API version determines which version of the Sanity API we target.
// Using a fixed date prevents breaking changes from affecting the app.
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

// Validate required environment variables early.
// If these are missing the app should fail immediately.
if (!projectId) {
	throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!dataset) {
	throw new Error("Missing NEXT_PUBLIC_SANITY_DATASET");
}

// Create and export the Sanity client.
// This client will be reused throughout the app when fetching data.
export const sanityClient = createClient({
	projectId,
	dataset,
	apiVersion,

	// When true, data is served from the Sanity CDN.
	// This is faster but slightly delayed when publishing new content.
	// Perfect for production portfolio sites.
	useCdn: true,
});
