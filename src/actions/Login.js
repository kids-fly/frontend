import axios from 'axios';
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from './index';

export const login = user => dispatch => {
  console.log(user);
  dispatch({type: LOGIN_START});
  return axios
    .post('https://kidsflyapi.herokuapp.com/login', user)
    .then(res => {
      console.log(res);
      dispatch({type: LOGIN_SUCCESS, payload: res});
    })
    .catch(err => {
      console.log(err);
    });
};
