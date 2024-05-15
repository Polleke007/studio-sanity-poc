import {defineField, defineType} from 'sanity'

export const expertAdvicesTitles = defineType({
  name: 'expertAdvicesTitles',
  title: 'Expert Advice Titles',
  type: 'document',
  fields: [
    defineField({
      name: 'advice',
      type: 'string',
      title: 'Advice'
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'Advice URL'
    }),
  ]
})