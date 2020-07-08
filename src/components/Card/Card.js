import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ title, content }) => (
    <div className={styles.card}>
        <h1 className={styles['card-title']}>{title}</h1>
        <p className={styles['card-content']}>{content}</p>
    </div>
);

Card.prototypes = {
    title: PropTypes.string,
    content: PropTypes.string
};

export default Card;
