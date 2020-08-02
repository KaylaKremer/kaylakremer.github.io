import React from 'react';
import { capitalize } from 'utils';
import PropTypes from 'prop-types';

const Label = ({ label, className }) => (
    <label className={className} htmlFor={label} ariaLabel={label}>
        {capitalize(label)}
    </label>
);

Label.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string
};

export default Label;
