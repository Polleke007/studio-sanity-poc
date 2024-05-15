import {defineField, defineType} from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageInformation',
      type: 'object',
      title: 'Page Information',
      fields: [
        defineField({
          name: 'pageName',
          type: 'string',
          title: 'Page Name'
        }),
        defineField({
          name: 'slug',
          type: 'slug',
          title: 'Slug'
        }),
        defineField({
          name: 'seoTitle',
          type: 'string',
          title: 'SEO Title'
        }),
        defineField({
          name: 'description',
          type: 'string',
          title: 'Description'
        }),
      ]
    }),
    defineField({
      name: 'heroBanner',
      type: 'object',
      title: 'Hero Banner',
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
          name: 'buttonUrl',
          type: 'url',
          title: 'Button URL'
        }),
        defineField({
          name: 'buttonText',
          type: 'string',
          title: 'Button Text'
        }),
        defineField({
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image'
        })
      ]
    }),
    defineField({
      name: 'solutionSection',
      type: 'object',
      title: 'Solution Section',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title'
        }),
        defineField({
          name: 'solutionItems',
          type: 'array',
          title: 'Solution Teaser',
          of: [{
            type: 'reference',
            to: [{type: 'teaser'}]
          }]
        })
      ]
    }),
    defineField({
      name: 'referenceClients',
      type: 'object',
      title: 'Referenced Clients',
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
          name: 'referencedClientsItems',
          type: 'array',
          title: '',
          of: [{
            type: 'reference',
            to: [{type: 'teaser'}]
          }]
        })
      ]
    }),
    defineField({
      name: 'joinUs',
      type: 'object',
      title: 'Join Us',
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
          name: 'joinUsClientItems',
          type: 'array',
          title: '',
          of: [{
            type: 'reference',
            to: [{type: 'teaser'}]
          }]        }),
        defineField({
          name: 'buttonUrl',
          type: 'string',
          title: 'Button URL'
        }),
        defineField({
          name: 'buttonText',
          type: 'string',
          title: 'Button Text'
        }),
        defineField({
          name: 'joinUsClients',
          type: 'array',
          title: '',
          of: [{
            type: 'reference',
            to: [{type: 'clientImage'}]
          }]
        }),
      ]
    }),
    defineField({
      name: 'expertAdvice',
      type: 'object',
      title: 'Expert Advice',
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
          name: 'buttonUrl',
          type: 'string',
          title: 'Button URL'
        }),
        defineField({
          name: 'buttonText',
          type: 'string',
          title: 'Button Text'
        }),
        defineField({
          name: 'expertAdvices',
          type: 'array',
          title: 'Expert Advice',
          of: [{
            type: 'reference',
            to: [{type: 'expertAdvicesTitles'}]
          }]
        })
      ]
    }),
    defineField({
      name: 'featuredArticle',
      type: 'object',
      title: 'Featured Article',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
          title: 'Heading'
        }),
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title'
        }),
        defineField({
          name: 'subtitle',
          type: 'array',
          of: [{type: 'block'}]
        }),
        defineField({
          name: 'buttonUrl',
          type: 'string',
          title: 'Button URL'
        })
      ]
    })
  ]
})
