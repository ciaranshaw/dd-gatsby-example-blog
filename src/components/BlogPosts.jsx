import React from 'react';
import { Link } from 'gatsby';

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
    },
    post: {
        width: 400,
        border: '1px solid #cccccc',
        padding: 20,
        margin: 20,
        borderRadius: 3,
        textDecoration: 'none',
        color: 'black',
    },
    title: {
        marginBottom: 20,
    },

    postsWrapper: {
        display: 'flex',
    }
};

export default ({ posts }) => (
    <div style={styles.wrapper}>
        <h3>Blog Posts</h3>
        <div style={styles.postsWrapper}>
            {posts.map(item => (
                <Link style={styles.post} to={`/blog/${item.slug}`}>
                    <h4 style={styles.title}>{item.title}</h4>
                    <hr style={{ marginBottom: 20 }} />
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </Link>
            ))}
        </div>
    </div>
);