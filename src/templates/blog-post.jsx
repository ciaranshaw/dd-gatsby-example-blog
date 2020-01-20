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

const BlogPost = ({ }) => (
  <div style={styles.wrapper}>
      <h1>My Title</h1>
      <hr width="100%"/>
      <div dangerouslySetInnerHTML={{ __html: '<p>Hello</p>' }} />
  </div>
);


export default BlogPost
