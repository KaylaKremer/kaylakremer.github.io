import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';

const Footer = ({ children }) => (
    <footer className={styles.footer}>{children}</footer>
);

export default Footer;
