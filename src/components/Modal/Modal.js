import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.scss';

const Modal = ({ children }) => {
    return <div className={styles.modal}>{children}</div>;
};

export default Modal;
