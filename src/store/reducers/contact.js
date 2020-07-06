import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../utils/utils';

const initialState = {
    loading: false
};

const emailStart = (state, action) => {
    return updateState(state, { loading: true });
};

const emailFail = (state, action) => {
    return updateState(state, { loading: false });
};

const emailSuccess = (state, action) => {
    return updateState(state, {
        loading: false
    });
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EMAIL_START:
            return emailStart(state, action);
        case actionTypes.EMAIL_FAIL:
            return emailFail(state, action);
        case actionTypes.EMAIL_SUCCESS:
            return emailSuccess(state, action);
        default:
            return state;
    }
};

export default contactReducer;
