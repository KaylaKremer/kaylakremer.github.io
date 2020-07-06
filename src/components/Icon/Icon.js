import React from 'react';
import PropTypes from 'prop-types';
import styles from './icon.module.scss';

const Icon = ({ children }) => {
    return <div className={styles.icon}>{children}</div>;
};

export default Icon;
