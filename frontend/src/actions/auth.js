import axios from 'axios';
import { returnErrors } from './messages';
<<<<<<< HEAD
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

// Check token and load user 
export const loadUser = () => (dispatch, getState) => {
    // User loading 
    dispatch({ type: USER_LOADING });

    // get token from state
    const token = getState().auth.token;

    // Headers
=======

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

// CHECK TOKEN AND USER 
export const loadUser = () => (dispatch, getState) => {
    // User Loading 
    dispatch({ type: USER_LOADING });
    // Get Token from State 
    const token = getState().auth.token;
    // Headers 
>>>>>>> 9a1212fbeb5a102f748f78fa1dafcd64f5924850
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

<<<<<<< HEAD
    // If token add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
     .then(res => {
         dispatch({
             type: USER_LOADED,
             payload: res.data
         });
     }).catch(err => {
         dispatch(returnErrors(err.response.data, err.response.status));
         dispatch({
             type: AUTH_ERROR
         });
     });
};
=======
    // if token, add to headers config 
    if (token) {
        config.headers['Authorization'] = `Token $(token)`;
    }

    axios.get('api/auth/user', config)
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data 
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data,
            err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
} 
>>>>>>> 9a1212fbeb5a102f748f78fa1dafcd64f5924850
