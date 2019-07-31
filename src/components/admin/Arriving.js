import React, { Component } from 'react';
import ArrivingList from './ArrivingList';

class Arriving extends Component {


    render() {
        return this.props.arrivingUsers.map((arrivingUsers) => (
            <ArrivingList key={arrivingUsers.id} arrivingUser={arrivingUsers} />
        ))

    }
}


export default Arriving;
