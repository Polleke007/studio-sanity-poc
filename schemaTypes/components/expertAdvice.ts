import {defineField, defineType} from 'sanity'

export const expertAdvice = defineType({
  name: 'expertAdvice',
  title: 'Expert Advice',
  type: 'document',
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
      type: 'string',
      title: 'Button URL'
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      title: 'Button Text'
    }),
    defineField({
      name: 'expertAdvices',
      type: 'array',
      title: 'Expert Advices',
      of: [{
        type: 'reference',
        to: [{type: 'expertAdvicesTitles'}]
      }]
    })
  ]
})