import { defineType } from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'pageInformation',
      title: 'Page Information',
      type: 'pageInformation'
    },
    {
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'heroBanner'
    },
    {
      name: 'solutionSection',
      title: 'Solution Section',
      type: 'solutionSection'
    },
    {
      name: 'referencedClients',
      title: 'Referenced Clients',
      type: 'referencedClients'
    },
    {
      name: 'joinUs',
      title: 'Join Us',
      type: 'joinUs'
    },
    {
      name: 'twoGrid',
      title: 'Two Grid',
      type: 'twoGrid'
    }
  ],
  preview: {
    select: {
      title: '',
      subtitle: ''
    },
    prepare(selection) {
      return {
        title: 'Landing Page',
        subtitle: `Landing page for the initial view of the website`
      }
    }
  }
})
