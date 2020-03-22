export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e76942e08cbd0556f81189f',
                  title: 'Sanity Studio',
                  name: 'oasen-corona-cms-studio',
                  apiId: '486a4283-2725-4c0c-bc1c-6e37782a1953'
                },
                {
                  buildHookId: '5e76942e4fee5d94575610d6',
                  title: 'Blog Website',
                  name: 'oasen-corona-cms',
                  apiId: '7080471a-fa74-4687-8137-fc67f9e66fc9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/orsolli/oasen-corona-cms',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://oasen-corona-cms.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent resources', order: '_createdAt desc', types: ['book'] },
      layout: { width: 'medium' }
    }
  ]
}
