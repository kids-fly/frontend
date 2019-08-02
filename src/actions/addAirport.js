import axiosWithAuth from '../utilities/axiosWithAuth';
import {
  AIRPORT_ADD_START,
  AIRPORT_ADD_SUCCESS,
  AIRPORT_ADD_FAILURE
} from './index';

export const addAirport = state => dispatch => {
  dispatch({ type: AIRPORT_ADD_START });
  return axiosWithAuth()
    .post('https://kidsflyapi.herokuapp.com/admin/airports')
    .then(res => {
      console.log(res);
      dispatch({ type: AIRPORT_ADD_SUCCESS, payload: res.data });
    })
    .cath(err => {
      console.log(err);
      dispatch({ type: AIRPORT_ADD_FAILURE, payload: err });
    });
};
