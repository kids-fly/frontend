import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
// import ProfileContainer from './components/ProfileContainer';
import RequestForm from './components/RequestForm';

import PrivateRoute from './utilities/PrivateRoute/PrivateRoute';
import ProfileForm from './components/ProfileForm';

import SignUpForm from './components/SignUpForm/SignUpForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/signup' component={SignUpForm} />

        <PrivateRoute path='/requestform' component={RequestForm} />

        <PrivateRoute exact path='/profileForm' component={ProfileForm} />
      </div>
    </Router>
  );
}
export default App;
