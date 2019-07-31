import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import { Container } from "reactstrap";
import { Route, Link } from "react-router-dom";
import UserCard from "./UserCard";
import uuidv1 from "uuid/v1";

const App = props => {
  const [users, setUsers] = useState([]);

  const addPerson = person => {
    const id = uuidv1();
    setUsers([...users, { ...person, id: id }]);
  };

  return (
    <div>
      <Container>
        <Route
          exact
          path="/profile/new"
          render={props => (
            <ProfileForm {...props} addPerson={addPerson} users={users} />
          )}
        />
        <Route
          exact
          path={`/profile/:id`}
          render={props => <UserCard {...props} users={users} />}
        />
        <Link to="/profile/new">Home</Link>
      </Container>
    </div>
  );
};

export default App;
