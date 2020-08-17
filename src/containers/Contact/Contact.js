import React from 'react';
import { connect } from 'react-redux';
import Fade from 'components/Fade/Fade';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import Success from 'components/Success/Success';
import Error from 'components/Error/Error';
import ContactForm from 'components/ContactForm/ContactForm';
import Button from 'components/Button/Button';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './contact.module.scss';

const Contact = ({ loading, success, error, showModal }) => {
    // let modalContent;

    // if (loading) {
    //     modalContent = <Loader />;
    // } else if (success) {
    //     modalContent = <Success />;
    // } else if (error) {
    //     modalContent = <Error />;
    // } else {
    //     modalContent = <ContactForm />;
    // }

    // For testing with just one component:
    const modalContent = <Success />;

    return (
        <div className={styles.contact}>
            <h1>Contact</h1>
            <Fade component="modal">
                <Modal>{modalContent}</Modal>
            </Fade>
            <Button type="button" color="white" onClick={showModal}>
                Open Modal
            </Button>
        </div>
    );
};

const mapStateToProps = state => ({
    loading: state.contact.loading,
    success: state.contact.success,
    error: state.contact.error
});

const mapDispatchToProps = {
    showModal: actions.showModal
};

Contact.propTypes = {
    loading: PropTypes.bool,
    success: PropTypes.string,
    error: PropTypes.string,
    showModal: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
