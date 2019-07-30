import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import UserCard from "./UserCard";
import uuidv1 from "uuid/v1";

const App = () => {
  const [users, setUsers] = useState([]);

  const addPerson = person => {
    const id = uuidv1();
    setUsers([...users, { ...person, id: id }]);
  };

  console.log(users);
  return (
    <div>
      <Container>
        <Switch>
          <Route
            exact
            path="/profile/new"
            render={props => <ProfileForm {...props} addPerson={addPerson} />}
          />
        </Switch>
        {users.map(user => {
          return (
            <Route
              exact
              path="/profile/:id"
              render={props => <UserCard {...props} user={user} />}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default App;
