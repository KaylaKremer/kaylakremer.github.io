import React from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Success from 'components/Success/Success';
import Error from 'components/Error/Error';
import ContactForm from 'components/ContactForm/ContactForm';
import Cursor from 'components/Cursor/Cursor';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './contact.module.scss';

const Contact = ({ modal, loading, success, error, showModal }) => {
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
    // modalContent = <Error />;

    return (
        <div className={styles.contact}>
            <Cursor />
            <h1>Contact</h1>
            {modal && <Modal>{modalContent}</Modal>}
            <Button type="button" onClick={showModal}>
                Open Modal
            </Button>
        </div>
    );
};

const mapStateToProps = state => ({
    modal: state.contact.modal,
    loading: state.contact.loading,
    success: state.contact.success,
    error: state.contact.error
});

const mapDispatchToProps = {
    showModal: actions.showModal
};

Contact.propTypes = {
    modal: PropTypes.bool,
    loading: PropTypes.bool,
    success: PropTypes.string,
    error: PropTypes.string,
    showModal: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
