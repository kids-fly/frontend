import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import RequestForm from "./components/RequestForm";
import BookFlight from "./components/BookFlight";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>kidsFly</h2>
      </header>
      <Router>
        <Switch>
          <Route path="/requestform" component={RequestForm} />
          <Route path="/bookflight" component={BookFlight} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
