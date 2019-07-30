import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const ProfileForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div>
      <h3>Great ! You signed up... Now lets get your profile setup.</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            className="form-control"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name..."
            value={userInfo.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            className="form-control"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name..."
            value={userInfo.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phone Number</Label>
          <Input
            className="form-control"
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="1-(555)-555-5555"
            value={userInfo.phoneNumber}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            className="form-control"
            type="text"
            name="street"
            id="address"
            placeholder="1234 Apple Tree St"
            value={userInfo.street}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="form-control"
            type="text"
            name="city"
            id="address"
            placeholder="City"
            value={userInfo.city}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="form-control"
            type="text"
            name="state"
            id="address"
            placeholder="State"
            value={userInfo.state}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="form-control"
            type="text"
            name="zipCode"
            id="address"
            placeholder="Zip Code"
            value={userInfo.zipCode}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="success">Submit</Button>
      </Form>
    </div>
  );
};

export default ProfileForm;
