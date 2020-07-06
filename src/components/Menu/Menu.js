import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.module.scss';

const Menu = ({ children }) => {
    return <div className={styles.menu}>{children}</div>;
};

export default Menu;
