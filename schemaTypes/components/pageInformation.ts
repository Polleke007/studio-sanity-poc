import { defineType} from 'sanity'

export const pageInformation = defineType({
  name: 'pageInformation',
  title: 'Page Information',
  type: 'object',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Title'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    }
  ]
})