import React, { useState, useEffect } from 'react';

const ChooseTime = ({ selectedDate, setSelectedDate, setSelectedSlot, handleNextStep }) => {
    const [nextTenDays, setNextTenDays] = useState([]);

    useEffect(() => {
        const today = new Date();
        const tenDaysLater = new Date(today);
        tenDaysLater.setDate(today.getDate() + 10);

        const dates = [];
        for (let date = new Date(today); date <= tenDaysLater; date.setDate(date.getDate() + 1)) {
            dates.push(new Date(date));
        }
        setNextTenDays(dates);
    }, []);

    const handleDateSelection = (date) => {
        setSelectedDate(date.toISOString().split('T')[0]);
        // Fetch available slots for the selected date from the backend
        // Example: axios.get(`/api/slots?date=${date}`).then(response => setSlots(response.data.slots));
    };

    return (
        <div>
            <h2>Select a Date</h2>
            <ul>
                {nextTenDays.map((date, index) => (
                    <li className='cursor-pointer' key={index} onClick={() => handleDateSelection(date)}>
                        {date.toISOString().split('T')[0]}
                    </li>
                ))}
            </ul>
            {selectedDate && (
                <>
                    <h2>Available Slots for {selectedDate}</h2>
                    <ul>
                        {/* Replace slots with actual available slots for the selected date */}
                        {/* {slots.map((slot, index) => ( */}
                        {['9:00 AM', '10:00 AM', '11:00 AM'].map((slot, index) => (
                            <li key={index} onClick={() => handleSlotSelection(slot)}>
                                {slot}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default ChooseTime;
