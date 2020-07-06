import React from 'react';
import PropTypes from 'prop-types';
import styles from './error.module.scss';

const Error = ({ children }) => {
    return <div className={styles.error}>{children}</div>;
};

export default Error;
