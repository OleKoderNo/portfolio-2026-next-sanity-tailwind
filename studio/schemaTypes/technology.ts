import {defineField, defineType} from 'sanity'

export const technology = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skillLevel',
      title: 'Skill level',
      description: 'Rate your skill from 1 to 5.',
      type: 'number',
      options: {
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
          {title: '5', value: 5},
        ],
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'featured',
      title: 'Featured in tech stack',
      type: 'boolean',
      description: 'Show this technology in the main tech stack section.',
      initialValue: true,
    }),
    defineField({
      name: 'orderRank',
      title: 'Order rank',
      type: 'string',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      skillLevel: 'skillLevel',
      featured: 'featured',
    },
    prepare({title, skillLevel, featured}) {
      return {
        title,
        subtitle: `${featured ? 'Featured • ' : ''}Skill: ${skillLevel}/5`,
      }
    },
  },
})
