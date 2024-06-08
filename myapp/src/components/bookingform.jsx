import React, { useState, useEffect } from 'react';
import { loadScript } from '../utils/loadscript';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes, dispatch }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [apiLoaded, setApiLoaded] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        loadScript('./api.js')
            .then(() => {
                if (window.fetchAPI && window.submitAPI) {
                    setApiLoaded(true);
                } else {
                    console.error('API functions not found on window object');
                }
            })
            .catch((error) => {
                console.error('Error loading API script:', error);
            });
    }, []);

    useEffect(() => {
        const isFormValid = date && time && guests >= 1 && occasion;
        setIsValid(isFormValid);
    }, [date, time, guests, occasion]);

    const handleDateChange = (e) => {
        setDate(e.target.value);
        if (apiLoaded) {
            const selectedDate = new Date(e.target.value);
            const fetchedTimes = window.fetchAPI(selectedDate);
            dispatch({ type: 'UPDATE', payload: fetchedTimes });
        } else {
            console.error('API script not loaded yet');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservationDetails = {
            date,
            time,
            guests,
            occasion,
        };
        if (apiLoaded) {
            const success = window.submitAPI(reservationDetails);
            if (success) {
                navigate('/confirmation', { state: { reservationDetails } });
            } else {
                console.error('Failed to submit reservation');
            }
        } else {
            console.error('API script not loaded yet');
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-labelledby="booking-form-title" className="booking-form">
            <h1 id="booking-form-title">Book Your Reservation</h1>
            <div>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    aria-required="true"
                />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    aria-required="true"
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1"
                    required
                    aria-required="true"
                />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                    aria-required="true"
                >
                    <option value="">Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button type="submit" disabled={!isValid}>Submit reservation</button>
        </form>
    );
};

export default BookingForm;
