import React, { Component } from 'react';
import Header from './components/admin/layout/Header'
import './App.css';
import Dashboard from './components/admin/Dashboard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivingUsers: [
        {
          name: 'Duraan Ali',
          phone: '6562165125',
          email: 'duraan@yahoo.com',
          arrivingDate: '08/05/2019',
          arrivingTime: '9:30PM'
        },
        {

          name: 'John',
          phone: '546541616',
          email: 'duraan@yahoo.com',
          arrivingDate: '08/05/2019',
          arrivingTime: '9:30PM'
        },
        {

          name: 'James',
          phone: '5684651',
          email: 'duraan@yahoo.com',
          arrivingDate: '08/05/2019',
          arrivingTime: '9:30PM'
        }
      ]
    }
  }


  render() {

    return (
      <div className="App">
        <div className="container">
          <Header />
          <Dashboard arrivingUsers={this.state.arrivingUsers} />
        </div>
      </div>
    );
  }
}
export default App;
