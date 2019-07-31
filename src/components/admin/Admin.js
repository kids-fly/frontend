import React, { Component } from 'react'
import AdminProfile from './AdminProfile';

class Admin extends Component {


    render() {
        return this.props.adminInfo.map((adminInfo) => (
            <AdminProfile key={adminInfo.id} adminInfos={adminInfo} />
        ))

    }
}


export default Admin;