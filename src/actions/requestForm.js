import {
  REQUEST_ADD_START,
  REQUEST_ADD_SUCCESS,
  REQUEST_ADD_FAILURE
} from './index';
import { axiosWithAuth } from '../utilities/axiosWithAuth/axiosWithAuth';

export const addRequest = state => dispatch => {
  dispatch({ type: REQUEST_ADD_START });
  return axiosWithAuth
    .post(' https://kidsflyapi.herokuapp.com/api/users/trips', state)
    .then(res => {
      console.log(res);
      dispatch({ type: REQUEST_ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REQUEST_ADD_FAILURE, payload: res.data });
    });
};
