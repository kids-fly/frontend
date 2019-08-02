import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addRequest } from '../actions/requestForm';
import { getFlights } from '../actions/getFlights';

import styled from 'styled-components';
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
    justify-content: center;
    flex-direction: column;
    margin-right: 4%;
    font-family: 'Serif ', 'Georgia ';
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

function RequestForm(props) {
  console.log(props);
  const [user, setUser] = useState({
    no_of_kids: '',
    admin_on: '',
    no_of_assigned_admins: ''
  });

  const [flightInfo, setFlightInfo] = useState('');

  useEffect(() => {
    props.getFlights();
    // setFlightInfo(props.flights);
  }, []);

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
    props.addRequest(user);
    setUser({
      selectFlight: '',
      no_of_kids: '',
      admin_on: '',
      no_of_assigned_admins: ''
    });
  };
  return (
    <MinorStyle>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h2 className='login_title'>Request For Assistance</h2>

          <label>Number Of Kids</label>
          <input
            type='number'
            name='no_of_kids'
            placeholder='Enter Number Of Kids'
            value={user.numberOfKids}
            onChange={handleChange}
          />
          <label>Select Flight Information</label>
          <select name='selectFlight' onChange={handleChange}>
            {flightInfo
              ? flightInfo.map(flight => {
                  return <option>{flight}</option>;
                })
              : false}

            {/* <option value='' />
            <option value='ATL to LKM 5:25 am Flight # 213'>
              ATL to LKM 5:am Flight # 213
            </option>
            <option value='ATL to CBV 10:30 am Flight # 473'>
              ATL to CBV 10:am Flight # 473
            </option>
            <option value='LOS to UIJ 5:00 am Flight # 740'>
              LOS to UIJ 5:am Flight # 740
            </option>
            <option value='BAL to CJH 4:20 pm Flight # 002'>
              BAL to CJH 4:20pm Flight # 002
            </option>
            <option value='NYC to Nepal 11:27 am Flight # 652'>
              NYC to Nepal 5:am Flight # 652
            </option> */}
          </select>
          <label>Do you need a Departure Admin?</label>
          <select name='admin_on' onChange={handleChange}>
            <option value='' />
            <option value='departure'>Yes</option>
            <option value='arrival'>No</option>
            <option value='both'>No</option>
          </select>

          <label>Number of assigned Admin?</label>
          <select name='no_of_assigned_admins' onChange={handleChange}>
            <option value='' />
            <option value='1'>1</option>
            <option value='2'>2</option>
          </select>

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </MinorStyle>
  );
}

const mapStateToProps = state => {
  console.log(state.getFlightReducer.flights);
  return {
    flights: state.getFlightReducer.flights
  };
};

export default connect(
  mapStateToProps,
  { addRequest, getFlights }
)(RequestForm);
