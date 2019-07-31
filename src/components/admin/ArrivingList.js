import React, { Component } from 'react'

export class ArrivingList extends Component {

    render() {
        const { name, email, phone, arrivingDate, arrivingTime, childName } = this.props.arrivingUser;
        return (
            <div>
                <div className="card">
                    <h3> Name: {name} </h3><br />
                    <ul>
                        <li>Phone: {phone}</li> <br />
                        <li>Email: {email}</li> <br />
                        <li><b>Arriving Date: {arrivingDate}</b></li> <br />
                        <li><b>Arriving Time: {arrivingTime}</b></li>
                    </ul>
                    <div>
                        <h4>List of Child(ren):</h4>
                        <li>Child Name: {childName}</li> <br />
                    </div>
                </div>

            </div >

        )
    }
}


export default ArrivingList
