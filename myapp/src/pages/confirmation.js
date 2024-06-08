
import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
    const location = useLocation();
    const { reservationDetails } = location.state || {};

    if (!reservationDetails) {
        return <div>No reservation details found.</div>;
    }

    return (
        <div className="confirmation-page">
            <h1>Reservation Confirmed</h1>
            <div className="confirmation-details">
                <p><strong>Date:</strong> {reservationDetails.date}</p>
                <p><strong>Time:</strong> {reservationDetails.time}</p>
                <p><strong>Number of Guests:</strong> {reservationDetails.guests}</p>
                <p><strong>Occasion:</strong> {reservationDetails.occasion}</p>
            </div>
        </div>
    );
};

export default Confirmation;
