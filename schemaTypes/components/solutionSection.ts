import { defineType} from 'sanity'

export const solutionSection = defineType({
  name: 'solutionSection',
  type: 'object',
  title: 'Solution Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'solutionItems',
      type: 'array',
      title: 'Solution Teaser',
      of: [{
        type: 'reference',
        to: [{type: 'teaser'}]
      }]
    }
  ]
})