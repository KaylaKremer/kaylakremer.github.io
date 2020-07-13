import React from 'react';
import styles from './loader.module.scss';

const Loader = () => (
    <div className={styles.loader}>
        <div className={styles.text}>
            <span className={styles.letter}>L</span>
            <span className={styles.letter}>O</span>
            <span className={styles.letter}>A</span>
            <span className={styles.letter}>D</span>
            <span className={styles.letter}>I</span>
            <span className={styles.letter}>N</span>
            <span className={styles.letter}>G</span>
        </div>
    </div>
);

export default Loader;
