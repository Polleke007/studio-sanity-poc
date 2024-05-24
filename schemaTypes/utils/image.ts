import {defineField, defineType} from 'sanity'

export const image = defineType({
  name: 'clientImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image'
    }),
  ]
})

