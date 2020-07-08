import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ type, label, onClick }) => (
    <button className={styles.button} type={type} onClick={onClick || null}>
        {label}
    </button>
);

Button.prototypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
