import * as actionTypes from './actionTypes';

export const emailSuccess = () => ({
    type: actionTypes.EMAIL_SUCCESS
});

export const emailFail = error => ({
    type: actionTypes.EMAIL_FAIL,
    error
});

export const emailStart = () => ({
    type: actionTypes.EMAIL_START
});

export const emailSend = formData => {
    return dispatch => {
        dispatch(emailStart());
        // Set up POST request for sending email for contact form
    };
};

export const hideModal = () => ({
    type: actionTypes.HIDE_MODAL
});

export const showModal = () => ({
    type: actionTypes.SHOW_MODAL
});
