import { defineType} from 'sanity'

export const featuredArticle = defineType(    {
  name: 'featuredArticle',
  type: 'document',
  title: 'Featured Article',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'buttonUrl',
      type: 'string',
      title: 'Button URL'
    }
  ]
})