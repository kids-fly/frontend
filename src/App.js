<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
=======
import React, { useState } from "react";

import RequestForm from "./components/RequestForm";
>>>>>>> f70b24d0df56a68fce09387e9698bbfabd20487e

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
  const [users, setUsers] = useState({});

  const [clients, setClients] = useState([]);

  const [clientEdit, setClientEdit] = useState({});

  const handleMemberToEdit = user => {
    setClientEdit({ ...user });
  };

  const handleChange = event => {
    setUsers({ ...users, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // saveArray();
    editMember();
    setUsers({
      name: "",
      selectFlight: "",
      numberOfKids: "",
      selectDepartureAdmin: "",
      selectArrivalAdmin: ""
    });
  };

  function editMember() {
    setClients([...clients.filter(user => user.name !== users.name), users]);
  }

  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      <RequestForm
        users={users}
        setUsers={setUsers}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        clientEdit={clientEdit}
      />

      <div className="team-container">
        {clients.map((user, index) => (
          <div className="user-container" key={index}>
            <h2>Confirm your Booking</h2>
            <h3>Name: {user.name}</h3>
            <h4>Flight Information: {user.selectFlight}</h4>
            <h4>Number Of Kids: {user.numberOfKids}</h4>
            <h4>Depature Admin: {user.selectDepartureAdmin}</h4>
            <h4>Arrival Admin: {user.selectArrivalAdmin}</h4>
          </div>
        ))}
      </div>
    </div>
>>>>>>> f70b24d0df56a68fce09387e9698bbfabd20487e
  );
}
export default App;
