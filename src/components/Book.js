import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const MinorStyle = styled.div`
  body {
    width: 100%;
    height: 100%;

    margin-top: 10%;
    transform: translateY(-20%);

    position: absolute;

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .form-container {
    margin: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-size: cover;

    justify-content: center;
  }
  form {
    display: flex;
    max-width: 50%;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
  }

  h2 {
    font-family: "Serif ", "Georgia ";
    text-shadow: 0 0 1px #1ab31a; 0 0 2px #1ab31a;
  }
  input {
    display: flex;
    align-content: center;
    flex-direction: column;
    margin-right: 4%;
    font-family: "Serif ", "Georgia ";
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #1ab31a;
    padding: 10px;
    color: "white";
    width: 80%;
  }

  label{
    font-style: italic;
    background: lightgray;
    text-shadow: 0 0 1px #1ab31a; 0 0 2px #1ab31a;
    margin-top: 10px;
    padding: 5px;
  }
  select {
    display: flex;
    flex-direction: column;
    margin-right: 4%;
    font-family: "Serif ", "Georgia ";
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #1ab31a;
    padding: 10px;
    color: "white";
    width: 85%;
    margin-bottom: 17px;
  }

  button {
    background: #1ab31a;
    text-align: center;
    padding: 5px;
    border-radius: 30px;
    color: #0000ff;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

function Book() {
  const [users, setUsers] = useState({
    name: "Chris Ubani",
    selectFlight: "Atlanta Flight No 007",
    numberOfKids: "2",
    selectDepartureAdmin: "Yes",
    selectArrivalAdmin: "No"
  });

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setUsers({
      name: "",
      selectFlight: "",
      numberOfKids: "",

      selectDepartureAdmin: "",
      selectArrivalAdmin: ""
    });
  };

  return (
    <MinorStyle>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="login_title">Book For Assistance</h2>

          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={users.name}
            onChange={handleChange}
          />
          <label>Number Of Kids</label>
          <input
            type="text"
            name="numberOfKids"
            placeholder="Enter Number Of Kids"
            value={users.numberOfKids}
            onChange={handleChange}
          />
          <label>Flight Infor.</label>
          <select name="selectFlight">
            <option value="selectFlight">Select Flight </option>
            <option value="selectFlight"> {users.selectFlight}</option>
          </select>
          <label>Depart Admin</label>
          <select name="selectDepartureAdmin">
            <option value="selectDepartureAdmin">Select Departure Admin</option>
            <option value="yes">{users.selectDepartureAdmin}</option>
          </select>

          <label>Arrival Admin</label>
          <select name="selectArrivalAdmin">
            <option value="selectArrivalAdmin">Select Arrival Admin</option>

            <option value="no">{users.selectArrivalAdmin}</option>
          </select>
          <button
            onSubmit={handleSubmit}
            onClick={handleSubmit}
            className="login_button"
          >
            Submit Form
          </button>
        </form>
      </div>
    </MinorStyle>
  );
}

export default Book;
