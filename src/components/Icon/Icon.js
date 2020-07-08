import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './icon.module.scss';

const Icon = ({ icon, ...options }) => {
    return <FontAwesomeIcon className={styles.icon} icon={icon} />;
};

Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default Icon;
