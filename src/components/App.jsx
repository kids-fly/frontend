import React from "react";
import ProfileForm from "./ProfileForm";
import { Container } from "reactstrap";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Container>
        <Route
          path="/profile/new"
          render={props => <ProfileForm {...props} />}
        />
      </Container>
    </div>
  );
};

export default App;
