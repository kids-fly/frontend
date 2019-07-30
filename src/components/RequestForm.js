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
}

export default RequestForm;
