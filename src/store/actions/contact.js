import emailjs from 'emailjs-com';
import * as actionTypes from './actionTypes';

export const formSuccess = success => ({
    type: actionTypes.FORM_SUCCESS,
    success
});

export const formFail = error => ({
    type: actionTypes.FORM_FAIL,
    error
});

export const sendFormInit = () => ({
    type: actionTypes.SEND_FORM_INIT
});

export const sendForm = form => {
    return dispatch => {
        dispatch(sendFormInit());
        const templateParams = {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message
        };
        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(result => {
                dispatch(formSuccess(result));
            })
            .catch(error => {
                dispatch(formFail(error));
            });
    };
};

export const hideModal = () => ({
    type: actionTypes.HIDE_MODAL
});

export const showModal = () => ({
    type: actionTypes.SHOW_MODAL
});
