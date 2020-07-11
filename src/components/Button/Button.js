import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ type, className = '', onClick, children }) => (
    <button
        type={type}
        className={`${styles.button} ${className} `}
        onClick={onClick}
    >
        {children}
    </button>
);

Button.prototypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    children: PropTypes.node
};

export default Button;
