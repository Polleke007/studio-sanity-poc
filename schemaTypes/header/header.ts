import { defineType } from 'sanity'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'navigationItems',
      type: 'array',
      title: '',
      of: [{
        type: 'reference',
        to: [{type: 'navigationItem'}]
      }]
    },
    {
      name: 'languageItems',
      type: 'array',
      title: '',
      validation: rule => rule.max(5),
      of: [{
        type: 'reference',
        to: [{type: 'languageItem'}]
      }]
    }
  ],
  preview: {
  select: {
    title: '',
    subtitle: ''
  },
  prepare(selection) {
    return {
      title: 'Header',
      subtitle: ``
    }
  }
}
})
