import React from "react";
import { Link } from "react-router-dom";

function PlanTravel() {
  return (
    <div>
      <h1>Plan Your Travel:</h1>
      To Schedule Your Flight: <Link to="/bookflight">Click Here</Link>
      <br />
      Traveliving With Kids:<Link to="/requestform"> Click Here</Link>
      <br />
      Unaccompanied Kids:<Link to="/requestform"> Click Here</Link>
    </div>
  );
}

export default PlanTravel;
