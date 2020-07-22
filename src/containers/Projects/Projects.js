import React from 'react';
import Cursor from 'components/Cursor/Cursor';
import PropTypes from 'prop-types';
import styles from './projects.module.scss';

const Projects = props => {
    return (
        <div className={styles.projects}>
            <Cursor />
            <h1>Projects</h1>
        </div>
    );
};

export default Projects;
