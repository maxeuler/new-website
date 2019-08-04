const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  var { createPage } = actions;
  var blogTemplate = path.resolve('./src/templates/blog.js');
  var res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  console.log(res);
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
