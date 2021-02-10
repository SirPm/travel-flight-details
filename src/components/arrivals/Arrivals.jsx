import React, { useState, useEffect } from 'react'
import ArrivalItem from '../arrival-item/ArrivalItem'

import './arrivals.scss'

const Arrivals = ({ arrivals }) => {
    const [airportCodes, setAirportCodes] = useState(null);

    const fetchAirportName = async () => {
        let result = await fetch(`https://pkgstore.datahub.io/core/airport-codes/airport-codes_json/data/9ca22195b4c64a562a0a8be8d133e700/airport-codes_json.json`);
        let data = await result.json();
        setAirportCodes(data);
    }

    useEffect(() => {
        fetchAirportName();
    })

    return (
        <div className="arrivals">
            <span className="heading">Arrivals</span>
            {
                arrivals.map( item => <ArrivalItem key={item.icao24} airportCodes={airportCodes} details={item} />)
            }
        </div>
    )
}

export default Arrivals
