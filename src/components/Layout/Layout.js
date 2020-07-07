import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
