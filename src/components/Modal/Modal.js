import React from 'react';
import { connect } from 'react-redux';
import Backdrop from 'components/Backdrop/Backdrop';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Fade from 'components/Fade/Fade';
import Loader from 'components/Loader/Loader';
import Success from 'components/Success/Success';
import Error from 'components/Error/Error';
import ContactForm from 'components/ContactForm/ContactForm';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './modal.module.scss';

const Modal = ({ hideModal, loading, success, error }) => {
    const noScroll = () => {
        document.body.classList.toggle(`${styles['no-scroll']}`);
    };

    const close = () => {
        noScroll();
        hideModal();
    };

    let modalContent;

    if (loading) {
        modalContent = <Loader />;
    } else if (success) {
        modalContent = <Success />;
    } else if (error) {
        modalContent = <Error />;
    } else {
        modalContent = <ContactForm />;
    }

    // For testing with just one component:
    // const modalContent = <Success />;

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
                <div className={styles.content}>{modalContent}</div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    loading: state.contact.loading,
    success: state.contact.success,
    error: state.contact.error
});

const mapDispatchToProps = {
    hideModal: actions.hideModal
};

Modal.propTypes = {
    hideModal: PropTypes.func,
    loading: PropTypes.bool,
    success: PropTypes.string,
    error: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
