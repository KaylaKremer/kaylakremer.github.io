import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ children }) => {
    return <div className={styles.button}>{children}</div>;
};

export default Button;
