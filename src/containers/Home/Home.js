import React from 'react';
import Cursor from 'components/Cursor/Cursor';
import PropTypes from 'prop-types';
import styles from './home.module.scss';

const Home = props => {
    return (
        <div className={styles.home}>
            <Cursor />
            <h1>Home</h1>
        </div>
    );
};

export default Home;
