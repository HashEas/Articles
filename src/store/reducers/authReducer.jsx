import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    authenticated: false
};


const authSuccess = (state, action) => {
    return {
        ...state,
        authenticated: true
    };
};

const authFail = (state, action) => {
    return {
        ...state,
        authenticated: false
    };
};

const authReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default:
            return state;
    }
};

export default authReducer;