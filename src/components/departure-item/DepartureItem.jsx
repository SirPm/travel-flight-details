import React, { useState, useEffect } from 'react'

import './departure-item.scss'

const DepartureItem = ({ departureAirport, arrivalAirport, details: { callsign, firstSeen, lastSeen } }) => {

    let first = new Date(firstSeen * 1000).toLocaleString();
    let last = new Date(lastSeen * 1000).toLocaleString();  

    return (
        <div>
            {
                /* (departureAirport && arrivalAirport) ? (
                    <div className="departure-item">
                        <span>Call Sign: {callsign}</span>
                        <span>Arrival Airport: {arrivalAirport[0].name}</span>
                        <span>Departure Airport: {departureAirport[0].name}</span>
                        <span>First Seen: {first}</span>
                        <span>Last Seen: {last}</span>
                    </div>
                ) : (<span>Waiting</span>) */
            }
        </div>
    )
}

export default DepartureItem
