import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '86l1kpea',
    dataset: 'production'
  },
  project: {
    basePath: '/studio'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  studioHost:'wajahat123$'
})
