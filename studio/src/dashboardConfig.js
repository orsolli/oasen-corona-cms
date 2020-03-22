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
                  buildHookId: '5e76c091ab731bdce980b7d3',
                  title: 'Oasen-corona',
                  name: 'oasen-corona',
                  apiId: '4a5b15e5-4062-4833-9cd6-d2099b9db201'
                },
                {
                  buildHookId: '5e76942e08cbd0556f81189f',
                  title: 'Sanity Studio',
                  name: 'oasen-corona-cms-studio',
                  apiId: '486a4283-2725-4c0c-bc1c-6e37782a1953'
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
      options: { title: 'Recent resources', order: '_createdAt desc', types: ['book', 'stream', 'game', 'bibleverse', 'church', 'gym'] },
      layout: { width: 'medium' }
    }
  ]
}
