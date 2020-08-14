import React from 'react';
import { connect } from 'react-redux';
import Backdrop from 'components/Backdrop/Backdrop';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './modal.module.scss';

const Modal = ({ hideModal, children }) => {
    const noScroll = () => {
        document
            .querySelector('html')
            .classList.toggle(`${styles['no-scroll']}`);
    };

    const close = () => {
        noScroll();
        hideModal();
    };

    return (
        <div>
            {noScroll()}
            <Backdrop />
            <div className={styles.modal}>
                <Button
                    type="button"
                    icon="close"
                    onClick={close}
                    ariaLabel="close"
                >
                    <div className="fa-layers fa-fw cursor-close">
                        <Icon icon="square" size="2x" color="white" />
                        <Icon icon="window-close" size="2x" />
                    </div>
                </Button>
                <div className={styles.content}>{children}</div>
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
