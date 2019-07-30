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

const UserCard = user => {
  console.log("PROPS IN USERCARD:", user);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            {user.firstName} {user.lastName}
          </CardTitle>
          <CardSubtitle>Address:</CardSubtitle>
          <CardText>
            {user.street}
            {user.city}
            {user.state}
            {user.zipCode}
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
