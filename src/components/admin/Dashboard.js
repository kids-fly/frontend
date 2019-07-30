import React, { Component } from 'react';
import DashboardItems from '../admin/DashboardItems';

class Dashboard extends Component {


    render() {
        return this.props.arrivingUsers.map((arrivingUsers) => (
            <DashboardItems key={arrivingUsers.id} arrivingUser={arrivingUsers} />
        ))
    }
}


export default Dashboard;
