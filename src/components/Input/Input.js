import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ name, id, type, classNames, ...props }) => (
    <input
        name={name}
        id={id}
        type={type}
        className={`${styles.input} ${classNames.map(
            className => styles[`${className}`]
        )}`}
        {...props}
    />
);

Input.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
};

export default Input;
