import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleCard = styled.div`
  margin-top: 10%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #333;
  border-radius: 10px;
  padding: 4px 10px;
  text-decoration: none;
`;
const Title = styled.h2`
  text-align: center;
  margin-top: 20px;
  color: green;
  font-weight: 300;
`;
const UserCard = props => {
  return (
    <div>
      <Title>Welcome to your profile {props.users.firstname}</Title>
      <StyleCard>
        <Card>
          <CardBody>
            <CardTitle>
              {props.users.firstname} {props.users.lastname}
            </CardTitle>
            <CardText>Contact: {props.users.contact}</CardText>
            <CardText>Username: {props.users.username}</CardText>
            <CardText>Image: {props.users.image_url}</CardText>
          </CardBody>
        </Card>
      </StyleCard>
      <Button>
        <Link style={{ textDecoration: "none" }} to="/profile/new">
          Home
        </Link>
      </Button>
    </div>
  );
};

export default UserCard;
