module.exports = {
  siteMetadata: {
    title: `www.supply-chains.us`,
    description: `supply-chains.us is a living archive of the geographies, processes, and people behind modern supply chains, particularly those required to make consumer technology.`,
    author: `@aleesteele`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/link.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`, //imports csv files
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/layout`)
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-page-progress`,
    {
      resolve: "gatsby-plugin-page-progress",
        options: {
          includePaths: ["/", { regex: "^/blog" }],
          excludePaths: ["/blog/beep-beep-lettuce"],
          height: 3,
          prependToBody: false,
          color: `#663399`,
          footerHeight: 500,
        }
    }
  ]
}
