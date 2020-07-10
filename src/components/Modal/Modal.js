import React from 'react';
import Backdrop from 'components/Backdrop/Backdrop';
import PropTypes from 'prop-types';
import styles from './modal.module.scss';

const Modal = ({ children }) => (
    <>
        <Backdrop />
        <div className={styles.modal}>Modal!</div>
    </>
);

export default Modal;
