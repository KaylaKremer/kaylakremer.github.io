import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({
    type,
    className = '',
    onClick = null,
    ariaLabel = null,
    children
}) => (
    <button
        type={type}
        className={`${styles.button} ${className}`}
        onClick={onClick}
        aria-label={ariaLabel}
    >
        {children}
    </button>
);

Button.prototypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    ariaLabel: PropTypes.string,
    children: PropTypes.node
};

export default Button;
