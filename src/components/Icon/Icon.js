import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './icon.module.scss';

const Icon = ({ icon, link = null, ...options }) => {
    return (
        <>
            {link ? (
                <a href={link}>
                    <FontAwesomeIcon icon={icon} {...options} />
                </a>
            ) : (
                <FontAwesomeIcon icon={icon} {...options} />
            )}
        </>
    );
};

Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    link: PropTypes.string
};

export default Icon;
