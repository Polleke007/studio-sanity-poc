import { defineType} from 'sanity'

export const joinUs = defineType({
  name: 'joinUs',
  type: 'document',
  title: 'Join Us',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'joinUsClientItems',
      type: 'array',
      title: '',
      of: [{
        type: 'reference',
        to: [{type: 'teaser'}]
      }]
    },
    {
      name: 'buttonUrl',
      type: 'string',
      title: 'Button URL'
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text'
    },
    {
      name: 'joinUsClients',
      type: 'array',
      title: '',
      of: [{
        type: 'reference',
        to: [{type: 'clientImage'}]
      }]
    },
  ]
})