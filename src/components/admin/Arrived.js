import React, { Component } from 'react';
import ArrivedList from './ArrivedList';

class Arrived extends Component {


    render() {
        return this.props.arrivedUsers.map((arrivedUsers) => (
            <ArrivedList key={arrivedUsers.id} arrivedUser={arrivedUsers} />
        ))

    }
}


export default Arrived;
