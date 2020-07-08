import React from 'react';
import PropTypes from 'prop-types';
import styles from './error.module.scss';

const Error = ({ error }) => <div className={styles.error}>{error}</div>;

Error.propTypes = {
    error: PropTypes.string
};

export default Error;
