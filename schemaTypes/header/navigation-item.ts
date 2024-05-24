import {defineField, defineType} from 'sanity'

export const navigationItem = defineType({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text'
    }),
    defineField({
      name: 'url',
      type: 'slug',
      title: 'Slug'
    }),
    {
      name: 'children',
      type: 'array',
      title: '',
      validation: rule => rule.max(3),
      of: [{
        type: 'reference',
        to: [{type: 'item'}]
      }]
    }
  ]
})
