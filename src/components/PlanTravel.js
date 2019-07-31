import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: rgb(176, 192, 150);
  text-align: center;
  padding: 5px;
  border-radius: 30px;
  color: #0000ff;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

function PlanTravel() {
  return (
    <div>
      <h1>Plan Your Travel:</h1>
      Schedule Your Flight:{" "}
      <Link to="/bookflight">
        <Button>Click</Button>
      </Link>
      <br />
      Traveliving With Kids:
      <Link to="/requestform">
        {" "}
        <Button>Click</Button>
      </Link>
      <br />
      Unaccompanied Kids:
      <Link to="/requestform">
        {" "}
        <Button>Click</Button>
      </Link>
    </div>
  );
}

export default PlanTravel;
