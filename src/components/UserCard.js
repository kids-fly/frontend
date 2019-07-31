import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleCard = styled.div`
  margin-top: 20px;
`;

const UserCard = props => {
  console.log("PROPS IN USERCARD:", props);
  console.log("PROPS.USER", props.user);
  return (
    <div>
      <StyleCard>
        <Card>
          <CardBody>
            <CardTitle>
              Name: {props.user.firstName} {props.user.lastName}
            </CardTitle>
            <CardText>Phone Number: {props.user.phoneNumber}</CardText>
            <CardSubtitle>Address: </CardSubtitle>
            <CardText>
              {props.user.street} <br />
              {props.user.city}, {props.user.state} <br />
              {props.user.zipCode}
            </CardText>
          </CardBody>
        </Card>
        <Link to="/admin/dashboard">Admin Dashboard</Link>
      </StyleCard>
    </div>
  );
};

export default UserCard;
