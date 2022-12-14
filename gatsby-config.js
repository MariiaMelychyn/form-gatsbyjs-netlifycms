module.exports = {
  siteMetadata: {
    title: `test-be`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-237309736-1",
        head: true,
        anonymize: true,
      },
    }
    ],
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-sharp`,

    `gatsby-transformer-sharp`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`,
      footnotes: true,
      gfm: true,
    },
  
  },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
