import {defineType, defineField} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateLabel',
      title: 'Date label',
      type: 'localizedString',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'localizedText',
    }),
    defineField({
      name: 'orderRank',
      title: 'Order rank',
      type: 'number',
    }),
  ],
})
