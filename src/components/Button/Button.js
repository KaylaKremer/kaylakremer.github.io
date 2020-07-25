import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ type, onClick = null, ariaLabel = null, children }) => (
    <button
        type={type}
        className={`${styles.button} cursor`}
        onClick={onClick}
        aria-label={ariaLabel}
    >
        {children}
    </button>
);

Button.prototypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    ariaLabel: PropTypes.string,
    children: PropTypes.node
};

export default Button;
