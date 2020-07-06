import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ children }) => {
    return <div className={styles.card}>{children}</div>;
};

export default Card;
