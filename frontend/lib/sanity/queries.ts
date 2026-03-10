import { groq } from "next-sanity";

export const homePageQuery = groq`
{
  "projects": *[_type == "project"] | order(orderRank asc){
    _id,
    "title": title[$locale],
    "slug": slug.current,
    "excerpt": cardExcerpt[$locale],
    "description": description[$locale],
    cardImage,
    liveUrl,
    githubUrl,
    "technologies": technologies[]->{
      _id,
      title,
      "slug": slug.current,
      skillLevel
    }
  },

  "experience": *[_type == "experience"] | order(orderRank asc){
    _id,
    company,
    "dateLabel": dateLabel[$locale],
    "body": body[$locale]
  },

  "about": *[_type == "aboutPage"][0]{
    "intro": intro[$locale],
    "hobbiesTitle": hobbiesTitle[$locale],
    "hobbiesBody": hobbiesBody[$locale],
    "volunteeringTitle": volunteeringTitle[$locale],
    "volunteeringBody": volunteeringBody[$locale]
  },

  "technologies": *[_type == "technology" && featured == true] | order(orderRank asc){
    _id,
    title,
    "slug": slug.current,
    skillLevel,
    featured
  }
}
`;

export const aboutPageQuery = groq`
*[_type == "aboutPage"][0]{
  "intro": intro[$locale],
  "hobbiesTitle": hobbiesTitle[$locale],
  "hobbiesBody": hobbiesBody[$locale],
  "volunteeringTitle": volunteeringTitle[$locale],
  "volunteeringBody": volunteeringBody[$locale]
}
`;

export const projectsPageQuery = groq`
*[_type == "project"] | order(orderRank asc){
  _id,
  "title": title[$locale],
  "slug": slug.current,
  "excerpt": cardExcerpt[$locale],
  "description": description[$locale],
  cardImage,
  liveUrl,
  githubUrl,
  "technologies": technologies[]->{
    _id,
    title,
    "slug": slug.current,
    skillLevel
  }
}
`;
