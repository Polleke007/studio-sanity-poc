import { defineType } from 'sanity'

export const landingPageV2 = defineType({
  name: 'landingPageV2',
  title: 'Landing Page V2',
  type: 'document',
  fields: [
    {
      name: 'pageInformation',
      title: 'Page Information',
      type: 'pageInformation'
    },
    {
      name: 'pageSectionComponents',
      title: 'Page Section',
      type: 'pageSection'
    }
  ],
  preview: {
    select: {
      title: 'pageInformation.pageName',
      subtitle: 'pageInformation.description'
    }
  }
})
