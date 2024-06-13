import { defineType} from 'sanity'

export const referencedClients = defineType({
  name: 'referencedClients',
  type: 'document',
  title: 'Referenced Clients',
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
      name: 'referencedClientsItems',
      type: 'array',
      title: '',
      of: [{
        type: 'reference',
        to: [{type: 'teaser'}]
      }]
    }
  ]
})