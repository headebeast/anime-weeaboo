module.exports = {
  pathPrefix: `/anime-weeaboo`,
  siteMetadata: {
    title: 'Anime Weeaboo',
    subtitle: `Anime`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "heade.test",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
      }
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
