import axios from 'axios';
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from './index';

export const login = user => dispatch => {
  console.log(user);
  dispatch({type: LOGIN_START});
  return axios
    .post('https://kidsflyapi.herokuapp.com/api/auth/login', user)
    .then(res => {
      console.log(res);
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: LOGIN_FAILURE, payload: err});
    });
};
