import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
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
  ${"" /* input[type="radio"] {
    opacity: 0;
    width: 0;
    margin: 0;
  } */}

  label[for="father"],
  label[for="mother"] {
    margin: 0;
    display: flex;
    flex-direction: row;
    padding: 0px;
    font-size: 10px;
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

function RequestForm() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    flight: "",
    arrivalTime: "",
    numberOfKids: ""
  });

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setUsers({
      name: "",
      email: "",
      phoneNumber: "",
      flight: "",
      arrivalTime: "",
      numberOfKids: ""
    });
  };

  return (
    <FormStyle>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="login_title">Schedule Assistance Form</h2>

          <p>You are a....</p>
          <input type="radio" id="father" />
          <label for="father">Father</label>

          <input type="radio" id="mother" />
          <label for="mother">Mother</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={users.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={users.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your Phone Number"
            value={users.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="flight"
            placeholder="Enter your Flight Number"
            value={users.flight}
            onChange={handleChange}
          />
          <input
            type="text"
            name="arrivalTime"
            placeholder="Enter your Arrival Time"
            value={users.arrivalTime}
            onChange={handleChange}
          />
          <input
            type="number"
            name="numberOfKids"
            placeholder="Enter Number Of Kids"
            value={users.numberOfKids}
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
    </FormStyle>
  );
}

export default RequestForm;
