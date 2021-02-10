import React, { useState, useEffect } from 'react'
import DepartureItem from '../departure-item/DepartureItem'

import './departures.scss'

const Departures = ({ departures }) => {
    const [ departureAirport, setDepartureAirport ] = useState(null);
    const [ arrivalAirport, setArrivalAirport ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        let mounted = true;
        fetch(`https://pkgstore.datahub.io/core/airport-codes/airport-codes_json/data/9ca22195b4c64a562a0a8be8d133e700/airport-codes_json.json`)
        .then( response => response.json())
        .then( data => {
            if(mounted) {
                setDepartureAirport(data.filter( code => code.gps_code === data.estDepartureAirport ));
                setArrivalAirport(data.filter( code => code.gps_code === data.estArrivalAirport ));
                setLoading(!loading);
            }
        })

        return function cleanup() {
            mounted = false
        }
    }, [departureAirport, arrivalAirport])

    return (
        !loading && (
            <div className="departures">
                <span className="heading">Departures</span>
                {
                    departures.map( item => <DepartureItem key={item.icao24} departureAirport={departureAirport} arrivalAirport={arrivalAirport} details={item} />)
                }
            </div>
        )
    )
}

export default Departures
