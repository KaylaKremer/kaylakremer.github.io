import React from 'react';
import PropTypes from 'prop-types';
import styles from './success.module.scss';

const Success = ({ success }) => <div className={styles.success}>Success!</div>;

Success.propTypes = {
    success: PropTypes.string
};

export default Success;
