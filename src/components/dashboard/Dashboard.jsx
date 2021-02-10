import React from 'react'

import './dashboard.scss'

import icaoCodes from '../../json/icaoCodes'
import AirportCard from '../airport-card/AirportCard'

const Dashboard = () => {

    return (
        <div className="dashboard-div">
            {
                icaoCodes.map( airport => <AirportCard key={airport.icaoCode} airportInfo={airport} /> )
            }
        </div>
    )
}

export default Dashboard
