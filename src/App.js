import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';

import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/signup' component={SignUpForm} />
      </div>
    </Router>
  );
}

export default App;
