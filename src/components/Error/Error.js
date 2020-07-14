import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './error.module.scss';

const Error = ({ error }) => <div className={styles.error}>{error}</div>;

const mapStateToProps = state => ({
    error: state.contact.error
});

Error.propTypes = {
    error: PropTypes.string
};

export default connect(mapStateToProps, null)(Error);
