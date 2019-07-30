import React, { useState } from "react";

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
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="login_title">Schedule Assistance Form</h2>
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
            placeholder="Enter your Flight number"
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
    </div>
  );
}

export default RequestForm;
