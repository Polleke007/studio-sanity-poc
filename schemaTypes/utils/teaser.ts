import {defineField, defineType} from 'sanity'

export const teaser = defineType({
  name: 'teaser',
  title: 'Teaser',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    }),
    defineField({
      name: 'buttonUrl',
      type: 'url',
      title: 'Button URL'
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      title: 'Button Text'
    }),
    defineField({
      name: 'quote',
      type: 'string',
      title: 'Quote'
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image'
    })
  ]
})
