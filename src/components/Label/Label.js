import React from 'react';
import Tooltip from 'components/Tooltip/Tooltip';
import PropTypes from 'prop-types';
import styles from './label.module.scss';

const Label = ({ label, tooltip = null }) => {
    return (
        <div className={styles.label}>
            <label htmlFor={label} aria-label={label}>
                {label}
            </label>
            {tooltip && <Tooltip className="tooltip-right" tooltip={tooltip} />}
        </div>
    );
};

Label.propTypes = {
    tooltip: PropTypes.string,
    label: PropTypes.string
};

export default Label;
