import {defineType, defineField} from 'sanity'

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized string',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'no',
      title: 'Norwegian',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
