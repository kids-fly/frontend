import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
// import ProfileContainer from './components/ProfileContainer';
import RequestForm from './components/RequestForm';
import BookFlight from './components/BookFlight';
import PlanTravel from './components/PlanTravel';
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
        <Route exact path='/plantravel' component={PlanTravel} />
        <PrivateRoute exact path='/requestform' component={RequestForm} />
        <Route path='/bookflight' component={BookFlight} />
        <PrivateRoute exact path='/profileForm' component={ProfileForm} />
      </div>
    </Router>
  );
}
export default App;
