import React from "react";
import { graphql } from 'gatsby';
import './index.css';

import Profile from '../components/Profile';
import BlogPosts from '../components/BlogPosts';

const HomePage = ({ pageContext: { profile }, data }) =>  (
  <>
    <Profile
      name={profile.name}
      imageUrl={profile.avatar_url}
      githubUrl={profile.html_url}
      description={profile.bio}
    />
    <BlogPosts
      posts={data.allContentfulBlogPost.edges.map(item => ({
        ...item.node,
        description: item.node.description.childMarkdownRemark.html,
      }))} 
    />
  </>
);

export const query = graphql`
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
`

export default HomePage;

