import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({
    type,
    icon = null,
    onClick = null,
    ariaLabel = null,
    children
}) => (
    <button
        type={type}
        className={`${icon ? styles[`${icon}`] : `${styles.button}`} cursor`}
        onClick={onClick}
        aria-label={ariaLabel}
    >
        {children}
    </button>
);

Button.prototypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.string,
    ariaLabel: PropTypes.string,
    children: PropTypes.node
};

export default Button;
