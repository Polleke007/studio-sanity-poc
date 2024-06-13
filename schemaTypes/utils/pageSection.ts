import { defineType} from 'sanity'

export const pageSection = defineType({
  name: 'pageSection',
  type: 'object',
  title: 'Page Content',
  fields: [
    {
      name: 'pageContent',
      type: 'array',
      title: '',
      of: [{
        type: 'reference',
        to: [{type: 'featuredArticle'}, {type: 'expertAdvice'}, {type: 'clientImage'},
             {type: 'teaser'}, {type: 'heroBanner'}, {type: 'joinUs'}, {type: 'solutionSection'},
             {type: 'referencedClients'}, {type: 'twoGrid'}]
      }]
    }
  ]
})