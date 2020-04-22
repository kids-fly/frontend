import React, { Component } from 'react';
import ScheduledList from './ScheduledList';

class Scheduled extends Component {


    render() {
        return this.props.scheduledUsers.map((scheduledUsers) => (
            <ScheduledList key={scheduledUsers.id} scheduledUser={scheduledUsers} />
        ))

    }
}


export default Scheduled;
