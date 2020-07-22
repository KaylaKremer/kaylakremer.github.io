import React from 'react';
import Cursor from 'components/Cursor/Cursor';
import PropTypes from 'prop-types';
import styles from './about.module.scss';

const About = props => {
    return (
        <div className={styles.about}>
            <Cursor />
            <h1>About</h1>
        </div>
    );
};

export default About;
