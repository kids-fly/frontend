import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import { Container } from "reactstrap";
import { Route, Link } from "react-router-dom";
import UserCard from "./UserCard";
import uuidv1 from "uuid/v1";
import Admin from "./admin/App"

const App = () => {
  const [users, setUsers] = useState([]);

  const addPerson = person => {
    const id = uuidv1();
    setUsers([...users, { ...person, id: id }]);
  };

  console.log("USERS IN USERS ARRAY IN APP JS PASSES TO USERCARD", users);
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
          path="/edit/:id"
          render={props => {
            const foundUser = users.find(
              user => user.id === props.match.params.id
            );
            return <ProfileForm {...props} initialPerson={foundUser} />;
          }}
        />
        <Route
          path="/admin/dashboard"
          render={props => {

            return <Admin {...props} />;
          }}
        />
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
      <Link to="/profile/new">Home</Link>
    </div>
  );
};

export default App;
