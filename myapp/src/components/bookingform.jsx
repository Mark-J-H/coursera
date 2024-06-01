import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE', date: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'RESERVE', payload: time });
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
            <button type="submit">Submit reservation</button>
        </form>
    );
};

export default BookingForm;
