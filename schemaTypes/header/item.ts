import {defineField, defineType} from 'sanity'

export const item = defineType({
  name: 'item',
  title: '',
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
      of: [{
        type: 'reference',
        to: [{type: 'item'}]
      }]
    }
  ]
})
