import React from "react"
import { graphql } from 'gatsby';

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 70,
    }
}

const BlogPost = ({ data: { contentfulBlogPost } }) => (
  <div style={styles.wrapper}>
      <h1>{contentfulBlogPost.title}</h1>
      <hr width="100%"/>
      <div dangerouslySetInnerHTML={{ __html: contentfulBlogPost.body.childMarkdownRemark.html }} />
  </div>
);

export const query = graphql`
    query MyQuery($slug: String) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            body {
            childMarkdownRemark {
                html
            }
            }
        }
        }
`;


export default BlogPost
