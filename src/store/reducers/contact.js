import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/utils';

const initialState = {
    modal: false,
    loading: false,
    error: null,
    success: null
};

const sendFormInit = state => {
    return updateState(state, { loading: true });
};

const formFail = (state, action) => {
    return updateState(state, {
        loading: false,
        error: action.error
    });
};

const formSuccess = (state, action) => {
    return updateState(state, {
        loading: false,
        success: action.success
    });
};

const hideModal = state => {
    return updateState(state, {
        modal: false,
        loading: false,
        error: null,
        success: null
    });
};

const showModal = state => {
    return updateState(state, {
        modal: true,
        loading: false,
        error: null,
        success: null
    });
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_FORM_INIT:
            return sendFormInit(state);
        case actionTypes.FORM_FAIL:
            return formFail(state, action);
        case actionTypes.FORM_SUCCESS:
            return formSuccess(state, action);
        case actionTypes.HIDE_MODAL:
            return hideModal(state);
        case actionTypes.SHOW_MODAL:
            return showModal(state);
        default:
            return state;
    }
};

export default contactReducer;
