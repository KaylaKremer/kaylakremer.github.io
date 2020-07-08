import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.module.scss';

const Menu = ({ children }) => <div className={styles.menu}>{children}</div>;

Menu.propTypes = {
    children: PropTypes.node
};

export default Menu;
