<<<<<<< HEAD
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
=======
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from '../actions/types';

const initialState = {
    toke: localStorage.getItem('token'),
>>>>>>> 9a1212fbeb5a102f748f78fa1dafcd64f5924850
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}