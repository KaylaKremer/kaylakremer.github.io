import React from 'react';
import PropTypes from 'prop-types';
import styles from './image.module.scss';

const Image = ({ src, alt }) => (
    <img src={src} alt={alt} className={styles.image} />
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

export default Image;
