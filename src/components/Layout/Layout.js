import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
    <main className={styles.layout}>{children}</main>
);

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
