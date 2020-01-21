const path = require('path');
const Github = require('github-api');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(async resolve => {
    const Index = path.resolve('./src/templates/index.jsx');
    const saxon = new Github().getUser('saxoncameron');
    const profile = await saxon.getProfile();

    createPage({
      component: Index,
      path: '/',
      context: {
        profile: profile.data,
      }
    });

    const BlogPost = path.resolve('./src/templates/blog-post.jsx');
    const blogPosts = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
    `);

    blogPosts.data.allContentfulBlogPost.edges.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}`,
        component: BlogPost,
        context: {
          slug: post.node.slug,
        }
      })
    });
  
    resolve();
  });
}