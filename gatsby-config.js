module.exports = {
  siteMetadata: {
    title: 'Anant Platform Playbook',
    description: 'Principles and playbook for building and scaling and a business platform.'
  },
  plugins: [
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anant Platform Playbook`,
        short_name: `Playbook`,
        start_url: `/`,
        /*background_color: `#f7f0eb`,
        theme_color: `#a2466c`,*/
        display: `standalone`,
        icon: `src/assets/icons/favicon.jpg`,
      },
    },
    {
        resolve: `gatsby-plugin-sharp`,
        options: {
            // Available options and their defaults:
            base64Width: 20,
            forceBase64Format: `png`, // valid formats: png,jpg,webp
            useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
            stripMetadata: true,
            defaultQuality: 50,
            failOnError: true,
        },
    },
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
