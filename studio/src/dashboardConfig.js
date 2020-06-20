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
                  buildHookId: '5eee4b218ae8d02c1ee3c3f2',
                  title: 'Sanity Studio',
                  name: 'insanityblog-studio',
                  apiId: 'f44a1b99-bc98-49f4-9cda-5bcff5d03edf'
                },
                {
                  buildHookId: '5eee4b21f3b4c852a60a94b3',
                  title: 'Blog Website',
                  name: 'insanityblog',
                  apiId: '746c4d31-f987-42b6-94eb-7fd19bc52b82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ariakerstein/insanityblog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://insanityblog.netlify.app', category: 'apps' }
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
