import { combineReducers } from 'redux';

import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { profileFormReducer } from './profileFormReducer';
import { getFlightReducer } from './getFlightReducer';

export default combineReducers({
  signupReducer,
  loginReducer,
  profileFormReducer,
  getFlightReducer
});
