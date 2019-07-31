import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import { Container } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";
import UserCard from "./UserCard";

<<<<<<< HEAD:src/components/ProfileContainer.js
const Profilecontainer = () => {
=======
const App = props => {
>>>>>>> f92a1c147a09811dafd90e818014c28c45425547:src/components/App.js
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Container>
        <Switch>
          <Route
            exact
            path="/profile/new"
            render={props => (
              <ProfileForm {...props} users={users} setUsers={setUsers} />
            )}
          />
          <Route
            exact
            path={`/profile/:id`}
            render={props => <UserCard {...props} users={users} />}
          />

          <Link to="/profile/new">Home</Link>
        </Switch>
      </Container>
    </div>
  );
};

export default Profilecontainer;
