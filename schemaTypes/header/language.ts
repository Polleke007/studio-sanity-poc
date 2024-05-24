import {defineType} from 'sanity'

export const languageItem = defineType({
  name: 'languageItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo'
    },
    {
      name: 'language',
      type: 'string',
      title: 'Language',
      validation: rule => rule.regex(/^[A-Za-z]{2,4}([_-][A-Za-z]{4})?([_-]([A-Za-z]{2}|[0-9]{3}))?$/).error("This is not a valid language, ex: en-US")
    },
  ]
})
