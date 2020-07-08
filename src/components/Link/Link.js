import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './link.module.scss';

const Link = ({ to, label }) => {
    return (
        <RouterLink to={to} activeClassName={styles.link}>
            {label}
        </RouterLink>
    );
};

Link.propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    label: PropTypes.string
};

export default Link;
