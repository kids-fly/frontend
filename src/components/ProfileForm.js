import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import UserCard from "./UserCard";

const Title = styled.h3`
  color: green;
  text-align: center;
  margin-top: 10%;
  font-weight: 300;
`;

const ProfileForm = props => {
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
    props.addPerson(userInfo);

    setUserInfo({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    });
    console.log("USERS ", props);
  };
  console.log("PROPS IN PROFILE FORM", props);

  return (
    <div>
      <Title>Great ! You signed up... Now lets get your profile setup.</Title>
      <Form onSubmit={e => handleSubmit(e)}>
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

        <Link to={`/profile/${props.users.id}`} color="success">
          Submit
        </Link>
      </Form>
    </div>
  );
};

export default ProfileForm;
