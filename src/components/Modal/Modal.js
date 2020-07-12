import React from 'react';
import { connect } from 'react-redux';
import Backdrop from 'components/Backdrop/Backdrop';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './modal.module.scss';

const Modal = ({ hideModal, children }) => {
    return (
        <div>
            <Backdrop />
            <div className={styles.modal}>
                <Button
                    type="button"
                    className={styles['modal-close-button']}
                    onClick={hideModal}
                    ariaLabel="close"
                >
                    <Icon icon="window-close" size="2x" />
                </Button>
                <div className={styles['modal-content']}>{children}</div>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    hideModal: actions.hideModal
};

Modal.propTypes = {
    hideModal: PropTypes.func,
    children: PropTypes.node
};

export default connect(null, mapDispatchToProps)(Modal);
