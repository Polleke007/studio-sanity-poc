import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import "./styling/styling.css"

export default defineConfig({
  name: 'default',
  title: 'Sanity POC',

  projectId: process.env.PROJECT_ID as string,
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    vercelDeployTool()
  ],

  schema: {
    types: schemaTypes,
  }
})
