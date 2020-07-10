import React from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Modal/Modal';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';

const Contact = ({ modal, hideModal, showModal }) => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            {modal && <Modal />}
            <button onClick={showModal}>Open Modal</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        modal: state.contact.modal
    };
};

const mapDispatchToProps = {
    hideModal: actions.hideModal,
    showModal: actions.showModal
};

Contact.propTypes = {
    modal: PropTypes.bool,
    hideModal: PropTypes.func,
    showModal: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
