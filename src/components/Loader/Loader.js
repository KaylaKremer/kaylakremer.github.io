import React from 'react';
import PropTypes from 'prop-types';
import styles from './loader.module.scss';

const Loader = ({ children }) => (
    <div className={styles.loader}>{children}</div>
);

export default Loader;
