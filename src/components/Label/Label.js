import React from 'react';
import { capitalize } from 'utils';
import PropTypes from 'prop-types';
import styles from './label.module.scss';

const Label = ({ label }) => (
    <label className={styles.label} htmlFor={label} aria-label={label}>
        {capitalize(label)}
    </label>
);

Label.propTypes = {
    label: PropTypes.string
};

export default Label;
