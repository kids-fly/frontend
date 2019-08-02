import {
  REQUEST_ADD_START,
  REQUEST_ADD_SUCCESS,
  REQUEST_ADD_FAILURE
} from './index';
import { axiosWithAuth } from '../utilities/axiosWithAuth/axiosWithAuth';

export const addRequest = request => dispatch => {
  //   const flight = {
  //     flight_id: 1,
  //     no_of_kids: request.numberOfKids,
  //     no_of_assigned_admins: request.selectDepartureAdmin, // option to be either 1 or 2
  //     admin_on: request.selectArrivalAdmin
  //   };
  // {
  //     name: '',
  //         numberOfKids: '',
  //             selectDepartureAdmin: '',
  //                 selectArrivalAdmin: ''
  // }
  console.log(request);
  dispatch({ type: REQUEST_ADD_START });
  return axiosWithAuth()
    .post('https://kidsflyapi.herokuapp.com/api/users/trips', request)
    .then(res => {
      console.log(res);
      dispatch({ type: REQUEST_ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REQUEST_ADD_FAILURE, payload: err.data });
    });
};
