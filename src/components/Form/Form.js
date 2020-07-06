import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.scss';

const Form = ({ children }) => {
    return <div className={styles.form}>{children}</div>;
};

export default Form;
