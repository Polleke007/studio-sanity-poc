import {defineField, defineType} from 'sanity'

export const image = defineType({
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
      name: 'expertAdvices',
      type: 'reference',
      title: '',
      to: [{type: 'expertAdvicesTitles'}]
    }),
  ]
})