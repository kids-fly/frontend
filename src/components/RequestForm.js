<<<<<<< HEAD
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
=======
import React, { useEffect } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
>>>>>>> f70b24d0df56a68fce09387e9698bbfabd20487e

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
<<<<<<< HEAD
    font-family: 'Serif ', 'Georgia ';
    text-shadow: 0 0 1px #ff0000, 0 0 2px #c5ecfd;
=======
    font-family: "Serif ", "Georgia ";
    text-shadow: 0 0 1px #1ab31a; 0 0 2px #1ab31a;
>>>>>>> f70b24d0df56a68fce09387e9698bbfabd20487e
  }
  input {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 4%;
    font-family: 'Serif ', 'Georgia ';
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #1ab31a;
    padding: 10px;
<<<<<<< HEAD
    color: 'white';
    width: 100%;
  }
  ${'' /* input[type="radio"] {
    opacity: 0;
    width: 0;
    margin: 0;
  } */}
=======
    color: "white";
    width: 80%;
  }
>>>>>>> f70b24d0df56a68fce09387e9698bbfabd20487e

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

<<<<<<< HEAD
function RequestForm() {
  const [users, setUsers] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    flight: '',
    arrivalTime: '',
    numberOfKids: ''
  });

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setUsers({
      name: '',
      email: '',
      phoneNumber: '',
      flight: '',
      arrivalTime: '',
      numberOfKids: ''
    });
  };

  return (
    <FormStyle>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h2 className='login_title'>Assistance Request</h2>
=======
function RequestForm({ users, handleChange, handleSubmit }) {
  return (
    <MinorStyle>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="login_title">Request For Assistance</h2>

          <label>Name</label>
>>>>>>> f70b24d0df56a68fce09387e9698bbfabd20487e
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            value={users.name}
            onChange={handleChange}
          />
          <label>Number Of Kids</label>
          <input
<<<<<<< HEAD
            type='text'
            name='email'
            placeholder='Enter your email'
            value={users.email}
            onChange={handleChange}
          />
          <input
            type='text'
            name='phoneNumber'
            placeholder='Enter your Phone Number'
            value={users.phoneNumber}
            onChange={handleChange}
          />
          <input
            type='text'
            name='flight'
            placeholder='Enter your Flight Number'
            value={users.flight}
            onChange={handleChange}
          />
          <input
            type='text'
            name='arrivalTime'
            placeholder='Enter your Arrival Time'
            value={users.arrivalTime}
            onChange={handleChange}
          />
          <input
            type='number'
            name='numberOfKids'
            placeholder='Enter Number Of Kids'
            value={users.numberOfKids}
            onChange={handleChange}
          />
          <button onSubmit={handleSubmit} className='login_button'>
            Submit Form
          </button>
          <Link to='/'>GO Back</Link>
=======
            type="text"
            name="numberOfKids"
            placeholder="Enter Number Of Kids"
            value={users.numberOfKids}
            onChange={handleChange}
          />
          <label>Select Flight Information</label>
          <select name="selectFlight" onChange={handleChange}>
            <option value="" />
            <option value="ATL to LKM 5:25 am Flight # 213">
              ATL to LKM 5:am Flight # 213
            </option>
            <option value="ATL to CBV 10:30 am Flight # 473">
              ATL to CBV 10:am Flight # 473
            </option>
            <option value="LOS to UIJ 5:00 am Flight # 740">
              LOS to UIJ 5:am Flight # 740
            </option>
            <option value="BAL to CJH 4:20 pm Flight # 002">
              BAL to CJH 4:20pm Flight # 002
            </option>
            <option value="NYC to Nepal 11:27 am Flight # 652">
              NYC to Nepal 5:am Flight # 652
            </option>
          </select>
          <label>Do you need a Departure Admin?</label>
          <select name="selectDepartureAdmin" onChange={handleChange}>
            <option value="" />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label>Do you need an Arrival Admin?</label>
          <select name="selectArrivalAdmin" onChange={handleChange}>
            <option value="" />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <button onClick={handleSubmit}>Submit</button>
>>>>>>> f70b24d0df56a68fce09387e9698bbfabd20487e
        </form>
      </div>
    </MinorStyle>
  );
}

export default RequestForm;
