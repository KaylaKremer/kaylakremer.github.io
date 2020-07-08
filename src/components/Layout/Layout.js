import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
    <div className={styles.layout}>
        <main>{children}</main>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
