import {defineType, defineField} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'localizedText',
    }),
    defineField({
      name: 'hobbiesTitle',
      title: 'Hobbies title',
      type: 'localizedString',
    }),
    defineField({
      name: 'hobbiesBody',
      title: 'Hobbies body',
      type: 'localizedText',
    }),
    defineField({
      name: 'volunteeringTitle',
      title: 'Volunteering title',
      type: 'localizedString',
    }),
    defineField({
      name: 'volunteeringBody',
      title: 'Volunteering body',
      type: 'localizedText',
    }),
  ],
})
