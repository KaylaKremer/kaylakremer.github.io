import * as actionTypes from './actionTypes';

export const formSuccess = success => ({
    type: actionTypes.FORM_SUCCESS,
    success
});

export const formFail = error => ({
    type: actionTypes.FORM_FAIL,
    error
});

export const formStart = () => ({
    type: actionTypes.FORM_START
});

export const sendForm = formData => {
    return dispatch => {
        console.log('send form');
        dispatch(formStart());
        // Set up POST request for sending form for contact form
    };
};

export const hideModal = () => ({
    type: actionTypes.HIDE_MODAL
});

export const showModal = () => ({
    type: actionTypes.SHOW_MODAL
});
