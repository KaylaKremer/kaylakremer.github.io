import React from 'react';
import PropTypes from 'prop-types';
import styles from './link.module.scss';

const Link = ({ children }) => {
    return <div className={styles.link}>{children}</div>;
};

export default Link;
