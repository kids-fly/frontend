import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BookStyle = styled.div`
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
    text-shadow: 0 0 1px #ff0000, 0 0 2px #c5ecfd;
  }
  input {
    display: flex;
    flex-direction: column;
    margin-right: 4%;
    font-family: "Serif ", "Georgia ";
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #c5ecfd;
    padding: 10px;
    color: "white";
    width: 100%;
  }

  button {
    background: rgb(176, 192, 150);
    text-align: center;
    padding: 5px;
    border-radius: 30px;
    color: #0000ff;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

function BookFlight() {
  const [flight, setFlight] = useState({
    cityFrom: "",
    cityTo: "",
    depart: "",
    timeOfdayD: "",
    return: "",
    timeOfdayR: ""
  });

  const handleChange = e => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setFlight({
      cityFrom: "",
      cityTo: "",
      depart: "",
      timeOfdayD: "",
      return: "",
      timeOfdayR: ""
    });
  };

  return (
    <BookStyle>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="login_title">Book Flight</h2>
          <label>From:</label>
          <input
            type="text"
            name="cityFrom"
            placeholder="city"
            value={flight.cityFrom}
            onChange={handleChange}
          />
          <label>To:</label>
          <input
            type="text"
            name="cityTo"
            placeholder="city"
            value={flight.cityTo}
            onChange={handleChange}
          />
          <label>Depart:</label>
          <input
            type="text"
            name="depart"
            placeholder="select date"
            value={flight.date}
            onChange={handleChange}
          />
          <label>Time Of Day:</label>
          <input
            type="text"
            name=" timeOfdayD"
            placeholder="choose time"
            value={flight.timeOfdayD}
            onChange={handleChange}
          />
          <label>Return:</label>
          <input
            type="text"
            name="return"
            placeholder="choose date"
            value={flight.return}
            onChange={handleChange}
          />
          <label>Time Of Day:</label>
          <input
            type="text"
            name="timeOfdayR"
            placeholder="choose time"
            value={flight.timeOfdayR}
            onChange={handleChange}
          />
          <button
            onSubmit={handleSubmit}
            onClick={handleSubmit}
            className="login_button"
          >
            Search Flight
          </button>
          <Link to="/">GO Back</Link>
        </form>
      </div>
    </BookStyle>
  );
}

export default BookFlight;
