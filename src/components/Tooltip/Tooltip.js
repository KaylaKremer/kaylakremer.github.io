import React from 'react';
import PropTypes from 'prop-types';
import styles from './tooltip.module.scss';

const Tooltip = ({ tooltip, className }) => {
    return (
        <div
            className={`${styles.tooltip} ${styles[`${className}`]}`}
            tooltip={tooltip}
        />
    );
};

Tooltip.propTypes = {
    tooltip: PropTypes.string,
    className: PropTypes.string
};

export default Tooltip;
