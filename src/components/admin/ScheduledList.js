import React, { Component } from 'react'

export class ScheduledList extends Component {


    render() {
        const { name, email, phone, departureDate, departureTime, childName, numberOfKids } = this.props.scheduledUser;
        return (
            <div>
                <div className="card">
                    <ul>
                        <li><b>Name:</b> {name}</li> <br />
                        <li><b>Phone:</b> {phone}</li> <br />
                        <li><b>Email:</b> {email}</li> <br />
                        <li><b># of Kids:</b> {numberOfKids}</li> <br />
                        <li><b>Departure Date:</b> {departureDate}</li> <br />
                        <li><b>Departure Time:</b> {departureTime}</li><br />
                        <li><b>Child(ren):</b> {childName}</li>
                    </ul>
                </div>


            </div >

        )
    }
}


export default ScheduledList
