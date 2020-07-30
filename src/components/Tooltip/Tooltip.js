import React from 'react';
import PropTypes from 'prop-types';
import styles from './tooltip.module.scss';

const Tooltip = ({ tooltip, direction }) => {
    return (
        <div
            className={`${styles.tooltip} ${styles[direction]}`}
            tooltip={tooltip}
        />
    );
};

Tooltip.propTypes = {
    tooltip: PropTypes.string,
    direction: PropTypes.string
};

export default Tooltip;
