import React, { Component } from 'react'

export class ArrivedList extends Component {

    render() {
        const { name, email, phone, arrivalDate, arrivalTime, childName, numberOfKids } = this.props.arrivedUser;
        return (
            <div>
                <div className="card">
                    <ul>
                        <li><b>Name:</b> {name}</li> <br />
                        <li><b>Phone:</b> {phone}</li> <br />
                        <li><b>Email:</b> {email}</li> <br />
                        <li><b># of Kids:</b> {numberOfKids}</li> <br />
                        <li><b>Arrival Date:</b> {arrivalDate}</li> <br />
                        <li><b>Arrival Time:</b> {arrivalTime}</li><br />
                        <li><b>Child(ren):</b> {childName}</li>
                    </ul>

                </div>

            </div >

        )
    }
}


export default ArrivedList
