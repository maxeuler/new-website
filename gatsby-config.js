module.exports = {
  siteMetadata: {
    title: 'max euler',
    description: 'Portolio site of Web Developer Max Euler',
    author: 'max euler',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'data',
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './images/icon.ico',
      },
    },
  ],
};
