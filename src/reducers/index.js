import { combineReducers } from 'redux';

import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { profileFormReducer } from './profileFormReducer';

export default combineReducers({
  signupReducer,
  loginReducer,
  profileFormReducer
});
