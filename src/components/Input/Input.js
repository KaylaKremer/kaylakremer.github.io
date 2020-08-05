import React from 'react';
import PropTypes from 'prop-types';
import 'components/Field/field.scss';

const Input = ({ name, id, type, className, ...props }) => (
    <input
        name={name}
        id={id}
        type={type}
        className={`${className} cursor-form`}
        placeholder=" "
        {...props}
    />
);

Input.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};

export default Input;
