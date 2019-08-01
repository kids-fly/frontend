import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import uuidv1 from "uuid/v1";
const id = uuidv1();

const Title = styled.h3`
  color: green;
  text-align: center;
  margin-top: 10%;
  font-weight: 300;
`;

const ProfileForm = props => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    contact: "",
    image_url: "",
    id: id
  });

  console.log("USER INFO", userInfo);

  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Title>Great ! You signed up... Now lets get your profile setup.</Title>
      <Form
        onSubmit={handleSubmit}
        style={{ width: "50%", margin: "50px auto" }}
      >
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input
            className="form-control"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name..."
            value={userInfo.firstname}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input
            className="form-control"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Contact..."
            value={userInfo.lastname}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input
            className="form-control"
            type="text"
            name="username"
            id="username"
            placeholder="Username..."
            value={userInfo.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contact">Contact</Label>
          <Input
            className="form-control"
            type="tel"
            name="contact"
            id="contact"
            placeholder="1-(555)-555-5555"
            value={userInfo.contact}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image_url">Image Url</Label>
          <Input
            className="form-control"
            type="file"
            name="image_url"
            id="image_url"
            placeholder="image..."
            value={userInfo.image_url}
            onChange={handleChange}
          />
        </FormGroup>

        <Link
          style={{
            marginTop: "10px",
            textDecoration: "none",
            background: "blue",
            color: "white",
            padding: "10px",
            borderRadius: "10px"
          }}
          to={`/profile/${userInfo.id}`}
          onClick={props.setUsers(userInfo)}
          color="success"
        >
          Submit
        </Link>
      </Form>
    </div>
  );
};

export default ProfileForm;
