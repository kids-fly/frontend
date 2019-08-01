import React, { useState } from "react";

import RequestForm from "./components/RequestForm";

import "./App.css";

function RForm() {
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
            <h2>Confirm your Request</h2>
            <h3>Name: {user.name}</h3>
            <h4>Flight Information: {user.selectFlight}</h4>
            <h4>Number Of Kids: {user.numberOfKids}</h4>
            <h4>Depature Admin: {user.selectDepartureAdmin}</h4>
            <h4>Arrival Admin: {user.selectArrivalAdmin}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RForm;
