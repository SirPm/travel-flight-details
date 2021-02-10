import React, { useState, useEffect } from 'react'

import './arrival-item.scss'

const ArrivalItem = ({ details: { callsign, estArrivalAirport, estDepartureAirport, firstSeen, lastSeen }, airportCodes }) => {
    const [ departureAirport, setDepartureAirport ] = useState(null);
    const [ arrivalAirport, setArrivalAirport ] = useState(null);
    // let depart, arrive;

    let first = new Date(firstSeen * 1000).toLocaleString();
    let last = new Date(lastSeen * 1000).toLocaleString();  

    useEffect(() => {
        if (airportCodes) {
            setDepartureAirport(airportCodes.filter( code => code.gps_code === estDepartureAirport ));
            setArrivalAirport(airportCodes.filter( code => code.gps_code === estArrivalAirport ));
            // setDepartureAirport(depart);
            // setArrivalAirport(arrive);
            // console.log(departureAirport[0].name, 'depart');
            // console.log(arrivalAirport[0].name, 'arrive');
        }
    }, [departureAirport, arrivalAirport])

    return (
        <div>
            {
                (departureAirport && arrivalAirport) && (
                    <div className="arrival-item">
                        <span>Call Sign: {callsign}</span>
                        <span>Arrival Airport: {arrivalAirport[0].name}</span>
                        <span>Departure Airport: {departureAirport[0].name}</span>
                        <span>First Seen: {first}</span>
                        <span>Last Seen: {last}</span>
                    </div>
                )
            }
        </div>
    )
}

export default ArrivalItem
