import React from 'react';
import PropTypes from 'prop-types';
import styles from './image.module.scss';

const Image = ({ children }) => {
    return <div className={styles.image}>{children}</div>;
};

export default Image;
