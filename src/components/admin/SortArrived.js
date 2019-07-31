import React, { Component } from 'react'

export default class SortArrived extends Component {
    render() {
        return (
            <div>
                <div className="sortArrived">
                    <p>Sort by</p>
                    <div className="sortButtons">
                        <button className="sortBtn">Departure Time</button>
                        <button className="sortBtn">Airline</button>
                        <button className="sortBtn">Both</button>
                    </div>
                </div>
            </div>
        )
    }
}
