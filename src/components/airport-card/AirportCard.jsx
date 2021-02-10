import React, { useState, useEffect } from 'react'

import Modal from '../modal/Modal'

import './airport-card.scss'

const AirportCard = ({ airportInfo: { city, icaoCode, airport } }) => {
    const [ departures, setDepartures ] = useState(null);
    const [ arrivals, setArrivals ] = useState(null);
    const [ modal, setModal ] = useState(false);

    const selectModal = () => setModal(!modal);

    let myDate = new Date();
    let unixTimeEnd= Math.round(myDate.getTime()/1000.0);
    let unixTimeBegin= Math.round(((new Date().getTime()) - 50400000 ) / 1000.0); // default set to 14hours

    /* useEffect(() => {
        console.log(departures, 'departures result');
        console.log(arrivals, 'arrivals result');
    }, [departures, arrivals]); */

    // Fetch the departures
    const fetchDepartures = async () => {
        console.log(icaoCode, 'departures')
        console.log(unixTimeBegin)
        console.log(unixTimeEnd)
        let response = await fetch(`https://opensky-network.org/api/flights/departure?airport=${icaoCode}&begin=${unixTimeBegin}&end=${unixTimeEnd}`);

        let departuresArray = await response.json();

        setDepartures(departuresArray);
    }

    // Fetch the arrivals
    const fetchArrivals = async () => {
        console.log(icaoCode, 'arrivals')
        console.log(unixTimeBegin)
        console.log(unixTimeEnd)
        let response = await fetch(`https://opensky-network.org/api/flights/arrival?airport=${icaoCode}&begin=${unixTimeBegin}&end=${unixTimeEnd}`);

        let arrivalsArray = await response.json();

        setArrivals(arrivalsArray);
    }

    const fetchDetails = () => {
        fetchDepartures();
        fetchArrivals();
        selectModal();
    }

    return (
        <div onClick={ fetchDetails } className="airport-card">           
            <Modal 
                displayModal={modal}
                closeModal={ selectModal } 
                departures={departures}
                arrivals={arrivals}
            />
            <h1>{city}</h1>
            <p>{icaoCode}</p>
            <p>{airport}</p>
        </div>
    )
}

export default AirportCard
