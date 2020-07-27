import React from 'react';
import PropTypes from 'prop-types';
import styles from './tooltip.module.scss';

const Tooltip = ({ error, className, children }) => {
    return <div className={styles[`${className}`]}>{children}</div>;
};

Tooltip.propTypes = {
    error: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

export default Tooltip;
