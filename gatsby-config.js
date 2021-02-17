require('dotenv').config()

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
        icon: `src/assets/icons/favicon.png`,
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
    },
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
                process.env.GA_TRACKING_ID
            ],
            // This object gets passed directly to the gtag config command
            // This config will be shared across all trackingIds
            gtagConfig: {
                // optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: true,
                cookie_expires: 0,
            },
                pluginConfig: {
                head: true,
            },
        },
    }
  ]
};
