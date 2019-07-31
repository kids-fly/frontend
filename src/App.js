import React, { Component } from 'react';
import Header from './components/admin/layout/Header'
import './App.css';
import Admin from './components/admin/Admin'
import Arriving from './components/admin/Arriving'
import Departed from './components/admin/Departed'

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
          arrivingTime: '9:30PM',
          childName: "Messy Jay"
        },
        {

          name: 'John',
          phone: '546541616',
          email: 'duraan@yahoo.com',
          arrivingDate: '08/05/2019',
          arrivingTime: '9:30PM',
          childName: "Messy Jay"
        },
        {

          name: 'James',
          phone: '5684651',
          email: 'duraan@yahoo.com',
          arrivingDate: '08/05/2019',
          arrivingTime: '9:30PM',
          childName: "Messy Jay"
        }
      ],
      departedUsers: [
        {
          name: 'Moses Jalo',
          phone: '6562165125',
          email: 'duraan@yahoo.com',
          arrivingDate: '08/05/2019',
          arrivingTime: '9:30PM',
          childName: "Messy Jay"
        },
        {

          name: 'John',
          phone: '546541616',
          email: 'duraan@yahoo.com',
          arrivingDate: '08/05/2019',
          arrivingTime: '9:30PM',
          childName: "Messy Jay"
        },
        {

          name: 'James',
          phone: '5684651',
          email: 'duraan@yahoo.com',
          arrivingDate: '08/05/2019',
          arrivingTime: '9:30PM',
          childName: "Messy Jay"
        }
      ],
      adminInfo: [
        {
          name: 'Julia James'
        }
      ]
    }
  }


  render() {

    return (
      <div className="App">
        <Header />
        <div className="admin">
          <Admin adminInfo={this.state.adminInfo} />
        </div>
        <div className="container">

          <div className="bothsides">
            <div className="arriving">
              <div className="topTitle">Arriving Customers</div>
              <Arriving arrivingUsers={this.state.arrivingUsers} />
            </div>
            <div className="departed">
              <div className="topTitle">Departed Customers</div>
              <Departed departedUsers={this.state.departedUsers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
