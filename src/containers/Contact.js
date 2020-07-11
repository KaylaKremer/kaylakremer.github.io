import React from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';

const Contact = ({ modal, showModal }) => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            {modal && <Modal />}
            <Button type="button" onClick={showModal}>
                Open Modal
            </Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        modal: state.contact.modal
    };
};

const mapDispatchToProps = {
    showModal: actions.showModal
};

Contact.propTypes = {
    modal: PropTypes.bool,
    showModal: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
