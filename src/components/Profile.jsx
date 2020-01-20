import React from 'react';

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
    },
    image: {
        height: 300,
        width: 300,
    },
    name: {
        fontSize: 50,
    },
    github: {
        fontSize: 20,
        color: 'black',
        marginBottom: 30
    },
    description: {
        width: 220
    }
    
}

class Profile extends React.PureComponent {
    render() {
        const { name, githubUrl, description, imageUrl } = this.props;

        return (
            <div style={styles.wrapper}>
                <img style={styles.image} src={imageUrl}></img>
                <h2 style={styles.name}>{name}</h2>
                <a style={styles.github} href={githubUrl}>Github</a>
                <p style={styles.description}>{description}</p>
            </div>
        );
    }
};

export default Profile;