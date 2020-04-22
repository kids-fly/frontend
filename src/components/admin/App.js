import React, { Component } from 'react';
import Header from "./layout/Header"
import "./App.css"
import Admin from '../../components/admin/Admin'
import Arrived from '../../components/admin/Arrived'
import Scheduled from '../../components/admin/Scheduled'
import SortArrived from '../../components/admin/SortArrived'
import SortDeparture from '../../components/admin/SortDeparture'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrivedUsers: [
                {
                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
                    childName: "Messy Jay"
                },
                {

                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
                    childName: "Messy Jay"
                },
                {

                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
                    childName: "Messy Jay"
                },
                {

                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
                    childName: "Messy Jay"
                },
                {

                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
                    childName: "Messy Jay"
                },
                {

                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
                    childName: "Messy Jay"
                },
                {

                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
                    childName: "Messy Jay"
                }
            ],
            scheduledUsers: [
                {
                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
                    childName: "Messy Jay"
                },
                {

                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
                    childName: "Messy Jay"
                },
                {

                    name: 'John',
                    phone: '546541616',
                    email: 'duraan@yahoo.com',
                    numberOfKids: 2,
                    arrivalDate: '08/05/2019',
                    arrivalTime: '9:30PM',
                    departureDate: '08/05/2019',
                    departureTime: '02:30PM',
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

                        <div className="topTitle">Arrived Trips</div>
                        <SortArrived />
                        <div className="arrived">
                            <Arrived arrivedUsers={this.state.arrivedUsers} />
                        </div>
                        <div className="middle"></div>
                        <div className="topTitle">Upcoming Trips </div>
                        <SortDeparture />
                        <div className="departure">
                            <Scheduled scheduledUsers={this.state.scheduledUsers} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
