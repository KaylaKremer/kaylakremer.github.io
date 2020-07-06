import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const Header = ({ children }) => {
    return <div className={styles.header}>{children}</div>;
};

export default Header;
