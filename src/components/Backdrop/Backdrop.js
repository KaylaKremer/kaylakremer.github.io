import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './backdrop.module.scss';

const Backdrop = ({ hideModal }) => (
    <div className={styles.backdrop} aria-hidden="true" onClick={hideModal} />
);

const mapDispatchToProps = {
    hideModal: actions.hideModal
};

Backdrop.propTypes = {
    hideModal: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Backdrop);
