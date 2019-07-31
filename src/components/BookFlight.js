import React, { useState } from "react";
import styled from "styled-components";

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
    setFlight({ ...users, [e.target.name]: e.target.value });
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
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="login_title">Book Flight</h2>

          <input
            type="text"
            name="cityFrom"
            placeholder="city"
            value={flight.cityFrom}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cityTo"
            placeholder="city"
            value={flight.cityTo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="depart"
            placeholder="select date"
            value={flight.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name=" timeOfdayD"
            placeholder="choose time"
            value={flight.timeOfdayD}
            onChange={handleChange}
          />
          <input
            type="text"
            name="return"
            placeholder="choose date"
            value={flight.return}
            onChange={handleChange}
          />
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
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookFlight;
