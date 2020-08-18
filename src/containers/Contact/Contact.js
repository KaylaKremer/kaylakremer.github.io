import React from 'react';
import { connect } from 'react-redux';
import Fade from 'components/Fade/Fade';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './contact.module.scss';

const Contact = ({ showModal }) => {
    return (
        <div className={styles.contact}>
            <h1>Contact</h1>
            <Fade component="modal">
                <Modal />
            </Fade>
            <Button type="button" color="white" onClick={showModal}>
                Open Modal
            </Button>
        </div>
    );
};

const mapDispatchToProps = {
    showModal: actions.showModal
};

Contact.propTypes = {
    showModal: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Contact);
