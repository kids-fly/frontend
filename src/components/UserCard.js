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
  return props.users.map(user => {
    return (
      <div>
        <StyleCard>
          <Card>
            <CardBody>
              <CardTitle>{user.firstName}</CardTitle>
              <CardText>Phone Number: {user.phoneNumber}</CardText>
              <CardSubtitle>Address: </CardSubtitle>
              <CardText>
                {user.street} <br />
                {user.city}, {user.state} <br />
                {user.zipCode}
              </CardText>
            </CardBody>
          </Card>
        </StyleCard>
      </div>
    );
  });
};

export default UserCard;
