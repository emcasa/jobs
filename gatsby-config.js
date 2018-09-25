const THEME_COLOR = '#F50057';

module.exports = {
  siteMetadata: {
    title: 'EmCasa | Jobs',
    themeColor: THEME_COLOR
  },
  plugins: [
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: THEME_COLOR,
        theme_color: THEME_COLOR,
        display: 'minimal-ui',
        icon: 'src/images/emcasa-icon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
