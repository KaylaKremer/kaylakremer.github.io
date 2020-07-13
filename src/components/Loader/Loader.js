import React from 'react';
import styles from './loader.module.scss';

const Loader = () => (
    <div className={styles.loader}>
        <div className={`${styles.triangle} ${styles.invert}`} />
        <div className={`${styles.triangle} ${styles.invert}`} />
        <div className={styles.triangle} />
        <div className={`${styles.triangle} ${styles.invert}`} />
        <div className={`${styles.triangle} ${styles.invert}`} />
        <div className={styles.triangle} />
        <div className={`${styles.triangle} ${styles.invert}`} />
        <div className={styles.triangle} />
        <div className={`${styles.triangle} ${styles.invert}`} />
    </div>
);

export default Loader;
