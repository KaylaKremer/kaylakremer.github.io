import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/Navigation/Navigation';
import styles from './header.module.scss';

const Header = ({ children }) => (
    <header className={styles.header}>
        <Navigation />
        {children}
    </header>
);

Header.propTypes = {
    children: PropTypes.node
};

export default Header;
