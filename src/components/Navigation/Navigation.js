import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation.module.scss';

const Navigation = ({ children }) => {
    return <div className={styles.navigation}>{children}</div>;
};

export default Navigation;
