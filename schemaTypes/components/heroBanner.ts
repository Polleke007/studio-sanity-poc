import { defineType} from 'sanity'

export const heroBanner = defineType({
  name: 'heroBanner',
  type: 'document',
  title: 'Hero Banner',
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
      name: 'buttonUrl',
      type: 'url',
      title: 'Button URL'
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text'
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image'
    }
  ]
})