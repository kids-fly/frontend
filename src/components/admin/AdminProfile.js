import React, { Component } from 'react'

export class AdminProfile extends Component {

    render() {
        const { name } = this.props.adminInfos;
        return (
            <div>
                <h3> Hi {name}, Welcome!</h3>
            </div >

        )
    }
}

export default AdminProfile;
