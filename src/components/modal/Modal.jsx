import React, { useState, useEffect } from 'react'
import ModalContent from '../modal-content/ModalContent';

import './modal.scss'

const Modal = ({ closeModal, displayModal, departures, arrivals }) => {
    const [ pending, setPending ] = useState(true);

    const divStyle = { 
        display: displayModal ? 'block' : 'none'
    };

    const closeTheModal = (e) => {
        e.stopPropagation()
        closeModal()
    }

    useEffect(() => {
        if(departures && arrivals ) {
            console.log(departures, 'departures');
            console.log(arrivals, 'arrivals');
            setPending(!pending);
        }
        console.log(pending)
    }, [departures, arrivals]);

    useEffect(() => {
        console.log(pending)
    }, [pending])

    return (
        <div 
            className="modal"
            onClick={ closeTheModal }
            style={ divStyle } 
        >
            <div 
                className="modal-content-div"
                onClick={ e => e.stopPropagation() } 
            >
                <span 
                    className="close"
                    onClick={ closeTheModal }>&times;
                </span>
                {
                    !pending ? (
                        <ModalContent departures={departures} arrivals={arrivals} />
                    ) : (
                        <div className='loading'>
                            <h2>This Awesome Website Will Be Fully Loaded Very Soon...</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Modal
