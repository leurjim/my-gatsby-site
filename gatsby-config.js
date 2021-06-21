module.exports = {
  siteMetadata: {
    title: "my-gatsby-site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "h3cNKHLnoafSw0lVHqP4yrWe-nI-_juYqxTKCNSfecc",
        spaceId: "l3hubttpv9kn",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
