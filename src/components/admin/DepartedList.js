import React, { Component } from 'react'

export class DepartedList extends Component {


    render() {
        const { name, email, phone, arrivingDate, arrivingTime, childName } = this.props.departedUser;
        return (
            <div>
                <div className="card">
                    <h3> Name: {name} </h3><br />
                    <ul>
                        <li>Phone: {phone}</li> <br />
                        <li>Email: {email}</li> <br />
                        <li><b>Departed Date: {arrivingDate}</b></li> <br />
                        <li><b>Departed Time: {arrivingTime}</b></li>
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


export default DepartedList
