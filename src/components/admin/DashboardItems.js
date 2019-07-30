import React, { Component } from 'react'

export class DashboardItems extends Component {
    getStyle = () => {
        return {
            background: 'lightblue',
            marginTop: '30px',
            padding: '10px',
            borderBottom: '5px #fff solid',
            marginLeft: '500px',
            marginRight: '500px',
        }
    }

    render() {
        const { name, email, phone, arrivingDate, arrivingTime } = this.props.arrivingUser;
        return (
            <div style={this.getStyle()}>

                <h3> Name: {name} </h3><br />
                Phone: {phone} <br />
                Email: {email} <br />
                Arriving Date: {arrivingDate} <br />
                Arriving Time: {arrivingTime}


            </div >

        )
    }
}


export default DashboardItems
