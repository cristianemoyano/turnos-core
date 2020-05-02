import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from '../actions/types';

const initialState = {
    isLoading: false,
    isAuthenticated: null,
    user: null,
    token: localStorage.getItem('token')
};

// Tokens are stored in a web browser using the localStorage property.
export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                ...action.payload
            };
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case REGISTER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                token: null
            };
        default:
            return state;
    }
}