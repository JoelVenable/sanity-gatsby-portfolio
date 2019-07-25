export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d39c97395410301806cccae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-67my7rzh',
                  apiId: 'f7902b6d-60fe-4515-8a35-296ede1dbec3'
                },
                {
                  buildHookId: '5d39c973fbf71b8718853824',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jh7ottq5',
                  apiId: '859a128d-c804-438e-a0c5-8148e2e4718b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoelVenable/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jh7ottq5.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
