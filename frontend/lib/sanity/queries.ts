// GROQ is Sanity's query language.
// next-sanity provides a helper that adds syntax highlighting and typing.
import { groq } from "next-sanity";

/*
  Home Page Query

  This single query fetches all data needed for the portfolio homepage.
  Fetching everything in one request improves performance and simplifies
  server-side rendering in Next.js.

  The query returns:

  - projects
  - experience
  - about page content
  - technology tags

  `$locale` is passed from Next.js and selects the correct translated field.
*/

export const homePageQuery = groq`
{
  // Fetch all projects ordered by rank
  "projects": *[_type == "project"] | order(orderRank asc){
    _id,

    // Select the localized title based on the current locale
    "title": title[$locale],

    // Slug used for dynamic routing
    "slug": slug.current,

    // Short preview text shown in project cards
    "excerpt": cardExcerpt[$locale],

    // Full description for project pages
    "description": description[$locale],

    // Main project image
    cardImage,

    // External links
    liveUrl,
    githubUrl,

    // Expand referenced technologies
    "technologies": technologies[]->{
      _id,
      title,
      "slug": slug.current,
      skillLevel
    }
  },

  // Fetch work / internship experience
  "experience": *[_type == "experience"] | order(orderRank asc){
    _id,
    company,

    // Localized fields
    "dateLabel": dateLabel[$locale],
    "body": body[$locale]
  },

  // Fetch about page content
  "about": *[_type == "aboutPage"][0]{
    "intro": intro[$locale],
    "hobbiesTitle": hobbiesTitle[$locale],
    "hobbiesBody": hobbiesBody[$locale],
    "volunteeringTitle": volunteeringTitle[$locale],
    "volunteeringBody": volunteeringBody[$locale]
  },

  // Fetch technology tags used for filtering projects
  "technologies": *[_type == "technology"] | order(title asc){
    _id,
    title,
    "slug": slug.current,
    skillLevel
  }
}
`;
