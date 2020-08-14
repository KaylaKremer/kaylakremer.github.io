import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ tooltip, className }) => (
    <div className={className} tooltip={tooltip} />
);

Tooltip.propTypes = {
    tooltip: PropTypes.string,
    className: PropTypes.string
};

export default Tooltip;
