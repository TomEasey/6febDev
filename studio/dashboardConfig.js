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
                  buildHookId: '5e3c4c47399c2905e2079776',
                  title: 'Sanity Studio',
                  name: '6febDev-studio',
                  apiId: '5cd7d269-87e7-4efa-bb4d-bb31f1140d78'
                },
                {
                  buildHookId: '5e3c4c47a140e10237ec4f5d',
                  title: 'Blog Website',
                  name: '6febDev',
                  apiId: '78a98604-94ce-4921-9fe3-e858142164e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomEasey/6febDev',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://6febDev.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
