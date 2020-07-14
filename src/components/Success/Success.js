import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './success.module.scss';

const Success = ({ success }) => (
    <div className={styles.success}>{success}</div>
);

const mapStateToProps = state => ({
    success: state.contact.success
});

Success.propTypes = {
    success: PropTypes.string
};

export default connect(mapStateToProps, null)(Success);
