import React from 'react'
import Arrivals from '../arrivals/Arrivals'
import Departures from '../departures/Departures'

import './modal-content.scss'

const ModalContent = ({ departures, arrivals }) => {
    return (
        <div className="modal-content">
            {
                departures.length > 0 ? <Departures departures={departures} /> : <span className="no-departures">There Are No Departures In The Last 12 hours</span>
            }
            {
                arrivals.length > 0 ? <Arrivals arrivals={arrivals} /> : <span className="no-arrivals">There Are No Arrivals In The Last 12 hours</span>
            }
        </div>
    )
}

export default ModalContent
