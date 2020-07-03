import * as actionTypes from './actionTypes';

export const emailSuccess = () => {
  return {
    type: actionTypes.EMAIL_SUCCESS
  };
};

export const emailFail = error => {
  return {
    type: actionTypes.EMAIL_FAIL,
    error
  };
};

export const emailStart = () => {
  return {
    type: actionTypes.EMAIL_START
  };
};

export const emailSend = formData => {
  return dispatch => {
    dispatch(emailStart());
    // Set up POST request for sending email for contact form
  };
};
