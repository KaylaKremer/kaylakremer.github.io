import React from 'react';
import Tooltip from 'components/Tooltip/Tooltip';
import { capitalize } from 'utils';
import PropTypes from 'prop-types';
import styles from './label.module.scss';

const Label = ({ label, error = null, touched = null }) => {
    return (
        <div className={styles.label}>
            <label htmlFor={label} aria-label={label}>
                {capitalize(label)}
            </label>
            {error && touched && (
                <Tooltip className="tooltip-right" tooltip={error} />
            )}
        </div>
    );
};

Label.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    touched: PropTypes.bool
};

export default Label;
