module.exports = {
  siteMetadata: {
    title: 'Anant Platform Playbook',
    description: 'Principles and playbook for building and scaling and a business platform.'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-core',
      options: {
        root: __dirname
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '258835989'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- end -->',
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: []
            }
          }
        ]
      }
    }
  ]
};
