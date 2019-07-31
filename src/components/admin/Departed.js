import React, { Component } from 'react';
import DepartedList from './DepartedList';

class Departed extends Component {


    render() {
        return this.props.departedUsers.map((departedUsers) => (
            <DepartedList key={departedUsers.id} departedUser={departedUsers} />
        ))

    }
}


export default Departed;
