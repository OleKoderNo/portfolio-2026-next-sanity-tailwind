// The Sanity image builder lets us generate optimized image URLs
// with resizing, cropping and format conversion.

import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "./client";

// Create a builder instance connected to our Sanity client.
const builder = createImageUrlBuilder(sanityClient);

// Helper function used throughout the app.
// It converts a Sanity image object into a URL builder that can be modified.
//
// Example:
// const imageUrl = urlFor(project.cardImage).width(1200).url()
export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
