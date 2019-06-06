import axios from 'axios';
// import { axiosWithAuth } from '../axiosWithAuth';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ABSOLUTE_FAILURE = 'LOGIN_ABSOLUTE_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://kitchen-soup-backend.herokuapp.com/api/users/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};
