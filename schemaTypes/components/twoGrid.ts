import { defineType} from 'sanity'

export const twoGrid = defineType({
  name: 'twoGrid',
  type: 'object',
  title: '2 Grid',
  fields: [
    {
      name: 'expertAdvice',
      type: 'reference',
      title: 'Expert Advice',
      to: [{type: 'expertAdvice'}]
    },
    {
      name: 'featuredArticle',
      type: 'reference',
      title: 'Featured Article',
      to: [{type: 'featuredArticle'}]
    }
  ]
})