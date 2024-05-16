import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { MyLogo } from './components/Logo'

import "./styling/styling.css"

export default defineConfig({
  name: 'default',
  title: 'Sanity POC',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
  dataset: 'production',
  icon: MyLogo as any,
  plugins: [
    structureTool(),
    visionTool(),
    vercelDeployTool()
  ],

  schema: {
    types: schemaTypes,
  }
})
